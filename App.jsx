import { useState, useEffect } from "react";

const NEDELJE = ["Prva nedelja", "Druga nedelja", "Treća nedelja", "Četvrta nedelja"];
const OSTALE = ["Nepredviđeni troškovi", "Dodatne stvari", "Računi", "Štednja"];
const FASCIKLE = [...NEDELJE, ...OSTALE];
const OSTATAK_FASCIKLE = NEDELJE.map(n => `Ostatak - ${n}`);
const SVE_FASCIKLE = [...FASCIKLE, ...OSTATAK_FASCIKLE];

const BOJE = {
  "Prva nedelja": "#c8a96e", "Druga nedelja": "#c8a96e",
  "Treća nedelja": "#c8a96e", "Četvrta nedelja": "#c8a96e",
  "Nepredviđeni troškovi": "#e08070", "Dodatne stvari": "#a07bbf",
  "Računi": "#6e9fc8", "Štednja": "#7eb8a4",
  "Ostatak - Prva nedelja": "#5a4a2a", "Ostatak - Druga nedelja": "#5a4a2a",
  "Ostatak - Treća nedelja": "#5a4a2a", "Ostatak - Četvrta nedelja": "#5a4a2a",
};

const MESECI = ["Jan","Feb","Mar","Apr","Maj","Jun","Jul","Avg","Sep","Okt","Nov","Dec"];
const fmt = (n) => new Intl.NumberFormat("sr-RS").format(Math.round(n||0)) + " RSD";
const mkKey = (d) => `${d.getFullYear()}-${d.getMonth()}`;
const mkLabel = (key) => { const [y,m] = key.split("-").map(Number); return `${MESECI[m]} ${y}`; };
const mkEmpty = () => ({
  plata: 0,
  plataAndrija: 0,
  plataKatarina: 0,
  raspored: Object.fromEntries(SVE_FASCIKLE.map(f=>[f,0])),
  rashod: Object.fromEntries(SVE_FASCIKLE.map(f=>[f,0])),
  transakcije: [],
  zatvoreneNedelje: []
});

const S = {
  inp: { width:"100%", background:"#1c1c1c", border:"1px solid #2a2a2a", color:"#e8e0d0", borderRadius:6, padding:"9px 12px", fontSize:13, outline:"none", boxSizing:"border-box" },
};

function Modal({ title, titleColor="#c8a96e", onClose, children }) {
  return (
    <div onClick={onClose} style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.92)", display:"flex", alignItems:"flex-end", zIndex:200 }}>
      <div onClick={e=>e.stopPropagation()} style={{ width:"100%", background:"#131313", borderRadius:"14px 14px 0 0", padding:"22px 18px 32px", border:"1px solid #252525", maxHeight:"88vh", overflowY:"auto" }}>
        <div style={{ fontSize:15, color:titleColor, marginBottom:16, fontWeight:"bold" }}>{title}</div>
        {children}
      </div>
    </div>
  );
}

function Btns({ onCancel, onOk, okLabel, okColor="#c8a96e" }) {
  return (
    <div style={{ display:"flex", gap:8, marginTop:18 }}>
      <button onClick={onCancel} style={{ flex:1, padding:"10px", background:"#1e1e1e", border:"none", color:"#555", borderRadius:6, cursor:"pointer", fontSize:13 }}>Odustani</button>
      <button onClick={onOk} style={{ flex:1, padding:"10px", background:okColor, border:"none", color:"#0f0f0f", borderRadius:6, cursor:"pointer", fontSize:13, fontWeight:"bold" }}>{okLabel}</button>
    </div>
  );
}

export default function App() {
  const today = new Date();
  const [key, setKey] = useState(mkKey(today));
  const [data, setData] = useState(null);
  const [view, setView] = useState("pregled");
  const [loaded, setLoaded] = useState(false);

  const [showRaspored, setShowRaspored] = useState(false);
  const [showTx, setShowTx] = useState(false);
  const [showPrebaci, setShowPrebaci] = useState(false);
  const [showZatvori, setShowZatvori] = useState(null);
  const [showOstatci, setShowOstatci] = useState(false);

  const [tempPlataAndrija, setTempPlataAndrija] = useState("");
  const [tempPlataKatarina, setTempPlataKatarina] = useState("");
  const [tempR, setTempR] = useState({});
  const [tx, setTx] = useState({ opis:"", iznos:"", f: FASCIKLE[0] });
  const [preb, setPreb] = useState({ f: FASCIKLE[0], iznos:"" });

  useEffect(() => {
    async function load() {
      try {
        const res = await window.storage.get("budzet-data");
        if (res && res.value) {
          const parsed = JSON.parse(res.value);
          setData(parsed.data || { [mkKey(today)]: mkEmpty() });
          if (parsed.key) setKey(parsed.key);
        } else {
          setData({ [mkKey(today)]: mkEmpty() });
        }
      } catch {
        setData({ [mkKey(today)]: mkEmpty() });
      }
      setLoaded(true);
    }
    load();
  }, []);

  useEffect(() => {
    if (!loaded || !data) return;
    async function save() {
      try {
        await window.storage.set("budzet-data", JSON.stringify({ data, key }));
      } catch {}
    }
    save();
  }, [data, key, loaded]);

  if (!loaded || !data) return (
    <div style={{ minHeight:"100vh", background:"#0d0d0d", display:"flex", alignItems:"center", justifyContent:"center", color:"#555", fontFamily:"Georgia,serif" }}>
      Učitavanje...
    </div>
  );

  const mesec = data[key] || mkEmpty();

  function updateMesec(fn) {
    setData(p => {
      const m = p[key] || mkEmpty();
      return { ...p, [key]: fn(m) };
    });
  }

  function nav(dir) {
    const [y,m] = key.split("-").map(Number);
    const d = new Date(y, m+dir, 1);
    const k = mkKey(d);
    setData(p => ({ ...p, [k]: p[k] || mkEmpty() }));
    setKey(k);
  }

  function openRaspored() {
    setTempPlataAndrija(mesec.plataAndrija || "");
    setTempPlataKatarina(mesec.plataKatarina || "");
    setTempR({ ...mesec.raspored });
    setShowRaspored(true);
  }

  function saveRaspored() {
    const plataAndrija = parseFloat(tempPlataAndrija)||0;
    const plataKatarina = parseFloat(tempPlataKatarina)||0;
    const plata = plataAndrija + plataKatarina;
    const raspored = { ...mesec.raspored };
    FASCIKLE.forEach(f => { raspored[f] = parseFloat(tempR[f])||0; });
    updateMesec(m => ({ ...m, plata, plataAndrija, plataKatarina, raspored }));
    setShowRaspored(false);
  }

  function addTx() {
    const iznos = parseFloat(tx.iznos);
    if (!iznos || !tx.opis) return;
    updateMesec(m => ({
      ...m,
      rashod: { ...m.rashod, [tx.f]: (m.rashod[tx.f]||0)+iznos },
      transakcije: [{ opis:tx.opis, iznos, f:tx.f, datum:new Date().toLocaleDateString("sr-RS") }, ...m.transakcije]
    }));
    setTx({ opis:"", iznos:"", f:FASCIKLE[0] });
    setShowTx(false);
  }

  function doPrebaciNaStranu() {
    const iznos = parseFloat(preb.iznos);
    if (!iznos) return;
    const ostatak = (mesec.raspored[preb.f]||0) - (mesec.rashod[preb.f]||0);
    if (iznos > ostatak) return;
    updateMesec(m => ({
      ...m,
      rashod: { ...m.rashod, [preb.f]: (m.rashod[preb.f]||0)+iznos },
      raspored: { ...m.raspored, "Štednja": (m.raspored["Štednja"]||0)+iznos },
      transakcije: [{ opis:`Na stranu iz: ${preb.f}`, iznos, f:"Štednja", datum:new Date().toLocaleDateString("sr-RS") }, ...m.transakcije]
    }));
    setPreb({ f:FASCIKLE[0], iznos:"" });
    setShowPrebaci(false);
  }

  function zatvoriNedelju(nedelja) {
    const rsp = mesec.raspored[nedelja]||0;
    const rsh = mesec.rashod[nedelja]||0;
    const ostatak = rsp - rsh;
    const ostatakFascikla = `Ostatak - ${nedelja}`;
    if (ostatak <= 0) {
      updateMesec(m => ({ ...m, zatvoreneNedelje: [...(m.zatvoreneNedelje||[]), nedelja] }));
      setShowZatvori(null);
      return;
    }
    updateMesec(m => ({
      ...m,
      rashod: { ...m.rashod, [nedelja]: rsp },
      raspored: { ...m.raspored, [ostatakFascikla]: (m.raspored[ostatakFascikla]||0)+ostatak },
      zatvoreneNedelje: [...(m.zatvoreneNedelje||[]), nedelja],
      transakcije: [{ opis:`Zatvorena ${nedelja} — ostatak prebačen`, iznos:ostatak, f:ostatakFascikla, datum:new Date().toLocaleDateString("sr-RS") }, ...m.transakcije]
    }));
    setShowZatvori(null);
  }

  const ukupnoRaspored = FASCIKLE.reduce((a,f)=>a+(mesec.raspored[f]||0),0);
  const nerasporedj = mesec.plata - ukupnoRaspored;
  const imaOstataka = OSTATAK_FASCIKLE.some(f=>(mesec.raspored[f]||0)>0);

  return (
    <div style={{ minHeight:"100vh", background:"#0d0d0d", color:"#e8e0d0", fontFamily:"'Georgia',serif", display:"flex", flexDirection:"column", maxWidth:480, margin:"0 auto" }}>

      {/* Header */}
      <div style={{ padding:"14px 18px", borderBottom:"1px solid #1e1e1e", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
        <div>
          <div style={{ fontSize:10, letterSpacing:3, color:"#444", textTransform:"uppercase" }}>Andrija & Katarina</div>
          <div style={{ fontSize:19, color:"#c8a96e", fontWeight:"bold" }}>Kućni budžet</div>
        </div>
        <div style={{ display:"flex", alignItems:"center", gap:6 }}>
          <button onClick={()=>nav(-1)} style={{ background:"transparent", border:"1px solid #2a2a2a", color:"#777", borderRadius:4, width:26, height:26, cursor:"pointer", fontSize:15 }}>‹</button>
          <span style={{ fontSize:12, color:"#888", minWidth:64, textAlign:"center" }}>{mkLabel(key)}</span>
          <button onClick={()=>nav(1)} style={{ background:"transparent", border:"1px solid #2a2a2a", color:"#777", borderRadius:4, width:26, height:26, cursor:"pointer", fontSize:15 }}>›</button>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display:"flex", borderBottom:"1px solid #1a1a1a" }}>
        {[["pregled","Pregled"],["transakcije","Transakcije"]].map(([v,l])=>(
          <button key={v} onClick={()=>setView(v)} style={{ flex:1, padding:"10px 0", background:"transparent", border:"none", color:view===v?"#c8a96e":"#3a3a3a", fontSize:11, letterSpacing:2, textTransform:"uppercase", cursor:"pointer", borderBottom:view===v?"2px solid #c8a96e":"2px solid transparent" }}>{l}</button>
        ))}
      </div>

      <div style={{ flex:1, overflow:"auto", padding:"16px" }}>

        {/* PREGLED */}
        {view==="pregled" && (
          <div>
            {/* Plate */}
            <div style={{ background:"#161616", border:"1px solid #222", borderRadius:10, padding:"14px 16px", marginBottom:12 }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start" }}>
                <div style={{ flex:1 }}>
                  <div style={{ fontSize:10, color:"#444", letterSpacing:2, textTransform:"uppercase", marginBottom:6 }}>Plate ovog meseca</div>
                  {/* Andrija */}
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:4 }}>
                    <span style={{ fontSize:12, color:"#666" }}>Andrija</span>
                    <span style={{ fontSize:14, color:"#c8a96e" }}>{fmt(mesec.plataAndrija||0)}</span>
                  </div>
                  {/* Katarina */}
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:8 }}>
                    <span style={{ fontSize:12, color:"#666" }}>Katarina</span>
                    <span style={{ fontSize:14, color:"#c8a96e" }}>{fmt(mesec.plataKatarina||0)}</span>
                  </div>
                  {/* Separator */}
                  <div style={{ height:1, background:"#222", marginBottom:8 }} />
                  {/* Ukupno */}
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                    <span style={{ fontSize:12, color:"#888" }}>Ukupno</span>
                    <span style={{ fontSize:22, color:"#c8a96e", fontWeight:"bold" }}>{fmt(mesec.plata)}</span>
                  </div>
                  {mesec.plata>0 && nerasporedj!==0 && (
                    <div style={{ fontSize:11, color:nerasporedj>0?"#7eb8a4":"#e08070", marginTop:3, textAlign:"right" }}>
                      {nerasporedj>0?`+${fmt(nerasporedj)} neraspoređeno`:`${fmt(Math.abs(nerasporedj))} previše`}
                    </div>
                  )}
                </div>
                <button onClick={openRaspored} style={{ background:"#c8a96e", border:"none", color:"#0d0d0d", borderRadius:7, padding:"8px 14px", cursor:"pointer", fontSize:12, fontWeight:"bold", marginLeft:14, alignSelf:"flex-start" }}>
                  {mesec.plata>0?"Izmeni":"Rasporedi"}
                </button>
              </div>
            </div>

            {/* Nedelje */}
            <div style={{ fontSize:10, color:"#444", letterSpacing:2, textTransform:"uppercase", marginBottom:8 }}>Nedelje</div>
            {NEDELJE.map(f => {
              const rsp = mesec.raspored[f]||0;
              const rsh = mesec.rashod[f]||0;
              const ost = rsp - rsh;
              const pct = rsp>0?Math.min((rsh/rsp)*100,100):0;
              const zatvorena = (mesec.zatvoreneNedelje||[]).includes(f);
              return (
                <div key={f} style={{ background:"#161616", border:`1px solid ${zatvorena?"#1a1a1a":"#1e1e1e"}`, borderRadius:8, padding:"11px 14px", marginBottom:7, opacity:zatvorena?0.5:1 }}>
                  <div style={{ display:"flex", justifyContent:"space-between", marginBottom:5, alignItems:"center" }}>
                    <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                      <div style={{ width:7, height:7, borderRadius:"50%", background:zatvorena?"#333":"#c8a96e" }} />
                      <span style={{ fontSize:13, color:zatvorena?"#555":"#e8e0d0" }}>{f}</span>
                      {zatvorena && <span style={{ fontSize:9, color:"#444", letterSpacing:1 }}>ZATVORENA</span>}
                    </div>
                    <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                      <span style={{ fontSize:13, fontWeight:"bold", color:ost<0?"#e08070":zatvorena?"#444":"#e8e0d0" }}>{fmt(ost)}</span>
                      {!zatvorena && (
                        <button onClick={()=>setShowZatvori(f)} style={{ background:"#1e1e1e", border:"1px solid #2a2a2a", color:"#888", borderRadius:4, padding:"3px 7px", cursor:"pointer", fontSize:10 }}>
                          Zatvori
                        </button>
                      )}
                    </div>
                  </div>
                  <div style={{ height:3, background:"#242424", borderRadius:2 }}>
                    <div style={{ height:"100%", width:`${pct}%`, background:zatvorena?"#333":"#c8a96e", borderRadius:2 }} />
                  </div>
                  <div style={{ fontSize:10, color:"#3a3a3a", marginTop:4 }}>{fmt(rsh)} / {fmt(rsp)}</div>
                </div>
              );
            })}

            {/* Ostatci nedelja */}
            {imaOstataka && (
              <>
                <button onClick={()=>setShowOstatci(v=>!v)} style={{ background:"transparent", border:"none", color:"#5a4a2a", fontSize:11, letterSpacing:2, textTransform:"uppercase", cursor:"pointer", marginBottom:8, padding:0 }}>
                  {showOstatci?"▾":"▸"} Ostatci nedelja
                </button>
                {showOstatci && OSTATAK_FASCIKLE.filter(f=>(mesec.raspored[f]||0)>0).map(f=>{
                  const rsp = mesec.raspored[f]||0;
                  const rsh = mesec.rashod[f]||0;
                  const ost = rsp-rsh;
                  return (
                    <div key={f} style={{ background:"#111", border:"1px solid #1a1a1a", borderRadius:8, padding:"10px 14px", marginBottom:6 }}>
                      <div style={{ display:"flex", justifyContent:"space-between" }}>
                        <span style={{ fontSize:12, color:"#666" }}>{f}</span>
                        <span style={{ fontSize:12, color:"#5a4a2a", fontWeight:"bold" }}>{fmt(ost)}</span>
                      </div>
                    </div>
                  );
                })}
              </>
            )}

            {/* Fondovi */}
            <div style={{ fontSize:10, color:"#444", letterSpacing:2, textTransform:"uppercase", margin:"12px 0 8px" }}>Fondovi</div>
            {OSTALE.map(f => {
              const rsp = mesec.raspored[f]||0;
              const rsh = mesec.rashod[f]||0;
              const ost = rsp-rsh;
              const pct = rsp>0?Math.min((rsh/rsp)*100,100):0;
              return (
                <div key={f} style={{ background:"#161616", border:"1px solid #1e1e1e", borderRadius:8, padding:"11px 14px", marginBottom:7 }}>
                  <div style={{ display:"flex", justifyContent:"space-between", marginBottom:5 }}>
                    <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                      <div style={{ width:7, height:7, borderRadius:"50%", background:BOJE[f] }} />
                      <span style={{ fontSize:13 }}>{f}</span>
                    </div>
                    <span style={{ fontSize:13, fontWeight:"bold", color:ost<0?"#e08070":"#e8e0d0" }}>{fmt(ost)}</span>
                  </div>
                  <div style={{ height:3, background:"#242424", borderRadius:2 }}>
                    <div style={{ height:"100%", width:`${pct}%`, background:BOJE[f], borderRadius:2 }} />
                  </div>
                  <div style={{ fontSize:10, color:"#3a3a3a", marginTop:4 }}>{fmt(rsh)} / {fmt(rsp)}</div>
                </div>
              );
            })}

            <div style={{ display:"flex", gap:8, marginTop:14 }}>
              <button onClick={()=>setShowPrebaci(true)} style={{ flex:1, padding:"10px", background:"#161616", border:"1px solid #222", color:"#7eb8a4", borderRadius:7, cursor:"pointer", fontSize:12 }}>
                Prebaci na stranu
              </button>
              <button onClick={()=>setShowTx(true)} style={{ flex:1, padding:"10px", background:"#c8a96e", border:"none", color:"#0d0d0d", borderRadius:7, cursor:"pointer", fontSize:12, fontWeight:"bold" }}>
                + Rashod
              </button>
            </div>
          </div>
        )}

        {/* TRANSAKCIJE */}
        {view==="transakcije" && (
          <div>
            <button onClick={()=>setShowTx(true)} style={{ width:"100%", padding:"10px", background:"#c8a96e", border:"none", color:"#0d0d0d", borderRadius:7, cursor:"pointer", fontSize:12, fontWeight:"bold", marginBottom:14 }}>+ Novi rashod</button>
            {mesec.transakcije.length===0
              ? <div style={{ color:"#333", fontSize:13 }}>Nema transakcija za {mkLabel(key)}.</div>
              : mesec.transakcije.map((t,i)=>(
                <div key={i} style={{ background:"#161616", border:"1px solid #1e1e1e", borderRadius:8, padding:"11px 14px", marginBottom:7, display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                  <div>
                    <div style={{ fontSize:13 }}>{t.opis}</div>
                    <div style={{ fontSize:10, color:"#3a3a3a", marginTop:2 }}>{t.datum} · {t.f}</div>
                  </div>
                  <div style={{ color:"#e08070", fontWeight:"bold", fontSize:13 }}>-{fmt(t.iznos)}</div>
                </div>
              ))
            }
          </div>
        )}
      </div>

      {/* MODAL: Rasporedi */}
      {showRaspored && (
        <Modal title="Raspored plate" onClose={()=>setShowRaspored(false)}>
          <div style={{ fontSize:10, color:"#555", letterSpacing:2, textTransform:"uppercase", marginBottom:10 }}>Plate</div>
          <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:7 }}>
            <div style={{ width:7, height:7, borderRadius:"50%", background:"#c8a96e", flexShrink:0 }} />
            <span style={{ fontSize:12, width:100, flexShrink:0, color:"#aaa" }}>Andrija</span>
            <input value={tempPlataAndrija} onChange={e=>setTempPlataAndrija(e.target.value)} type="number" placeholder="0" style={{ ...S.inp, flex:1, padding:"6px 10px" }} />
          </div>
          <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:12 }}>
            <div style={{ width:7, height:7, borderRadius:"50%", background:"#a07bbf", flexShrink:0 }} />
            <span style={{ fontSize:12, width:100, flexShrink:0, color:"#aaa" }}>Katarina</span>
            <input value={tempPlataKatarina} onChange={e=>setTempPlataKatarina(e.target.value)} type="number" placeholder="0" style={{ ...S.inp, flex:1, padding:"6px 10px" }} />
          </div>
          {(parseFloat(tempPlataAndrija)||0)+(parseFloat(tempPlataKatarina)||0) > 0 && (
            <div style={{ fontSize:12, color:"#888", textAlign:"right", marginBottom:12 }}>
              Ukupno: <span style={{ color:"#c8a96e", fontWeight:"bold" }}>{fmt((parseFloat(tempPlataAndrija)||0)+(parseFloat(tempPlataKatarina)||0))}</span>
            </div>
          )}
          <div style={{ fontSize:10, color:"#555", letterSpacing:2, textTransform:"uppercase", margin:"4px 0 8px" }}>Nedelje</div>
          {NEDELJE.map(f=>(
            <div key={f} style={{ display:"flex", alignItems:"center", gap:8, marginBottom:7 }}>
              <div style={{ width:7, height:7, borderRadius:"50%", background:"#c8a96e", flexShrink:0 }} />
              <span style={{ fontSize:12, width:148, flexShrink:0, color:"#aaa" }}>{f}</span>
              <input value={tempR[f]||""} onChange={e=>setTempR(p=>({...p,[f]:e.target.value}))} type="number" placeholder="0" style={{ ...S.inp, flex:1, padding:"6px 10px" }} />
            </div>
          ))}
          <div style={{ fontSize:10, color:"#555", letterSpacing:2, textTransform:"uppercase", margin:"14px 0 8px" }}>Fondovi</div>
          {OSTALE.map(f=>(
            <div key={f} style={{ display:"flex", alignItems:"center", gap:8, marginBottom:7 }}>
              <div style={{ width:7, height:7, borderRadius:"50%", background:BOJE[f], flexShrink:0 }} />
              <span style={{ fontSize:12, width:148, flexShrink:0, color:"#aaa" }}>{f}</span>
              <input value={tempR[f]||""} onChange={e=>setTempR(p=>({...p,[f]:e.target.value}))} type="number" placeholder="0" style={{ ...S.inp, flex:1, padding:"6px 10px" }} />
            </div>
          ))}
          {(()=>{
            const sum = FASCIKLE.reduce((a,f)=>a+(parseFloat(tempR[f])||0),0);
            const pl = (parseFloat(tempPlataAndrija)||0)+(parseFloat(tempPlataKatarina)||0);
            const diff = pl-sum;
            if (!pl||diff===0) return null;
            return <div style={{ fontSize:11, color:diff>0?"#7eb8a4":"#e08070", marginTop:6 }}>
              {diff>0?`Ostaje: ${fmt(diff)}`:`Previše za: ${fmt(Math.abs(diff))}`}
            </div>;
          })()}
          <Btns onCancel={()=>setShowRaspored(false)} onOk={saveRaspored} okLabel="Sačuvaj" />
        </Modal>
      )}

      {/* MODAL: Rashod */}
      {showTx && (
        <Modal title="Novi rashod" onClose={()=>setShowTx(false)}>
          <input value={tx.opis} onChange={e=>setTx(p=>({...p,opis:e.target.value}))} placeholder="Opis" style={S.inp} />
          <input value={tx.iznos} onChange={e=>setTx(p=>({...p,iznos:e.target.value}))} type="number" placeholder="Iznos (RSD)" style={{...S.inp,marginTop:8}} />
          <select value={tx.f} onChange={e=>setTx(p=>({...p,f:e.target.value}))} style={{...S.inp,marginTop:8}}>
            {SVE_FASCIKLE.map(f=><option key={f}>{f}</option>)}
          </select>
          <Btns onCancel={()=>setShowTx(false)} onOk={addTx} okLabel="Dodaj" />
        </Modal>
      )}

      {/* MODAL: Prebaci na stranu */}
      {showPrebaci && (
        <Modal title="Prebaci na stranu → Štednja" titleColor="#7eb8a4" onClose={()=>setShowPrebaci(false)}>
          <select value={preb.f} onChange={e=>setPreb(p=>({...p,f:e.target.value}))} style={S.inp}>
            {SVE_FASCIKLE.filter(f=>f!=="Štednja"&&(mesec.raspored[f]||0)>0).map(f=>(
              <option key={f} value={f}>{f} — ostalo: {fmt((mesec.raspored[f]||0)-(mesec.rashod[f]||0))}</option>
            ))}
          </select>
          <input value={preb.iznos} onChange={e=>setPreb(p=>({...p,iznos:e.target.value}))} type="number" placeholder="Iznos (RSD)" style={{...S.inp,marginTop:8}} />
          <Btns onCancel={()=>setShowPrebaci(false)} onOk={doPrebaciNaStranu} okLabel="Prebaci" okColor="#7eb8a4" />
        </Modal>
      )}

      {/* MODAL: Zatvori nedelju */}
      {showZatvori && (
        <Modal title={`Zatvori ${showZatvori}?`} titleColor="#e08070" onClose={()=>setShowZatvori(null)}>
          <div style={{ fontSize:13, color:"#888", lineHeight:1.6 }}>
            Ostatak od <span style={{ color:"#c8a96e", fontWeight:"bold" }}>{fmt((mesec.raspored[showZatvori]||0)-(mesec.rashod[showZatvori]||0))}</span> će biti prebačen u <span style={{ color:"#5a8a7a" }}>Ostatak - {showZatvori}</span>.
            <br /><br />
            Nedelja će biti označena kao zatvorena.
          </div>
          <Btns onCancel={()=>setShowZatvori(null)} onOk={()=>zatvoriNedelju(showZatvori)} okLabel="Zatvori nedelju" okColor="#e08070" />
        </Modal>
      )}
    </div>
  );
}
