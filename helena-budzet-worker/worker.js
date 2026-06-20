// ============================================================
// HELENA BUDZET KONEKTOR — Cloudflare Worker MCP server
// Alat: read_budzet — read-only pristup Firebase Realtime Database
// (projekat budzet-f3992), preko Admin REST API-ja (zaobilazi .read
// pravila jer koristi service account token, ali je SAMO ZA ČITANJE
// — write/delete namerno nisu implementirani).
//
// Secrets (Settings → Variables and Secrets, sve kao "Secret" tip):
//   FIREBASE_SERVICE_ACCOUNT  — ceo sadrzaj service account JSON-a (kao string)
//   FIREBASE_DB_URL           — npr. https://budzet-f3992-default-rtdb.firebaseio.com
//                                (bez kose crte na kraju; vidi se u Firebase
//                                konzoli na vrhu strane Realtime Database)
//   SECRET_PATH               — npr. /mcp-9f3k2q  (izmisli svoj!)
//
// Konektor URL: https://<worker>.workers.dev<SECRET_PATH>
// ============================================================

const TOOLS = [
  {
    name: "read_budzet",
    description:
      "Cita podatke iz Kucni Budzet Firebase Realtime Database (read-only). " +
      "Ako se path izostavi, cita ceo koren baze. Sa shallow=true vraca samo " +
      "kljuceve na tom nivou (korisno za prvo istrazivanje strukture bez " +
      "vukiranja celog stabla).",
    inputSchema: {
      type: "object",
      properties: {
        path: {
          type: "string",
          description: "Putanja u bazi, npr. 'transakcije' ili 'transakcije/2026-06'. Izostavi za koren."
        },
        shallow: {
          type: "boolean",
          description: "Ako je true, vraca samo kljuceve na datom nivou (bez dubokog sadrzaja)."
        }
      }
    },
    annotations: { readOnlyHint: true, destructiveHint: false }
  }
];

// ---------- JSON-RPC helpers ----------

function rpcResult(id, result) {
  return new Response(JSON.stringify({ jsonrpc: "2.0", id, result }), {
    headers: { "Content-Type": "application/json" }
  });
}

function rpcError(id, code, message) {
  return new Response(
    JSON.stringify({ jsonrpc: "2.0", id: id ?? null, error: { code, message } }),
    { headers: { "Content-Type": "application/json" } }
  );
}

function toolText(id, text, isError = false) {
  return rpcResult(id, { content: [{ type: "text", text }], isError });
}

// ---------- Google service-account OAuth2 (JWT bearer) ----------

async function importPrivateKey(pem) {
  const pemContents = pem
    .replace("-----BEGIN PRIVATE KEY-----", "")
    .replace("-----END PRIVATE KEY-----", "")
    .replace(/\s/g, "");
  const binaryDer = Uint8Array.from(atob(pemContents), (c) => c.charCodeAt(0));
  return crypto.subtle.importKey(
    "pkcs8",
    binaryDer,
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
    false,
    ["sign"]
  );
}

function b64url(input) {
  const str =
    typeof input === "string"
      ? btoa(input)
      : btoa(String.fromCharCode(...new Uint8Array(input)));
  return str.replace(/=+$/, "").replace(/\+/g, "-").replace(/\//g, "_");
}

async function getAccessToken(env) {
  const sa = JSON.parse(env.FIREBASE_SERVICE_ACCOUNT);
  const now = Math.floor(Date.now() / 1000);

  const header = { alg: "RS256", typ: "JWT" };
  const claim = {
    iss: sa.client_email,
    scope:
      "https://www.googleapis.com/auth/firebase.database https://www.googleapis.com/auth/userinfo.email",
    aud: "https://oauth2.googleapis.com/token",
    exp: now + 3600,
    iat: now
  };

  const unsigned = b64url(JSON.stringify(header)) + "." + b64url(JSON.stringify(claim));
  const key = await importPrivateKey(sa.private_key);
  const signature = await crypto.subtle.sign(
    "RSASSA-PKCS1-v1_5",
    key,
    new TextEncoder().encode(unsigned)
  );
  const jwt = unsigned + "." + b64url(signature);

  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body:
      "grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=" + jwt
  });
  const data = await res.json();
  if (!data.access_token) {
    throw new Error("Auth failed: " + JSON.stringify(data));
  }
  return data.access_token;
}

// ---------- Firebase Realtime Database REST ----------

async function doReadBudzet(env, token, path, shallow) {
  const dbUrl = (env.FIREBASE_DB_URL || "").replace(/\/+$/, "");
  if (!dbUrl) {
    return { ok: false, text: "FIREBASE_DB_URL nije podesen kao secret/var na workeru." };
  }
  const cleanPath = (path || "").replace(/^\/+/, "");
  let url = dbUrl + "/" + cleanPath + ".json";
  if (shallow) url += "?shallow=true";

  const res = await fetch(url, { headers: { Authorization: "Bearer " + token } });
  const text = await res.text();
  if (res.status !== 200) {
    return { ok: false, text: `Firebase greska ${res.status}: ${text.slice(0, 300)}` };
  }
  if (text === "null") {
    return { ok: true, text: `Nema podataka na putanji '${cleanPath || "/"}'.` };
  }
  try {
    return { ok: true, text: JSON.stringify(JSON.parse(text), null, 2) };
  } catch {
    return { ok: true, text };
  }
}

// ---------- MCP handler ----------

async function handleToolCall(rpc, env) {
  const name = rpc.params?.name;
  const args = rpc.params?.arguments || {};

  try {
    if (name !== "read_budzet") {
      return rpcError(rpc.id, -32602, `Nepoznat alat: ${name}`);
    }
    const token = await getAccessToken(env);
    const r = await doReadBudzet(env, token, args.path, args.shallow);
    return toolText(rpc.id, r.text, !r.ok);
  } catch (e) {
    return toolText(rpc.id, `Greska u workeru: ${e.message}`, true);
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // tajna putanja — bez nje 404
    if (!env.SECRET_PATH || url.pathname !== env.SECRET_PATH) {
      return new Response("Not found", { status: 404 });
    }

    if (request.method === "GET") {
      return new Response("Helena Budzet MCP — ziv sam (read-only).", { status: 200 });
    }
    if (request.method !== "POST") {
      return new Response("Method not allowed", { status: 405 });
    }

    let rpc;
    try {
      rpc = await request.json();
    } catch {
      return rpcError(null, -32700, "Parse error");
    }

    if (rpc.id === undefined || rpc.id === null) {
      return new Response(null, { status: 202 });
    }

    switch (rpc.method) {
      case "initialize":
        return rpcResult(rpc.id, {
          protocolVersion: rpc.params?.protocolVersion || "2025-06-18",
          capabilities: { tools: {} },
          serverInfo: { name: "helena-budzet", version: "1.0.0" }
        });
      case "ping":
        return rpcResult(rpc.id, {});
      case "tools/list":
        return rpcResult(rpc.id, { tools: TOOLS });
      case "tools/call":
        return handleToolCall(rpc, env);
      default:
        return rpcError(rpc.id, -32601, `Method not found: ${rpc.method}`);
    }
  }
};
