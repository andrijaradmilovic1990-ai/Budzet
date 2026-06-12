const TOOLS = [
  {
    name: "list_docs",
    description: "Lista Google Docs fajlove u Helena folderu. Opcioni query filtrira po imenu.",
    inputSchema: {
      type: "object",
      properties: { query: { type: "string" } }
    }
  },
  {
    name: "read_doc",
    description: "Procita ceo tekst Google Doc fajla po documentId.",
    inputSchema: {
      type: "object",
      properties: { documentId: { type: "string" } },
      required: ["documentId"]
    }
  },
  {
    name: "append_text",
    description: "Dodaje tekst na kraj Google Doc fajla.",
    inputSchema: {
      type: "object",
      properties: {
        documentId: { type: "string" },
        text: { type: "string" }
      },
      required: ["documentId", "text"]
    }
  },
  {
    name: "replace_text",
    description: "Find and replace teksta u Google Doc fajlu.",
    inputSchema: {
      type: "object",
      properties: {
        documentId: { type: "string" },
        findText: { type: "string" },
        replaceText: { type: "string" },
        matchCase: { type: "boolean" }
      },
      required: ["documentId", "findText", "replaceText"]
    }
  },
  {
    name: "create_doc",
    description: "Pravi novi Google Doc fajl, opciono u folderu i sa pocetnim tekstom.",
    inputSchema: {
      type: "object",
      properties: {
        title: { type: "string" },
        parentFolderId: { type: "string" },
        initialText: { type: "string" }
      },
      required: ["title"]
    }
  }
];

async function importPrivateKey(pem) {
  var pemContents = pem
    .replace("-----BEGIN PRIVATE KEY-----", "")
    .replace("-----END PRIVATE KEY-----", "")
    .replace(/\s/g, "");
  var binaryDer = Uint8Array.from(atob(pemContents), function (c) { return c.charCodeAt(0); });
  return crypto.subtle.importKey(
    "pkcs8",
    binaryDer,
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
    false,
    ["sign"]
  );
}

function b64url(input) {
  var str;
  if (typeof input === "string") {
    str = btoa(input);
  } else {
    str = btoa(String.fromCharCode.apply(null, new Uint8Array(input)));
  }
  return str.replace(/=+$/, "").replace(/\+/g, "-").replace(/\//g, "_");
}

async function getAccessToken(env) {
  var sa = JSON.parse(env.SHEETS_SERVICE_ACCOUNT);
  var now = Math.floor(Date.now() / 1000);

  var header = { alg: "RS256", typ: "JWT" };
  var claim = {
    iss: sa.client_email,
    scope: "https://www.googleapis.com/auth/documents https://www.googleapis.com/auth/drive",
    aud: "https://oauth2.googleapis.com/token",
    exp: now + 3600,
    iat: now
  };

  var unsigned = b64url(JSON.stringify(header)) + "." + b64url(JSON.stringify(claim));
  var key = await importPrivateKey(sa.private_key);
  var signature = await crypto.subtle.sign(
    "RSASSA-PKCS1-v1_5",
    key,
    new TextEncoder().encode(unsigned)
  );
  var jwt = unsigned + "." + b64url(signature);

  var res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: "grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=" + jwt
  });
  var data = await res.json();
  if (!data.access_token) {
    throw new Error("Auth failed: " + JSON.stringify(data));
  }
  return data.access_token;
}

var SQ = String.fromCharCode(39);

async function listDocs(token, query) {
  var q = "mimeType=" + SQ + "application/vnd.google-apps.document" + SQ + " and trashed=false";
  if (query) {
    q += " and name contains " + SQ + query.replace(/'/g, "\\'") + SQ;
  }
  var url = "https://www.googleapis.com/drive/v3/files?q=" + encodeURIComponent(q) + "&fields=files(id,name,parents,modifiedTime)&pageSize=50";
  var res = await fetch(url, { headers: { Authorization: "Bearer " + token } });
  return res.json();
}

function extractText(doc) {
  var text = "";
  function walk(content) {
    if (!content) return;
    for (var i = 0; i < content.length; i++) {
      var el = content[i];
      if (el.paragraph) {
        var elems = el.paragraph.elements || [];
        for (var j = 0; j < elems.length; j++) {
          if (elems[j].textRun) text += elems[j].textRun.content;
        }
      } else if (el.table) {
        var rows = el.table.tableRows || [];
        for (var r = 0; r < rows.length; r++) {
          var cells = rows[r].tableCells || [];
          for (var c = 0; c < cells.length; c++) {
            walk(cells[c].content);
          }
        }
      }
    }
  }
  walk(doc.body && doc.body.content);
  return text;
}

async function readDoc(token, documentId) {
  var res = await fetch("https://docs.googleapis.com/v1/documents/" + documentId, {
    headers: { Authorization: "Bearer " + token }
  });
  var doc = await res.json();
  if (doc.error) throw new Error(JSON.stringify(doc.error));
  return extractText(doc);
}

async function appendText(token, documentId, text) {
  var docRes = await fetch("https://docs.googleapis.com/v1/documents/" + documentId, {
    headers: { Authorization: "Bearer " + token }
  });
  var doc = await docRes.json();
  if (doc.error) throw new Error(JSON.stringify(doc.error));
  var content = doc.body.content;
  var endIndex = content[content.length - 1].endIndex - 1;

  var res = await fetch("https://docs.googleapis.com/v1/documents/" + documentId + ":batchUpdate", {
    method: "POST",
    headers: { Authorization: "Bearer " + token, "Content-Type": "application/json" },
    body: JSON.stringify({
      requests: [{ insertText: { location: { index: endIndex }, text: text } }]
    })
  });
  return res.json();
}

async function replaceText(token, documentId, findText, replaceTextStr, matchCase) {
  var res = await fetch("https://docs.googleapis.com/v1/documents/" + documentId + ":batchUpdate", {
    method: "POST",
    headers: { Authorization: "Bearer " + token, "Content-Type": "application/json" },
    body: JSON.stringify({
      requests: [{
        replaceAllText: {
          containsText: { text: findText, matchCase: !!matchCase },
          replaceText: replaceTextStr
        }
      }]
    })
  });
  return res.json();
}

async function createDoc(token, title, parentFolderId, initialText) {
  var body = {
    name: title,
    mimeType: "application/vnd.google-apps.document"
  };
  if (parentFolderId) body.parents = [parentFolderId];

  var res = await fetch("https://www.googleapis.com/drive/v3/files", {
    method: "POST",
    headers: { Authorization: "Bearer " + token, "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });
  var file = await res.json();
  if (file.error) throw new Error(JSON.stringify(file.error));
  if (initialText) await appendText(token, file.id, initialText);
  return file;
}

function jsonRpcResult(id, result) {
  return new Response(JSON.stringify({ jsonrpc: "2.0", id: id, result: result }), {
    headers: { "Content-Type": "application/json" }
  });
}

function jsonRpcError(id, code, message) {
  return new Response(JSON.stringify({ jsonrpc: "2.0", id: id, error: { code: code, message: message } }), {
    headers: { "Content-Type": "application/json" }
  });
}

export default {
  async fetch(request, env) {
    if (request.method === "GET") {
      return new Response("Helena Docs MCP server radi.", { status: 200 });
    }
    if (request.method !== "POST") {
      return new Response("Method not allowed", { status: 405 });
    }

    var body;
    try {
      body = await request.json();
    } catch (e) {
      return jsonRpcError(null, -32700, "Parse error");
    }

    var id = body.id;
    var method = body.method;
    var params = body.params;

    try {
      if (method === "initialize") {
        return jsonRpcResult(id, {
          protocolVersion: "2024-11-05",
          capabilities: { tools: {} },
          serverInfo: { name: "helena-docs", version: "1.0.0" }
        });
      }
      if (method === "notifications/initialized") {
        return new Response(null, { status: 202 });
      }
      if (method === "tools/list") {
        return jsonRpcResult(id, { tools: TOOLS });
      }
      if (method === "tools/call") {
        var name = params.name;
        var args = params.arguments || {};
        var token = await getAccessToken(env);
        var result;

        if (name === "list_docs") {
          result = await listDocs(token, args.query);
        } else if (name === "read_doc") {
          result = await readDoc(token, args.documentId);
        } else if (name === "append_text") {
          result = await appendText(token, args.documentId, args.text);
        } else if (name === "replace_text") {
          result = await replaceText(token, args.documentId, args.findText, args.replaceText, args.matchCase);
        } else if (name === "create_doc") {
          result = await createDoc(token, args.title, args.parentFolderId, args.initialText);
        } else {
          return jsonRpcError(id, -32601, "Unknown tool: " + name);
        }

        var textOut = typeof result === "string" ? result : JSON.stringify(result, null, 2);
        return jsonRpcResult(id, { content: [{ type: "text", text: textOut }] });
      }
      return jsonRpcError(id, -32601, "Unknown method: " + method);
    } catch (err) {
      return jsonRpcError(id, -32000, err.message);
    }
  }
};
