# Uputstvo: Google prijava + otisak + zaključavanje baze

Ovo uputstvo zatvara bezbednosnu rupu (do sada je baza bila javno dostupna)
i uvodi prijavu Google nalogom + otključavanje otiskom na svakom telefonu.

> ⚠️ VAŽAN REDOSLED — prati korake ovim redom da se ne biste slučajno
> zaključali iz sopstvenih podataka.

---

## Korak 1 — Uključi Google prijavu (Firebase konzola)

1. Idi na https://console.firebase.google.com → projekat **budzet-f3992**
2. Levo meni: **Build → Authentication → Get started** (ako već nije)
3. Tab **Sign-in method → Add new provider → Google → Enable**
4. Izaberi „support email", pa **Save**

## Korak 2 — Dozvoli domen aplikacije

1. I dalje u **Authentication → Settings → Authorized domains**
2. **Add domain** i dodaj tačno onaj domen sa kog otvaraš aplikaciju na
   telefonu (npr. `andrijaradmilovic1990-ai.github.io`).
   - To je deo iz adrese pre prve kose crte. `localhost` je već dozvoljen.

## Korak 3 — Postavi novu verziju aplikacije

- Spoji (merge) ovaj PR u granu sa koje se aplikacija objavljuje (GitHub Pages).
- Otvori aplikaciju na telefonu → trebalo bi da te dočeka ekran
  **„Prijavi se Google nalogom"**.

## Korak 4 — Prijavite se oboje (po jednom)

1. **Andrija**: prijavi se svojim Google nalogom na svom telefonu.
2. **Katarina**: prijavi se svojim Google nalogom na svom telefonu.
3. Posle prijave, aplikacija nudi **„Zaključaj otiskom?"** — uključite na
   svakom telefonu. Od tada se aplikacija otvara otiskom.

> U ovom trenutku baza je i dalje „otvorena" — to je namerno, da se ne
> zaključate dok ne potvrdite da prijava radi.

## Korak 5 — Saznaj Katarinin email/UID i zaključaj bazu

1. U aplikaciji, gore desno tapni **👤 (Nalog)** — videćeš email i UID.
   Uradi to na oba telefona da znaš obe vrednosti.
2. Otvori `docs/firebase-pravila.json` i zameni `KATARININ.EMAIL@gmail.com`
   pravim Katarininim Google emailom (Andrijin je već upisan).
3. U Firebase konzoli: **Realtime Database → Rules**, nalepi sadržaj fajla
   `docs/firebase-pravila.json`, pa **Publish**.

Gotovo. Od sada bazi mogu da priđu samo vaša dva naloga, a aplikacija se
otvara otiskom na svakom telefonu.

---

## Šta ako nešto zapne?

- **„unauthorized domain" pri prijavi** → nisi dodao domen u Koraku 2.
- **Prijava se ne završi unutar instalirane (PWA) aplikacije** → otvori
  aplikaciju kao običnu stranicu u pregledaču, prijavi se, pa je opet
  koristi sa home screen-a.
- **Promenio si telefon / obrisao podatke pregledača** → samo se ponovo
  prijavi i ponovo uključi otisak na tom telefonu (jednom).
- **Otisak ne radi na nekom telefonu** → aplikacija i dalje radi, samo bez
  brze brave; podaci su zaštićeni Google prijavom.

## Napomena o otisku (privatnost)

Otisak nikada ne napušta telefon. Aplikacija samo traži od telefona da
potvrdi „jesi li to ti", a sam otisak ostaje u bezbednom delu telefona.
