# Budžet — uputstvo

**Šta je:** kućni budžet po mesecima: plate, planirane stavke, troškovi, računi sa štikliranjem, rate, štednja. Google prijava, baza Firebase `budzet-f3992`.

**Adresa:** https://andrijaradmilovic1990-ai.github.io/Budzet/

**Fajlovi:**
- `index.html` — cela aplikacija; `manifest.json`, `sw.js` — instalacija na telefonu.
- `helena-budzet-worker/` — konektor kojim asistent čita i piše bazu (`read_budzet`, `write_budzet`, `delete_budzet`); živi na Cloudflare-u kao `helena-budzet`.
- `docs/` — uputstvo za prijavu i pravila baze (`firebase-pravila.json`).
- `skola/`, `brzi/`, `brzi-unos.html`, `brzi-sw.js` — samo preusmerenja: Škola i Brzi unos su od 09.10.2026 u repou **Aplikacije**.

**Baza (`budzet/`):**

| putanja | šta |
|---|---|
| `budzet/<godina>/<mesec>/…` | jedan mesec; **mesec = broj meseca − 1** (januar = 0): `salaries`, `budget_items`, `transactions/<ts>`, `racuni`, `racuni_iznosi`, `notes`, `preneto` |
| `budzet/tv_rata`, `budzet/laptop_rata` | koliko je rata plaćeno; raste samo kad se račun „Rata …" štiklira kao plaćen |
| `budzet/ukupna_stednja` | ukupna štednja |

Ista baza nosi i aplikacije iz repoa Aplikacije (`skola/`, `skola_gost/`, a Brzi unos piše u `budzet/<godina>/<mesec>/transactions/`).

**Popravka / dogradnja:** izmena u `index.html` → proba lokalno (`python3 -m http.server`, `http://localhost:8000/`) → push na `main` → za par minuta na telefonu. Rate i fiksni iznosi računa su u nizu računa u `index.html` (`rataKey`, `rataUkupno`, `fiksno`). Pazi: pravi podaci su u bazi; probni upis posle obrisati.
