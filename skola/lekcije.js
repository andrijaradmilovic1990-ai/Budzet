// Škola — sadržaj (kurikulum v2, 09.10.2026). Lekcije se pišu jednom, ovde.
// Napredak, odgovori i kartice su u bazi (skola/...), ne ovde.
//
// Lekcija: kuka (pogodi pre čitanja) → delovi (svaki sa proverom odmah) →
// prisećanje bez gledanja → ključne ideje (sam proveriš šta si imao) →
// razgovor (pitanja za Helenu) → kartice idu u ponavljanje (1, 3, 7, 21, 60 dana).
//
// Polja: kuka {p, o:[...], t}, delovi [{n, t, pr:{p, o:[...], t, z}}],
// kljucno [...], kartice [{p, o}], razgovor [...]. t = indeks tačne opcije, z = zašto.
// Lekcija bez polja delovi = još se piše.

export const OBLASTI = [
{id:'1', naziv:'Kosmos i materija', ikona:'🌌', era:'pre 13,8 mlrd god.', lekcije:[

{id:'1-1', naslov:'Veliki prasak — koliko je svemir star i velik',
kuka:{p:'Šta misliš, koliko je star svemir?', o:['Oko 6.000 godina','Oko 4,5 milijardi godina','Oko 13,8 milijardi godina','Oduvek postoji'], t:2},
delovi:[
{n:'Svemir ima početak', t:`Pre oko 13,8 milijardi godina sve što danas postoji — svaka zvezda, svaki atom tvog tela — bilo je sabijeno u stanje neverovatno vrelo i gusto. Od tada se širi i hladi. To zovemo Veliki prasak.

Najčešća zabluda: da je to bila eksplozija u praznom prostoru, kao bomba. Nije. Nije bilo „spolja" u koje bi nešto eksplodiralo. Širio se SAM PROSTOR.

Slika koja pomaže: testo sa suvim grožđem koje narasta u rerni. Kako testo raste, svako zrno se udaljava od svakog drugog. Nijedno nije centar. Tako i galaksije: svaka vidi da joj se sve ostale udaljavaju.

Ime „Big Bang" je 1949. dao astronom Fred Hojl — podrugljivo, jer u to nije verovao. Ime je ostalo, a dokazi su ga pregazili.`,
pr:{p:'Šta je, u stvari, Veliki prasak?', o:['Eksplozija ogromne bombe u praznom prostoru','Širenje samog prostora iz vrelog, gustog stanja','Sudar dve ogromne galaksije'], t:1, z:'Nije bilo praznog prostora u koji bi nešto eksplodiralo — prostor se sam širi, kao testo sa grožđem.'}},
{n:'Kako to znamo — tri dokaza', t:`Niko nije bio tamo. Ali tri nezavisna traga vode na isto mesto:

1. GALAKSIJE SE UDALJAVAJU. Edvin Habl je 1929. video da se skoro sve galaksije udaljavaju od nas, i to što dalje — to brže. Svetlost galaksije koja beži „pocrveni", kao što sirena hitne pomoći promeni ton kad prođe pored tebe. Ako film vratiš unazad, sve se skuplja u jednu tačku.

2. EHO POČETKA. Svemir je u početku bio vreo i svetleo je. Ta svetlost se do danas ohladila u slabo mikrotalasno zračenje koje dolazi iz svih pravaca. Otkriveno je 1965. slučajno: dvojica inženjera su mislila da im smetnje u anteni prave golubovi.

3. RECEPT ZA MATERIJU. Teorija predviđa da je iz prvih minuta izašlo oko tri četvrtine vodonika i četvrtina helijuma. Kad izmerimo stare zvezde i gas — tačno to nalazimo.`,
pr:{p:'Šta od ovoga NIJE dokaz Velikog praska?', o:['Galaksije se udaljavaju od nas','Slabo zračenje koje dolazi iz svih pravaca','Zemlja je okrugla'], t:2, z:'Okruglost Zemlje nema veze sa početkom svemira. Tri dokaza su udaljavanje galaksija, eho početka (pozadinsko zračenje) i odnos vodonika i helijuma.'}},
{n:'Koliko je veliko', t:`Brojke su tolike da ih mozak ne hvata, zato merimo vremenom koje treba svetlosti — a ona prelazi 300.000 km u sekundi.

• Od Meseca do nas: malo više od 1 sekunde.
• Od Sunca: 8 minuta. Sunce koje vidiš je Sunce od pre 8 minuta.
• Najbliža zvezda posle Sunca: 4,2 godine svetlosti.
• Naša galaksija, Mlečni put: oko 100.000 godina svetlosti preko, sa 100–400 milijardi zvezda.
• Vidljivi svemir: oko 93 milijarde godina svetlosti preko, sa stotinama milijardi galaksija.

Odavde sledi nešto lepo: GLEDATI DALEKO ZNAČI GLEDATI U PROŠLOST. Zvezda koju večeras vidiš možda više i ne postoji; do tebe tek stiže njena stara svetlost.`,
pr:{p:'Gledaš zvezdu udaljenu 1.000 godina svetlosti. Šta vidiš?', o:['Kako izgleda upravo sada','Kako je izgledala pre 1.000 godina','Kako će izgledati za 1.000 godina'], t:1, z:'Svetlosti je trebalo 1.000 godina da stigne do tebe, pa vidiš zvezdu kakva je bila kad je ta svetlost krenula.'}},
{n:'Kalendar svemira', t:`Karl Sejgan je smislio trik: sabij celu istoriju svemira u jednu kalendarsku godinu.

• 1. januar, ponoć: Veliki prasak.
• Proleće: oblikuje se naš Mlečni put.
• Početak septembra: nastaju Sunce i Zemlja.
• Kraj septembra: prvi život na Zemlji.
• 25. decembar: dinosaurusi.
• 31. decembar, 23:48: pojavljuje se čovek kao vrsta.
• Poslednjih 11 sekundi pred ponoć: sva pisana istorija — piramide, Rim, Srbija, ti.

Ovo nije da te ponizi, nego da ti da razmeru. Sve o čemu ćemo pričati u istoriji, religijama, ekonomiji — dešava se u tih poslednjih nekoliko sekundi.`,
pr:{p:'U „kalendaru svemira", kad se pojavljuje čovek?', o:['U julu','Na Božić, 25. decembra','U poslednjih dvanaest minuta 31. decembra'], t:2, z:'Čovek stiže 31. decembra oko 23:48, a cela pisana istorija staje u poslednjih oko 11 sekundi.'}},
{n:'Šta ne znamo', t:`Pošteno je reći i gde znanje staje.

• ŠTA JE BILO „PRE"? Možda pitanje nema smisla, jer vreme počinje sa svemirom — kao da pitaš šta je severno od Severnog pola. A možda ima. Ne znamo.
• TAMNA MATERIJA I TAMNA ENERGIJA. Sve što vidimo — zvezde, planete, gas, ljudi — čini samo oko 5% svemira. Oko 27% je „tamna materija": vidimo da privlači gravitacijom, ali ne znamo šta je. Oko 68% je „tamna energija", nešto što ubrzava širenje svemira. Imamo imena, nemamo odgovore.
• DA LI POSTOJE DRUGI SVEMIRI? Neke teorije to dozvoljavaju, ali za sad nema načina da se proveri.

Kad nauka kaže „ne znamo", to nije slabost. To je razlika između nje i priče koja ima odgovor za sve.`,
pr:{p:'Koliki deo svemira čini obična materija — sve što vidimo?', o:['Oko 95%','Oko polovine','Oko 5%'], t:2, z:'Samo oko 5%. Ostalo su tamna materija (oko 27%) i tamna energija (oko 68%), za koje još ne znamo šta su.'}}
],
kljucno:['Svemir je star oko 13,8 milijardi godina i počeo je iz vrelog, gustog stanja.','Veliki prasak je širenje samog prostora, ne eksplozija u praznom.','Tri dokaza: galaksije se udaljavaju, eho početka (pozadinsko zračenje), odnos vodonika i helijuma.','Svetlosti treba vreme da stigne — gledati daleko znači gledati u prošlost.','Obična materija je samo oko 5% svemira; tamna materija i energija su nepoznanice.'],
kartice:[
{p:'Koliko je star svemir?', o:'Oko 13,8 milijardi godina.'},
{p:'Zašto Veliki prasak nije eksplozija kao bomba?', o:'Jer se širi sam prostor — nema praznog „spolja" u koje bi nešto eksplodiralo.'},
{p:'Navedi tri dokaza Velikog praska.', o:'Galaksije se udaljavaju (Habl), pozadinsko mikrotalasno zračenje, odnos vodonika i helijuma.'},
{p:'Zašto vidimo zvezde kakve su bile, a ne kakve jesu?', o:'Svetlosti treba vreme da stigne do nas — daleko znači prošlost.'},
{p:'Koliki deo svemira je obična materija?', o:'Oko 5%.'}
],
razgovor:['Objasni Veliki prasak nekome ko nikad nije čuo za njega — bez stručnih reči.','Da li ti je lakše ili teže da prihvatiš da svemir ima početak? Zašto?']},

{id:'1-2', naslov:'Zvezde i galaksije — fabrike elemenata',
kuka:{p:'Odakle potiče gvožđe u tvojoj krvi?', o:['Nastalo je na Zemlji, u stenama','Iz unutrašnjosti zvezda koje su davno umrle','Direktno iz Velikog praska'], t:1},
delovi:[
{n:'Kako se pali zvezda', t:`Posle Velikog praska postojali su skoro samo vodonik i helijum. Ogromni oblaci gasa. Gravitacija ih je polako skupljala, i kako se gas sabijao, zagrevao se.

Kad u središtu oblaka temperatura dostigne oko 10 miliona stepeni, desi se nešto novo: jezgra vodonika počnu da se SPAJAJU u helijum i pri tom oslobađaju ogromnu energiju. To je FUZIJA. Zvezda se upalila.

Zvezda je ravnoteža dve sile: gravitacija pritiska ka unutra, energija fuzije gura ka spolja. Dok traje gorivo, ravnoteža drži.

Naše Sunce svake sekunde pretvori oko 600 miliona tona vodonika u helijum. I tako 4,6 milijardi godina.`,
pr:{p:'Šta daje energiju zvezdi?', o:['Gori, kao vatra u peći','Fuzija — spajanje lakih jezgara u teža','Električna struja iz svemira'], t:1, z:'Zvezda ne gori (za vatru treba kiseonik). U njenom jezgru se jezgra vodonika spajaju u helijum i oslobađaju energiju.'}},
{n:'Život i smrt zvezde', t:`Kako zvezda živi i umire zavisi skoro samo od jednog: koliko je TEŠKA.

• MALE ZVEZDE štede gorivo i žive bilionima godina — duže nego što svemir postoji.
• ZVEZDE KAO SUNCE žive oko 10 milijardi godina. Sunce je na polovini. Na kraju će se naduti u crvenog džina, progutati Merkur i Veneru, a ostaće beli patuljak — ugašeni žar veličine Zemlje.
• OGROMNE ZVEZDE gore kao lude i žive samo nekoliko miliona godina. Završe u eksploziji koja se zove SUPERNOVA — na nekoliko nedelja sija jače od cele galaksije. Iza ostane neutronska zvezda ili crna rupa.

Pravilo koje važi i van astronomije: što jače goriš, kraće traješ.`,
pr:{p:'Koja zvezda živi najkraće?', o:['Mala zvezda','Zvezda kao Sunce','Ogromna zvezda'], t:2, z:'Ogromne zvezde troše gorivo neverovatno brzo i žive samo nekoliko miliona godina.'}},
{n:'Fabrike elemenata', t:`Ovo je možda najlepša stvar u celoj oblasti.

U jezgru zvezde fuzija ne staje na helijumu. Kako zvezda stari, pravi sve teže elemente: ugljenik, kiseonik, azot, silicijum… sve do gvožđa. Teže od gvožđa — zlato, srebro, uran — nastaju u eksplozijama supernova i u sudarima mrtvih neutronskih zvezda.

Kad zvezda umre, eksplozija razbaca te elemente po svemiru. Od tog praha nastaju novi oblaci, nove zvezde i planete.

Zato: kalcijum u tvojim kostima, gvožđe u tvojoj krvi, kiseonik koji upravo udišeš i ugljenik od kog je napravljena svaka tvoja ćelija — skuvani su u zvezdama koje su umrle pre nego što je Sunce postojalo. Sejgan: „Napravljeni smo od zvezdane prašine." To nije pesnička slika. To je hemija.`,
pr:{p:'Gde je nastalo zlato?', o:['U Zemljinom jezgru','U eksplozijama i sudarima mrtvih zvezda','U Velikom prasku'], t:1, z:'Elementi teži od gvožđa, kao zlato, nastaju u supernovama i sudarima neutronskih zvezda. Veliki prasak je dao skoro samo vodonik i helijum.'}},
{n:'Galaksije i crne rupe', t:`Zvezde ne lebde same. Gravitacija ih drži u ogromnim ostrvima — GALAKSIJAMA.

Naša je Mlečni put: spirala sa 100–400 milijardi zvezda. Mi smo u jednom kraku, oko 26.000 godina svetlosti od centra. Ona bleda pruga na nebu van grada — to je pogled na sopstvenu galaksiju sa strane.

U centru skoro svake velike galaksije je SUPERMASIVNA CRNA RUPA. Naša je teška kao oko 4 miliona Sunaca.

Šta je crna rupa: telo toliko gusto da mu ni svetlost ne može pobeći. Zabluda je da je to usisivač koji guta sve. Iz daljine privlači kao i bilo šta iste mase — kad bi Sunce postalo crna rupa iste mase, Zemlja bi nastavila da kruži isto (samo bi bilo mračno i hladno).

Za oko 4–5 milijardi godina Mlečni put će se sudariti sa susednom galaksijom Andromedom.`,
pr:{p:'Šta je crna rupa?', o:['Rupa u prostoru koja usisava sve oko sebe','Telo toliko gusto da ni svetlost ne može da mu pobegne','Prazan prostor između galaksija'], t:1, z:'Crna rupa je ekstremno gusto telo. Iz daljine privlači kao bilo koje telo iste mase — nije usisivač.'}},
{n:'Naš kutak: Sunčev sistem', t:`Pre 4,6 milijardi godina oblak gasa i prašine — ostataka starih zvezda — skupio se u Sunce. Ostatak se okretao oko njega i slepio u planete.

• Sunce nosi 99,8% mase celog sistema.
• Blizu Sunca su male, kamenite planete: Merkur, Venera, Zemlja, Mars.
• Dalje su gasoviti divovi: Jupiter, Saturn, Uran, Neptun.
• Ukupno 8 planeta. Pluton je 2006. preimenovan u patuljastu planetu — nije se smanjio, samo smo bolje definisali šta je planeta.

Do danas je pronađeno više hiljada planeta oko drugih zvezda. Planete su pravilo, ne izuzetak. Da li negde ima života — ne znamo. To je jedno od najvećih otvorenih pitanja.`,
pr:{p:'Koliko planeta ima Sunčev sistem?', o:['9','8','12'], t:1, z:'Osam: Merkur, Venera, Zemlja, Mars, Jupiter, Saturn, Uran, Neptun. Pluton je od 2006. patuljasta planeta.'}}
],
kljucno:['Zvezde sijaju zbog fuzije — spajanja vodonika u helijum.','Masa određuje život zvezde: velike žive kratko i završe kao supernova.','Elementi teži od helijuma skuvani su u zvezdama — napravljeni smo od zvezdane prašine.','Galaksije su ostrva zvezda; u centru velikih je supermasivna crna rupa.','Sunčev sistem je star 4,6 milijardi godina i ima 8 planeta.'],
kartice:[
{p:'Šta je fuzija u zvezdi?', o:'Spajanje lakih jezgara (vodonik) u teža (helijum), uz oslobađanje energije.'},
{p:'Od čega zavisi kako zvezda živi i umire?', o:'Od mase. Velike žive kratko i eksplodiraju kao supernova.'},
{p:'Odakle potiču kalcijum, gvožđe i kiseonik u tvom telu?', o:'Iz zvezda koje su umrle pre nastanka Sunca.'},
{p:'Da li crna rupa „usisava" sve oko sebe?', o:'Ne — iz daljine privlači kao bilo koje telo iste mase.'},
{p:'Koliko je star Sunčev sistem i koliko ima planeta?', o:'Oko 4,6 milijardi godina; 8 planeta.'}
],
razgovor:['Šta ti znači rečenica „napravljeni smo od zvezdane prašine"? Menja li nešto u tome kako gledaš na sebe?','Objasni svojim rečima zašto velike zvezde žive kraće od malih.']},

{id:'1-3', naslov:'Atom i elementi — od čega je sve napravljeno',
kuka:{p:'Kad bi atom uvećao do veličine fudbalskog stadiona, koliko bi bilo njegovo jezgro?', o:['Skoro kao ceo stadion','Kao fudbalski gol','Kao zrno graška na centru terena'], t:2},
delovi:[
{n:'Sve je od atoma', t:`Pre 2.400 godina grčki filozof Demokrit je rekao: ako nešto deliš i deliš, na kraju stigneš do komadića koji se ne može dalje deliti. Nazvao ga je ATOMOS — „nedeljiv".

To je bila samo misao. Dokaz je stigao tek oko 1800–1900: hemičari su videli da se supstance uvek spajaju u tačnim razmerama, kao da su sastavljene od sitnih jedinica.

Koliko su mali? U debljini jedne vlasi kose stane nekoliko stotina hiljada atoma poređanih u niz. U jednoj kapi vode ima ih više nego što ima zrna peska na svim plažama Zemlje.

Danas znamo da atom ipak ima delove. Ali ime je ostalo.`,
pr:{p:'Ko je prvi izneo ideju atoma?', o:['Isak Njutn','Demokrit, grčki filozof','Albert Ajnštajn'], t:1, z:'Demokrit, pre oko 2.400 godina — kao čistu misao. Dokazi su stigli tek oko 1800–1900.'}},
{n:'Šta je unutra', t:`Atom ima:
• JEZGRO u sredini — od PROTONA (pozitivni naboj) i NEUTRONA (bez naboja);
• ELEKTRONE (negativni naboj) koji se kreću oko jezgra.

Jezgro je sićušno: ako je atom stadion, jezgro je zrno graška na centru terena. Sve ostalo je praznina. I ti si, kad se sabere, skoro sav prazan prostor — samo što elektromagnetna sila čini da se stvari ne propadaju jedna kroz drugu.

Najvažnije pravilo: BROJ PROTONA određuje koji je element.
1 proton = vodonik · 6 = ugljenik · 8 = kiseonik · 26 = gvožđe · 79 = zlato.

Promeni broj protona — dobiješ drugi element. Alhemičari su vekovima pokušavali da od olova naprave zlato i nisu mogli. Zvezde mogu.`,
pr:{p:'Šta određuje koji je element u pitanju?', o:['Broj elektrona','Broj protona u jezgru','Veličina atoma'], t:1, z:'Broj protona je „lična karta" elementa: 6 je uvek ugljenik, 79 je uvek zlato.'}},
{n:'Periodni sistem', t:`1869. ruski hemičar Dmitrij Mendeljejev je, kaže priča, ispisao elemente na kartice i slagao ih kao pasijans — po težini i po tome kako se ponašaju.

Video je da se svojstva ponavljaju u pravilnim razmacima. Napravio je tabelu i ostavio PRAZNA MESTA, uz tvrdnju: tu postoje elementi koje još nismo otkrili, i biće otprilike ovakvi. Za nekoliko godina su ih našli — tačno onakve kakve je predvideo. To je nauka u najboljem izdanju: ne samo da opisuje, nego predviđa.

Danas znamo za 118 elemenata; oko 90 postoji u prirodi, ostali su napravljeni u laboratorijama.

Elementi u istoj koloni se ponašaju slično. Primer: helijum, neon, argon skoro ni sa čim ne reaguju („plemeniti gasovi"), a natrijum i kalijum burno reaguju sa vodom.`,
pr:{p:'Po čemu je Mendeljejev najpoznatiji?', o:['Otkrio je atom','Složio je elemente u tabelu i predvideo one koji još nisu bili otkriveni','Napravio je prvu atomsku bombu'], t:1, z:'Njegova tabela je imala prazna mesta za elemente koje niko nije video — i oni su kasnije pronađeni.'}},
{n:'Kako se atomi spajaju', t:`Atomi retko stoje sami. Spajaju se u MOLEKULE tako što dele ili predaju elektrone.

• Voda: dva atoma vodonika + jedan kiseonika (H₂O).
• Ugljen-dioksid koji izdišeš: jedan ugljenik + dva kiseonika (CO₂).

Isti atomi, drugačiji raspored — potpuno druga stvar. Grafit u olovci i dijamant su OBA čist ugljenik. Razlika je samo u tome kako su atomi složeni.

HEMIJSKA REAKCIJA je samo preraspodela atoma. Ništa ne nestaje. Lavoazje, otac moderne hemije: „Ništa se ne gubi, ništa se ne stvara, sve se menja."

Kad drvo gori, ne nestaje. Atomi drveta se spoje sa kiseonikom iz vazduha i odu u vazduh kao ugljen-dioksid i vodena para. Ostane pepeo. A biljka je taj ugljenik nekad uzela iz vazduha — vatra ga samo vraća.`,
pr:{p:'Grafit u olovci i dijamant su…', o:['Potpuno različiti elementi','Isti element — ugljenik — samo drugačije složen','Dijamant je grafit sa primesama zlata'], t:1, z:'Oba su čist ugljenik. Različit raspored atoma daje potpuno različita svojstva.'}},
{n:'Čvrsto, tečno, gas — i šta je toplota', t:`Ista supstanca može biti čvrsta, tečna ili gas — led, voda, para. Šta se menja? Samo koliko se brzo atomi i molekuli kreću.

TOPLOTA = KRETANJE. Što se čestice brže kreću i sudaraju, to je nešto toplije.
• U ledu molekuli stoje u rešetki i samo drhte.
• U vodi klize jedni pored drugih.
• U pari lete na sve strane.

Postoji najniža moguća temperatura, kad se kretanje skoro sasvim smiri: APSOLUTNA NULA, −273,15 °C. Hladnije ne postoji.

Četvrto stanje je PLAZMA: toliko vrelo da atomi izgube elektrone. Od nje su zvezde, munje i svetlo u neonskoj cevi.

I za kraj, ti: telo je oko 60% voda, a po broju atoma uglavnom si vodonik, kiseonik, ugljenik i azot. Isti sastojci kao u zvezdama, složeni na jako čudan način.`,
pr:{p:'Šta je toplota?', o:['Posebna nevidljiva supstanca','Kretanje atoma i molekula','Vrsta svetlosti'], t:1, z:'Toplota je kretanje čestica. Što se brže kreću, to je toplije; na apsolutnoj nuli kretanje skoro staje.'}}
],
kljucno:['Sve je od atoma: jezgro (protoni i neutroni) i elektroni oko njega; atom je skoro sav prazan.','Broj protona određuje element (6 ugljenik, 8 kiseonik, 79 zlato).','Mendeljejev je složio periodni sistem i predvideo neotkrivene elemente.','Hemijska reakcija je preraspodela atoma — ništa ne nestaje, sve se menja.','Toplota je kretanje čestica; agregatno stanje zavisi od tog kretanja.'],
kartice:[
{p:'Od čega se sastoji atom?', o:'Od jezgra (protoni i neutroni) i elektrona oko njega.'},
{p:'Šta određuje koji je element?', o:'Broj protona u jezgru.'},
{p:'Šta je Mendeljejev predvideo?', o:'Postojanje i svojstva elemenata koji još nisu bili otkriveni.'},
{p:'Kad drvo izgori, gde odu njegovi atomi?', o:'U vazduh, kao ugljen-dioksid i vodena para; ostatak je pepeo. Ništa ne nestaje.'},
{p:'Šta je toplota?', o:'Kretanje atoma i molekula.'}
],
razgovor:['Lavoazje kaže: „ništa se ne gubi, sve se menja." Gde u svakodnevici to vidiš — u kuhinji, u peći, u autu?','Objasni nekome zašto grafit i dijamant mogu biti od istog materijala.']},

{id:'1-4', naslov:'Sile i energija — šta pokreće svet',
kuka:{p:'Na Mesecu, gde nema vazduha, ispustiš čekić i pero istovremeno. Šta pada brže?', o:['Čekić','Pero','Padaju jednako brzo'], t:2},
delovi:[
{n:'Njutn i kretanje', t:`1687. Isak Njutn je u jednoj knjizi objasnio kretanje svega — od jabuke do planeta. Tri zakona:

1. INERCIJA. Telo koje miruje ostaje da miruje, a telo koje se kreće nastavlja da se kreće — dok ga neka sila ne promeni. Zato te pojas spasava: kad auto naglo stane, ti nastavljaš napred.

2. SILA = MASA × UBRZANJE. Da pokreneš prazna kolica treba malo sile, a puna — mnogo. Što je nešto teže, to ga je teže ubrzati ili zaustaviti.

3. AKCIJA I REAKCIJA. Svaka sila ima jednaku silu u suprotnom smeru. Puška trza unazad. Raketa izbacuje gas nadole i ide nagore — ne treba joj ništa „od čega da se odbije".`,
pr:{p:'Zašto poletiš napred kad taksi naglo zakoči?', o:['Neka sila te gura napred','Tvoje telo nastavlja kretanje — inercija','Vazduh u autu te potisne'], t:1, z:'Ništa te ne gura. Auto je stao, a tvoje telo po inerciji nastavlja da se kreće dok ga pojas ne zaustavi.'}},
{n:'Gravitacija', t:`Njutnov veliki uvid: sila koja obara jabuku sa drveta i sila koja drži Mesec u orbiti — ISTA JE. Mesec zapravo stalno „pada" ka Zemlji, ali se kreće toliko brzo u stranu da je stalno promašuje.

Pravilo: svako telo privlači svako drugo. Što je veća masa, jače privlači; što je dalje, slabije.

Važna razlika:
• MASA je koliko materije imaš. Ista je svuda.
• TEŽINA je sila kojom te gravitacija vuče. Na Mesecu si šest puta lakši, a masa ti je ista.

Galilej je pre Njutna pokazao da sva tela padaju jednako brzo, bez obzira na težinu — samo ih vazduh razlikuje. Astronaut je to 1971. pokazao na Mesecu: čekić i pero su pali zajedno.`,
pr:{p:'Koja je razlika između mase i težine?', o:['Nema razlike, to je isto','Masa je količina materije, a težina sila kojom te gravitacija vuče','Težina je ista svuda, masa se menja'], t:1, z:'Na Mesecu ti je masa ista, a težina šest puta manja — jer je tamo gravitacija slabija.'}},
{n:'Četiri osnovne sile', t:`Sve što se u svemiru dešava svodi se na samo četiri sile:

1. GRAVITACIJA — najslabija, ali deluje na ogromne daljine. Drži planete, zvezde i galaksije.
2. ELEKTROMAGNETNA — drži atome i molekule zajedno. Ona je struja, magnet, svetlost, hemija. I zato ne propadneš kroz stolicu: elektroni stolice i tvoji se odbijaju.
3. JAKA NUKLEARNA — najjača, ali deluje samo unutar jezgra. Drži protone zajedno, iako se oni kao isto naelektrisani odbijaju.
4. SLABA NUKLEARNA — zadužena za radioaktivnost i omogućava fuziju u Suncu.

Svaki pokret, svaki dodir, svaka misao u tvojoj glavi — neka kombinacija ove četiri.`,
pr:{p:'Zašto ne propadneš kroz stolicu?', o:['Zbog gravitacije','Zbog elektromagnetne sile između atoma','Zbog jake nuklearne sile'], t:1, z:'Elektroni u atomima stolice i u tvom telu se odbijaju — to je elektromagnetna sila.'}},
{n:'Energija se ne gubi', t:`ENERGIJA je sposobnost da se nešto uradi — pokrene, zagreje, osvetli.

Javlja se u mnogo oblika: energija kretanja, položaja (kamen na litici), toplote, hemijska (u hrani, benzinu, bateriji), električna, nuklearna.

Jedan od najčvršćih zakona u celoj nauci: ENERGIJA SE NE STVARA I NE NESTAJE — SAMO PRELAZI IZ JEDNOG OBLIKA U DRUGI.

• Benzin (hemijska) → kretanje auta + toplota motora.
• Kad zakočiš, kretanje ne nestaje — pređe u toplotu kočnica.
• Hrana (hemijska) → toplota tvog tela i rad mišića. Kalorija je samo jedinica za energiju.

Kad neko nudi mašinu koja daje više energije nego što troši — znaš da laže. Zakon to ne dozvoljava.`,
pr:{p:'Gde ode energija kretanja kad auto zakoči?', o:['Nestane','Pređe u toplotu kočnica','Vrati se u rezervoar kao benzin'], t:1, z:'Energija ne nestaje — kretanje se trenjem pretvori u toplotu kočnica i točkova.'}},
{n:'Entropija: zašto vreme ide napred', t:`Ima još jedan zakon, možda najdublji: DRUGI ZAKON TERMODINAMIKE. Kaže da NERED (entropija) sam od sebe uvek raste.

• Topla kafa se hladi. Nikad se sama ne zagreje.
• Čaša se razbije u komade. Komadi se nikad sami ne sastave.
• Soba se sama razbaca, a nikad se sama ne sredi.

Zato vreme ima smer. Zato pamtimo prošlost, a ne budućnost. Zato nijedna mašina nije savršena — uvek se nešto izgubi kao toplota.

A život? Život je ostrvo reda: od haosa pravi ćelije, tela, mozgove. Ali ne krši zakon — plaća taj red energijom koja stiže sa Sunca, i iza sebe ostavlja još više nereda. Svako od nas je kratak, skup, lep izuzetak.`,
pr:{p:'Šta kaže drugi zakon termodinamike?', o:['Energija na kraju nestaje','Nered sam od sebe raste','Sve se vremenom vraća u početno stanje'], t:1, z:'Entropija (nered) u zatvorenom sistemu raste. Zato se kafa hladi, a vreme ide samo napred.'}}
],
kljucno:['Njutnova tri zakona: inercija, sila = masa × ubrzanje, akcija i reakcija.','Gravitacija je ista sila za jabuku i Mesec; masa nije isto što i težina.','Četiri osnovne sile: gravitacija, elektromagnetna, jaka i slaba nuklearna.','Energija se ne stvara i ne nestaje — samo menja oblik.','Nered (entropija) sam raste — zato vreme ima smer; život je ostrvo reda plaćeno energijom Sunca.'],
kartice:[
{p:'Šta je inercija?', o:'Telo nastavlja da miruje ili da se kreće dok ga sila ne promeni.'},
{p:'Masa ili težina — šta se menja na Mesecu?', o:'Težina. Masa ostaje ista.'},
{p:'Koje su četiri osnovne sile?', o:'Gravitacija, elektromagnetna, jaka nuklearna, slaba nuklearna.'},
{p:'Šta kaže zakon održanja energije?', o:'Energija se ne stvara i ne nestaje, samo prelazi iz oblika u oblik.'},
{p:'Zašto se topla kafa hladi, a nikad sama ne zagreje?', o:'Drugi zakon termodinamike — nered (entropija) sam od sebe raste.'}
],
razgovor:['Sve teži neredu, a život je kratko ostrvo reda. Čitaš li to kao tužnu ili kao lepu činjenicu — i zašto?','Objasni inerciju na nekom primeru iz svog dana.']},

{id:'1-5', naslov:'Svetlost, relativnost i kvanti — samo ideja',
kuka:{p:'Šta misliš: da li vreme teče isto brzo za svakoga, svuda?', o:['Da, sat je sat','Ne — zavisi od brzine i gravitacije','Teče isto, samo ga ljudi različito osećaju'], t:1},
delovi:[
{n:'Šta je svetlost', t:`Svetlost je ELEKTROMAGNETNI TALAS — talas električnog i magnetnog polja koji putuje kroz prostor, i kroz prazan.

Ono što oči vide je samo mali deo jednog ogromnog spektra. Isti talas, različite dužine:
radio → mikrotalasi → infracrveno (toplota) → VIDLJIVA SVETLOST → ultraljubičasto → rendgen → gama zraci.

Radio u autu, mikrotalasna, daljinski upravljač, rendgen kod lekara — sve je to „svetlost" koju ne vidimo.

Boje su različite talasne dužine. Bela svetlost je mešavina svih boja — Njutn je to pokazao prizmom, a duga je isto to, samo na kapima kiše.

Brzina svetlosti je oko 300.000 km u sekundi. Ništa ne ide brže. To je granica brzine samog svemira.`,
pr:{p:'Radio talasi i svetlost su…', o:['Potpuno različite stvari','Ista vrsta talasa, samo različite dužine','Radio talasi su vrsta zvuka'], t:1, z:'I radio i vidljiva svetlost su elektromagnetni talasi — razlikuju se samo po talasnoj dužini.'}},
{n:'Ajnštajn I: vreme nije apsolutno', t:`1905. Albert Ajnštajn, službenik u zavodu za patente, uzeo je jednu neobičnu činjenicu ozbiljno: brzina svetlosti je ISTA za svakoga, bez obzira koliko se brzo kreće.

Ako je brzina svetlosti fiksna, nešto drugo mora da popusti — i popusti VREME. Što se brže krećeš, tvoj sat kuca sporije u odnosu na nekoga ko miruje. Pri običnim brzinama razlika je sićušna, ali je izmerena: atomski satovi nošeni avionom oko sveta pokazali su razliku tačno kakvu teorija predviđa.

Iz iste teorije izlazi najpoznatija formula na svetu: E = mc². Masa i energija su dva lica iste stvari, a c² je ogroman broj — pa i mrvica mase krije strašnu energiju. Tako sija Sunce. Tako radi i atomska bomba.`,
pr:{p:'Šta znači E = mc²?', o:['Energija putuje brže od mase','Masa se može pretvoriti u ogromnu količinu energije','Svetlost ima veliku masu'], t:1, z:'Masa i energija su isto; zato i mala masa, pretvorena, daje ogromnu energiju — kao u Suncu.'}},
{n:'Ajnštajn II: gravitacija je krivina', t:`1915. Ajnštajn ide dalje: gravitacija nije sila koja „vuče". Masa KRIVI PROSTOR I VREME oko sebe, a tela se kreću po tim krivinama.

Slika: na zategnutu trambulinu staviš tešku kuglu i ona napravi udubljenje. Kliker koji pustiš kotrlja se oko kugle — ne zato što ga ona vuče, nego zato što je površina zakrivljena.

Posledica: gravitacija usporava vreme. Što si bliže velikoj masi, sat sporije kuca.

Zvuči kao filozofija, ali ti to nosiš u džepu. GPS sateliti su visoko, gde je gravitacija slabija, i brzo se kreću. Njihovi satovi zato idu drugačije nego na Zemlji. Da inženjeri to ne ispravljaju po Ajnštajnu, navigacija u telefonu bi grešila oko 10 kilometara svakog dana.`,
pr:{p:'Zašto GPS mora da računa sa Ajnštajnovom teorijom?', o:['Zbog vremenskih zona na Zemlji','Satovi na satelitima kucaju drugačije nego na Zemlji','Zbog oblaka koji ometaju signal'], t:1, z:'Zbog brzine i slabije gravitacije gore, satelitski satovi idu drugačije; bez ispravke greška bi rasla oko 10 km dnevno.'}},
{n:'Kvanti: na dnu nema sigurnosti', t:`Kad se spustiš do atoma i manje, svet počinje da se ponaša čudno. Tu važi KVANTNA MEHANIKA (razvijena 1900–1930: Plank, Bor, Hajzenberg, Šredinger).

Tri ideje, samo da znaš da postoje:
• Energija ne teče glatko nego dolazi u PAKETIĆIMA — kvantima.
• Svetlost je i talas i čestica (foton), zavisno od toga kako je meriš.
• Čestica nema tačno određen položaj dok je ne izmeriš. Teorija ne kaže „gde je", nego „sa kojom verovatnoćom je gde".

Čudno je, i Ajnštajn ju je mrzeo („Bog ne baca kocku"). Ali to je najtačnije proverena teorija u istoriji. Na njoj rade tranzistori, laseri, LED sijalice, ekran i čip u telefonu iz kog ovo čitaš.

Fejnman: „Mislim da mogu slobodno da kažem da niko ne razume kvantnu mehaniku."`,
pr:{p:'Šta važi u kvantnom svetu?', o:['Sve je potpuno predvidljivo, samo je sitno','Možemo znati samo verovatnoće','To je čista teorija bez ikakve primene'], t:1, z:'Kvantna mehanika daje verovatnoće, ne izvesnosti — a ipak na njoj radi sva savremena elektronika.'}},
{n:'Velika zagonetka i kraj oblasti', t:`Fizika danas ima dve savršene teorije koje se ne slažu:
• RELATIVNOST savršeno opisuje veliko — planete, zvezde, galaksije, gravitaciju.
• KVANTNA MEHANIKA savršeno opisuje malo — atome i čestice.

Gde se veliko i malo sretnu — u crnoj rupi ili u prvom trenutku Velikog praska — one daju besmislene odgovore. „Teoriju svega" koja bi ih spojila fizičari traže već sto godina. Ko je nađe, ulazi u istoriju odmah pored Njutna i Ajnštajna.

Sad imaš kostur cele oblasti:
svemir počinje Velikim praskom → zvezde kuvaju elemente → od elemenata su atomi i sve stvari → sve pokreću četiri sile i energija koja se ne gubi → a na dnu svega su svetlost, zakrivljeno vreme i kvantna nesigurnost.

Sledeće: kako je od tog zvezdanog praha nastala jedna planeta — Zemlja.`,
pr:{p:'Koji je najveći otvoreni problem fizike?', o:['Da li gravitacija postoji','Kako spojiti relativnost i kvantnu mehaniku','Kolika je tačno brzina svetlosti'], t:1, z:'Obe teorije rade savršeno svaka u svom svetu, ali se ne slažu međusobno — „teorija svega" se još traži.'}}
],
kljucno:['Svetlost je elektromagnetni talas; vidljivo je mali deo spektra; ništa nije brže od nje.','Specijalna relativnost: brzina svetlosti je ista za sve, pa vreme zavisi od brzine; E = mc².','Opšta relativnost: masa krivi prostor i vreme; gravitacija usporava vreme (GPS to mora da ispravlja).','Kvantna mehanika: energija u paketićima, samo verovatnoće — a na njoj radi elektronika.','Relativnost i kvanti se ne slažu; teorija svega se još traži.'],
kartice:[
{p:'Šta je zajedničko radio talasima, svetlosti i rendgenu?', o:'Svi su elektromagnetni talasi, samo različitih dužina.'},
{p:'Šta znači E = mc²?', o:'Masa i energija su isto; mala masa krije ogromnu energiju.'},
{p:'Kako Ajnštajn objašnjava gravitaciju?', o:'Masa krivi prostor i vreme, a tela se kreću po tim krivinama.'},
{p:'Šta kvantna mehanika kaže o položaju čestice?', o:'Daje samo verovatnoće dok se čestica ne izmeri.'},
{p:'Koje dve teorije fizika ne ume da spoji?', o:'Opštu relativnost (veliko) i kvantnu mehaniku (malo).'}
],
razgovor:['Kvanti kažu da na dnu stvarnosti nema sigurnosti, samo verovatnoće. Da li te to plaši ili oslobađa?','Objasni nekome, bez formula, zašto sat na GPS satelitu ne ide isto kao sat na zemlji.']}
]},

{id:'2', naziv:'Zemlja', ikona:'🌍', era:'pre 4,6 mlrd god.', lekcije:[
{id:'2-1', naslov:'Kako je nastala Zemlja i šta je u njoj',
kuka:{p:'Koliko je stara planeta Zemlja?', o:['Oko 10.000 godina','Oko 4,5 milijardi godina','Oko 13,8 milijardi godina'], t:1},
delovi:[
{n:'Rođenje od prašine', t:`Pre oko 4,5 milijardi godina oko mladog Sunca kružio je disk gasa i prašine — ostaci starih zvezda iz prošle oblasti.

Zrnca su se lepila u grudvice, grudvice u kamenje, kamenje u tela velika kilometrima. Ta tela su se sudarala i spajala. Svaki sudar je oslobađao toplotu, pa je mlada Zemlja bila užarena, rastopljena kugla, bombardovana sa svih strana.

Kako znamo koliko je stara? Neki elementi se raspadaju stalnom brzinom — uran polako prelazi u olovo, kao pesak u peščanom satu. Kad izmeriš koliko je urana ostalo, a koliko olova nastalo, znaš koliko je sat radio. Najstariji meteoriti (ostaci istog diska) su stari oko 4,57 milijardi godina; najstariji zrnci minerala na Zemlji, nađeni u Australiji, oko 4,4 milijarde.`,
pr:{p:'Kako znamo koliko je Zemlja stara?', o:['Po brzini radioaktivnog raspada u stenama i meteoritima','Po broju slojeva zemlje u dubokom bunaru','Iz najstarijih zapisa starih naroda'], t:0, z:'Radioaktivni elementi (npr. uran → olovo) raspadaju se stalnom brzinom, pa rade kao sat u steni.'}},
{n:'Sudar koji je napravio Mesec', t:`Ubrzo posle nastanka, Zemlja je doživela najveći udarac u svojoj istoriji. Telo veličine Marsa (naučnici ga zovu Teja) udarilo je u nju iskosa.

Deo Zemlje i Teje rasprsnuo se u svemir, oblak se okretao oko Zemlje i za kratko vreme slepio u — MESEC. Zato je Mesec po sastavu skoro kao Zemljin omotač.

Mesec nije ukras:
• Stabilizuje nagib Zemljine ose, pa su godišnja doba stabilna milionima godina.
• Pravi plimu i oseku.
• Polako se udaljava — oko 3,8 cm godišnje (izmereno laserom odbijenim od ogledala koja su ostavili astronauti).`,
pr:{p:'Kako je, najverovatnije, nastao Mesec?', o:['Zemlja ga je uhvatila dok je prolazio','Od materijala izbačenog u sudaru Zemlje i tela veličine Marsa','Nastao je zajedno sa Suncem, pa ga je Zemlja privukla'], t:1, z:'Sudar sa „Tejom" izbacio je materijal koji se slepio u Mesec — zato liči na Zemljin omotač.'}},
{n:'Šta je ispod nas', t:`Zemlja je kao breskva, u slojevima:

• KORA — tanka, 5 do 70 km. Prema celoj Zemlji tanja je od ljuske na jabuci. Na njoj je sve što znamo.
• PLAŠT — oko 2.900 km vrele stene. Čvrst je, ali kroz milione godina teče, kao vosak ili asfalt na suncu.
• SPOLJAŠNJE JEZGRO — tečno gvožđe i nikl.
• UNUTRAŠNJE JEZGRO — čvrsto gvožđe, vrelo oko 5.000 °C, skoro kao površina Sunca. Čvrsto je samo zato što je pritisak strašan.

Najdublja rupa koju je čovek iskopao ima oko 12 km — ni kroz koru nismo prošli. Kako onda znamo? Po ZEMLJOTRESIMA. Njihovi talasi prolaze kroz celu planetu, menjaju brzinu na granicama slojeva, a jedna vrsta talasa uopšte ne prolazi kroz tečnost. Tako je otkriveno da je spoljašnje jezgro tečno — kao ultrazvuk planete.`,
pr:{p:'Kako znamo šta je u središtu Zemlje?', o:['Iskopali smo bušotinu do jezgra','Po tome kako zemljotresni talasi putuju kroz unutrašnjost','Po lavi koja izbija iz vulkana'], t:1, z:'Najdublja bušotina ima samo oko 12 km. Talasi zemljotresa su „ultrazvuk" planete — menjaju se na granicama slojeva.'}},
{n:'Nevidljivi štit', t:`Tečno gvožđe u spoljašnjem jezgru se stalno meša i okreće. Pokretni metal stvara MAGNETNO POLJE — Zemlja je ogroman magnet. Zato kompas pokazuje sever.

To polje je štit. Sa Sunca stalno duva „Sunčev vetar" — mlaz naelektrisanih čestica. Magnetno polje ga skreće oko planete. Gde čestice ipak uđu, kod polova, nebo svetli: POLARNA SVETLOST.

Bez štita bi Sunčev vetar vremenom oduvao atmosferu. Mars je to izgubio: jezgro mu se ohladilo, polje nestalo, atmosfera se proredila, voda nestala.

Zanimljivost: polovi se povremeno OBRNU — sever postane jug. Poslednji put pre oko 780.000 godina. Znamo to iz stena: dok se lava hladi, sitni magnetni minerali u njoj se okrenu po polju i tako „zamrznu" pravac.`,
pr:{p:'Šta stvara Zemljino magnetno polje?', o:['Kretanje tečnog gvožđa u spoljašnjem jezgru','Gvozdena ruda u Zemljinoj kori','Privlačenje Meseca'], t:0, z:'Pokretni rastopljeni metal u jezgru radi kao dinamo i pravi magnetno polje.'}},
{n:'Planeta koja se menja', t:`Zemlja nije uvek bila ovakva. Ona nije stvar, nego proces.

• Prvo: užarena kugla bez okeana.
• Kad se ohladila, vodena para je pala kao kiše koje su trajale vekovima — nastali su okeani (deo vode su doneli i asteroidi).
• Rana atmosfera nije imala kiseonika. Kiseonik su napravili sićušni mikroorganizmi (cijanobakterije) fotosintezom. Pre oko 2,4 milijarde godina kiseonika je naglo postalo dovoljno da promeni celu planetu.
• Bilo je perioda kad je Zemlja verovatno bila skoro sva pod ledom („Zemlja grudva snega"), i perioda kad je bila toplija nego danas.

U 18. veku škotski geolog Haton je gledao slojeve stena i shvatio koliko sporo nastaju. Napisao je o vremenu Zemlje: „nema traga početku, nema izgleda kraju." Rođen je pojam DUBOKO VREME — vreme toliko dugo da ljudski život u njemu nije ni treptaj.`,
pr:{p:'Odakle kiseonik u vazduhu?', o:['Bio je u atmosferi od samog početka','Proizveli su ga mikroorganizmi fotosintezom','Izbacili su ga vulkani'], t:1, z:'Rana atmosfera nije imala kiseonika; napravile su ga cijanobakterije, a pre oko 2,4 milijarde godina ga je postalo dovoljno da promeni planetu.'}}
],
kljucno:['Zemlja je stara oko 4,5 milijardi godina; starost znamo po radioaktivnom „satu" u stenama.','Mesec je nastao iz sudara Zemlje sa telom veličine Marsa.','Slojevi: kora (tanka), plašt, tečno spoljašnje i čvrsto unutrašnje jezgro — znamo ih po zemljotresnim talasima.','Tečno gvožđe u jezgru pravi magnetno polje koje štiti atmosferu.','Kiseonik su napravili mikroorganizmi; Zemlja je proces koji traje u dubokom vremenu.'],
kartice:[
{p:'Koliko je stara Zemlja i kako to znamo?', o:'Oko 4,5 milijardi godina — po radioaktivnom raspadu (npr. uran → olovo).'},
{p:'Kako je nastao Mesec?', o:'Iz materijala izbačenog u sudaru Zemlje i tela veličine Marsa.'},
{p:'Koji su slojevi Zemlje?', o:'Kora, plašt, spoljašnje (tečno) i unutrašnje (čvrsto) jezgro.'},
{p:'Čemu služi Zemljino magnetno polje?', o:'Štiti od Sunčevog vetra i čuva atmosferu; pravi ga tečno gvožđe u jezgru.'},
{p:'Ko je napravio kiseonik u vazduhu?', o:'Mikroorganizmi (cijanobakterije) fotosintezom.'}
],
razgovor:['Zemlja je proces, ne stvar. Šta se u tvom životu menja tako sporo da to ne primećuješ dok ne pogledaš unazad?','Objasni nekome kako znamo šta je u Zemljinom jezgru, a da niko nije kopao do njega.']},

{id:'2-2', naslov:'Tektonske ploče — kontinenti, planine, zemljotresi, vulkani',
kuka:{p:'Da li se kontinenti pomeraju?', o:['Ne, stoje gde su oduvek','Da, nekoliko centimetara godišnje','Da, nekoliko kilometara godišnje'], t:1},
delovi:[
{n:'Ideja kojoj su se smejali', t:`1912. nemački meteorolog Alfred Vegener je primetio ono što svako vidi na karti: obale Južne Amerike i Afrike se uklapaju kao delovi slagalice.

Ali nije stao na obliku. Na obe strane okeana našao je iste stene i iste fosile — čak i fosile malog gmizavca koji nikako nije mogao da prepliva okean. Zaključio je: kontinenti su nekad bili jedan, PANGEA, i od tada se razmiču.

Geolozi su mu se smejali. Ne zato što nije imao dokaze, nego zato što nije umeo da objasni ŠTA pokreće kontinente. Umro je 1930. na Grenlandu, na ekspediciji, neshvaćen.

Potvrda je stigla tek 1960-ih, kad su izmerili dno okeana i videli da tamo nastaje nova kora. Vegener je bio u pravu pola veka pre ostalih.`,
pr:{p:'Zašto Vegenerova ideja dugo nije prihvaćena?', o:['Nije imao nijedan dokaz','Nije umeo da objasni šta pokreće kontinente','Bio je protiv Darvinove teorije'], t:1, z:'Imao je fosile, stene i oblik obala, ali ne i mehanizam. Mehanizam (širenje okeanskog dna) otkriven je tek 1960-ih.'}},
{n:'Ploče koje plutaju', t:`Danas znamo: Zemljina kora sa gornjim delom plašta nije jedan komad, nego je ispucala na oko 15 velikih TEKTONSKIH PLOČA. One leže na mekšem, vrelom plaštu i polako se pomeraju.

Koliko brzo? Od 2 do 10 centimetara godišnje — otprilike brzinom kojom ti rastu nokti. Malo za jedan život, ogromno za sto miliona godina.

Šta ih pokreće? Toplota iz unutrašnjosti Zemlje. Plašt se kreće u ogromnim, sporim strujama, kao voda koja ključa u šerpi, a hladne, teške ploče na nekim mestima tonu nazad u dubinu i vuku ostatak za sobom.`,
pr:{p:'Kojom brzinom se kreću tektonske ploče?', o:['Brzinom rasta noktiju — nekoliko cm godišnje','Nekoliko metara godišnje','Toliko sporo da se ne može izmeriti'], t:0, z:'Od 2 do 10 cm godišnje — sateliti to danas mere direktno.'}},
{n:'Gde se ploče sreću', t:`Sve zanimljivo se dešava na ivicama ploča. Tri vrste granica:

1. RAZILAŽENJE. Ploče se razmiču, odozdo izlazi magma i pravi novu koru. Usred Atlantika ide ogroman podvodni planinski venac. Island leži baš na njemu — tamo možeš stajati jednom nogom na severnoameričkoj, a drugom na evroazijskoj ploči.

2. SUDAR. Kad se okeanska ploča sudari sa kontinentalnom, teža okeanska podvlači se pod nju i topi — iznad niču vulkani (Ande). Kad se sudare dva kontinenta, nijedan ne tone, pa se zgužvaju u planine. Indija je udarila u Aziju i podigla HIMALAJE — i Mont Everest i danas raste po nekoliko milimetara godišnje.

3. KLIZANJE. Ploče se taru jedna o drugu bočno. Najpoznatiji primer je rased San Andreas u Kaliforniji.`,
pr:{p:'Kako su nastali Himalaji?', o:['Iz jednog ogromnog vulkana','Sudarom indijske i evroazijske ploče','Erozijom jedne visoravni'], t:1, z:'Dva kontinenta su se sudarila; nijedan nije potonuo, pa se kora zgužvala u najviše planine na svetu.'}},
{n:'Zemljotresi', t:`Ploče se ne kreću glatko. Na granicama se zakače, a napon raste godinama, decenijama, vekovima — kao kad saviješ štap. Kad stena popusti, sva energija se oslobodi odjednom: ZEMLJOTRES.

Mesto pucanja u dubini je ŽARIŠTE, a tačka na površini iznad njega EPICENTAR.

Jačina (magnituda) je skala koja raste u skokovima: svaki ceo broj više znači oko 32 puta više energije. Zemljotres jačine 7 nije „malo jači" od šestice — oslobađa oko 32 puta više energije.

Balkan se trese jer afrička ploča, sa manjom jadranskom pločom ispred sebe, gura ka Evroaziji. Zato su jaki zemljotresi pogađali i Skoplje (1963), i Crnu Goru (1979), a Kraljevo 2010.

Zemljotres se ne može tačno predvideti — ni dan, ni godina. Ali se zna gde je opasno, i može se graditi tako da kuće izdrže.`,
pr:{p:'Zemljotres jačine 7 u odnosu na zemljotres jačine 6 oslobađa…', o:['Duplo više energije','Oko 32 puta više energije','Samo oko 10% više energije'], t:1, z:'Skala raste u skokovima: svaki ceo broj je oko 32 puta više energije.'}},
{n:'Vulkani i kruženje stena', t:`Vulkani niču uglavnom na granicama ploča, ali i iznad „vrućih tačaka" gde iz dubine stalno izbija vrelo — tako su nastala Havajska ostrva.

Velike erupcije menjaju i klimu. 1815. eksplodirao je vulkan Tambora u Indoneziji. Pepeo i gasovi u visokoj atmosferi zaklonili su Sunce, pa je 1816. u Evropi i Americi ostala upamćena kao „GODINA BEZ LETA" — sneg u junu, propali usevi, glad.

Stene takođe kruže, samo mnogo sporije:
lava se ohladi u stenu → kiša, led i vetar je usitne u pesak i mulj → taloži se u slojeve i stvrdne → pritisak i toplota je pretvore u novu stenu → potone i istopi se → izbije kao lava.

I kontinenti će se ponovo spojiti: za oko 200–250 miliona godina, nova Pangea.`,
pr:{p:'Šta je bila „godina bez leta" 1816?', o:['Godina posle velikog rata','Posledica erupcije vulkana Tambora koja je ohladila klimu','Godina kad je Zemlja bila najdalje od Sunca'], t:1, z:'Pepeo i gasovi iz Tambore (1815) zaklonili su Sunce — u Evropi i Americi leto 1816. skoro nije ni došlo.'}}
],
kljucno:['Kontinenti se pomeraju — Vegener je bio u pravu, dokaz je stigao tek 1960-ih.','Kora je ispucala na oko 15 ploča koje se kreću nekoliko cm godišnje.','Na granicama: razilaženje (nova kora), sudar (planine i vulkani), klizanje.','Zemljotresi su naglo oslobađanje napona; svaki stepen jačine je oko 32 puta više energije.','Vulkani menjaju i klimu; stene kruže, a kontinenti će se opet spojiti.'],
kartice:[
{p:'Šta je Pangea?', o:'Nekadašnji jedinstveni superkontinent od kog su nastali današnji kontinenti.'},
{p:'Koliko brzo se kreću tektonske ploče?', o:'Nekoliko cm godišnje — kao rast noktiju.'},
{p:'Kako nastaju planine kao Himalaji?', o:'Sudarom dve kontinentalne ploče.'},
{p:'Koliko više energije ima zemljotres jačine 7 od šestice?', o:'Oko 32 puta više.'},
{p:'Zašto Balkan ima zemljotrese?', o:'Afrička (i jadranska) ploča gura ka Evroaziji.'}
],
razgovor:['Ploče se kreću brzinom noktiju, a podižu Himalaje. Gde u životu vidiš da male, stalne stvari prave velike promene?','Vegener je bio u pravu, a nisu mu verovali jer nije imao mehanizam. Da li je bilo pošteno ne verovati mu? Zašto?']},

{id:'2-3', naslov:'Atmosfera i okeani — vreme nije isto što i klima',
kuka:{p:'Koja je razlika između vremena i klime?', o:['Nema razlike, to su dve reči za isto','Vreme je stanje danas, klima je prosek kroz decenije','Klima se odnosi samo na temperaturu'], t:1},
delovi:[
{n:'Tanak pokrivač', t:`Atmosfera izgleda beskrajno kad gledaš u nebo, ali je zapravo tanka. Skoro sav vazduh je u donjih tridesetak kilometara — manje od razdaljine Beograd–Smederevo, samo uvis.

Sastav vazduha:
• AZOT — oko 78%
• KISEONIK — oko 21%
• argon — skoro 1%
• UGLJEN-DIOKSID — samo oko 0,04%. Malo, ali ćemo videti da je presudan.

Slojevi:
• TROPOSFERA, donjih 10–15 km: tu je sve vreme — oblaci, kiša, vetar.
• STRATOSFERA iznad nje: tu je OZONSKI OMOTAČ, koji upija veći deo opasnog ultraljubičastog zračenja sa Sunca.`,
pr:{p:'Kog gasa ima najviše u vazduhu?', o:['Kiseonika','Azota','Ugljen-dioksida'], t:1, z:'Azota je oko 78%, kiseonika oko 21%, a ugljen-dioksida svega oko 0,04%.'}},
{n:'Prirodna staklena bašta', t:`Sunčeva svetlost prolazi kroz vazduh i greje tlo i more. Zagrejana površina tu toplotu zrači nazad, ali kao nevidljivo infracrveno zračenje.

Neki gasovi — VODENA PARA, UGLJEN-DIOKSID, METAN — propuštaju svetlost, ali deo infracrvene toplote hvataju i vraćaju dole. Kao ćebe. To je EFEKAT STAKLENE BAŠTE.

I on je dobar! Bez njega bi prosečna temperatura na Zemlji bila oko −18 °C — sve pod ledom. Sa njim je oko +15 °C.

Problem nije efekat, nego koliko je ćebe debelo. Venera ima atmosferu skoro od samog ugljen-dioksida i na površini joj je oko 460 °C — toplija je od Merkura, iako je dalje od Sunca. O tome kako mi podebljavamo naše ćebe — sledeća lekcija.`,
pr:{p:'Kakva bi bila Zemlja bez prirodnog efekta staklene bašte?', o:['Toplija nego danas','Zaleđena — prosečno oko −18 °C','Ista kao danas'], t:1, z:'Gasovi kao vodena para i CO₂ zadržavaju toplotu; bez njih bi prosek bio oko −18 °C umesto +15 °C.'}},
{n:'Šta pokreće vreme', t:`Sunce ne greje Zemlju ravnomerno: ekvator dobija mnogo više nego polovi. Topao vazduh je lakši i diže se, hladan se spušta i struji na njegovo mesto — to je VETAR. Okretanje Zemlje skreće te struje, pa se vazduh vrti u ogromne vrtloge: cikloni (kiša) i anticikloni (vedro).

Voda je drugi motor: isparava, diže se, hladi, pretvara u kapljice — OBLAK — i pada kao kiša ili sneg.

A GODIŠNJA DOBA? Nisu zato što smo leti bliže Suncu. Zapravo, Zemlja je Suncu najbliža početkom januara! Godišnja doba postoje zato što je Zemljina osa NAGNUTA oko 23,5°. Leti je naša polulopta nagnuta ka Suncu — zraci padaju strmije i dan je duži. Zimi obrnuto. Zato je u Australiji Božić leti.`,
pr:{p:'Zašto postoje godišnja doba?', o:['Jer je Zemlja leti bliže Suncu','Zbog nagiba Zemljine ose','Zbog Meseca'], t:1, z:'Nagib ose (oko 23,5°) menja koliko strmo padaju zraci i koliko traje dan. Zemlja je Suncu najbliža baš u januaru.'}},
{n:'Okeani: toplotni akumulator', t:`Okeani pokrivaju oko 71% Zemlje i najveći su regulator klime.

• Upijaju ogromnu toplotu i dobar deo ugljen-dioksida koji pustimo u vazduh.
• Kreću se: morske struje rade kao pokretna traka koja nosi toplotu oko planete. GOLFSKA STRUJA nosi toplu vodu iz Meksičkog zaliva ka Evropi — zato je London mnogo topliji od mesta u Kanadi na istoj geografskoj širini.
• Na severu Atlantika voda se hladi, postaje teža (hladna je i slana), tone i kreće dubinama ka jugu. Ceo krug te duboke cirkulacije traje oko hiljadu godina.
• Sitni morski organizmi (fitoplankton) prave oko polovine kiseonika na planeti. Svaki drugi udah duguješ moru.`,
pr:{p:'Zašto je zapadna Evropa toplija od Kanade na istoj geografskoj širini?', o:['Zbog Golfske struje koja donosi toplu vodu','Zbog zaštite planina','Zbog veće nadmorske visine'], t:0, z:'Golfska struja nosi toplu vodu iz tropskih krajeva preko Atlantika ka Evropi.'}},
{n:'Vreme nije klima', t:`Ovo je jedna od najkorisnijih razlika u celoj školi.

• VREME je šta se dešava danas i ove nedelje: pada kiša, 12 °C, duva košava.
• KLIMA je prosek vremena kroz najmanje 30 godina: kakva je ovde obično zima, koliko obično padne kiše.

Kratko: „Klima je ono što očekuješ, a vreme je ono što dobiješ."

Zato jedna hladna zima ne dokazuje da nema zagrevanja, i jedan vreo dan ne dokazuje da ga ima. Klima se vidi tek u decenijama.

I zašto prognoza ne vredi posle desetak dana, a klimu ipak možemo da predvidimo? Atmosfera je HAOTIČNA: sitna razlika danas preraste u ogromnu za dve nedelje (meteorolog Lorenc je to nazvao „efekat leptira"). Ali to je kao kocka: ne znaš koji broj će pasti u sledećem bacanju, a znaš prosek iz hiljadu bacanja.`,
pr:{p:'Ova zima je bila neuobičajeno hladna. Šta to govori o klimi?', o:['Da nema globalnog zagrevanja','Skoro ništa — klima je prosek kroz decenije','Da dolazi novo ledeno doba'], t:1, z:'Jedna sezona je vreme, ne klima. Klima se vidi tek u prosecima kroz 30 i više godina.'}}
],
kljucno:['Atmosfera je tanka: azot 78%, kiseonik 21%, CO₂ oko 0,04%; ozon nas štiti od UV zračenja.','Prirodni efekat staklene bašte drži Zemlju na +15 °C umesto −18 °C.','Vreme pokreću nejednako grejanje i voda; godišnja doba su zbog nagiba ose.','Okeani čuvaju toplotu i CO₂, nose toplotu strujama i daju oko pola kiseonika.','Vreme je danas, klima je prosek decenija; prognoza je ograničena jer je atmosfera haotična.'],
kartice:[
{p:'Koja je razlika između vremena i klime?', o:'Vreme je stanje danas; klima je prosek kroz 30+ godina.'},
{p:'Šta je efekat staklene bašte?', o:'Gasovi (vodena para, CO₂, metan) zadržavaju deo toplote koju Zemlja zrači.'},
{p:'Zašto postoje godišnja doba?', o:'Zbog nagiba Zemljine ose od oko 23,5°.'},
{p:'Šta radi Golfska struja?', o:'Nosi toplu vodu ka Evropi i greje je.'},
{p:'Ko pravi oko polovine kiseonika na Zemlji?', o:'Fitoplankton u okeanima.'}
],
razgovor:['„Klima je ono što očekuješ, vreme je ono što dobiješ." Da li to važi i za ljude — gde?','Objasni nekome zašto postoje godišnja doba, a da ne kažeš „bliže Suncu".']},

{id:'2-4', naslov:'Klimatske promene — šta je dokazano, a šta sporno',
kuka:{p:'Koliko se Zemlja zagrejala od kraja 19. veka?', o:['Oko 0,1 °C','Oko 1,2–1,3 °C','Oko 5 °C'], t:1},
delovi:[
{n:'Šta je izmereno', t:`Krenimo od onoga što se ne tumači, nego meri:

• TEMPERATURA. Termometri na kopnu i moru, sateliti i plutače u okeanima pokazuju isto: svet je danas za oko 1,2–1,3 °C topliji nego krajem 19. veka. 2024. je bila prva cela godina oko 1,5 °C iznad tog nivoa.
• UGLJEN-DIOKSID. Pre industrije vazduh je imao oko 280 delova na milion, danas oko 420. Na vulkanu Mauna Loa na Havajima meri se svakog dana od 1958. — ta kriva samo raste.
• LED I MORE. Glečeri se povlače skoro svuda, led na Arktiku leti je mnogo tanji, a nivo mora je od 1900. porastao oko 20 cm.
• EKSTREMI. Toplotni talasi su češći i jači.

Oko ovoga nema ozbiljne naučne rasprave. To su merenja.`,
pr:{p:'Koliko je ugljen-dioksida bilo u vazduhu pre industrije, a koliko danas?', o:['Oko 280, danas oko 420 delova na milion','Isto kao danas','Oko 1.000, danas manje'], t:0, z:'Sa oko 280 na oko 420 delova na milion — porast od blizu polovine, izmeren direktno.'}},
{n:'Kako znamo da smo to mi', t:`Da se Zemlja greje — izmereno je. Da smo uzrok mi — to se zaključuje, ali iz više nezavisnih tragova:

1. FIZIKA JE STARA. Džon Tindal je još 1859. u laboratoriji pokazao da CO₂ zadržava toplotu. Šveđanin Arenijus je 1896. izračunao da će spaljivanje uglja zagrejati planetu. To nije nova ideja.
2. POTPIS. Ugljenik iz uglja, nafte i gasa ima svoj hemijski otisak (drugačiji odnos „lakih" i „teških" atoma ugljenika). Taj otisak raste u vazduhu — višak CO₂ je iz fosilnih goriva.
3. NIJE SUNCE. Sateliti mere Sunce od kraja 1970-ih — nije postalo jače.
4. OBRAZAC. Donji sloj atmosfere se greje, a stratosfera iznad hladi. Tako izgleda deblje ćebe gasova, a ne jače Sunce (ono bi grejalo sve slojeve).`,
pr:{p:'Šta pokazuje da višak CO₂ u vazduhu dolazi od fosilnih goriva?', o:['Njegov hemijski potpis u vazduhu','Boja neba','To niko ne zna'], t:0, z:'Ugljenik iz fosilnih goriva ima prepoznatljiv odnos vrsta atoma, i baš taj otisak raste u vazduhu.'}},
{n:'„Klima se uvek menjala"', t:`To je tačno. Bilo je ledenih doba i toplijih perioda. Zemlja ulazi u ledena doba i izlazi iz njih zbog sporih promena svoje putanje oko Sunca, u ciklusima od oko 100.000 godina.

Ali dve stvari su sada drugačije:

1. BRZINA. Na izlazu iz poslednjeg ledenog doba temperatura je rasla nekoliko stepeni kroz hiljade godina. Sada se 1,2 °C desilo za oko 150 godina — desetinama puta brže.
2. UZROK. Za prirodne promene postoji prirodan uzrok. Sada su prirodni uzroci (Sunce, putanja, vulkani) provereni i ne objašnjavaju porast; CO₂ objašnjava.

Poređenje: šumski požari se dešavaju i prirodno, od munje. To ne znači da nijedan požar nije podmetnut. Pitanje je šta je izazvalo baš ovaj.`,
pr:{p:'„Klima se uvek menjala." Šta je tačan odgovor?', o:['Tačno, pa je i sadašnja promena prirodna','Tačno, ali je sadašnja promena mnogo brža i ima poznat uzrok','Netačno, klima se nikad nije menjala'], t:1, z:'Prirodne promene su postojale, ali su bile mnogo sporije; za sadašnju su prirodni uzroci provereni i ne objašnjavaju je.'}},
{n:'Šta je zaista sporno', t:`Pošteno je reći i gde se naučnici spore, i gde je neizvesnost stvarna:

• KOLIKO TAČNO. Koliko će se Zemlja zagrejati kad se CO₂ udvostruči? Najverovatnije između 2,5 i 4 °C. Gornja i donja granica su važne i nisu zakucane.
• PRELOMNE TAČKE. Da li i kada bi se ledeni pokrivač Grenlanda ili prašuma Amazona mogli „prelomiti" i nastaviti da se menjaju sami od sebe — tu je neizvesnost velika.
• LOKALNO. Koji region dobija sušu, a koji poplave — teže je predvideti nego globalni prosek.
• ŠTA RADITI I KO PLAĆA. Ovo je najveća rasprava, ali ona nije naučna nego politička i ekonomska: koliko brzo menjati energetiku, ko snosi troškove, bogate ili siromašne zemlje.

Česta greška u raspravama: kad je „rešenje sporno", ljudi kažu „nauka je sporna". To nisu iste stvari.`,
pr:{p:'Šta je najviše sporno u vezi sa klimatskim promenama?', o:['Da li se Zemlja uopšte greje','Šta tačno uraditi i ko to plaća','Da li CO₂ zadržava toplotu'], t:1, z:'Zagrevanje i fizika CO₂ su izmereni; najveći spor je politički i ekonomski — šta raditi i ko snosi troškove.'}},
{n:'Šta to znači ovde', t:`Evropa se greje brže od svetskog proseka, a Balkan to već oseća:

• toplotni talasi duži i češći,
• sušna leta koja seku useve i spuštaju reke,
• ali i jake kiše odjednom — poplave u maju 2014. bile su najgore u zabeleženoj istoriji Srbije.

Između „smak sveta" i „sve je izmišljeno" stoji dosadna, ali tačna sredina: to je STVARAN RIZIK KOJIM SE MOŽE UPRAVLJATI. Dva načina:
1. SMANJIVANJE — manje sagorevanja uglja, nafte i gasa (struja, grejanje, saobraćaj).
2. PRILAGOĐAVANJE — bolje upravljanje vodom, gradnja koja izdrži vrućinu, otpornije sorte u poljoprivredi.

Kao i kod zdravlja: ni panika ni poricanje ne leče, leče merenje i razumne odluke.`,
pr:{p:'Kako se Evropa greje u odnosu na svetski prosek?', o:['Sporije','Brže','Uopšte se ne greje'], t:1, z:'Evropa je kontinent koji se greje najbrže — zato su toplotni talasi i suše na Balkanu već primetni.'}}
],
kljucno:['Izmereno: zagrevanje oko 1,2–1,3 °C, CO₂ sa 280 na 420 ppm, led se topi, more raste.','Da smo uzrok mi: stara fizika CO₂, hemijski potpis fosilnih goriva, Sunce nije jače, obrazac slojeva.','Klima se i ranije menjala, ali mnogo sporije i sa prirodnim uzrokom.','Sporno je koliko tačno, prelomne tačke, lokalni uticaji — i najviše šta raditi i ko plaća.','Rizik kojim se upravlja: smanjivanje emisija i prilagođavanje.'],
kartice:[
{p:'Koliko se Zemlja zagrejala od kraja 19. veka?', o:'Oko 1,2–1,3 °C.'},
{p:'Koliko je CO₂ bilo pre industrije, a koliko danas?', o:'Oko 280 → oko 420 delova na milion.'},
{p:'Navedi dva dokaza da smo mi uzrok zagrevanja.', o:'Hemijski potpis fosilnih goriva u CO₂; Sunce nije jače (i stratosfera se hladi).'},
{p:'Šta je pravi odgovor na „klima se uvek menjala"?', o:'Tačno, ali sadašnja promena je mnogo brža i ima poznat uzrok.'},
{p:'Koja dva načina postoje za odgovor na klimatske promene?', o:'Smanjivanje emisija i prilagođavanje.'}
],
razgovor:['Kako razlikuješ „nauka je sporna" od „rešenje je sporno" u nekoj raspravi koju si čuo — o klimi ili bilo čemu drugom?','Šta bi kratko odgovorio nekome ko kaže: „klima se uvek menjala, ovo je sve politika"?']},

{id:'2-5', naslov:'Resursi — voda, energija, hrana, sirovine',
kuka:{p:'Koliki deo sve vode na Zemlji je slatka voda koju ljudi lako mogu da koriste?', o:['Oko 30%','Oko 10%','Manje od 1%'], t:2},
delovi:[
{n:'Voda', t:`Zemlja je „plava planeta", ali:
• 97,5% vode je slano.
• Od ono malo slatke, većina je zarobljena u ledu i duboko pod zemljom.
• Ljudima lako dostupno — reke, jezera, plitka podzemna voda — ostaje MANJE OD 1%.

Ko je troši? Najviše POLJOPRIVREDA — oko 70% slatke vode u svetu ide na navodnjavanje.

Postoji i „skrivena voda" u stvarima: za kilogram govedine potroši se oko 15.000 litara vode (za hranu stoke), a za šoljicu kafe oko 130 litara.

Problem retko je to što vode „nema" na planeti. Problem je gde je, kad je ima, i koliko je zagađena.`,
pr:{p:'Ko troši najviše slatke vode u svetu?', o:['Domaćinstva','Industrija','Poljoprivreda'], t:2, z:'Oko 70% slatke vode ide na navodnjavanje i poljoprivredu.'}},
{n:'Energija', t:`Oko 80% energije koju svet troši i danas dolazi iz FOSILNIH GORIVA: nafte, uglja i gasa.

Šta su ona zapravo? Sunčeva energija iz davnih vremena. Biljke i sitni morski organizmi su pre više miliona godina fotosintezom uhvatili sunčevu svetlost, zatrpani su, a pritisak i toplota su ih pretvorili u ugalj, naftu i gas. Kad sipaš gorivo, spaljuješ drevnu sunčevu svetlost — i puštaš ugljenik koji je bio zaključan milionima godina.

Srbija oko dve trećine struje dobija iz LIGNITA (Kolubara, Kostolac) — jeftino, ali prljavo.

Ostali izvori:
• OBNOVLJIVI — sunce, vetar, voda. Struja iz sunca i vetra je danas u mnogim zemljama najjeftiniji novi izvor, ali zavisi od vremena, pa traži skladištenje.
• NUKLEARNA — bez CO₂ i stalna, ali sa otpadom, skupom gradnjom i velikim strahom javnosti.`,
pr:{p:'Šta su, u suštini, fosilna goriva?', o:['Sunčeva energija uskladištena u ostacima organizama pre više miliona godina','Gorivo koje Zemlja stalno pravi u jezgru','Ostaci dinosaurusa'], t:0, z:'Uglavnom ostaci biljaka i sitnih morskih organizama koji su nekad uhvatili sunčevu energiju. (Dinosaurusi su tu zabluda.)'}},
{n:'Hrana', t:`Danas svet proizvodi više hrane po čoveku nego ikad u istoriji. Kako?

ZELENA REVOLUCIJA (1950–1970): nove, rodnije sorte pšenice i pirinča (Norman Borlaug, Nobelova nagrada za mir), navodnjavanje i — pre svega — VEŠTAČKO ĐUBRIVO.

Ključ je HABER-BOŠ postupak (početak 20. veka): azot se uzima direktno iz vazduha i pretvara u đubrivo. Procenjuje se da bez njega skoro polovina ljudi danas ne bi imala šta da jede. Malo koji izum je toliko promenio svet, a malo ko je čuo za njega.

Ako hrane ima dovoljno, zašto i dalje postoji glad? Uglavnom zbog RATA, SIROMAŠTVA i RASPODELE — ne zbog manjka. Istovremeno se oko trećine proizvedene hrane baci ili pokvari.`,
pr:{p:'Šta radi Haber-Boš postupak?', o:['Pravi veštačko đubrivo od azota iz vazduha','Čisti vodu za piće','Pravi gorivo od biljaka'], t:0, z:'Uzima azot iz vazduha i pretvara ga u đubrivo — temelj današnje proizvodnje hrane.'}},
{n:'Sirovine', t:`Sve što koristiš je negde iskopano.

• METALI: gvožđe (čelik), bakar (žice — Bor je bakar), aluminijum, a sve više LITIJUM i kobalt za baterije telefona i električnih auta.
• PESAK: posle vode, najviše korišćena sirovina na svetu — od njega je beton, staklo, čipovi. Nije svaki pesak dobar: pustinjski je previše gladak za beton, pa se pesak vadi iz reka i mora.
• RETKI ELEMENTI: za magnete, motore, elektroniku. Najviše ih vadi i prerađuje Kina — zato su sirovine i geopolitika (oblast 9).

Srbija ima svoja sporna pitanja: rudnik litijuma u dolini Jadra deli ljude na one koji gledaju posao i novac i one koji gledaju vodu i zemlju. U ovoj lekciji važno je samo da vidiš da je to pitanje o resursima: šta dobijaš, šta gubiš, i ko odlučuje.`,
pr:{p:'Koja sirovina se, posle vode, najviše koristi na svetu?', o:['Nafta','Pesak','Gvožđe'], t:1, z:'Pesak i šljunak — za beton, staklo i elektroniku. I nije svaki pesak upotrebljiv.'}},
{n:'Hoće li nestati?', t:`1798. sveštenik Tomas Maltus je predvideo: stanovništvo raste brže od proizvodnje hrane, pa će glad uvek vraćati broj ljudi nazad. Pogrešio je — nije predvideo koliko će tehnologija povećati prinose.

Ali pitanje je ostalo, i postoje dve škole:

• PESIMISTI: resursi su ograničeni, a rast beskonačan — negde se mora udariti u zid (knjiga „Granice rasta", 1972).
• OPTIMISTI: najveći resurs je ljudska domišljatost; kad nečega ponestane, poskupi, pa se nađe zamena. Ekonomista Džulijan Sajmon se 1980. kladio sa biologom Erlihom da će pet metala za deset godina pojeftiniti, a ne poskupeti — i dobio je.

Istina je verovatno između: tehnologija rešava mnogo — hranu, energiju, sirovine — ali ne sve. Ribe u moru, plodno zemljište i klima ne mogu se „izmisliti" nanovo.`,
pr:{p:'Zašto se Maltusovo predviđanje o gladi nije ostvarilo?', o:['Jer je stanovništvo prestalo da raste','Jer je tehnologija višestruko povećala proizvodnju hrane','Jer su ljudi počeli manje da jedu'], t:1, z:'Đubrivo, nove sorte i mašine povećali su prinose brže od rasta stanovništva — što Maltus nije mogao da predvidi.'}}
],
kljucno:['Manje od 1% vode je lako dostupna slatka voda; najviše troši poljoprivreda.','Oko 80% energije je iz fosilnih goriva — drevne sunčeve energije; obnovljivi rastu.','Hrane ima više nego ikad (Zelena revolucija, Haber-Boš); glad je pitanje rata i raspodele.','Sve je iskopano negde: metali, pesak, retki elementi — sirovine su i geopolitika.','Pesimisti vs. optimisti: tehnologija rešava mnogo, ali ne sve.'],
kartice:[
{p:'Koliki deo vode je lako dostupna slatka voda?', o:'Manje od 1%.'},
{p:'Odakle svet dobija većinu energije?', o:'Oko 80% iz fosilnih goriva (nafta, ugalj, gas).'},
{p:'Šta je Haber-Boš postupak?', o:'Pravljenje veštačkog đubriva od azota iz vazduha.'},
{p:'Zašto je pesak važna sirovina?', o:'Od njega su beton, staklo i čipovi; posle vode najviše se koristi.'},
{p:'Šta je Maltus predvideo i zašto je pogrešio?', o:'Da će glad zaustavljati rast stanovništva; tehnologija je povećala proizvodnju hrane.'}
],
razgovor:['Ko ti je bliži — pesimisti („granice postoje") ili optimisti („ljudi uvek nađu rešenje")? Zašto?','Navedi jednu stvar u kući koju svakodnevno trošiš, a nikad ne pomisliš odakle dolazi. Odakle dolazi?']}
]},
{id:'3', naziv:'Život', ikona:'🧬', era:'pre 3,8 mlrd god.', lekcije:[
{id:'3-1', naslov:'Šta je život — ćelija',
kuka:{p:'Otprilike koliko ćelija ima ljudsko telo?', o:['Oko milion','Oko 7 milijardi','Oko 30.000 milijardi'], t:2},
delovi:[
{n:'Šta uopšte znači „živo"', t:`Zvuči lako, ali nauka nema savršenu definiciju života. NASA koristi radnu: život je hemijski sistem koji sam sebe održava i može da evoluira.

Lakše je nabrojati šta živo radi:
• troši energiju i pretvara materiju (METABOLIZAM),
• raste i obnavlja se,
• razmnožava se,
• reaguje na okolinu,
• prenosi osobine na potomke — sa sitnim promenama.

Granični slučaj su VIRUSI. Imaju gene i menjaju se, ali sami ne troše energiju i ne mogu da se razmnože — moraju da uđu u ćeliju i iskoriste njenu „fabriku". Da li su živi? Biolozi se i danas spore. Dobar je primer da priroda ne mora da poštuje naše kutije.`,
pr:{p:'Zašto se za viruse kaže da su na granici života?', o:['Jer su premali da bi se videli','Jer sami ne troše energiju i ne mogu da se razmnože bez ćelije','Jer nemaju gene'], t:1, z:'Imaju gene i menjaju se, ali bez tuđe ćelije ne mogu ni da se „hrane" ni da se razmnože.'}},
{n:'Ćelija — najmanje živo', t:`1665. Englez Robert Huk je pod jednim od prvih mikroskopa gledao komadić plute i video sitne odaje. Podsetile su ga na sobice monaha — „ćelije". Ime je ostalo.

Dvesta godina kasnije, oko 1840–1850, sklopljena je ĆELIJSKA TEORIJA:
1. Sva živa bića su sastavljena od ćelija.
2. Ćelija je najmanja jedinica života.
3. Svaka ćelija nastaje samo iz druge ćelije.

Svaka ćelija ima MEMBRANU — tanak omotač koji bira šta ulazi, a šta izlazi. Unutra je voda puna proteina i drugih molekula, i DNK, recept po kome ćelija radi.

Telo odraslog čoveka ima oko 30.000 milijardi ćelija, oko 200 vrsta (nervne, mišićne, krvne, koštane…) — i otprilike isto toliko bakterija koje žive u tebi, najviše u crevima.`,
pr:{p:'Šta kaže ćelijska teorija?', o:['Sva živa bića su od ćelija, a svaka ćelija nastaje iz druge ćelije','Ćelije nastaju same iz neživih materija','Samo životinje imaju ćelije'], t:0, z:'Sve živo je od ćelija, ćelija je najmanja jedinica života i nastaje samo iz druge ćelije.'}},
{n:'Dve vrste ćelija', t:`Sve ćelije na Zemlji spadaju u dve velike grupe:

• PROKARIOTI — bakterije i arheje. Male, jednostavne, bez jedra; DNK im slobodno pliva. Bili su prvi i milijardama godina jedini.
• EUKARIOTI — biljke, životinje, gljive. Veće ćelije sa JEDROM (u kom čuvaju DNK) i sa „organima" ćelije.

Najzanimljiviji organ ćelije su MITOHONDRIJE — elektrane koje od hrane i kiseonika prave energiju. Imaju sopstvenu, malu DNK. Zašto? Zato što su nekada bile slobodne bakterije! Pre oko dve milijarde godina jedna ćelija je progutala bakteriju, ali je nije svarila — dve su počele da žive zajedno. Tu ideju je izborila Lin Margulis, kojoj su se dugo smejali.

Kad dišeš, hraniš potomke drevnih bakterija koje žive u tvojim ćelijama.`,
pr:{p:'Odakle, najverovatnije, potiču mitohondrije?', o:['Iz jedra ćelije','Od bakterija koje su nekad živele samostalno','Iz hrane koju jedemo'], t:1, z:'Imaju svoju DNK jer su nekad bile slobodne bakterije koje je druga ćelija progutala i zadržala.'}},
{n:'Kako ćelija radi', t:`Zamisli ćeliju kao grad:

• MEMBRANA — zidine sa kapijama.
• JEDRO — arhiva u kojoj stoje planovi (DNK).
• RIBOZOMI — fabrike koje po planovima prave proizvode.
• PROTEINI — radnici i alati. Skoro sav posao u ćeliji obavljaju proteini: ubrzavaju reakcije (ENZIMI), grade, prenose poruke (hormoni), brane (antitela), pomeraju (mišići).
• MITOHONDRIJE — elektrane.
• ATP — novac kojim se plaća svaki posao. Ćelija ga stalno pravi i troši.

Ti, sada, dok čitaš: u svakoj tvojoj ćeliji hiljade proteina rade svoj posao, a ti ni za jedan ne znaš.`,
pr:{p:'Šta su proteini u ćeliji?', o:['Samo rezerva hrane','Radnici i alati koji obavljaju skoro sve poslove','Omotač ćelije'], t:1, z:'Proteini su enzimi, gradivni delovi, prenosioci poruka, antitela — skoro sav posao ćelije.'}},
{n:'Kako je počelo?', t:`Kako je od nežive hemije nastala prva ćelija? Iskreno: NE ZNAMO TAČNO. To je jedna od najvećih otvorenih tajni nauke. Ali ima tragova:

• 1953. Stenli Miler i Harold Juri su u staklenu posudu stavili gasove kakvi su verovatno bili na mladoj Zemlji, dodali vodu i električne varnice kao munje. Za nekoliko dana nastale su AMINOKISELINE — gradivni delovi proteina. Život nisu napravili, ali su pokazali da se njegovi sastojci prave sami.
• Hipoteza „RNK sveta": rani molekul RNK je mogao istovremeno da nosi informaciju i da ubrzava reakcije — i kokoška i jaje u jednom.
• Mesto rođenja možda su vrući izvori na dnu okeana, gde je bilo energije i minerala.

Najstariji pouzdani tragovi života su stari oko 3,5 milijarde godina — što znači da je život počeo „brzo", čim se Zemlja smirila.`,
pr:{p:'Šta je pokazao eksperiment Milera i Jurija?', o:['Da su napravili živu ćeliju','Da se gradivni delovi života mogu sami stvoriti u uslovima rane Zemlje','Da je život došao iz svemira'], t:1, z:'Iz gasova, vode i varnica nastale su aminokiseline — sastojci života, ne i sam život.'}}
],
kljucno:['Život nema savršenu definiciju; virusi su granični slučaj.','Ćelijska teorija: sve živo je od ćelija, svaka ćelija nastaje iz ćelije.','Prokarioti (bakterije) nemaju jedro; eukarioti imaju; mitohondrije su nekad bile bakterije.','Proteini obavljaju skoro sav posao u ćeliji; ATP je njen „novac".','Kako je život počeo ne znamo tačno; sastojci se prave sami (Miler–Juri).'],
kartice:[
{p:'Zašto su virusi na granici života?', o:'Sami ne troše energiju i ne razmnožavaju se bez ćelije domaćina.'},
{p:'Šta kaže ćelijska teorija?', o:'Sve živo je od ćelija; svaka ćelija nastaje iz druge ćelije.'},
{p:'Razlika između prokariota i eukariota?', o:'Prokarioti (bakterije) nemaju jedro; eukarioti (biljke, životinje, gljive) imaju.'},
{p:'Odakle potiču mitohondrije?', o:'Od bakterija koje je druga ćelija davno progutala i zadržala.'},
{p:'Šta je pokazao eksperiment Milera i Jurija?', o:'Da gradivni delovi života (aminokiseline) nastaju sami u uslovima rane Zemlje.'}
],
razgovor:['Da li je virus živ? Zauzmi stav i odbrani ga.','Ćelija kao grad — smisli svoju sliku ćelije iz svog sveta (posao, kuća, smena).']},

{id:'3-2', naslov:'DNK i geni — recept za organizam',
kuka:{p:'Koliko DNK deliš sa šimpanzom?', o:['Oko 50%','Oko 75%','Oko 98–99%'], t:2},
delovi:[
{n:'Zavojnica sa četiri slova', t:`1953. Džejms Votson i Frensis Krik su objavili oblik DNK: DVOSTRUKA ZAVOJNICA, kao uvrnute merdevine. Ključni snimak, napravljen rendgenskim zracima, dobili su od Rozalind Frenklin, kojoj se zasluga dugo nije priznavala.

DNK je zapis pisan azbukom od samo ČETIRI SLOVA: A, T, G i C. Na merdevinama se uvek sparuju isto: A sa T, G sa C. Zato kad se merdevine rasparaju po sredini, svaka polovina je kalup za novu — tako se DNK kopira kad se ćelija deli.

Tvoj zapis (GENOM) ima oko 3 milijarde slova. Odštampan, bio bi biblioteka od hiljadu debelih knjiga. Gotovo svaka tvoja ćelija nosi ceo komplet, a kad bi se DNK jedne ćelije razvukla, bila bi duga oko 2 metra.`,
pr:{p:'Koliko „slova" ima azbuka DNK?', o:['2','4','20'], t:1, z:'Četiri: A, T, G i C; sparuju se A–T i G–C.'}},
{n:'Gen: jedan recept', t:`GEN je deo DNK koji je recept za jedan protein (ponekad za nekoliko). Ćelija čita recept u dva koraka:
1. PREPIS: deo DNK se prepiše u poruku od RNK.
2. PREVOD: ribozom čita poruku po tri slova i za svaku trojku dodaje jednu aminokiselinu. Lanac aminokiselina se savije u protein.

Čovek ima oko 20.000 gena — mnogo manje nego što se mislilo pre nego što je genom pročitan 2003. Pirinač ih ima više! Razlika nije u broju recepata, nego u tome kada, gde i koliko se koji pali — ostatak DNK su velikim delom prekidači i regulatori.

I jedna velika stvar: KOD JE ISTI za skoro sav život. Ista trojka znači istu aminokiselinu kod bakterije, pečurke i tebe. Zato bakterija može da pravi ljudski insulin za dijabetičare — i zato je to jedan od najjačih dokaza da sav život ima zajedničkog pretka.`,
pr:{p:'Koliko otprilike gena ima čovek?', o:['Oko 20.000','Oko 2 miliona','Oko 500'], t:0, z:'Oko 20.000 — manje od pirinča. Složenost dolazi od toga kako se geni pale i gase.'}},
{n:'Nasleđivanje — Mendelov grašak', t:`Pravila nasleđivanja otkrio je 1860-ih Gregor Mendel, monah koji je u manastirskoj bašti ukrštao grašak. Niko ga nije čitao 35 godina.

Šta je video:
• Osobine se prenose kao celine, ne mešaju se kao boje.
• Od svakog roditelja dobijaš PO JEDNU kopiju gena.
• Neke kopije su DOMINANTNE (pokažu se i kad imaš samo jednu), druge RECESIVNE (pokažu se samo kad imaš dve).

Zato dvoje roditelja sa smeđim očima može dobiti dete plavih očiju: oboje nose skrivenu „plavu" kopiju i oboje je predaju detetu. (Boja očiju je u stvarnosti složenija i zavisi od više gena, ali princip je isti.)

Polovinu gena dobiješ od majke, polovinu od oca. Braća i sestre dele, u proseku, polovinu.`,
pr:{p:'Kako dvoje smeđookih roditelja mogu dobiti plavooko dete?', o:['Nikako, to je nemoguće','Oboje nose skrivenu (recesivnu) kopiju i oboje je predaju detetu','Boja očiju se ne nasleđuje'], t:1, z:'Recesivna kopija se ne vidi kod roditelja, ali kad dete dobije dve takve — pokaže se.'}},
{n:'Mutacije — greške u prepisu', t:`Kad se 3 milijarde slova kopira, desi se poneka greška. To je MUTACIJA. Svako dete se rodi sa nekoliko desetina novih mutacija kojih nema ni kod jednog roditelja.

• Većina mutacija ne radi ništa primetno.
• Neke su štetne — uzrok su naslednih bolesti ili raka.
• Retke su korisne — npr. mutacija koja odraslima omogućava da vare mleko proširila se u narodima koji su gajili stoku.

Mutacije nastaju nasumično, a pospešuju ih zračenje i neke hemikalije (dim cigarete, recimo).

Za evoluciju, mutacije su SIROVINA — izvor svake nove razlike. Bez grešaka u prepisu, život bi stajao u mestu.`,
pr:{p:'Šta su mutacije za evoluciju?', o:['Uvek štetne greške','Sirovina — izvor novih razlika','Nešto što se dešava samo od zračenja'], t:1, z:'Većina je neutralna, neke štetne, retke korisne — ali bez njih ne bi bilo novih osobina.'}},
{n:'Geni nisu sudbina', t:`Popularno je reći „to mu je u genima". Istina je složenija.

Većina osobina — visina, težina, sklonost bolestima srca, pa i inteligencija i temperament — zavisi i od GENA i od SREDINE: ishrane, navika, iskustva, slučaja. Jednojajčani blizanci imaju istu DNK, a postaju različiti ljudi.

Postoje i hemijski „prekidači" na DNK koji pale i gase gene, a na neke utiče sredina (EPIGENETIKA). Oprez: u popularnim tekstovima se o ovome mnogo preteruje.

I sad smo naučili da DNK i MENJAMO. CRISPR (2012, Nobelova nagrada 2020. Šarpentje i Dudni) su molekularne makaze koje seku DNK na tačno izabranom mestu. Već postoji odobreno lečenje jedne nasledne bolesti krvi. Ali 2018. u Kini je jedan naučnik menjao DNK embrionima — i završio u zatvoru. Moć je stigla pre dogovora šta sme.`,
pr:{p:'Šta je CRISPR?', o:['Bolest gena','Alat za precizno menjanje DNK','Vrsta ćelije'], t:1, z:'Molekularne makaze koje seku DNK na izabranom mestu — za lečenje, ali i sa velikim etičkim pitanjima.'}}
],
kljucno:['DNK je dvostruka zavojnica sa azbukom od 4 slova (A–T, G–C); genom ima oko 3 milijarde slova.','Gen je recept za protein: DNK → RNK → protein; kod je isti za skoro sav život.','Mendel: od svakog roditelja po jedna kopija; dominantno i recesivno.','Mutacije su greške u prepisu — uglavnom neutralne, a sirovina evolucije.','Geni nisu sudbina: osobine zavise i od sredine; CRISPR omogućava menjanje DNK.'],
kartice:[
{p:'Koja su četiri slova DNK i kako se sparuju?', o:'A, T, G, C; A sa T, G sa C.'},
{p:'Kojim putem gen postaje protein?', o:'DNK → (prepis) RNK → (prevod) protein.'},
{p:'Zašto je isti genetski kod dokaz zajedničkog porekla?', o:'Ista trojka slova znači istu aminokiselinu kod skoro svih živih bića.'},
{p:'Šta je recesivna osobina?', o:'Osobina koja se pokaže samo kad imaš dve takve kopije gena.'},
{p:'Šta je CRISPR?', o:'Alat za precizno sečenje i menjanje DNK.'}
],
razgovor:['Koliko misliš da je tvoj karakter od gena, a koliko od života koji si proživeo? Daj primer na sebi.','Objasni nekome put od DNK do proteina jednom slikom iz svakodnevice.']},

{id:'3-3', naslov:'Evolucija prirodnom selekcijom',
kuka:{p:'Šta je zapravo tvrdio Darvin?', o:['Da čovek potiče od šimpanze','Da sva živa bića imaju zajedničke pretke i menjaju se prirodnom selekcijom','Da uvek pobeđuje najjači'], t:1},
delovi:[
{n:'Putovanje i knjiga', t:`1831. mladi Čarls Darvin se ukrcao na brod Bigl kao prirodnjak na putovanje oko sveta koje je trajalo pet godina.

Na ostrvima Galapagos video je zebe (ptičice) koje su na svakom ostrvu imale drugačiji kljun — debeo za tvrdo seme, tanak za insekte. Kao da je jedna vrsta stigla na ostrva pa se na svakom prilagodila drugačije.

Darvin je posle toga 20 godina skupljao dokaze, oklevao i ćutao, svestan koliko je ideja opasna. Požurio ga je pismo mladog prirodnjaka Alfreda Rasela Volasa, koji je u Indoneziji sam došao do iste ideje. Predstavili su je zajedno 1858, a 1859. je izašla Darvinova knjiga „O POREKLU VRSTA".`,
pr:{p:'Ko je, nezavisno od Darvina, došao do iste ideje?', o:['Gregor Mendel','Alfred Rasel Volas','Isak Njutn'], t:1, z:'Volas je do iste ideje došao u Indoneziji; predstavili su je zajedno 1858.'}},
{n:'Mehanizam u tri sastojka', t:`PRIRODNA SELEKCIJA traži samo tri stvari:

1. RAZLIKE. Jedinke iste vrste se razlikuju — po veličini, boji, brzini, otpornosti.
2. NASLEĐIVANJE. Deo tih razlika se prenosi na potomke (danas znamo: kroz gene).
3. VIŠAK POTOMAKA. Rađa se više nego što može da preživi i da se razmnoži.

Ishod: oni čije razlike slučajno bolje odgovaraju sredini češće prežive i ostave više potomaka. Generacija za generacijom, korisne osobine postaju češće. Kroz dovoljno vremena — nove vrste.

Ključne stvari: NEMA CILJA i NEMA PLANA. Ništa ne „pokušava" da postane bolje. I „preživljavanje najsposobnijih" ne znači najjačih: „sposoban" ovde znači NAJBOLJE PRILAGOĐEN toj sredini, onaj koji ostavi najviše potomaka. Ponekad je to najmanji, najsporiji ili najprikriveniji.`,
pr:{p:'Šta u evoluciji znači „najsposobniji"?', o:['Najjači','Najbolje prilagođen da u toj sredini preživi i ostavi potomke','Najpametniji'], t:1, z:'„Sposoban" znači uspešan u ostavljanju potomaka u datoj sredini — ne snaga.'}},
{n:'Evolucija pred očima', t:`Evolucija nije samo daleka prošlost. Vidimo je:

• BAKTERIJE I ANTIBIOTICI. Kad uzmeš antibiotik, većina bakterija umre, ali par otpornijih preživi. Ako prekineš lečenje ranije, baš one se namnože — i sledeći put lek ne deluje. Zato se pije ceo ciklus. Otporne bakterije su danas jedan od najvećih problema medicine.
• BREZOV MOLJAC. U Engleskoj su pre industrije preovlađivali svetli moljci, neprimetni na svetloj kori breze. Kad je čađ iz fabrika zacrnela drveće, za nekoliko decenija preovladali su tamni — svetle su ptice lakše videle. Kad je vazduh očišćen, vratili su se svetli.
• PAS. Svi psi, od čivave do doge, potiču od vuka. To je VEŠTAČKA SELEKCIJA — mi smo birali ko se razmnožava. Za par hiljada godina dobili smo ogromne razlike. Zamisli šta priroda može za milione.`,
pr:{p:'Zašto treba popiti ceo ciklus antibiotika?', o:['Da bi lek bio jeftiniji','Da ne bi preživele i namnožile se otpornije bakterije','Jer je tako ukusnije'], t:1, z:'Prekid lečenja ostavlja baš najotpornije bakterije — to je prirodna selekcija na delu.'}},
{n:'Dokazi', t:`Evoluciju potvrđuje nekoliko potpuno nezavisnih vrsta dokaza:

• FOSILI. Slojevi stena pokazuju redosled, a nađeni su i prelazni oblici: Tiktaalik, riba sa zglobovima kao noge, pre oko 375 miliona godina; arheopteriks, dinosaurus sa perjem i krilima.
• GRAĐA TELA. Ruka čoveka, krilo slepog miša, peraje kita i noga mačke imaju ISTE kosti u istom rasporedu, samo drugačije oblikovane. Inženjer to ne bi tako napravio; nasledstvo bi.
• DNK. Što su vrste bliže po fosilima i građi, to su im sličnije DNK. Drvo srodstva napravljeno iz DNK se slaže sa drvetom iz fosila.
• POSMATRANJE. Bakterije, virusi, insekti otporni na pesticide — menjaju se pred nama.

Kada se toliko nezavisnih tragova slaže, to je u nauci najjači mogući dokaz.`,
pr:{p:'Šta je zajedničko ruci čoveka, krilu slepog miša i peraju kita?', o:['Ništa','Isti raspored kostiju, nasleđen od zajedničkog pretka','Svi služe za plivanje'], t:1, z:'Iste kosti, različito oblikovane — trag zajedničkog pretka.'}},
{n:'Česte zablude', t:`• „TO JE SAMO TEORIJA." U svakodnevnom govoru teorija znači nagađanje. U nauci znači suprotno: dobro proveren sistem objašnjenja koji povezuje ogroman broj činjenica. I gravitacija je „teorija".
• „ČOVEK JE OD MAJMUNA." Nije. Čovek i šimpanza imaju ZAJEDNIČKOG PRETKA koji je živeo pre oko 6–7 miliona godina. Šimpanza nam je rođak, ne pradeda.
• „EVOLUCIJA IDE KA NEČEM BOLJEM." Ne ide. Nema vrhunca ni cilja — samo prilagođavanje sredini koja se menja. Bakterija nije „niža" od čoveka; ona je uspešnija.
• „EVOLUCIJA I VERA SE ISKLJUČUJU." Za mnoge vernike ne. Katolička crkva, na primer, prihvata evoluciju kao naučno objašnjenje kako se život razvijao. Pitanje „zašto uopšte postoji nešto" nauka ostavlja otvorenim.`,
pr:{p:'Šta znači reč „teorija" u nauci?', o:['Nagađanje bez dokaza','Dobro provereno objašnjenje koje povezuje mnoge činjenice','Nešto što još nije dokazano'], t:1, z:'U nauci je teorija najviši stepen objašnjenja — kao teorija gravitacije.'}}
],
kljucno:['Darvin i Volas: sva živa bića imaju zajedničke pretke i menjaju se prirodnom selekcijom (1859).','Tri sastojka: razlike, nasleđivanje, višak potomaka; nema cilja ni plana.','„Najsposobniji" = najbolje prilagođen, ne najjači.','Vidi se i danas: bakterije otporne na antibiotike, brezov moljac, psi od vuka.','Dokazi: fosili, građa tela, DNK, posmatranje; čovek i šimpanza imaju zajedničkog pretka.'],
kartice:[
{p:'Koja su tri sastojka prirodne selekcije?', o:'Razlike među jedinkama, nasleđivanje, više potomaka nego što može preživeti.'},
{p:'Šta znači „najsposobniji" u evoluciji?', o:'Najbolje prilagođen sredini — onaj koji ostavi najviše potomaka.'},
{p:'Zašto se pije ceo ciklus antibiotika?', o:'Da ne prežive i ne namnože se otpornije bakterije.'},
{p:'Da li čovek potiče od šimpanze?', o:'Ne — imamo zajedničkog pretka od pre oko 6–7 miliona godina.'},
{p:'Šta je „teorija" u nauci?', o:'Dobro provereno objašnjenje koje povezuje mnoge činjenice.'}
],
razgovor:['Gde u društvu — na poslu, na tržištu, na internetu — vidiš nešto nalik prirodnoj selekciji? A gde to poređenje ne važi?','Objasni otpornost bakterija na antibiotike nekome ko ne veruje u evoluciju.']},

{id:'3-4', naslov:'Drvo života — od bakterije do čoveka',
kuka:{p:'Koliki deo svih vrsta koje su ikad živele na Zemlji je izumro?', o:['Oko 10%','Oko polovine','Više od 99%'], t:2},
delovi:[
{n:'Tri milijarde godina mikroba', t:`Kad pomisliš na istoriju života, pomisliš na dinosauruse. A najveći deo te istorije bio je NEVIDLJIV.

Oko 3 milijarde godina život na Zemlji bio je samo mikroskopski: bakterije, arheje, kasnije jednoćelijski eukarioti. Pravili su pokrivače po plićacima, a cijanobakterije su polako punile vazduh kiseonikom.

Prva višećelijska bića javljaju se pre oko milijardu godina, a prve prave životinje pre oko 600 miliona godina.

Ako bi celu istoriju Zemlje sabio u jedan dan, životinje bi se pojavile tek oko devet uveče, a čovek u poslednjih nekoliko sekundi pred ponoć.`,
pr:{p:'Koliko dugo je život na Zemlji bio samo mikroskopski?', o:['Nekoliko miliona godina','Oko 3 milijarde godina','Svega nekoliko hiljada godina'], t:1, z:'Oko 3 milijarde godina — većina istorije života je istorija mikroba.'}},
{n:'Eksplozija i izlazak na kopno', t:`Pre oko 540 miliona godina desila se KAMBRIJSKA EKSPLOZIJA: za samo dvadesetak miliona godina pojavljuju se skoro sve glavne grupe životinja koje postoje i danas. Pojavljuju se oči, ljušture, zubi, grabljivci i plen. Trka je počela.

Onda kopno:
• Biljke izlaze iz vode pre oko 470 miliona godina — prvo mahovine, pa paprati, pa drveće.
• Za njima insekti.
• Pre oko 375 miliona godina riba sa zglobovima u perajima (Tiktaalik) puzi po plićaku. Od njenih rođaka potiču svi kopneni kičmenjaci — vodozemci, gmizavci, ptice, sisari. Ti.

Kosti tvoje ruke su, u osnovi, kosti te peraje.`,
pr:{p:'Šta je kambrijska eksplozija?', o:['Eksplozija vulkana koja je uništila život','Brza pojava većine glavnih grupa životinja pre oko 540 miliona godina','Udar asteroida'], t:1, z:'Za dvadesetak miliona godina pojavile su se skoro sve glavne grupe životinja.'}},
{n:'Velika izumiranja', t:`Više od 99% svih vrsta koje su ikad živele — izumrlo je. Izumiranje je pravilo, ne izuzetak. Ali pet puta je bilo naglo i masovno:

• NAJVEĆE, pre oko 252 miliona godina (kraj perma): ogromne vulkanske erupcije u današnjem Sibiru zagrejale su planetu i zatrovale more. Nestalo je oko 90% morskih vrsta. Život je skoro nestao.
• POSLEDNJE, pre 66 miliona godina: asteroid širok oko 10 km udario je kod današnjeg Meksika. Tama, hladnoća, požari. Nestali su veliki dinosaurusi i oko tri četvrtine vrsta.

Ali NISU NESTALI SVI DINOSAURUSI. PTICE SU DINOSAURUSI — potomci malih pernatih grabljivaca. Golub na tvom prozoru je rođak tiranosaurusa.

Izumiranja su i otvarala vrata: posle asteroida, sitni sisari koji su se krili po senkama dobili su ceo svet.`,
pr:{p:'Koja grupa dinosaurusa je preživela do danas?', o:['Krokodili','Ptice','Nijedna'], t:1, z:'Ptice su potomci malih pernatih dinosaurusa. Krokodili su rođaci, ali nisu dinosaurusi.'}},
{n:'Sisari, primati, mi', t:`Posle dinosaurusa sisari se šire na sve strane: kitovi se vraćaju u more, slepi miševi lete, pojavljuju se konji, mačke, majmuni.

PRIMATI — grupa kojoj pripadamo — žive na drveću, imaju ruke koje hvataju, oči napred i veliki mozak. Iz njih se razvijaju majmuni, pa veliki majmuni: orangutan, gorila, šimpanza i bonobo. I ljudska loza, koja se od šimpanzi odvaja pre oko 6–7 miliona godina (više o tome u oblasti 6).

Sva živa bića danas biolozi dele na TRI VELIKE GRANE:
1. bakterije,
2. arheje,
3. eukarioti — u koje spadaju biljke, gljive i životinje.

Iznenađenje: GLJIVE SU BLIŽE ŽIVOTINJAMA NEGO BILJKAMA. Pečurka ti je bliži rođak od salate.`,
pr:{p:'Kome su gljive bliže po srodstvu?', o:['Biljkama','Životinjama','Bakterijama'], t:1, z:'Gljive i životinje imaju bližeg zajedničkog pretka nego gljive i biljke.'}},
{n:'Šesto izumiranje?', t:`Mnogi biolozi kažu da smo danas usred šestog velikog izumiranja — ovaj put bez asteroida.

Šta se zna:
• Vrste danas nestaju mnogo brže od prirodnog, „pozadinskog" tempa — procene idu od desetina do stotina puta brže.
• Glavni uzrok nije klima, nego GUBITAK STANIŠTA — šume posečene za njive, pašnjake i gradove. Slede lov i ribolov, unete strane vrste, zagađenje, a sve više i klima.

Šta je sporno: tačne brojke. Koliko vrsta uopšte postoji ne znamo (većina insekata i mikroba nije ni opisana), pa je teško reći koliko ih nestaje. Ali pravac nije sporan.

Zašto bi te bilo briga? Zato što ekosistemi daju hranu, vodu, oprašivanje, plodno tlo — o tome sledeća lekcija.`,
pr:{p:'Šta je danas najveći uzrok nestajanja vrsta?', o:['Gubitak staništa','Klimatske promene','Lov'], t:0, z:'Pre svega uništavanje staništa — šume pretvorene u njive, pašnjake i gradove.'}}
],
kljucno:['Oko 3 milijarde godina život je bio samo mikroskopski; životinje kasne.','Kambrijska eksplozija pre oko 540 miliona godina; biljke i životinje izlaze na kopno.','Pet velikih izumiranja; poslednje (asteroid, pre 66 miliona) — ptice su preživeli dinosaurusi.','Tri grane života: bakterije, arheje, eukarioti; gljive su bliže životinjama.','Danas vrste nestaju mnogo brže od prirodnog tempa — najviše zbog gubitka staništa.'],
kartice:[
{p:'Koliki deo svih vrsta je izumro?', o:'Više od 99%.'},
{p:'Šta je kambrijska eksplozija?', o:'Brza pojava većine glavnih grupa životinja pre oko 540 miliona godina.'},
{p:'Šta je uništilo dinosauruse pre 66 miliona godina — i ko je preživeo?', o:'Udar asteroida; preživele su ptice.'},
{p:'Koje su tri velike grane života?', o:'Bakterije, arheje, eukarioti.'},
{p:'Šta je danas najveći uzrok izumiranja?', o:'Gubitak staništa.'}
],
razgovor:['Više od 99% vrsta je nestalo. Kako to menja tvoj pogled na sigurnost bilo koje vrste — i naše?','Šta te je u ovoj lekciji najviše iznenadilo i zašto?']},

{id:'3-5', naslov:'Ekosistemi — ko koga jede i zašto je to bitno',
kuka:{p:'Šta bi se desilo kad bi nestale pčele i drugi oprašivači?', o:['Skoro ništa, vetar bi sve oprašio','Mnoge biljke i usevi bi rađali mnogo slabije','Za godinu bi se pojavile nove vrste koje ih zamenjuju'], t:1},
delovi:[
{n:'Ko koga jede', t:`EKOSISTEM je sve živo na jednom mestu — u šumi, reci, livadi — zajedno sa neživim (voda, tlo, klima) i svim vezama među njima.

Osnova je LANAC ISHRANE:
1. PROIZVOĐAČI — biljke i alge prave hranu iz svetlosti.
2. BILJOJEDI — zec, jelen, skakavac.
3. MESOJEDI — lisica, vuk, jastreb.
4. RAZLAGAČI — gljive, bakterije, crvi. Razlažu sve mrtvo i vraćaju hranljive materije u tlo, odakle ih biljke ponovo uzimaju.

Bez razlagača bi se svet zatrpao mrtvim lišćem i telima, a biljkama bi ponestalo hrane.

Pravilo koje vredi zapamtiti: ENERGIJA TEČE (od Sunca, kroz lanac, i nestaje kao toplota), a MATERIJA KRUŽI (isti atomi idu u krug).`,
pr:{p:'Šta rade razlagači u ekosistemu?', o:['Jedu samo žive biljke','Razlažu mrtvo i vraćaju hranljive materije u tlo','Prave hranu iz svetlosti'], t:1, z:'Gljive, bakterije i crvi zatvaraju krug — bez njih biljke ne bi imale hranljivih materija.'}},
{n:'Fotosinteza i piramida', t:`Skoro sve što jedeš počelo je kao svetlost. FOTOSINTEZA:
ugljen-dioksid + voda + sunčeva svetlost → šećer + kiseonik.

Biljka od šećera gradi telo, a kiseonik pušta. Hleb, meso, mleko, pa i benzin — sve je to, na kraju, uhvaćena sunčeva svetlost.

Ali na svakoj stepenici lanca najveći deo energije se izgubi (troši se na život i odlazi kao toplota). Dalje prelazi otprilike samo DESETINA. Zato:
• trave ima mnogo, zečeva manje, a vukova malo — vrh piramide je uzak;
• za kilogram mesa treba mnogo kilograma biljne hrane, pa biljna ishrana manje opterećuje zemlju i vodu.

To nije moralna propoved, nego račun energije.`,
pr:{p:'Zašto ima mnogo manje vukova nego zečeva?', o:['Zato što vukove ljudi love','Zato što se na svakoj stepenici lanca većina energije izgubi','Zato što vukovi žive kraće'], t:1, z:'Dalje prelazi samo oko desetina energije, pa vrh piramide može da nahrani malo grabljivaca.'}},
{n:'Ključne vrste', t:`Neke vrste drže ceo ekosistem na okupu — kao kamen na vrhu svoda. Zovu se KLJUČNE VRSTE.

• VUKOVI U JELOUSTONU. Istrebljeni su početkom 20. veka, a 1995. vraćeni u američki park. Jeleni su počeli da izbegavaju otvorene obale, pa su se tu oporavile vrbe, za njima dabrovi i ptice. Koliko je tačno vukovima zasluga, naučnici još mere — ali promena je bila velika.
• OPRAŠIVAČI. Pčele, bumbari, leptiri, muve. Oko tri četvrtine najvažnijih useva u svetu bar delimično zavisi od njih — voće, povrće, kafa, kakao. Bez njih, prinosi bi pali, a hrana poskupela.
• MORSKE VIDRE jedu morske ježeve; kad vidre nestanu, ježevi pojedu podvodne šume algi, a sa njima nestanu i ribe.

Ukloni jednu kariku — i ne znaš unapred šta će sve pasti.`,
pr:{p:'Šta je „ključna vrsta"?', o:['Najbrojnija vrsta u ekosistemu','Vrsta čiji nestanak menja ceo ekosistem','Vrsta koja je najstarija'], t:1, z:'Ključna vrsta nije nužno brojna, ali bez nje se cela mreža odnosa menja.'}},
{n:'Veliki krugovi', t:`Materija na Zemlji kruži u velikim krugovima.

KRUG UGLJENIKA: ugljenik iz vazduha (CO₂) biljke ugrade u telo → životinje ga pojedu → disanjem i truljenjem se vraća u vazduh. Deo potone i ostane zaključan milionima godina — u krečnjaku, uglju, nafti, gasu.

Tu se povezuje sa lekcijom o klimi: spaljivanjem fosilnih goriva mi za stotinak godina vraćamo u vazduh ugljenik koji je bio zaključan milionima godina. Krug se nije pokvario, nego smo ga naglo ubrzali na jednom mestu.

KRUG AZOTA: azota ima pun vazduh, ali ga biljke ne mogu uzeti direktno. Posao rade bakterije u tlu (naročito na korenu leguminoza: pasulja, graška, deteline — zato seljaci sade detelinu da „odmori" njivu). Danas veliki deo azota u poljima unosimo veštačkim đubrivom (Haber-Boš iz oblasti 2).

Sve je povezano: tlo, biljke, vazduh, more, klima, tvoj tanjir.`,
pr:{p:'Šta su fosilna goriva u krugu ugljenika?', o:['Ugljenik koji nikad nije bio deo kruga','Ugljenik zaključan milionima godina koji sada brzo vraćamo u vazduh','Nova vrsta ugljenika'], t:1, z:'Fosilna goriva su „zaključani" deo kruga; spaljivanjem ga naglo vraćamo u vazduh.'}},
{n:'Besplatne usluge — i kraj oblasti', t:`Ekosistemi nam svakog dana rade poslove koje nikad ne platimo:
• prave kiseonik i čiste vazduh,
• filtriraju vodu (šuma i močvara su najbolji prečistači),
• oprašuju useve,
• prave plodno tlo (za jedan centimetar tla trebaju decenije do vekovi),
• hrane nas ribom, divljim plodovima, lekovitim biljem,
• zadržavaju poplave i sprečavaju klizišta.

Da ih moramo praviti mašinama, koštalo bi više od cele svetske ekonomije. Zato ih zovu USLUGE EKOSISTEMA.

Kraj oblasti „Život". Sada imaš kostur: šta je ćelija → kako DNK nosi recept → kako se vrste menjaju prirodnom selekcijom → kako je drvo života raslo kroz milijarde godina i izumiranja → i kako je sve to danas povezano u mrežu.

Sledeće: jedno posebno živo biće, iznutra — tvoje telo.`,
pr:{p:'Zašto se kaže da priroda daje „besplatne usluge"?', o:['Jer je zakonom zaštićena','Jer ono što radi (vazduh, voda, oprašivanje, tlo) bi skupo koštalo da to pravimo sami','Jer ne zavisi od ljudi'], t:1, z:'Prečišćavanje vode, oprašivanje, plodno tlo — da ih plaćamo, bili bi ogroman trošak.'}}
],
kljucno:['Ekosistem: proizvođači, biljojedi, mesojedi, razlagači; energija teče, materija kruži.','Fotosinteza je osnova skoro sve hrane; na svakoj stepenici dalje ide samo oko desetina energije.','Ključne vrste (vukovi, oprašivači) drže ceo sistem — oko 3/4 važnih useva zavisi od oprašivača.','Ugljenik i azot kruže; fosilna goriva su zaključan ugljenik koji naglo vraćamo u vazduh.','Ekosistemi daju besplatne usluge: vazduh, voda, oprašivanje, tlo.'],
kartice:[
{p:'Koja su četiri člana lanca ishrane?', o:'Proizvođači, biljojedi, mesojedi, razlagači.'},
{p:'Koliko energije prelazi na sledeću stepenicu lanca?', o:'Otprilike samo desetina.'},
{p:'Šta je ključna vrsta? Primer?', o:'Vrsta čiji nestanak menja ceo ekosistem — vukovi u Jeloustonu, oprašivači.'},
{p:'Ko u prirodi hvata azot iz vazduha?', o:'Bakterije u tlu, naročito na korenu leguminoza (pasulj, grašak, detelina).'},
{p:'Navedi tri usluge ekosistema.', o:'Npr. prečišćavanje vode, oprašivanje, plodno tlo (i kiseonik, zaštita od poplava).'}
],
razgovor:['Prati današnji obrok unazad: od tvog tanjira do Sunca. Koliko stepenica ima?','Ko je „ključna vrsta" u ekipi na poslu — neko čiji bi odlazak promenio sve? Šta to govori o ekosistemima?']}
]},
{id:'4', naziv:'Telo i zdravlje', ikona:'🫀', era:'ti, iznutra', lekcije:[
{id:'4-1', naslov:'Telo kao sistem — srce, krv, pluća, organi',
kuka:{p:'Otprilike koliko puta dnevno kucne tvoje srce?', o:['Oko 10.000','Oko 100.000','Oko milion'], t:1},
delovi:[
{n:'Odeljenja jedne fabrike', t:`Telo je složeno u spratove:
ćelije → TKIVA (mišićno, nervno, koštano…) → ORGANI (srce, jetra) → SISTEMI.

Glavni sistemi: krvotok, disanje, varenje, nervni sistem, hormoni, imuni sistem, kosti i mišići, bubrezi i izlučivanje, koža.

Nijedan ne radi sam. Kad trčiš, mišićima treba više kiseonika — pluća dišu brže, srce kuca jače, krvni sudovi se šire, koža se znoji da te ohladi. Sve to bez tvoje odluke.

Ta stalna briga da sve ostane u ravnoteži zove se HOMEOSTAZA: temperatura oko 37 °C, šećer u krvi, količina vode, kiselost krvi — sve se drži u uskim granicama, kao sa termostatom. Bolest je često baš to: ravnoteža koja ne može da se vrati.`,
pr:{p:'Šta je homeostaza?', o:['Rast tela','Održavanje stalne unutrašnje ravnoteže','Vrsta hormona'], t:1, z:'Telo stalno vraća temperaturu, šećer, vodu i kiselost u uske granice — kao termostat.'}},
{n:'Srce i krv', t:`Srce je mišić veličine pesnice koji u mirovanju pumpa oko 5 litara krvi u minuti — sve što imaš, svakog minuta. Oko 100.000 otkucaja dnevno, bez pauze, do kraja života.

Krv ide u dva kruga:
• MALI KRUG: srce → pluća (uzme kiseonik, ostavi ugljen-dioksid) → srce.
• VELIKI KRUG: srce → celo telo → srce.

ARTERIJE nose krv od srca, VENE ka srcu, a sitni KAPILARI između njih razmenjuju sve sa ćelijama. Svi sudovi zajedno, poređani u nit, obišli bi Zemlju više puta.

U krvi su: crvena krvna zrnca (nose kiseonik pomoću HEMOGLOBINA, u kome je gvožđe — ono iz zvezda!), bela zrnca (odbrana), pločice (zaustavljaju krvarenje) i tečnost, plazma.

KRVNI PRITISAK ima dva broja: gornji je pritisak kad srce stisne, donji kad se opusti između dva otkucaja. Oko 120/80 je uobičajeno. Visok pritisak ne boli, ali godinama tiho oštećuje sudove, srce, mozak i bubrege — zato se meri.`,
pr:{p:'Šta znače dva broja krvnog pritiska?', o:['Gornji je puls, donji temperatura','Gornji je pritisak kad srce steže, donji kad se opušta','Gornji je za levu, donji za desnu ruku'], t:1, z:'Sistolni (gornji) — kad srce izbacuje krv; dijastolni (donji) — između otkucaja.'}},
{n:'Pluća', t:`U mirovanju udahneš 12 do 20 puta u minuti. Vazduh ide niz dušnik koji se grana kao drvo naglavačke, do stotina miliona sićušnih kesica — ALVEOLA. Raširene, imale bi površinu manjeg stana.

Kroz tanke zidove alveola kiseonik prelazi u krv, a UGLJEN-DIOKSID iz krvi u vazduh. Odakle taj CO₂? Iz tvojih ćelija — to je „izduvni gas" mitohondrija koje su sagorele hranu (lekcija o ćeliji).

Zanimljivost: ono što te tera da udahneš kad zadržiš dah nije manjak kiseonika, nego VIŠAK UGLJEN-DIOKSIDA u krvi. Mozak meri CO₂ i on pali alarm.`,
pr:{p:'Šta te najviše tera da udahneš kad zadržiš dah?', o:['Manjak kiseonika','Porast ugljen-dioksida u krvi','Bol u plućima'], t:1, z:'Mozak meri pre svega CO₂ u krvi — kad poraste, alarm za udah se pali.'}},
{n:'Jetra i bubrezi — čistači', t:`JETRA je najveći unutrašnji organ i hemijska laboratorija tela, sa stotinama poslova:
• prerađuje ono što si pojeo i čuva rezervu šećera;
• razgrađuje otrove, ALKOHOL i većinu lekova (zato se mnogi lekovi ne mešaju sa alkoholom);
• pravi žuč za varenje masti i mnoge proteine krvi.
Jetra je jedini unutrašnji organ koji može ponovo da izraste kad joj se ukloni deo.

BUBREZI su dva filtera veličine pesnice. Svakog dana kroz njih prođe oko 180 litara tečnosti iz krvi; skoro sve vrate nazad, a oko litar i po izbace kao mokraću, sa otpadom. Usput regulišu vodu, so i krvni pritisak.

Kad pitaš lekara „da li ovaj lek sme uz onaj", najčešće pitaš o jetri i bubrezima.`,
pr:{p:'Koji organ razgrađuje alkohol i većinu lekova?', o:['Bubrezi','Jetra','Pluća'], t:1, z:'Jetra je glavna hemijska laboratorija — razgrađuje alkohol, otrove i lekove.'}},
{n:'Hormoni — spora pošta', t:`Telo ima dva sistema za poruke:
• NERVNI — brz kao telefonski poziv, ali kratak;
• HORMONSKI — hemijske poruke koje putuju krvlju; sporiji kao pošta, ali deluju dugo.

Važni hormoni:
• ADRENALIN — „bori se ili beži": srce ubrza, mišići dobiju krv, varenje stane.
• INSULIN — pomaže šećeru iz krvi da uđe u ćelije. Kad ga nema ili ćelije ne reaguju — DIJABETES.
• KORTIZOL — hormon dugog stresa.
• TIROKSIN iz štitne žlezde — određuje brzinu celog metabolizma.
• MELATONIN — raste u mraku i javlja telu da je vreme za san.
• Polni hormoni — razvoj, plodnost, trudnoća.

Kad nešto „nije u redu sa hormonima", često je to štitna žlezda ili šećer — dve najčešće kontrole kod lekara.`,
pr:{p:'Šta radi insulin?', o:['Ubrzava srce','Pomaže šećeru iz krvi da uđe u ćelije','Javlja da je vreme za san'], t:1, z:'Bez insulina (ili kad ćelije ne reaguju na njega) šećer ostaje u krvi — to je dijabetes.'}}
],
kljucno:['Telo je složeno u ćelije, tkiva, organe i sisteme koji stalno sarađuju; homeostaza drži ravnotežu.','Srce pumpa krv u dva kruga; pritisak ima gornju (stezanje) i donju (opuštanje) vrednost.','Pluća razmenjuju kiseonik i CO₂; na udah nas tera višak CO₂.','Jetra razgrađuje alkohol, otrove i lekove; bubrezi filtriraju krv.','Hormoni su spora pošta: adrenalin, insulin, kortizol, tiroksin, melatonin.'],
kartice:[
{p:'Šta je homeostaza?', o:'Održavanje stalne unutrašnje ravnoteže (temperatura, šećer, voda).'},
{p:'Šta znače dva broja pritiska?', o:'Gornji — kad srce steže; donji — kad se opušta.'},
{p:'Zašto ne možemo dugo da zadržimo dah?', o:'Raste CO₂ u krvi i mozak pali alarm.'},
{p:'Šta radi jetra?', o:'Prerađuje hranu, čuva šećer, razgrađuje alkohol, otrove i lekove, pravi žuč.'},
{p:'Koja je razlika između nervnih i hormonskih poruka?', o:'Nervne su brze i kratke; hormoni putuju krvlju, sporiji su i deluju duže.'}
],
razgovor:['Objasni homeostazu na primeru iz svog dana — smena, vrućina, umor.','Koji organ ili sistem te je u ovoj lekciji najviše iznenadio i zašto?']},

{id:'4-2', naslov:'Hrana, metabolizam i energija',
kuka:{p:'Koliko energije celog tela troši mozak, iako je samo oko 2% težine?', o:['Oko 2%','Oko 20%','Oko 50%'], t:1},
delovi:[
{n:'Od čega je hrana', t:`Hrana nam daje dve stvari: ENERGIJU i GRAĐU.

Tri velike grupe (MAKRONUTRIJENTI):
• UGLJENI HIDRATI — šećeri i skrob (hleb, testo, krompir, voće). Brza energija. Oko 4 kalorije po gramu.
• MASTI — ulje, puter, orasi, masno meso. Gusta rezerva energije: oko 9 kalorija po gramu, više nego duplo.
• PROTEINI — meso, jaja, mleko, pasulj. Pre svega gradivo (mišići, enzimi, antitela). Oko 4 kalorije po gramu.

Uz to: VITAMINI i MINERALI (male količine, a bez njih bolesti — skorbut bez vitamina C, slabokrvnost bez gvožđa), VLAKNA (za creva i bakterije u njima) i VODA.

KALORIJA je samo jedinica za energiju — ista ona energija koja se ne gubi, samo menja oblik (oblast 1).`,
pr:{p:'Koja grupa hrane ima najviše energije po gramu?', o:['Ugljeni hidrati','Masti','Proteini'], t:1, z:'Masti imaju oko 9 kalorija po gramu, a ugljeni hidrati i proteini oko 4.'}},
{n:'Put hrane', t:`• USTA: zubi usitnjavaju, a enzim u pljuvački već počinje da razlaže skrob (zato hleb, kad ga dugo žvaćeš, postane sladak).
• ŽELUDAC: jaka kiselina ubija većinu mikroba i počinje razlaganje proteina.
• TANKO CREVO: dugo nekoliko metara, iznutra naborano u milione sitnih resica. Tu se upija NAJVEĆI DEO hrane u krv.
• DEBELO CREVO: upija vodu i soli, a u njemu živi ogroman broj bakterija — MIKROBIOM. One razlažu vlakna koja mi ne možemo i prave neke vitamine. Nauka o mikrobiomu je mlada; mnogo se obećava, a mnogo manje je dokazano.

Ceo put traje od jednog do tri dana.`,
pr:{p:'Gde se upija najveći deo hrane?', o:['U želucu','U tankom crevu','U debelom crevu'], t:1, z:'Tanko crevo, sa milionima resica, upija najveći deo hranljivih materija u krv.'}},
{n:'Gde ide energija', t:`METABOLIZAM je zbir svih hemijskih procesa u telu. Na šta troši energiju?

• OSNOVNI METABOLIZAM — sam život u mirovanju: srce, disanje, mozak, održavanje toplote. To je najveći deo, oko dve trećine dnevne potrošnje. Samo mozak, iako je 2% težine, troši oko 20%.
• KRETANJE — od šetnje do rada. Kod većine ljudi manji deo nego što misle.
• VARENJE same hrane — desetak procenata.

Osnovno pravilo: ako uneseš više energije nego što potrošiš, višak se čuva — najviše kao masno tkivo. Ali telo nije prost kalkulator: san, stres, hormoni i vrsta hrane menjaju koliko si gladan i koliko trošiš. Zato „samo jedi manje" zvuči lako, a nije.`,
pr:{p:'Na šta telo troši najveći deo energije?', o:['Na fizički rad i vežbanje','Na osnovni metabolizam — rad organa u mirovanju','Na varenje hrane'], t:1, z:'Oko dve trećine ide na sam život u mirovanju: srce, disanje, mozak, toplotu.'}},
{n:'Šećer u krvi', t:`Posle obroka šećer u krvi raste. Gušterača tada pušta INSULIN, koji ga „sklanja" u ćelije i u rezervu. Za par sati nivo se vrati.

Ali brzina je bitna:
• BRZI ŠEĆERI — sok, gazirano piće, beli hleb, kolači — naglo podignu šećer, insulin ga naglo obori, i ubrzo si opet gladan i umoran.
• VLAKNA, PROTEINI i MASTI usporavaju upijanje, pa je talas blaži i sitost duža.

DIJABETES TIPA 2 (najčešći): ćelije vremenom sve slabije reaguju na insulin, pa šećer ostaje visok. Povezan je sa viškom kilograma, manjkom kretanja i genima. Dobra vest: navikama se može sprečiti ili znatno odložiti.`,
pr:{p:'Zašto posle slatkog brzo opet ogladniš?', o:['Jer slatko nema kalorija','Jer šećer naglo skoči pa naglo padne','Jer šećer smanjuje želudac'], t:1, z:'Brz skok šećera izaziva brz talas insulina i pad — a pad se oseća kao glad i umor.'}},
{n:'Šta nauka zaista zna', t:`O ishrani ima više mišljenja nego o fudbalu. Šta je ipak prilično sigurno:

• Važan je OBRAZAC, ne jedna namirnica. Više povrća, voća, mahunarki (pasulj, sočivo), integralnih žitarica i orašastih plodova; manje prerađenog mesa (salame, viršle), zaslađenih pića i jako prerađene hrane.
• Nema čudotvorne namirnice ni dijete koja svima odgovara.
• Naslovi „kafa leči" ili „jaja ubijaju" uglavnom dolaze iz slabih studija — o tome kako ih čitati u poslednjoj lekciji ove oblasti.
• KADA jedeš takođe je bitno: noćni rad remeti unutrašnji sat, a sa njim i to kako telo prerađuje šećer. Zato je kod smena korisno imati stalne obroke i ne jesti teško usred noći (više o unutrašnjem satu u lekciji o snu).

Kratko pravilo novinara Majkla Polana: „Jedi hranu. Ne previše. Uglavnom biljke."`,
pr:{p:'Šta je najpouzdaniji zaključak nauke o ishrani?', o:['Postoji jedna čudotvorna namirnica','Ukupni obrazac (više biljne, manje prerađene hrane) važniji je od pojedinačne namirnice','Kalorije nisu bitne'], t:1, z:'Studije se najbolje slažu oko obrasca ishrane, a ne oko „super-namirnica".'}}
],
kljucno:['Makronutrijenti: ugljeni hidrati i proteini oko 4 kcal/g, masti oko 9 kcal/g; plus vitamini, minerali, vlakna, voda.','Najveći deo hrane se upija u tankom crevu; u debelom žive bakterije (mikrobiom).','Najviše energije ide na osnovni metabolizam; mozak troši oko 20%.','Brzi šećeri daju skok i pad; dijabetes tipa 2 se navikama može sprečiti ili odložiti.','Važan je obrazac ishrane, ne čudotvorna namirnica; bitno je i kada jedeš.'],
kartice:[
{p:'Koliko kalorija po gramu imaju masti, a koliko ugljeni hidrati i proteini?', o:'Masti oko 9; ugljeni hidrati i proteini oko 4.'},
{p:'Gde se upija najveći deo hrane?', o:'U tankom crevu.'},
{p:'Na šta telo troši najviše energije?', o:'Na osnovni metabolizam — rad organa u mirovanju.'},
{p:'Šta je dijabetes tipa 2?', o:'Ćelije slabije reaguju na insulin, pa šećer u krvi ostaje visok.'},
{p:'Polanovo pravilo o ishrani?', o:'„Jedi hranu. Ne previše. Uglavnom biljke."'}
],
razgovor:['Kako smene utiču na to kada i šta jedeš? Šta si primetio na sebi?','Seti se jedne „istine" o hrani koju si čuo. Da li je, posle ove lekcije, i dalje vidiš isto?']},

{id:'4-3', naslov:'Imunitet — bakterije, virusi, vakcine, antibiotici',
kuka:{p:'Da li antibiotik pomaže kod gripa?', o:['Da, uvek','Ne — grip izaziva virus, a antibiotik deluje na bakterije','Samo ako je jak antibiotik'], t:1},
delovi:[
{n:'Nevidljivi neprijatelji — i prijatelji', t:`Uzročnici bolesti su četiri vrste:
• BAKTERIJE — sitne žive ćelije. Ogromna većina je bezopasna ili korisna, ali neke izazivaju upalu grla, pluća, mokraćnih puteva.
• VIRUSI — nisu ćelije; ulaze u naše ćelije i teraju ih da prave nove viruse (prehlada, grip, korona, boginje).
• GLJIVICE i PARAZITI.

Da bolesti izazivaju klice, nije se znalo do 19. veka — mislilo se da dolaze od „lošeg vazduha". Luj Paster i Robert Koh su dokazali teoriju klica.

Malo pre njih, mađarski lekar Ignac Semelvajs je 1847. primetio da porodilje mnogo češće umiru na odeljenju gde lekari dolaze pravo iz mrtvačnice. Naredio je pranje ruku hlorom — smrtnost je pala. Kolege su ga ismejale, a on je umro zaboravljen. Danas je pranje ruku osnova medicine.`,
pr:{p:'Ko je uveo pranje ruku u bolnici i zbog toga bio ismejan?', o:['Luj Paster','Ignac Semelvajs','Aleksandar Fleming'], t:1, z:'Semelvajs je 1847. pranjem ruku smanjio smrtnost porodilja, ali mu kolege nisu verovale.'}},
{n:'Prva linija odbrane', t:`Pre nego što uljez uopšte uđe, dočekaju ga zidovi: KOŽA, SLUZ u nosu i plućima, KISELINA u želucu, enzimi u suzama i pljuvački.

Ako ipak uđe, kreće UROĐENI IMUNITET — brz, ali grub:
• bela krvna zrnca koja gutaju sve što ne prepoznaju kao svoje;
• UPALA: crvenilo, toplota, otok, bol. Sudovi se šire da dovedu pojačanje — to je znak borbe, ne kvar;
• GROZNICA: telo namerno podigne temperaturu, jer mnogi mikrobi tada slabije rastu, a odbrana radi brže.

Groznica je, dakle, oružje, a ne neprijatelj — iako je, kad je previsoka, treba spuštati.`,
pr:{p:'Šta je groznica?', o:['Greška tela','Znak da se telo bori i oruđe odbrane','Uvek opasno stanje koje odmah treba spustiti'], t:1, z:'Povišena temperatura otežava mikrobima i ubrzava odbranu; spušta se kad je previsoka ili iscrpljuje.'}},
{n:'Odbrana koja pamti', t:`Druga linija je STEČENI IMUNITET — spor na početku, ali precizan, i PAMTI.

• B-LIMFOCITI prave ANTITELA — proteine koji se kače tačno na jednog uljeza, kao ključ u bravu, i obeleže ga za uništenje.
• T-LIMFOCITI pronalaze i ubijaju naše ćelije koje su zaražene virusom.
• Posle pobede ostanu MEMORIJSKE ĆELIJE. Kad isti uljez dođe ponovo, odbrana kreće za par dana umesto za nedelju-dve — često toliko brzo da i ne primetiš da si bio izložen.

Zato se neke bolesti, kao male boginje, dobijaju jednom u životu. A grip svake godine? Jer se virus gripa stalno menja — svake godine nosi malo drugačiju „bravu".`,
pr:{p:'Zašto se male boginje dobijaju samo jednom?', o:['Jer virus nestane iz sveta','Jer imuni sistem pamti uljeza pomoću memorijskih ćelija','Jer telo postane prejako'], t:1, z:'Memorijske ćelije prepoznaju isti virus i odbrana kreće mnogo brže.'}},
{n:'Vakcine', t:`Vakcina je TRENING bez prave bolesti: telu se pokaže oslabljen ili mrtav uljez, njegov deo, ili uputstvo da ćelije same naprave jedan njegov deo. Imuni sistem napravi memorijske ćelije — i spreman je kad dođe pravi.

• 1796. Edvard Džener je primetio da muzilje koje su preležale blage kravlje boginje ne dobijaju smrtonosne velike boginje — i napravio prvu vakcinu.
• Velike boginje su vakcinacijom IZBRISANE sa lica Zemlje 1980. Jugoslavija je 1972. imala jednu od poslednjih velikih epidemija u Evropi; zaustavljena je masovnom vakcinacijom miliona ljudi za nekoliko nedelja.
• KOLEKTIVNI IMUNITET: kad je dovoljno ljudi vakcinisano, bolest ne može da se širi — pa su zaštićeni i oni koji ne smeju da prime vakcinu (bebe, bolesni).

Nuspojave postoje, uglavnom blage, a retke ozbiljne se prate. Priča o vakcinama i autizmu potiče iz jedne studije iz 1998. koja je bila lažirana — povučena je, a autor je izgubio lekarsku dozvolu. Veze nema.`,
pr:{p:'Kako radi vakcina?', o:['Direktno ubija viruse u krvi','Trenira imuni sistem da prepozna uljeza bez prave bolesti','Zamenjuje imuni sistem'], t:1, z:'Vakcina pravi memorijske ćelije, pa je odbrana spremna kad dođe pravi uzročnik.'}},
{n:'Antibiotici', t:`1928. Aleksandar Fleming se vratio sa odmora i u jednoj zaboravljenoj posudi sa bakterijama našao buđ — a oko nje bakterije mrtve. Ta buđ je pravila PENICILIN. Od 1940-ih antibiotici su spasli stotine miliona života: upala pluća, zaražena rana i porođaj prestali su da budu česte smrtne presude.

Ali:
• Antibiotici deluju samo na BAKTERIJE. Na viruse ne — znači ne pomažu kod prehlade ni gripa.
• Svako nepotrebno uzimanje i svaki prekinut ciklus gaje OTPORNE bakterije (prirodna selekcija iz oblasti 3). Već danas postoje infekcije za koje skoro nijedan antibiotik ne deluje.

Pravila su prosta: antibiotik samo kad ga lekar propiše, tačno kako je propisano, do kraja.`,
pr:{p:'Zašto antibiotik ne pomaže kod prehlade?', o:['Jer je prehlada preblaga','Jer prehladu izazivaju virusi, a antibiotici deluju na bakterije','Jer se mora uzeti injekcijom'], t:1, z:'Antibiotici napadaju delove bakterija kojih virusi nemaju.'}}
],
kljucno:['Uzročnici: bakterije, virusi, gljivice, paraziti; teorija klica (Paster, Koh), pranje ruku (Semelvajs).','Prva linija: koža, sluz, kiselina; upala i groznica su znaci borbe.','Stečeni imunitet: antitela i T-ćelije; memorijske ćelije pamte uljeza.','Vakcina je trening bez bolesti; velike boginje izbrisane 1980; autizam — lažirana studija.','Antibiotici samo na bakterije; zloupotreba gaji otporne bakterije.'],
kartice:[
{p:'Razlika između bakterije i virusa?', o:'Bakterija je živa ćelija; virus nije ćelija i razmnožava se samo u našim ćelijama.'},
{p:'Čemu služi groznica?', o:'Otežava rast mikroba i ubrzava odbranu tela.'},
{p:'Šta rade memorijske ćelije?', o:'Pamte uljeza, pa je odbrana pri sledećem susretu mnogo brža.'},
{p:'Šta je kolektivni imunitet?', o:'Kad je dovoljno ljudi imuno, bolest ne može da se širi — zaštićeni su i nevakcinisani.'},
{p:'Zašto antibiotik ne deluje na grip?', o:'Grip je virus; antibiotici deluju samo na bakterije.'}
],
razgovor:['Semelvajsu nisu verovali iako je bio u pravu. Zašto ljudi odbijaju dokaz koji im ne prija?','Kako bi kratko objasnio nekome razliku između bakterije i virusa i zašto mu antibiotik za grip ne treba?']},

{id:'4-4', naslov:'Mozak, nervi i san',
kuka:{p:'Otprilike koliko nervnih ćelija (neurona) ima ljudski mozak?', o:['Oko 10 miliona','Oko milijardu','Oko 86 milijardi'], t:2},
delovi:[
{n:'Neuron', t:`NEURON je ćelija koja prenosi poruke električnim signalima. Ima „antene" (dendrite) koje primaju poruke i jedan dugačak „kabl" (akson) koji ih šalje dalje — ponekad metar dug, od kičme do nožnog prsta.

Između dva neurona je sićušan razmak, SINAPSA. Električni signal ga ne preskače, nego se na kraju pretvori u hemiju: pušta se NEUROTRANSMITER (dopamin, serotonin, adrenalin…) koji prepliva razmak i pali ili gasi sledeći neuron. Većina lekova za psihu i mnoge droge rade baš ovde.

U mozgu je oko 86 milijardi neurona i stotine hiljada milijardi veza među njima. Mozak je oko 2% težine tela, a troši oko 20% energije — skupo odeljenje.`,
pr:{p:'Kako se poruka prenosi preko sinapse?', o:['Električnom varnicom koja preskoči','Hemijskim prenosiocima — neurotransmiterima','Krvlju'], t:1, z:'Električni signal se na kraju neurona pretvori u hemijsku poruku koja prepliva razmak.'}},
{n:'Delovi mozga', t:`Mozak je građen kao kuća koja se dograđivala:

• MOŽDANO STABLO — najstariji deo, spojen sa kičmom. Disanje, rad srca, budnost. Radi sam.
• MALI MOZAK — pozadi, ispod. Ravnoteža i fini pokreti (vožnja, kucanje, hodanje).
• LIMBIČKI SISTEM — duboko unutra. AMIGDALA pali strah i alarm; HIPOKAMPUS upisuje nova sećanja.
• KORA — naborani spoljni sloj. Opažanje, jezik, mišljenje, planiranje. Prednji deo, iza čela (PREFRONTALNA KORA), je kočnica i planer: odlaže zadovoljstvo, procenjuje posledice. Poslednja sazri — tek oko 25. godine. Zato su mladi skloniji riziku.

Mit: „koristimo samo 10% mozga". Ne — snimci pokazuju da tokom dana radi ceo mozak, samo ne sve odjednom.`,
pr:{p:'Da li koristimo samo 10% mozga?', o:['Da, ostalo je rezerva','Ne, to je mit — radi ceo mozak, samo ne sve odjednom','Da, ali samo dok spavamo'], t:1, z:'Snimanja pokazuju aktivnost u svim delovima mozga tokom dana.'}},
{n:'Mozak se menja', t:`Dugo se verovalo da je mozak odraslog čoveka gotov. Nije. PLASTIČNOST znači da se veze stalno jačaju, slabe i prave nove, celog života.

Pravilo koje se pamti: „Neuroni koji pale zajedno — povezuju se zajedno." Što više nešto radiš, veza je jača i brža.

Poznata studija: londonski taksisti, koji godinama uče hiljade ulica napamet, imaju zadnji deo hipokampusa (prostorno pamćenje) veći nego ljudi koji ne voze — i to veći što duže voze.

Zato je učenje doslovno PREUREĐIVANJE mozga. I zato ova aplikacija traži prisećanje i ponavljanje: svaki put kad nešto izvučeš iz glave, utabavaš stazu.`,
pr:{p:'Šta je plastičnost mozga?', o:['Mozak je mekan','Sposobnost mozga da menja veze celog života','Mozak raste samo do 25. godine'], t:1, z:'Veze među neuronima jačaju, slabe i nastaju nove — učenje je fizička promena mozga.'}},
{n:'Šta radi san', t:`San nije isključen mozak. Mozak tada radi drugačije, u ciklusima od oko 90 minuta:

• DUBOKI SAN — telo se obnavlja, luči se hormon rasta, a mozak se „pere": tečnost između ćelija ispira otpadne materije koje se nagomilaju tokom dana.
• REM SAN — oči se brzo kreću, sanjamo najživlje. Mozak sređuje sećanja i emocije iz dana.

Odraslima treba 7 do 9 sati. Posle neprospavane noći pati sve: pažnja, pamćenje, raspoloženje, šećer u krvi, imunitet, pritisak.

Podatak koji vredi zapamtiti: posle 17–19 sati bez sna, brzina reakcija je otprilike kao sa pola promila alkohola u krvi. Umoran vozač je pijan vozač.`,
pr:{p:'Šta mozak radi tokom dubokog sna?', o:['Ništa, odmara se potpuno','Ispira otpadne materije, a telo se obnavlja','Samo sanja'], t:1, z:'U dubokom snu mozak se „pere", a telo luči hormon rasta i obnavlja se.'}},
{n:'Unutrašnji sat i smene', t:`U mozgu postoji UNUTRAŠNJI SAT koji otkucava oko 24 sata i određuje kada si pospan, gladan, budan, kada raste temperatura i hormoni. Najjači signal koji ga podešava je SVETLO: jutarnje svetlo ga „navije", a u mraku raste MELATONIN, hormon sna.

Rad u smenama stalno pomera taj sat — kao da stalno putuješ kroz vremenske zone, a da nikud ne ideš. Zato je treća smena teška i kad se naspavaš.

Šta pomaže, po istraživanjima o radu u smenama:
• dnevni san u potpunom mraku i tišini (zavese koje ne propuštaju svetlo, čepovi za uši);
• jako svetlo na početku noćne smene, a PRIGUŠENO SVETLO na putu kući posle nje (naočare za sunce ujutru pomažu da telo ne pomisli da je dan);
• kofein na početku smene, ne pred kraj;
• što stalniji obroci i što stalnije vreme spavanja kad god je moguće.

Kraj ne znači savršen san, nego manje štete.`,
pr:{p:'Šta najjače podešava unutrašnji sat?', o:['Hrana','Svetlo','Kafa'], t:1, z:'Svetlo je glavni signal; u mraku raste melatonin. Zato se posle noćne smene preporučuje prigušeno svetlo.'}}
],
kljucno:['Neuroni šalju električne signale, a preko sinapse hemijske (neurotransmiteri); oko 86 milijardi neurona.','Delovi: stablo (automatika), mali mozak (pokret), limbički (strah, pamćenje), kora (mišljenje); prefrontalna kora sazreva oko 25.','Plastičnost: veze se menjaju celog života — učenje je fizička promena mozga.','San ima duboku fazu (čišćenje, obnova) i REM (sećanja, emocije); 17–19 sati bez sna ≈ pola promila.','Unutrašnji sat podešava svetlo; kod smena pomažu mrak za san, svetlo na početku i prigušeno posle noćne smene.'],
kartice:[
{p:'Šta je sinapsa?', o:'Razmak između neurona preko koga poruku nose neurotransmiteri.'},
{p:'Šta radi prefrontalna kora i kad sazri?', o:'Planira i koči impulse; sazreva oko 25. godine.'},
{p:'Šta je plastičnost mozga?', o:'Sposobnost mozga da menja veze celog života.'},
{p:'Čemu služi duboki san?', o:'Obnovi tela i „ispiranju" otpada iz mozga.'},
{p:'Šta najjače podešava unutrašnji sat?', o:'Svetlo.'}
],
razgovor:['Kako ti smene utiču na san i raspoloženje — šta si već primetio da pomaže, a šta ne?','Taksistima raste hipokampus. Koja tvoja svakodnevna veština je verovatno promenila tvoj mozak?']},

{id:'4-5', naslov:'Kako medicina zna šta radi — studije, lekovi, placebo',
kuka:{p:'Komšiji je pomogao neki čaj protiv prehlade. Da li to dokazuje da čaj deluje?', o:['Da, pomogao mu je','Ne — prehlada prolazi i sama, a moguć je i placebo','Da, ako je pio više dana'], t:1},
delovi:[
{n:'Zašto priča nije dokaz', t:`„Meni je pomoglo" je najubedljivija rečenica na svetu — i jedna od najmanje pouzdanih. Zašto?

• MNOGO BOLESTI PROĐE SAMO. Prehlada, bol u leđima, glavobolja — šta god da uzmeš, za nekoliko dana bude bolje.
• POVRATAK KA SREDINI. Lekaru ili travaru odeš kad ti je najgore. Posle najgoreg obično dođe bolje — svejedno šta si uzeo.
• PLACEBO (sledeći deo).

Vekovima su lekari puštali krv bolesnima — i „videli" da pomaže, jer su ljudi i tako ozdravljali. Džordž Vašington je verovatno umro i od toga.

Zato medicini trebaju poređenja, a ne priče.`,
pr:{p:'Zašto „meni je pomoglo" nije dokaz da lek deluje?', o:['Jer ljudi lažu','Jer mnoge bolesti prođu same, a deluje i placebo','Jer je samo jedan lek dozvoljen'], t:1, z:'Bez poređenja ne znaš da li je pomogao lek, vreme ili očekivanje.'}},
{n:'Placebo i nocebo', t:`PLACEBO je lažni lek — šećerna pilula, injekcija vode — koji ipak ume da pomogne, jer mozak OČEKUJE pomoć. Najjači je kod bola, mučnine, umora, nesanice.

Čudnovato:
• skupa „pilula" deluje bolje od jeftine;
• dve pilule bolje od jedne;
• injekcija bolje od pilule.

Postoji i obrnuto, NOCEBO: kad očekuješ štetu, ona dolazi. Ljudi koji pročitaju dugačku listu nuspojava češće ih i osete — i kad su dobili šećernu pilulu.

Ali važno: placebo menja DOŽIVLJAJ (bol, mučninu), ne leči tumor, infekciju ni slomljenu kost.`,
pr:{p:'Šta je nocebo?', o:['Lek bez nuspojava','Kad očekivanje štete izazove simptome','Jača vrsta placeba'], t:1, z:'Očekivanje loših efekata ume da ih izazove — i kad je pilula lažna.'}},
{n:'Pošteno poređenje', t:`Najbolje oruđe medicine je RANDOMIZOVANA KONTROLISANA STUDIJA:
1. Uzmeš veliki broj bolesnih.
2. NASUMIČNO ih podeliš u dve grupe (kockom, ne po svom izboru), da bi grupe bile slične u svemu.
3. Jedna dobija lek, druga placebo ili postojeći lek.
4. DVOSTRUKO SLEPO: ni pacijent ni lekar ne zna ko je šta dobio — da očekivanje ne kvari rezultat.
5. Uporediš ishode.

Prvi poznati takav ogled: 1747. brodski lekar Džejms Lind je mornare bolesne od skorbuta podelio u parove i davao im različite „lekove". Za nekoliko dana ozdravili su samo oni koji su dobijali pomorandže i limun. (Trebalo je još pedesetak godina da britanska mornarica to uvede.)`,
pr:{p:'Šta znači „dvostruko slepa" studija?', o:['Učesnici su slepi','Ni pacijent ni lekar ne znaju ko dobija pravi lek','Studija je urađena dva puta'], t:1, z:'Kad niko ne zna ko šta dobija, očekivanja ne mogu da utiču na rezultat.'}},
{n:'Kako čitati naslov o zdravlju', t:`„Ljudi koji piju vino žive duže!" Tri pitanja pre nego što poveruješ:

1. KORELACIJA ILI UZROK? Možda vino piju ljudi koji su bogatiji, imaju bolju hranu i lekare. Ako je studija samo POSMATRALA ljude, ne zna se šta je uzrok (detaljno u lekciji „Naučni metod").
2. RELATIVNO ILI APSOLUTNO? „Rizik dupliran!" zvuči strašno. Ali ako je rizik bio 1 na 10.000, sad je 2 na 10.000. Uvek pitaj: od koliko na koliko?
3. JEDNA STUDIJA ILI VIŠE? Jedna studija je jedan glas. Pouzdanije su velike analize koje sabiraju mnogo studija (npr. organizacija Kokrejn to radi sistematski).

I četvrto: ko je studiju platio i ko od naslova ima korist?`,
pr:{p:'„Novi lek smanjuje rizik za 50%!" Šta prvo treba pitati?', o:['Koliko lek košta','Koliki je rizik bio na početku — od koliko na koliko','Ko je napisao naslov'], t:1, z:'Pad sa 2 na 1 od 1.000 i pad sa 40 na 20 od 100 su oba „50%", ali nisu isto.'}},
{n:'Put leka do apoteke — i kraj oblasti', t:`Pre nego što lek stigne u apoteku:
1. LABORATORIJA i ŽIVOTINJE — da li uopšte deluje i da li je otrovan.
2. FAZA 1 — mali broj zdravih dobrovoljaca: da li je bezbedan, kako se ponaša u telu.
3. FAZA 2 — stotine bolesnih: da li deluje i u kojoj dozi.
4. FAZA 3 — hiljade bolesnih, poređenje sa placebom ili postojećim lekom.
5. ODOBRENJE agencije, pa FAZA 4 — praćenje posle izlaska, kada se otkriju i retke nuspojave.

Traje 10 do 15 godina, i velika većina kandidata padne usput.

GENERIČKI LEK ima istu aktivnu supstancu kao originalni i mora da dokaže da se u telu ponaša isto — samo je jeftiniji jer je patent istekao.

Kraj oblasti „Telo i zdravlje". Kostur: telo kao sistem u ravnoteži → hrana i energija → odbrana od mikroba → mozak i san → i kako znamo šta zaista leči. Sledeće: ono što taj mozak proizvodi — um.`,
pr:{p:'Šta je generički lek?', o:['Slabija kopija originalnog leka','Lek sa istom aktivnom supstancom kao originalni, samo jeftiniji','Lek bez dozvole'], t:1, z:'Ista supstanca i dokazano isto ponašanje u telu; jeftiniji je jer je patent istekao.'}}
],
kljucno:['Priča „meni je pomoglo" nije dokaz: bolesti prolaze same, povratak ka sredini, placebo.','Placebo menja doživljaj (bol, mučnina), ne leči uzrok; nocebo — očekivanje štete izaziva simptome.','Randomizovana dvostruko slepa studija je zlatni standard (Lind i skorbut, 1747).','Kod naslova pitaj: korelacija ili uzrok, relativni ili apsolutni rizik, jedna ili mnogo studija.','Lek ide kroz faze 1–4 za 10–15 godina; generički lek ima istu supstancu.'],
kartice:[
{p:'Tri razloga zašto „meni je pomoglo" nije dokaz?', o:'Bolest prođe sama, povratak ka sredini, placebo.'},
{p:'Šta je nocebo?', o:'Očekivanje štete koje izazove simptome.'},
{p:'Šta je randomizovana dvostruko slepa studija?', o:'Nasumična podela u grupe, a ni pacijent ni lekar ne zna ko dobija pravi lek.'},
{p:'Šta pitaš kad čuješ „rizik dupliran"?', o:'Od koliko na koliko — koliki je apsolutni rizik.'},
{p:'Koliko traje razvoj novog leka?', o:'Oko 10–15 godina, kroz faze; većina kandidata padne.'}
],
razgovor:['Seti se jednog naslova ili saveta o zdravlju koji si čuo. Kako bi ga sada proverio?','Zašto ljudi više veruju priči komšije nego studiji na hiljadu ljudi? Da li i ti?']}
]},
{id:'5', naziv:'Um', ikona:'🧠', era:'ti, iznutra', lekcije:[
{id:'5-1', naslov:'Šta je psihologija — mozak, um i svest',
kuka:{p:'Koliko je stara psihologija kao nauka sa laboratorijama i eksperimentima?', o:['Oko 2.500 godina','Oko 150 godina','Oko 50 godina'], t:1},
delovi:[
{n:'Od filozofije do laboratorije', t:`Pitanja o duši, misli i osećanju stara su koliko i filozofija: Platon je delio dušu na razum, volju i strast, Dekart je um i telo video kao dve različite stvari.

Ali kao NAUKA, sa merenjem, psihologija je mlada. 1879. Vilhelm Vunt je u Lajpcigu otvorio prvu psihološku laboratoriju i počeo da meri, recimo, koliko brzo ljudi reaguju na zvuk ili svetlo.

Danas je psihologija nauka o PONAŠANJU i DOŽIVLJAJU: kako opažamo, učimo, pamtimo, osećamo, odlučujemo, kako se razvijamo i kako se ponašamo među drugima.`,
pr:{p:'Šta se desilo 1879. u Lajpcigu?', o:['Frojd je objavio prvu knjigu','Vunt je otvorio prvu psihološku laboratoriju','Otkriven je neuron'], t:1, z:'Vunt je počeo da meri ono što se ranije samo razmišljalo — psihologija je postala eksperimentalna nauka.'}},
{n:'Velike škole u jednoj liniji', t:`• PSIHOANALIZA — Sigmund Frojd, kraj 19. veka. Veliki deo psihe je NESVESTAN; potisnute želje i iskustva iz detinjstva oblikuju nas. Ogroman uticaj na kulturu i umetnost, ali većina njegovih konkretnih tvrdnji nije naučno potvrđena.
• BIHEVIORIZAM — Votson, Skiner, prva polovina 20. veka. „Ne nagađaj šta je u glavi, meri ponašanje." Učenje kroz nagradu i kaznu.
• KOGNITIVNA PSIHOLOGIJA — od 1950-ih. Um kao obrada informacija: pažnja, pamćenje, jezik, odlučivanje. Danas osnova.
• Plus: biološka i neuronauka (mozak), evoluciona (zašto smo takvi), socijalna (kako nas menjaju drugi), razvojna (od bebe do starosti).

Svaka škola je videla deo slona. Danas se kombinuju.`,
pr:{p:'Šta je biheviorizam proučavao?', o:['Snove i nesvesno','Samo vidljivo ponašanje i učenje kroz nagradu i kaznu','Gene'], t:1, z:'Bihevioristi su hteli da mere samo ono što se vidi — ponašanje — i kako ga oblikuju nagrade i kazne.'}},
{n:'Um i mozak', t:`Kako iz mokrog, sivog tkiva nastaje doživljaj — ukus kafe, crvena boja, tuga? To je PROBLEM UMA I TELA, a filozof Dejvid Čalmers ga je nazvao „TEŠKI PROBLEM SVESTI". Niko ga nije rešio.

Ono što je jasno: um zavisi od mozga. Najpoznatiji dokaz je slučaj FINIJASA GEJDŽA. 1848. gvozdena šipka mu je kod eksplozije na pruzi prošla kroz glavu, kroz čeoni deo mozga. Preživeo je, hodao i govorio — ali se promenio: od pouzdanog, odmerenog predradnika postao je nestrpljiv i nepouzdan. Prijatelji su rekli: „Gejdž više nije Gejdž."

Danas isto vidimo kod moždanog udara ili demencije: kad se menja mozak, menja se i ličnost. Ali KAKO materija postaje doživljaj — i dalje ne znamo.`,
pr:{p:'Šta je pokazao slučaj Finijasa Gejdža?', o:['Da mozak nije bitan za ličnost','Da oštećenje čeonog dela mozga može promeniti ličnost','Da se mozak potpuno oporavlja'], t:1, z:'Posle povrede čeonog režnja Gejdž je preživeo, ali mu se ličnost promenila — dokaz veze uma i mozga.'}},
{n:'Svesno i nesvesno', t:`Najveći deo onoga što mozak radi — ne vidiš. Vožnja poznatom rutom, prepoznavanje lica, pravila gramatike dok govoriš: sve automatski.

Psiholog Danijel Kaneman (Nobelova nagrada 2002) govori o dva načina mišljenja:
• SISTEM 1 — brz, automatski, intuitivan, bez napora.
• SISTEM 2 — spor, svestan, naporan, logičan.
Više o njima u lekciji o greškama u odlučivanju.

A PAŽNJA je usko grlo. U čuvenom ogledu (1999) ljudi gledaju snimak i broje koliko puta igrači u belom dodaju loptu. Usred snimka kroz igrače prođe čovek u kostimu gorile i lupi se u grudi. Oko polovine gledalaca — ne vidi gorilu.

Nismo kamera. Vidimo ono na šta pazimo.`,
pr:{p:'Šta je pokazao ogled sa „nevidljivom gorilom"?', o:['Da su ljudi slabog vida','Da kad smo usredsređeni na jedno, ne vidimo ni očigledno drugo','Da je snimak bio loš'], t:1, z:'Pažnja je ograničena — oko polovine ljudi ne primeti gorilu dok broji dodavanja.'}},
{n:'Kako psihologija zna šta zna', t:`Psihologija koristi oglede, ankete, posmatranje, praćenje ljudi kroz godine i snimanje mozga. Ali ima posebnu muku: ljudi nisu atomi. Menjaju se kad znaju da ih posmatraš, ne znaju zašto rade ono što rade, a u anketama ulepšavaju.

2015. velika grupa naučnika pokušala je da ponovi 100 objavljenih psiholoških ogleda. Isti rezultat dobili su u nešto više od trećine. To se zove KRIZA PONOVLJIVOSTI. Dobra vest: nauka je sama otkrila svoju slabost i sada se pooštrava.

Za tebe pouka: oprez sa „psihologija kaže" iz novina i sa testovima ličnosti sa interneta. Popularni test koji ljude deli u 16 tipova (MBTI) slabo je pouzdan — isti čovek posle par nedelja često dobije drugi tip. Model koji psiholozi smatraju najpouzdanijim je „VELIKIH PET" crta ličnosti: otvorenost, savesnost, ekstraverzija, prijatnost i emocionalna stabilnost (njena suprotnost se zove neuroticizam).`,
pr:{p:'Koji model ličnosti psiholozi smatraju najpouzdanijim?', o:['Horoskop','Test sa 16 tipova (MBTI)','„Velikih pet" crta ličnosti'], t:2, z:'Velikih pet (otvorenost, savesnost, ekstraverzija, prijatnost, emocionalna stabilnost) ima najviše naučne potvrde.'}}
],
kljucno:['Psihologija je nauka o ponašanju i doživljaju; kao eksperimentalna nauka počinje 1879. (Vunt).','Škole: psihoanaliza (Frojd), biheviorizam, kognitivna psihologija; danas se kombinuju.','Um zavisi od mozga (Finijas Gejdž), ali kako nastaje svest — „teški problem" — ne znamo.','Većina rada mozga je nesvesna; pažnja je ograničena (nevidljiva gorila).','Kriza ponovljivosti: oprez sa „psihologija kaže"; najpouzdaniji model ličnosti je Velikih pet.'],
kartice:[
{p:'Kada i gde je počela eksperimentalna psihologija?', o:'1879, Vuntova laboratorija u Lajpcigu.'},
{p:'Šta je „teški problem svesti"?', o:'Kako iz rada mozga nastaje doživljaj (Čalmers).'},
{p:'Šta pokazuje slučaj Finijasa Gejdža?', o:'Da oštećenje mozga (čeonog dela) može promeniti ličnost.'},
{p:'Šta je pokazao ogled sa nevidljivom gorilom?', o:'Da kad smo usredsređeni, ne vidimo ni očigledne stvari.'},
{p:'Kojih je „Velikih pet" crta ličnosti?', o:'Otvorenost, savesnost, ekstraverzija, prijatnost, emocionalna stabilnost.'}
],
razgovor:['Da li misliš da je svest samo rad mozga, ili nešto više? Zauzmi stav i obrazloži.','Seti se situacije kad nisi video nešto očigledno jer si bio usredsređen na drugo.']},

{id:'5-2', naslov:'Pamćenje i učenje',
kuka:{p:'Koliki deo novog gradiva otprilike zaboraviš za jedan dan, ako ga ne ponavljaš?', o:['Skoro ništa','Veliki deo — često i više od polovine','Baš sve'], t:1},
delovi:[
{n:'Tri skladišta', t:`Pamćenje nije jedna kutija, nego više njih:

• SENZORNO — delić sekunde. Trag slike posle treptaja.
• RADNO (kratkoročno) — „radni sto" svesti. Malo stane: oko 4 stvari odjednom (ranije se govorilo „7 plus-minus 2"). Zato broj telefona pamtiš u grupama.
• DUGOROČNO — bez poznate granice. Deli se na:
  – ono što možeš da ispričaš: činjenice („Pariz je glavni grad Francuske") i događaje („leto u Bečićima");
  – ono što znaš da radiš, a ne umeš da objasniš: vožnja, plivanje, kucanje na tastaturi.

Učenje je, u suštini, prebacivanje sa radnog stola u dugoročno skladište — i pravljenje puta da se ponovo nađe.`,
pr:{p:'Koliko stvari otprilike staje u radnu memoriju odjednom?', o:['Oko 4','Oko 100','Nema granice'], t:0, z:'Radna memorija je uska — oko 4 jedinice; zato grupišemo (brojeve, reči).'}},
{n:'Kriva zaboravljanja', t:`1885. nemački psiholog Herman Ebinghaus je radio ogled na samom sebi: učio je napamet besmislene slogove (ZOF, BIK, DAX…) i merio koliko pamti posle sata, dana, nedelje.

Dobio je KRIVU ZABORAVLJANJA: zaboravljanje je najbrže odmah posle učenja — za dan ode veliki deo — a posle se usporava.

I otkrio je lek: svako PONAVLJANJE posle razmaka izravna krivu. Posle drugog ponavljanja zaborav je sporiji, posle trećeg još sporiji.

Prepoznaješ? To je tačno ono što rade kartice u ovoj aplikaciji: vraćaju ti pitanje posle 1, 3, 7, 21 dana — baš kad bi inače počelo da bledi.`,
pr:{p:'Šta izravnava krivu zaboravljanja?', o:['Jedno dugo učenje u komadu','Ponavljanje sa razmakom','Učenje noću'], t:1, z:'Svako ponavljanje posle pauze usporava zaborav — to je osnova kartica u ovoj aplikaciji.'}},
{n:'Sećanje se ne snima — nego se gradi', t:`Pamćenje nije video-snimak. Svaki put kad se nečega setiš, ti to sećanje ponovo SASTAVIŠ — i malo izmeniš.

Psihološkinja Elizabet Loftus je pokazala koliko je to krhko:
• Kad ljude posle snimka sudara pitaš koliko su brzo kola „razbila" se jedna o drugu, procenjuju veću brzinu nego kad pitaš koliko su brzo „udarila" — a neki se posle „sećaju" i razbijenog stakla kojeg nije bilo.
• U drugom ogledu, uz pomoć rođaka, ljudima je pričano o izmišljenom događaju iz detinjstva — kako su se izgubili u tržnom centru. Otprilike svaki četvrti je počeo da ga se „seća", sa detaljima.

Zato su i živa, sigurna sećanja ponekad netačna, i zato svedoci greše. To ne znači da je sve laž — nego da sigurnost nije dokaz tačnosti.`,
pr:{p:'Šta je pokazala Elizabet Loftus?', o:['Da je pamćenje savršeno','Da se lažna sećanja mogu usaditi i da se sećanja menjaju','Da deca bolje pamte od odraslih'], t:1, z:'Sećanja se pri svakom prisećanju ponovo grade — mogu se izmeniti, pa i izmisliti.'}},
{n:'Šta stvarno pomaže učenju', t:`Ono što deluje (dobro potvrđeno):
• PRISEĆANJE — izvući iz glave, bez gledanja. Najjače oruđe.
• RAZMAK — više kratkih sesija umesto jedne duge.
• MEŠANJE — ne jedna tema do iznemoglosti, nego naizmenično.
• OBJAŠNJAVANJE svojim rečima — kao da učiš nekog drugog.
• SAN posle učenja — mozak tada sređuje naučeno.
• ZNAČENJE i EMOCIJA — pamti se ono što je povezano sa nečim što već znaš ili ti je važno.

Ono što deluje slabo, iako svi rade: ponovno čitanje, podvlačenje, prepisivanje.

A „STILOVI UČENJA" („ja sam vizuelni tip")? Ljudi zaista imaju sklonosti, ali istraživanja nisu našla da učenje „po svom stilu" daje bolje rezultate. Bolje je učiti na način koji gradivu odgovara — mapu gledaj, muziku slušaj, a sve izvlači iz glave.`,
pr:{p:'„Ja sam vizuelni tip, pa učim samo iz slika." Šta kaže nauka?', o:['Tačno, svako treba da uči svojim stilom','Nema dokaza da učenje po „stilu" daje bolje rezultate','Vizuelni tipovi uče najbrže'], t:1, z:'Sklonosti postoje, ali prilagođavanje „stilu" nije pokazalo korist; najviše pomažu prisećanje i razmak.'}},
{n:'Navike: kako učimo ponašanje', t:`Učimo i ponašanja, ne samo činjenice.

• PAVLOV (oko 1900): psi su slinili na zvuk koji je redovno najavljivao hranu. Učenje povezivanjem — zato ti miris neke kuhinje vrati detinjstvo.
• SKINER (sredina 20. veka): ponašanje koje bude nagrađeno — ponavlja se. A najjače drži nagrada koja stiže NASUMIČNO: nekad da, nekad ne. Na tome rade kockarski automati — i telefon. Svaki put kad ga pogledaš, možda je stigla poruka, možda nije. Zato ga gledaš sto puta dnevno.

Navika ima tri dela: ZNAK → RUTINA → NAGRADA (umor posle smene → telefon u krevetu → malo zabave). Znak i nagradu teško je izbrisati, ali RUTINA se može zameniti nečim drugim što daje sličnu nagradu.`,
pr:{p:'Zašto su kockarski automati i notifikacije na telefonu tako zarazni?', o:['Jer su šareni','Jer nagrada stiže nasumično, a to najjače drži naviku','Jer su besplatni'], t:1, z:'Nasumična nagrada (Skiner) najjače učvršćuje ponašanje — mozak stalno „proverava".'}}
],
kljucno:['Pamćenje: senzorno, radno (oko 4 stvari) i dugoročno (činjenice, događaji, veštine).','Kriva zaboravljanja (Ebinghaus): najbrže se zaboravlja odmah; ponavljanje sa razmakom je izravnava.','Sećanja se pri svakom prisećanju ponovo grade — mogu biti izmenjena ili izmišljena (Loftus).','Pomaže: prisećanje, razmak, mešanje, objašnjavanje, san, značenje; „stilovi učenja" su mit.','Navike: znak → rutina → nagrada; nasumična nagrada najjače drži.'],
kartice:[
{p:'Koliko otprilike staje u radnu memoriju?', o:'Oko 4 stvari odjednom.'},
{p:'Šta je kriva zaboravljanja i šta je izravnava?', o:'Brz zaborav odmah posle učenja; izravnava je ponavljanje sa razmakom.'},
{p:'Šta je pokazala Elizabet Loftus?', o:'Da se sećanja menjaju i da se lažna sećanja mogu usaditi.'},
{p:'Koja dva postupka najviše pomažu učenju?', o:'Prisećanje (bez gledanja) i ponavljanje sa razmakom.'},
{p:'Koja tri dela ima navika?', o:'Znak → rutina → nagrada.'}
],
razgovor:['Kao pisac: imaš li sećanje za koje si siguran da je tačno — a možda nije? Šta bi se promenilo da nije?','Koja tvoja navika radi po šemi znak → rutina → nagrada? Šta bi mogla biti druga rutina?']},

{id:'5-3', naslov:'Emocije i motivacija',
kuka:{p:'Koliko osnovnih izraza emocija na licu, po psihologu Polu Ekmanu, prepoznaju ljudi u svim kulturama?', o:['2','Oko 6','Oko 50'], t:1},
delovi:[
{n:'Čemu služe emocije', t:`Emocije nisu ukras ni slabost. To su brzi programi koji telo i mozak u deliću sekunde pripremaju za akciju:
• STRAH — pripremi se da bežiš ili da se smrzneš.
• BES — pripremi se da se boriš, odbraniš granicu.
• GAĐENJE — skloni se od pokvarenog i otrovnog.
• TUGA — uspori, povuci se, pozovi pomoć.
• RADOST — ponovi to, ostani blizu.
• IZNENAĐENJE — stani i pogledaj.

Pol Ekman je 1960-ih pokazao da ovih šest izraza lica prepoznaju ljudi u celom svetu, čak i u zajednicama bez kontakta sa Zapadom. Novija istraživanja kažu da je kultura ipak važnija nego što je on mislio: kako i kada pokazujemo emocije mnogo zavisi od toga gde smo odrasli.`,
pr:{p:'Čemu, evoluciono, služe emocije?', o:['Da nas usporavaju u odlukama','Da brzo pripreme telo i mozak za akciju','Ničemu, to je ostatak prošlosti'], t:1, z:'Strah, bes, gađenje i ostale emocije u deliću sekunde pripremaju telo za ono što situacija traži.'}},
{n:'Telo pre misli', t:`Hodaš kroz travu i vidiš nešto dugo i savijeno. Skočiš — pre nego što shvatiš da je to štap.

AMIGDALA (iz lekcije o mozgu) reaguje brže od svesnog mišljenja: srce ubrza, mišići se zategnu, adrenalin krene. Tek posle kora kaže „štap je, smiri se".

Psiholog Vilijam Džejms je još 1884. tvrdio nešto što zvuči naopako: „Ne bežimo zato što se plašimo — plašimo se zato što bežimo." Preterao je, ali je bio u pravu da su telo i osećanje neodvojivi: telo nije samo posledica emocije, nego njen deo.

Jedan koristan nalaz: kad jaku emociju IMENUJEŠ rečima („ovo je bes", „ovo je strah od gubitka"), aktivnost amigdale se smiri. Reči su ručna kočnica.`,
pr:{p:'Šta, po istraživanjima, pomaže da se jaka emocija smiri?', o:['Da je ignorišeš','Da je imenuješ rečima','Da o njoj ne misliš'], t:1, z:'Imenovanje emocije smanjuje aktivnost amigdale — reči deluju kao kočnica.'}},
{n:'Stres', t:`STRES je reakcija tela na zahtev ili pretnju. Sam po sebi nije loš:
• KRATAK stres izoštri pažnju i da snagu — ispit, važan razgovor, hitan slučaj.
• DUGOTRAJAN stres je problem: KORTIZOL ostaje povišen, pa trpe san, imunitet, pritisak, pamćenje i raspoloženje.

Šta stres čini najštetnijim? Ne samo koliko je težak, nego da li imaš OSEĆAJ KONTROLE i da li vidiš kraj. Isti posao je mnogo teži kad ne možeš ništa da promeniš i ne znaš dokle traje.

Šta pomaže, prema istraživanjima:
• kretanje (i šetnja),
• san,
• ljudi oko tebe — razgovor, dodir, pripadnost,
• vraćanje bar malog dela kontrole: plan, spisak, jedan korak koji zavisi od tebe.

Stoici bi rekli isto: razdvoji ono što zavisi od tebe od onoga što ne zavisi.`,
pr:{p:'Šta stres najviše čini štetnim?', o:['Da je kratak i jak','Osećaj da nemaš kontrolu i da ne vidiš kraj','Da se dešava ujutru'], t:1, z:'Dugotrajan stres bez osećaja kontrole drži kortizol povišenim i iscrpljuje telo.'}},
{n:'Šta nas pokreće', t:`Poznata MASLOVLJEVA PIRAMIDA kaže: prvo telo (hrana, san), pa sigurnost, pa pripadnost, pa poštovanje, pa ostvarenje sebe. Lepa slika, ali istraživanja ne potvrđuju da potrebe idu strogo stepenicu po stepenicu — ljudi stvaraju i u siromaštvu.

Danas je bolje potvrđena TEORIJA SAMOODREĐENJA (Deci i Rajan). Ljudi su najmotivisaniji kad su zadovoljene tri potrebe:
1. AUTONOMIJA — da ja biram.
2. KOMPETENCIJA — da umem i napredujem.
3. POVEZANOST — da pripadam, da nekome znači.

Razlikuju se dve vrste motivacije:
• UNUTRAŠNJA — radiš jer ti je samo po sebi zanimljivo ili važno.
• SPOLJAŠNJA — radiš zbog nagrade, plate, pohvale, straha.

Zamka: spoljašnja nagrada ume da ugasi unutrašnju. Deca koja su dobijala nagradu za crtanje, posle su manje crtala sama od sebe. Kad posao postane samo plata — gubi se ono zbog čega si ga voleo.`,
pr:{p:'Koje tri potrebe, po teoriji samoodređenja, pokreću ljude?', o:['Hrana, san, novac','Autonomija, kompetencija, povezanost','Moć, slava, sigurnost'], t:1, z:'Kad imaš izbor, napredak i pripadnost, motivacija je najjača i najtrajnija.'}},
{n:'Šta je sreća — i šta nije', t:`HEDONISTIČKA ADAPTACIJA: navikneš se na skoro sve. Nova kola, povišica, nova kuća — raduju neko vreme, pa postanu „normalno". Isto važi, srećom, i za mnoge nedaće: ljudi se oporave više nego što očekuju.

Šta onda dugoročno ide uz zadovoljstvo životom?
• NAJDUŽA STUDIJA ODRASLIH (Harvard, prati ljude više od 80 godina, od 1938): najbolji pokazatelj zdravog i srećnog života nije novac ni slava, nego KVALITET ODNOSA sa ljudima. Usamljenost je štetna kao pušenje.
• SMISAO — osećaj da ono što radiš nešto znači.
• ZDRAVLJE i san.
• NOVAC — pomaže, naročito kad izvlači iz brige i nesigurnosti; preko toga sve manje.

Nije mnogo drugačije od onoga što su govorili Aristotel (prijateljstvo i vrlina) i stoici. Nauka je stigla tamo gde je filozofija već bila — samo sa brojevima.`,
pr:{p:'Šta je, po najdužoj studiji odraslih (Harvard), najbolji pokazatelj srećnog i zdravog života?', o:['Novac','Kvalitet odnosa sa ljudima','Uspeh na poslu'], t:1, z:'Bliski, dobri odnosi bolje predviđaju zdravlje i sreću od novca i uspeha.'}}
],
kljucno:['Emocije su brzi programi za akciju; šest osnovnih izraza (Ekman), ali kultura je važnija nego što se mislilo.','Telo reaguje pre svesti (amigdala); imenovanje emocije je smiruje.','Kratak stres pomaže, dugotrajan šteti; najgori je bez osećaja kontrole.','Teorija samoodređenja: autonomija, kompetencija, povezanost; spoljašnja nagrada može ugasiti unutrašnju.','Navikavamo se na skoro sve; najbolji pokazatelj srećnog života su dobri odnosi.'],
kartice:[
{p:'Šest osnovnih emocija po Ekmanu?', o:'Radost, tuga, strah, bes, gađenje, iznenađenje.'},
{p:'Šta smiruje jaku emociju?', o:'Da je imenuješ rečima.'},
{p:'Šta stres čini najštetnijim?', o:'Kad traje dugo i nemaš osećaj kontrole.'},
{p:'Tri potrebe iz teorije samoodređenja?', o:'Autonomija, kompetencija, povezanost.'},
{p:'Šta je hedonistička adaptacija?', o:'Navikavanje na dobro i loše, pa se vraćamo na svoj uobičajeni nivo zadovoljstva.'}
],
razgovor:['Šta te pokreće da pišeš — unutrašnja ili spoljašnja motivacija? Šta bi se desilo kad bi pisanje postalo samo posao?','Na šta si se navikao pa više ne primećuješ koliko je dobro — ili koliko je loše?']},

{id:'5-4', naslov:'Zašto grešimo u odlukama',
kuka:{p:'Palica i loptica koštaju zajedno 110 dinara. Palica je 100 dinara skuplja od loptice. Koliko košta loptica?', o:['10 dinara','5 dinara','1 dinar'], t:1},
delovi:[
{n:'Dva sistema', t:`Ako ti je prvo palo na pamet „10 dinara" — nisi sam. Većini ljudi padne. Ali onda bi palica bila 110, a zajedno 120. Tačno je 5 i 105.

Danijel Kaneman (psiholog sa Nobelovom nagradom za ekonomiju 2002) to objašnjava sa dva sistema:
• SISTEM 1 — brz, automatski, bez napora. Prepoznaje lice, oseti opasnost, „zna" da je odgovor 10.
• SISTEM 2 — spor, naporan, logičan. Proverava. Ali je lenj i uključuje se tek kad mora.

Sistem 1 je odličan — bez njega ne bismo preživeli dan. Ali greši PREDVIDIVO, uvek na isti način. Te stalne greške zovu se KOGNITIVNE PRISTRASNOSTI. Upoznajmo najvažnije.`,
pr:{p:'Zašto većini prvo padne na pamet da loptica košta 10?', o:['Zbog loše matematike','Jer brzi, intuitivni sistem 1 skoči na odgovor pre provere','Jer je pitanje pogrešno'], t:1, z:'Sistem 1 nudi lak, „očigledan" odgovor, a lenji sistem 2 ga ne proveri.'}},
{n:'Tražimo ono što već mislimo', t:`PRISTRASNOST POTVRĐIVANJA: tražimo, primećujemo i pamtimo ono što potvrđuje ono u šta već verujemo — a ono što ne potvrđuje, preskočimo ili omalovažimo.

• Ko misli da je neki političar lopov, pamti svaku njegovu aferu; ko ga voli, pamti svaki uspeh.
• Ko veruje da „mlad mesec donosi kišu", pamti kišne mladine, a zaboravi suve.

Internet je ovo pojačao do krajnosti: algoritmi ti nude još više onoga na šta si već kliknuo. Svako živi u svom ogledalu.

Najbolji lek je naporan, ali deluje: NAMERNO TRAŽI NAJJAČI ARGUMENT PROTIV SEBE. Ne slabašnu karikaturu suprotne strane (slamnati čovek iz lekcije o logici), nego najbolju verziju.`,
pr:{p:'Šta je pristrasnost potvrđivanja?', o:['Kad tražimo dokaze protiv sebe','Kad tražimo i pamtimo ono što potvrđuje ono što već verujemo','Kad potvrdimo tuđe mišljenje iz pristojnosti'], t:1, z:'Prirodno skupljamo „dokaze" za ono što već mislimo; lek je namerno tražiti najjači protivargument.'}},
{n:'Sidro i ono čega se lako setimo', t:`SIDRENJE: prvi broj koji čuješ vuče tvoju procenu, i kad nema veze sa stvari.
• „Bilo 5.000, sada samo 2.999!" — 2.999 deluje jeftino jer je pored 5.000.
• U ogledima, ljudi kojima se prvo pokaže veliki broj procenjuju više, i kad znaju da je broj izvučen nasumično.
Kod pregovora: ko prvi kaže broj, baca sidro.

DOSTUPNOST: ono čega se lako setimo, mislimo da je češće.
• Posle vesti o padu aviona ljudi se plaše letenja, a nastavljaju da voze — iako je put kolima mnogo opasniji.
• Posle nekoliko priča o krađama u kraju, deluje da je kriminal porastao, i kad nije.

Vesti biraju ono što je retko i dramatično — zato nam slika sveta iz vesti sistematski greši.`,
pr:{p:'Zašto „sniženo sa 5.000 na 2.999" deluje kao dobar posao?', o:['Jer je zaista uvek jeftino','Jer prvi broj (5.000) služi kao sidro za procenu','Jer volimo neparne brojeve'], t:1, z:'Prvi broj „usidri" procenu — 2.999 izgleda malo u poređenju sa 5.000, bez obzira na pravu vrednost.'}},
{n:'Gubitak boli više', t:`AVERZIJA PREMA GUBITKU: gubitak od 1.000 dinara boli otprilike DVOSTRUKO više nego što dobitak od 1.000 raduje.

Iz toga slede tipične greške:
• POTOPLJENI TROŠAK: „Već sam uložio toliko, ne mogu sad da odustanem." Gledaš loš film do kraja jer si platio kartu; popravljaš auto koji stalno kvari jer si već dao toliko para. Ali uloženo je potrošeno svejedno — pitanje je samo šta je pametno od SADA.
• KOCKAREVA ZABLUDA: posle pet crvenih na ruletu „mora da dođe crno". Ne mora. Kuglica nema pamćenje; šansa je svaki put ista.
• Zadržavanje loših odluka da ne bi morao da priznaš gubitak.

Pitanje koje razbija potopljeni trošak: „Da sad krećem od nule, da li bih ovo izabrao?"`,
pr:{p:'Šta je kockareva zabluda?', o:['Verovanje da se kockom može zaraditi','Verovanje da posle niza crvenih „mora" doći crno','Strah od gubitka'], t:1, z:'Svako bacanje je nezavisno — kuglica ne pamti prošla. Šansa ostaje ista.'}},
{n:'Kako da se braniš', t:`Pristrasnosti ne možeš izbrisati — ugrađene su. Ali ih možeš uhvatiti, naročito kod važnih odluka:

1. USPORI. Ako odluka može da sačeka — prespavaj. Sistem 2 je lenj, daj mu vremena.
2. ZAPIŠI zašto odlučuješ. Lakše je uočiti rupu na papiru nego u glavi.
3. PITAJ: „Šta bi me uverilo da grešim?" Ako ništa — ne razmišljaš, nego braniš.
4. OSNOVNA STOPA: koliko često se ovo inače dešava? (Koliko novih kafića preživi pet godina? Malo — i tvoj je, u početku, jedan od njih.)
5. PITAJ NEKOGA KO SE NE SLAŽE — ne da te ubedi, nego da vidiš šta ne vidiš.
6. „Da krećem od nule, da li bih ovo izabrao?" — protiv potopljenog troška.

Kraj nije u tome da budeš savršeno racionalan, nego da napraviš malo manje skupih grešaka.`,
pr:{p:'Šta je dobra zaštita od sopstvenih pristrasnosti?', o:['Uvek verovati prvom osećaju','Pitati „šta bi me uverilo da grešim?"','Odlučivati što brže'], t:1, z:'Ako ništa ne bi moglo da te uveri da grešiš — ne odlučuješ, nego braniš unapred zauzet stav.'}}
],
kljucno:['Sistem 1 je brz i intuitivan, sistem 2 spor i proverava; sistem 1 greši predvidivo (Kaneman).','Pristrasnost potvrđivanja: tražimo ono što već mislimo; lek je najjači protivargument.','Sidrenje (prvi broj vuče procenu) i dostupnost (lako setivo deluje češće).','Gubitak boli oko dvostruko više od dobitka: potopljeni trošak, kockareva zabluda.','Odbrana: uspori, zapiši, pitaj šta bi te razuverilo, osnovna stopa, tuđe mišljenje.'],
kartice:[
{p:'Koja je razlika između sistema 1 i sistema 2?', o:'Sistem 1 je brz i intuitivan; sistem 2 spor, naporan i logičan.'},
{p:'Šta je pristrasnost potvrđivanja?', o:'Tražimo i pamtimo ono što potvrđuje ono što već verujemo.'},
{p:'Šta je sidrenje?', o:'Prvi broj koji čujemo vuče našu procenu.'},
{p:'Šta je potopljeni trošak?', o:'Nastavljanje nečega samo zato što smo već mnogo uložili.'},
{p:'Koje pitanje štiti od potopljenog troška?', o:'„Da krećem od nule, da li bih ovo izabrao?"'}
],
razgovor:['Seti se odluke kad si nastavio nešto samo zato što si već mnogo uložio. Šta bi danas uradio?','U kojoj temi si najskloniji da tražiš samo potvrdu? Budi iskren.']},

{id:'5-5', naslov:'Jezik — šta je, kako ga dete uči, kako se menja',
kuka:{p:'Otprilike koliko jezika se danas govori u svetu?', o:['Oko 200','Oko 7.000','Oko 50.000'], t:1},
delovi:[
{n:'Šta je jezik', t:`Mnoge životinje komuniciraju: pčela plesom pokaže gde je cveće, majmuni imaju različite krike za orla i za zmiju. Ali ljudski jezik ima nešto što nijedna nema: od KONAČNOG broja reči i pravila pravi BESKONAČNO MNOGO rečenica — i one koje niko nikad nije izgovorio. Ovu rečenicu verovatno niko pre tebe nije pročitao, a ipak je razumeš.

Još jedna osobina: reči su PROIZVOLJNE. Reč „pas" nema u sebi ništa pseće — Englez kaže „dog", Nemac „Hund". Dogovor zajednice, ne priroda.

Danas se u svetu govori oko 7.000 jezika. Polovina ljudi govori samo dvadesetak najvećih, a veliki deo malih jezika je ugrožen — kad umre poslednji govornik, nestaje ceo način da se svet imenuje.`,
pr:{p:'Šta ljudski jezik razlikuje od komunikacije životinja?', o:['Ljudi koriste zvuk','Od konačno mnogo reči i pravila pravi beskonačno mnogo novih rečenica','Ljudi imaju više signala za opasnost'], t:1, z:'Gramatika omogućava da se kombinuje beskonačno — i da razumeš rečenicu koju nikad nisi čuo.'}},
{n:'Spratovi jezika', t:`Lingvistika — nauka o jeziku — gleda jezik po spratovima:

• GLASOVI (fonetika i fonologija). Srpski ima 30 glasova i, zahvaljujući Vuku, skoro savršeno pismo: „Piši kao što govoriš."
• OBLICI REČI (morfologija): pas, psa, psu, psom — sedam padeža. Englezu košmar, nama normalno.
• REČENICE (sintaksa): kako se reči slažu. „Pas je ujeo čoveka" i „Čoveka je ujeo pas" — iste reči, isto značenje, drugi naglasak.
• ZNAČENJE (semantika).
• UPOTREBA (pragmatika): „Imaš li sat?" ne pita da li poseduješ sat, nego koliko je sati. Značenje zavisi od situacije i namere — nešto što pisac radi stalno, kroz podtekst.`,
pr:{p:'Šta proučava pragmatika?', o:['Glasove','Oblike reči','Kako značenje zavisi od situacije i namere'], t:2, z:'„Imaš li sat?" — pravo značenje (koliko je sati) daje situacija, ne same reči.'}},
{n:'Jezici rođaci', t:`1786. britanski sudija u Indiji, Vilijam Džons, primetio je da su stari indijski sanskrit, grčki i latinski toliko slični da moraju imati zajedničkog pretka.

Tako je otkrivena INDOEVROPSKA porodica — srpski, ruski, engleski, nemački, francuski, grčki, persijski, hindi — svi potiču od jednog jezika koji se govorio pre oko 6.000 godina. Pogledaj:
mati — mother — Mutter · tri — three — drei · noć — night — Nacht · brat — brother — Bruder.

Jezici se stalno menjaju, kao i vrste. Iz staroslovenskog su izrasli današnji slovenski jezici. Nema „pokvarenog" jezika, samo promene — svaka generacija misli da mlađi kvare jezik, i svaka se vara.

Srpski, hrvatski, bosanski i crnogorski su lingvistički veoma bliski i govornici se bez muke razumeju. Da li su to jedan ili više jezika — to je u velikoj meri pitanje politike i identiteta, ne same lingvistike.`,
pr:{p:'Šta je zajedničko srpskom, engleskom i hindiju?', o:['Ništa','Pripadaju istoj, indoevropskoj porodici jezika','Isto pismo'], t:1, z:'Svi potiču od jezika koji se govorio pre oko 6.000 godina — zato mati, mother i Mutter liče.'}},
{n:'Kako dete uči jezik', t:`Dete do četvrte-pete godine savlada složenu gramatiku — bez ijednog časa, bez udžbenika. Kako?

Ključni trag su GREŠKE. Dete kaže „ja sam idao" ili „dođao sam". To nikad nije čulo od odraslih! Znači da ne ponavlja samo, nego samo IZVODI PRAVILA i primenjuje ih i tamo gde jezik pravi izuzetak.

Dve velike struje objašnjenja:
• Noam Čomski: čovek se rađa sa urođenom sposobnošću za jezik, a iskustvo samo podešava detalje.
• Drugi: dečji mozak je izuzetan statističar — iz hiljada sati slušanja izvlači obrasce.
Verovatno oboje.

Bebe na rođenju razlikuju glasove svih jezika sveta; oko prve godine se „suze" na glasove svog jezika. A što više reči beba čuje upućenih NJOJ — u razgovoru, pričanju, čitanju — to joj se jezik bolje razvija. Najbolja oprema za to je glas roditelja.`,
pr:{p:'Šta pokazuju dečje greške kao „ja sam idao"?', o:['Da dete loše čuje','Da dete samo izvodi pravila gramatike, a ne samo ponavlja','Da je gramatika nebitna'], t:1, z:'Takve oblike dete nije čulo — samo je primenilo pravilo tamo gde jezik ima izuzetak.'}},
{n:'Jezik i misao — i kraj oblasti', t:`Da li jezik kojim govoriš menja to kako misliš? To je stara HIPOTEZA SAPIRA I VORFA.

• Jaka verzija — jezik ODREĐUJE šta možeš da misliš — odbačena je. Možeš misliti i ono za šta nemaš reč; zato uopšte izmišljamo nove reči.
• Blaga verzija — jezik UTIČE na pažnju, opažanje i pamćenje — ima potvrde. Ruski ima dve odvojene osnovne reči za svetloplavu i tamnoplavu, i Rusi u ogledima brže razlikuju te nijanse. Neki jezici opisuju prostor strane sveta („šolja ti je severno od tanjira"), pa njihovi govornici uvek znaju gde je sever.

Za pisca: reči nisu samo odelo misli. Ponekad je reč ta koja tek napravi misao.

Kraj oblasti „Um". Kostur: kako psihologija proučava um → kako pamtimo i učimo → šta nas pokreće i kako osećamo → zašto predvidivo grešimo → i jezik, kojim sve to mislimo i delimo.

Sledeće: kako je taj um, za 300.000 godina, napravio istoriju.`,
pr:{p:'Šta istraživanja kažu o tome da li jezik utiče na mišljenje?', o:['Jezik potpuno određuje šta možemo da mislimo','Jezik ne određuje mišljenje, ali utiče na pažnju i opažanje','Jezik nema nikakve veze sa mišljenjem'], t:1, z:'Jaka verzija Sapir-Vorfove hipoteze je odbačena; blaga — uticaj na pažnju i opažanje — ima potvrde.'}}
],
kljucno:['Jezik od konačnih reči i pravila pravi beskonačno mnogo rečenica; reči su proizvoljne; oko 7.000 jezika.','Spratovi: glasovi, oblici, rečenice, značenje, upotreba (pragmatika).','Indoevropska porodica: srpski, engleski, hindi imaju zajedničkog pretka od pre oko 6.000 godina; jezici se stalno menjaju.','Dete izvodi pravila (greške „idao"); urođena sposobnost i statističko učenje; bebi pomaže mnogo reči upućenih njoj.','Jezik ne određuje mišljenje, ali utiče na pažnju i opažanje.'],
kartice:[
{p:'Šta je posebno u ljudskom jeziku?', o:'Od konačno mnogo reči i pravila pravi beskonačno mnogo novih rečenica.'},
{p:'Šta proučava pragmatika?', o:'Kako značenje zavisi od situacije i namere.'},
{p:'Koja porodica jezika povezuje srpski, engleski i hindi?', o:'Indoevropska.'},
{p:'Šta pokazuju dečje greške kao „idao"?', o:'Da dete samo izvodi pravila gramatike.'},
{p:'Šta danas važi za Sapir-Vorfovu hipotezu?', o:'Jezik ne određuje mišljenje, ali utiče na pažnju i opažanje.'}
],
razgovor:['Kao pisac: da li ti se desilo da reč promeni misao, a ne obrnuto? Daj primer.','Kako bi nekome objasnio da „pokvaren jezik" ne postoji, nego samo jezik koji se menja?']}
]},
{id:'6', naziv:'Kako smo stigli dovde', ikona:'🏛️', era:'300.000 god. → 1900.', lekcije:[
{id:'6-1', naslov:'Poreklo čoveka i lovci-sakupljači',
kuka:{p:'Koliko dugo, otprilike, postoji naša vrsta — Homo sapiens?', o:['Oko 6.000 godina','Oko 300.000 godina','Oko 3 miliona godina'], t:1},
delovi:[
{n:'Rođaci, ne potomci majmuna', t:`Najčešća zabluda: „čovek je postao od majmuna". Nije. Čovek i šimpanza imaju ZAJEDNIČKOG PRETKA koji je živeo u Africi pre oko 6–7 miliona godina. Od njega su se razdvojile dve loze: jedna je vodila do šimpanzi, druga do nas. Šimpanza nam je rođak, ne deda.

Na našoj liniji bilo je mnogo vrsta. Nisu išle u jednom redu, „jedna za drugom", nego kao grane žbuna — neke su živele istovremeno, većina je izumrla bez potomaka.

Prvo je došao USPRAVAN HOD, tek kasnije VELIKI MOZAK. Najpoznatija fosilna „baka" je LUSI, australopitek iz Etiopije, stara oko 3,2 miliona godina: hodala je na dve noge, a mozak joj je bio veličine šimpanzinog.`,
pr:{p:'Kakav je odnos čoveka i šimpanze?', o:['Čovek je nastao od šimpanze','Imaju zajedničkog pretka od pre 6–7 miliona godina','Nisu nikako povezani'], t:1, z:'Šimpanza nam je rođak — obe vrste potiču od istog pretka, pa su se loze razdvojile.'}},
{n:'Od kamena do vatre', t:`Rod HOMO („čovek") pojavljuje se pre oko 2,5 miliona godina, sa prvim kamenim alatkama — oštrim odbijenim komadima kamena za sečenje mesa.

HOMO EREKTUS (pre oko 1,9 miliona godina) imao je telo skoro kao naše, pravio bolje alatke i prvi je izašao iz Afrike — stigao je do Kine i Jave.

Najveći skok: VATRA. Tragovi upotrebe vatre stari su oko milion godina, a redovna upotreba je tu pre oko 400.000 godina. Vatra greje, tera zveri, a najviše od svega — KUVA. Kuvana hrana se lakše vari, pa telo dobija više energije uz manje creva. Neki naučnici misle da je baš to hranilo sve veći mozak.

Naša vrsta, HOMO SAPIENS, pojavljuje se u Africi pre oko 300.000 godina (najstariji nalazi su iz Maroka).`,
pr:{p:'Zašto je vatra bila toliki skok?', o:['Samo zbog svetla noću','Kuvana hrana daje više energije, a vatra još greje i štiti','Zbog pravljenja metala'], t:1, z:'Kuvanje olakšava varenje i daje više energije — a vatra usput greje i tera zveri.'}},
{n:'Izlazak iz Afrike', t:`Pre oko 60–70.000 godina male grupe sapijensa krenule su iz Afrike i za desetine hiljada godina naselile ceo svet: Aziju, Evropu, Australiju (pre oko 50.000 godina, preko mora!), a Ameriku poslednju, pre najmanje 15–20.000 godina, preko kopna koje je tada spajalo Sibir i Aljasku.

Nisu bili sami. U Evropi i zapadnoj Aziji živeli su NEANDERTALCI — snažni, sa mozgom velikim kao naš, sahranjivali su mrtve i pravili nakit. Nestali su pre oko 40.000 godina. Ali ne potpuno: sapijensi i neandertalci su imali zajedničku decu. Svaki čovek čiji su preci van Afrike nosi oko 1–2% neandertalske DNK.

I još nešto: svi ljudi danas su genetski vrlo bliski — mnogo bliži nego dve grupe šimpanzi iz susednih šuma. Razlike koje nas „dele" na rase su tanak sloj na površini.`,
pr:{p:'Šta se desilo sa neandertalcima?', o:['Izumrli su bez traga','Nestali su pre oko 40.000 godina, ali deo njihove DNK nosimo i mi','Žive i danas u planinama'], t:1, z:'Sapijensi i neandertalci su imali zajedničku decu — zato ljudi van Afrike nose 1–2% neandertalske DNK.'}},
{n:'Kako su živeli lovci-sakupljači', t:`Više od 95% vremena koje postojimo, ljudi su bili LOVCI-SAKUPLJAČI: lov, ribolov, skupljanje plodova, korenja i meda. Živeli su u malim grupama od nekoliko desetina ljudi, selili se za hranom i imali malo stvari — sve što imaš, moraš da nosiš.

Istraživanja današnjih lovaca-sakupljača pokazuju: ishrana raznovrsna, a uglavnom veća jednakost nego kasnije — nema kraljeva, nema bogataša. Ali i surovo: mnogo dece je umiralo, a sukobi između grupa nisu bili retki. Ni raj, ni pakao.

Pre oko 40–50.000 godina eksplodira simbolički svet: pećinski crteži (Šove u Francuskoj, preko 30.000 godina; još stariji na ostrvu Sulavesi), figurice, frule od kosti, nakit. Ljudi pričaju priče, crtaju i — verovatno — veruju.

Naše telo i um su uglavnom oblikovani za taj život. Zato volimo slatko i masno (retko i dragoceno tada), zato smo dobri u malim grupama i čitanju lica, a lošiji u brojkama i dugom sedenju.`,
pr:{p:'Koliki deo ljudske istorije smo bili lovci-sakupljači?', o:['Oko polovine','Više od 95%','Oko 10%'], t:1, z:'Poljoprivreda je stara samo oko 12.000 godina, a vrsta oko 300.000 — ostalo je bio lov i sakupljanje.'}},
{n:'Lepenski Vir — i kraj jednog sveta', t:`Na Dunavu, u Đerdapu, nalazi se LEPENSKI VIR — naselje ribara i lovaca, naseljavano hiljadama godina. Najpoznatija faza, stara oko 8.000 godina, ostavila je kuće trapeznog oblika, ognjišta, i čuvene kamene skulpture sa ljudskim licem i ribljim crtama. Jedna od najvažnijih praistorijskih lokacija u Evropi.

Lepenski Vir je zanimljiv i zato što se vidi PRELAZ: kasniji slojevi pokazuju dolazak ratara i stočara. Svet lovaca polako se gasi i počinje nešto novo.

Kostur do sada: zajednički predak sa šimpanzom → uspravan hod → alatke i vatra → sapijens u Africi → naselili ceo svet → umetnost i simboli. Sve to bez ijednog grada i ijedne njive.

Sledeće: zašto smo posle 290.000 godina lutanja odjednom seli i počeli da oremo.`,
pr:{p:'Šta je Lepenski Vir?', o:['Rimski grad','Praistorijsko naselje ribara i lovaca na Dunavu, sa kućama i skulpturama starim oko 8.000 godina','Srednjovekovni manastir'], t:1, z:'Lepenski Vir u Đerdapu je mezolitsko naselje sa poznatim kamenim skulpturama i tragovima prelaza na zemljoradnju.'}}
],
kljucno:['Čovek i šimpanza imaju zajedničkog pretka od pre 6–7 miliona godina; prvo uspravan hod, pa veliki mozak.','Alatke (2,5 mil. god.), vatra i kuvanje; Homo sapiens u Africi pre oko 300.000 godina.','Izlazak iz Afrike pre 60–70.000 godina; neandertalci nestali pre oko 40.000, a deo njihove DNK nosimo.','Više od 95% istorije smo bili lovci-sakupljači u malim grupama; telo i um su oblikovani za taj život.','Lepenski Vir na Dunavu: naselje ribara i lovaca (najpoznatija faza oko 8.000 godina), sa tragovima prelaza na zemljoradnju.'],
kartice:[
{p:'Koliko je stara vrsta Homo sapiens?', o:'Oko 300.000 godina.'},
{p:'Kada su se razdvojile loze čoveka i šimpanze?', o:'Pre oko 6–7 miliona godina, od zajedničkog pretka.'},
{p:'Koliko neandertalske DNK nose ljudi čiji su preci van Afrike?', o:'Oko 1–2%.'},
{p:'Zašto je kuvanje bilo važno za evoluciju čoveka?', o:'Kuvana hrana daje više energije uz lakše varenje — verovatno je hranila veći mozak.'},
{p:'Šta je Lepenski Vir?', o:'Naselje ribara i lovaca u Đerdapu; kuće i skulpture stare oko 8.000 godina.'}
],
razgovor:['Šta u tvom svakodnevnom životu najjasnije pokazuje da nam je telo „napravljeno" za lovce-sakupljače?','Da li misliš da su lovci-sakupljači bili srećniji od nas? Šta bi ti nedostajalo, a šta ne?']},
{id:'6-2', naslov:'Poljoprivreda, gradovi, pismo — prve civilizacije',
kuka:{p:'Zašto je, po tvom mišljenju, izmišljeno pismo?', o:['Da se zapišu pesme i mitovi','Da se vodi evidencija — žito, stoka, porezi','Da se pišu pisma'], t:1},
delovi:[
{n:'Najveća promena: njiva', t:`Pre oko 12.000 godina, kad se završilo poslednje ledeno doba, ljudi u PLODNOM POLUMESECU (današnji Irak, Sirija, Turska, Izrael) počeli su da seju pšenicu i ječam i da drže koze i ovce. To je NEOLITSKA REVOLUCIJA.

Nije se desila samo jednom. Nezavisno, na više mesta: u Kini (pirinač, proso), u Mezoamerici (kukuruz), u Andima (krompir), na Novoj Gvineji, u Africi. Kad jednom postane moguće, ljudi to otkrivaju svuda.

Zanimljivo: u Turskoj postoji GEBEKLI TEPE, ogromni kameni hram star oko 11.500 godina — stariji od poljoprivrede u tom kraju. Možda su ljudi prvo počeli da se okupljaju zbog verovanja, a tek onda da seju da bi nahranili okupljene.`,
pr:{p:'Gde je poljoprivreda počela?', o:['Samo u Egiptu','Na više mesta nezavisno — prvo u Plodnom polumesecu, pa u Kini, Americi i drugde','U Evropi'], t:1, z:'Plodni polumesec je najraniji, ali su Kina, Mezoamerika, Andi i drugi do nje stigli sami.'}},
{n:'Cena napretka', t:`Poljoprivreda je dala VIŠE HRANE PO KOMADU ZEMLJE, pa je ljudi bilo mnogo više. Ali pojedinac nije uvek živeo bolje:

• ishrana je postala jednoličnija (nekoliko žitarica), pa su prvi ratari često bili niži i bolesniji od lovaca;
• život uz stoku i u gužvi doneo je ZARAZNE BOLESTI (mnoge su prešle sa životinja);
• rad je bio težak i od jutra do mraka;
• pojavio se VIŠAK — žito koje može da se čuva. A višak može da se otme, nasledi i gomila. Rađaju se bogati i siromašni, ratovi oko zemlje i ambara.

Zato neki istoričari kažu da je poljoprivreda bila „zamka": kad jednom imaš deset puta više ljudi, ne možeš nazad u lov.

U Srbiji je to vreme VINČE (oko 5.400–4.500. p. n. e.) — velika naselja, keramika, figurice. Na Pločniku kod Prokuplja nađeni su jedni od najstarijih tragova topljenja bakra na svetu, stari oko 7.000 godina.`,
pr:{p:'Zašto se kaže da je poljoprivreda donela i nejednakost?', o:['Zbog lošeg vremena','Zbog viška hrane koji može da se gomila, nasleđuje i otima','Zato što su ratari bili lenji'], t:1, z:'Višak žita može da se čuva i poseduje — iz toga nastaju bogati i siromašni, vlast i ratovi.'}},
{n:'Gradovi i država', t:`Sa viškom hrane, ne mora svako da ore. Pojavljuju se SPECIJALISTE: zanatlije, sveštenici, vojnici, činovnici. I prvi GRADOVI — najpre u MESOPOTAMIJI, između Tigra i Eufrata. Uruk je oko 3.200. p. n. e. imao desetine hiljada stanovnika.

Uporedo nastaju velike civilizacije uz velike reke, jer reka znači vodu za navodnjavanje:
• EGIPAT uz Nil — piramide u Gizi oko 2.560. p. n. e.;
• Dolina INDA (Harapa, Mohendžo-Daro) — gradovi sa ulicama pod pravim uglom i kanalizacijom;
• KINA uz Žutu reku.

Grad traži organizaciju: ko upravlja kanalima, ko deli žito, ko sudi. Tako se rađa DRŽAVA — vladar, činovnici, porez, vojska i zakon. Jedan od najstarijih sačuvanih zakonika je HAMURABIJEV (Vavilon, oko 1.750. p. n. e.) — urezan u kamen, sa čuvenim „oko za oko", ali i sa različitim kaznama za robove i gospodare.`,
pr:{p:'Zašto su prve civilizacije nastale uz velike reke?', o:['Zbog ribe','Reke su davale vodu za navodnjavanje i plodnu zemlju','Zbog lepog pogleda'], t:1, z:'Navodnjavanje uz Tigar, Eufrat, Nil, Ind i Žutu reku davalo je velike viškove hrane.'}},
{n:'Pismo — knjigovodstvo koje je promenilo sve', t:`Pismo NIJE izmišljeno za pesme. Najstariji zapisi (Sumer, oko 3.200. p. n. e.) su — spiskovi: koliko džakova ječma, koliko ovaca, ko kome duguje. Pisalo se trščanom pisaljkom po mekoj glini, otud KLINASTO PISMO.

Pismo je izmišljeno nezavisno bar tri puta: u Mesopotamiji (pa skoro odmah u Egiptu — hijeroglifi), u Kini (oko 1.200. p. n. e.) i u Mezoamerici.

Prva pisma su imala stotine znakova — učili su ih samo pisari, godinama. Onda su FENIČANI (oko 1.000. p. n. e.) napravili ALFABET: dvadesetak znakova, jedan za jedan glas. Od njega je grčko pismo, od grčkog latinica i — kasnije — ćirilica.

Kad se jednom piše, znanje više ne zavisi od pamćenja jednog starca. Može da se gomila, prenosi, proverava. Odatle počinje ISTORIJA u užem smislu; sve pre toga je praistorija.`,
pr:{p:'Šta su bili najstariji pisani zapisi?', o:['Ljubavne pesme','Spiskovi i računi — žito, stoka, dugovi','Molitve'], t:1, z:'Pismo je u Sumeru nastalo iz knjigovodstva; književnost je došla kasnije.'}},
{n:'Bronza, gvožđe i prvi slom', t:`Ljudi su naučili da tope bakar, pa da ga mešaju sa kalajem u BRONZU (oko 3.300. p. n. e.) — tvrđu, za oružje i alat. Kasnije, GVOŽĐE (oko 1.200. p. n. e.) — teže za obradu, ali ruda ga ima svuda, pa je jeftinije.

Oko 1.200–1.150. p. n. e. desio se SLOM KASNOG BRONZANOG DOBA: u par decenija propalo je više velikih država istočnog Mediterana (Hetiti, mikenska Grčka), a Egipat je oslabio. Uzroci su verovatno udruženi — suše, zemljotresi, pobune, napadi „naroda sa mora", pucanje trgovine od koje su svi zavisili. Lekcija koja važi i danas: sistem koji je čvrsto povezan može i da padne zajedno.

Kostur: njiva → višak → gradovi i specijalisti → država, zakon i porez → pismo → metal. Sve to za oko 8.000 godina — tren u odnosu na 300.000.

Sledeće: antika — vreme kad su se na nekoliko mesta odjednom rodile ideje sa kojima i danas živimo.`,
pr:{p:'Šta pokazuje slom kasnog bronzanog doba?', o:['Da je gvožđe bolje od bronze','Da međusobno povezani sistemi mogu da padnu zajedno kad se nevolje udruže','Da su Hetiti bili najjači'], t:1, z:'Suše, ratovi i prekid trgovine su se sabrali — pale su države koje su zavisile jedna od druge.'}}
],
kljucno:['Neolitska revolucija pre oko 12.000 godina: Plodni polumesec, pa nezavisno Kina, Amerika i drugi.','Poljoprivreda: više ljudi i višak hrane, ali i bolesti, težak rad i nejednakost.','Prvi gradovi i države uz velike reke (Mesopotamija, Egipat, Ind, Kina); Hamurabijev zakonik.','Pismo nastaje iz knjigovodstva (Sumer, oko 3.200. p. n. e.); Feničani daju alfabet → grčko → latinica i ćirilica.','Bronza, pa gvožđe; slom oko 1.200. p. n. e. pokazuje da povezani sistemi padaju zajedno. Kod nas: Vinča i bakar sa Pločnika.'],
kartice:[
{p:'Kada i gde počinje poljoprivreda?', o:'Pre oko 12.000 godina, prvo u Plodnom polumesecu.'},
{p:'Zbog čega je izmišljeno pismo?', o:'Zbog evidencije — računi, žito, stoka, dugovi (Sumer, oko 3.200. p. n. e.).'},
{p:'Ko je napravio alfabet od kog potiču grčko pismo, latinica i ćirilica?', o:'Feničani, oko 1.000. p. n. e.'},
{p:'Koja praistorijska kultura je bila na tlu Srbije oko 5.000. p. n. e.?', o:'Vinča (i topljenje bakra na Pločniku).'},
{p:'Šta je „cena" poljoprivrede?', o:'Bolesti, težak rad, jednolična ishrana i nejednakost zbog viška koji se gomila.'}
],
razgovor:['Da li je poljoprivreda bila napredak ili zamka? Gde bi ti stao u toj raspravi?','Pismo je počelo kao knjigovodstvo, a završilo kao Bukovski. Šta misliš, šta je danas „knjigovodstvo" koje će jednog dana postati umetnost?']},
{id:'6-3', naslov:'Antika — Grčka, Rim, Persija, Indija, Kina',
kuka:{p:'Koliko je rimskih careva rođeno na tlu današnje Srbije?', o:['Nijedan','Dvojica','Oko sedamnaest'], t:2},
delovi:[
{n:'Osovinsko doba', t:`Između otprilike 800. i 200. p. n. e., na nekoliko mesta u svetu, nezavisno, javljaju se misli koje i danas nosimo: u Grčkoj filozofi, u Indiji Buda, u Kini Konfučije i Lao Ce, u Persiji Zaratustrina vera, kod Jevreja proroci. Filozof Karl Jaspers je to nazvao OSOVINSKO DOBA.

Zajedničko: pitanja se pomeraju sa „kako umiliti bogove" na „kako treba živeti", „šta je pravedno", „šta je istina". Nije baš jasno zašto tada — možda zbog gradova, trgovine i novca, koji su ljude stavili jedne naspram drugih.

Kroz ovu lekciju gledaj pet velikih svetova antike. Nisu bili izolovani: trgovina, ratovi i ideje putovali su između njih.`,
pr:{p:'Šta je „osovinsko doba"?', o:['Doba izuma točka','Period oko 800–200. p. n. e. kada se na više mesta rađaju velike filozofske i verske ideje','Doba kad je Zemlja promenila osu'], t:1, z:'Grčka filozofija, Buda, Konfučije, proroci — nezavisno, u istim vekovima.'}},
{n:'Persija i Grčka', t:`PERSIJA: Kir Veliki oko 550. p. n. e. stvara najveće carstvo do tada — od Egipta i Male Azije do Indije. Persijanci su vladali pametno: puštali narode da zadrže svoju veru i običaje, gradili Kraljevski put i poštu na konjima. (Kir je pustio Jevreje da se vrate iz vavilonskog ropstva.)

GRČKA nije bila jedna država, nego stotine GRADOVA-DRŽAVA (polis). U ATINI je oko 508. p. n. e. uvedena DEMOKRATIJA — vlast naroda: građani su sami glasali na skupštini. Ali „građani" su bili samo slobodni muškarci; žene, robovi i stranci nisu.

Kad je Persija napala, grčki gradovi su se ujedinili i pobedili (Maraton 490., Salamina 480. p. n. e.). Usledio je zlatni vek Atine: Sokrat, Platon, Aristotel, tragedija, Partenon, istorija kao nauka (Herodot), medicina (Hipokrat).

Onda ALEKSANDAR MAKEDONSKI (vladao 336–323. p. n. e.): za desetak godina osvojio Persiju do Indije. Umro je sa 32 godine, carstvo se raspalo, ali grčki jezik i kultura proširili su se celim istokom — to je HELENIZAM.`,
pr:{p:'Ko je imao pravo glasa u atinskoj demokratiji?', o:['Svi stanovnici','Samo slobodni muški građani','Samo bogati'], t:1, z:'Žene, robovi i stranci nisu glasali — demokratija je bila prava novost, ali uska.'}},
{n:'Rim', t:`RIM je počeo kao gradić u Italiji (po predanju osnovan 753. p. n. e.). Oko 509. p. n. e. proterao je kralja i postao REPUBLIKA: vlast su delili dva godišnja konzula i Senat. Republika je osvojila celo Sredozemlje, ali su je razjeli građanski ratovi. Cezar je ubijen 44. p. n. e., a njegov naslednik AVGUST je 27. p. n. e. postao prvi CAR.

Na vrhuncu (oko 117. n. e.) carstvo se protezalo od Britanije do Mesopotamije. Rim je ostavio: PUTEVE, akvadukte, beton, LATINSKI jezik (iz njega su italijanski, španski, francuski, rumunski) i RIMSKO PRAVO — temelj prava većine Evrope, pa i našeg.

I Srbija: oko sedamnaest rimskih careva rođeno je na tlu današnje Srbije (broj zavisi od toga kako se računa). Najpoznatiji je KONSTANTIN VELIKI, rođen u Nišu (Naisus). SIRMIJUM (Sremska Mitrovica) bio je jedna od prestonica carstva, a FELIKS ROMULIANA kod Zaječara je Galerijeva palata pod zaštitom UNESKA.

Konstantin je 313. Milanskim ediktom dozvolio hrišćanstvo, a 330. preneo prestonicu u Konstantinopolj. Carstvo je 395. podeljeno na zapadno i istočno; ZAPADNO je palo 476., ISTOČNO (Vizantija) trajalo je još skoro hiljadu godina.`,
pr:{p:'Šta je Konstantin Veliki, rođen u Nišu, uradio za hrišćanstvo?', o:['Zabranio ga','Milanskim ediktom 313. ga dozvolio','Napisao Bibliju'], t:1, z:'Edikt iz 313. je hrišćanima dao slobodu veroispovesti; kasnije hrišćanstvo postaje državna vera.'}},
{n:'Indija i Kina', t:`INDIJA: car AŠOKA (3. vek p. n. e.) iz dinastije Maurja ujedinio je skoro ceo potkontinent — pa se, užasnut krvoprolićem posle jedne bitke, okrenuo budizmu i nenasilju i poslao monahe po Aziji. Kasnije (oko 5–7. veka n. e.) indijski matematičari razvijaju DESETIČNI SISTEM SA NULOM — brojeve koje danas zovemo „arapskim", jer su ih Evropljani dobili od Arapa.

KINA: posle vekova „zaraćenih država", ČIN ŠI HUANG 221. p. n. e. ujedinjuje zemlju i postaje prvi car. Ujednačio je pismo, mere, novac i širinu osovina na kolima; spajao je zidove u zaštitni pojas (začetak Kineskog zida); sahranjen je sa vojskom od hiljade glinenih ratnika. Vladao je surovo i dinastija mu je trajala samo 15 godina.

Dinastija HAN (206. p. n. e. – 220. n. e.) je zlatno doba: država činovnika vaspitanih na KONFUČIJEVIM idejama (poštovanje, red, obrazovanje), PAPIR, i PUT SVILE — trgovački putevi kojima je kineska svila stizala čak do Rima. Han i Rim su bili savremenici i znali su jedno za drugo — ali uglavnom iz druge ruke, preko trgovaca.`,
pr:{p:'Odakle potiče desetični sistem sa nulom koji danas koristimo?', o:['Iz Rima','Iz Indije (preko Arapa do Evrope)','Iz Grčke'], t:1, z:'Indijski matematičari su ga razvili; Arapi preneli — zato „arapski" brojevi.'}},
{n:'Šta je antika ostavila', t:`Da sažmemo nasleđe koje i danas koristiš, a da ne znaš:
• iz GRČKE: filozofija, demokratija, pozorište, olimpijske igre, geometrija;
• iz RIMA: pravo, latinica, kalendar (jul i avgust su po Cezaru i Avgustu), mreža gradova (mnogi evropski gradovi, i Beograd — Singidunum, bili su rimski);
• iz PERSIJE: ideja carstva mnogih naroda i vera;
• iz INDIJE: nula i brojevi, budizam;
• iz KINE: papir, država činovnika, ideja da se služba dobija ispitom.

Zašto je Zapadno rimsko carstvo palo? Na to postoji preko dvesta objašnjenja. Danas istoričari uglavnom kažu: nije pad jednog dana, nego više vekova slabljenja — građanski ratovi, pritisak naroda sa granica, kuge, novac koji gubi vrednost, podela carstva. Istok je bio bogatiji i odoleo je.

Sledeće: srednji vek — kad su Vizantija, islamski svet i Mongoli bili centar, a Evropa periferija. I gde su tu bili Srbi.`,
pr:{p:'Zašto je palo Zapadno rimsko carstvo, po današnjim istoričarima?', o:['Jedan veliki napad 476.','Vekovima slabljenja — građanski ratovi, pritisak sa granica, kuge, slab novac','Zbog hrišćanstva i ničeg drugog'], t:1, z:'Godina 476. je samo kraj dugog procesa sa više uzroka; istočni deo je opstao.'}}
],
kljucno:['Osovinsko doba (oko 800–200. p. n. e.): filozofi, Buda, Konfučije, proroci — nezavisno, u istim vekovima.','Persija: prvo carstvo mnogih naroda; Atina: demokratija samo za slobodne muške građane; Aleksandar → helenizam.','Rim: republika → carstvo (Avgust, 27. p. n. e.); putevi, latinski, rimsko pravo; Zapad pao 476., Istok trajao do 1453.','Oko 17 rimskih careva rođeno na tlu Srbije; Konstantin (Niš) dozvolio hrišćanstvo 313.','Indija: Ašoka i budizam, nula i desetični sistem; Kina: Čin Ši Huang ujedinio 221. p. n. e., Han: papir, konfučijanska država, Put svile.'],
kartice:[
{p:'Kada je u Atini uvedena demokratija i ko je glasao?', o:'Oko 508. p. n. e.; samo slobodni muški građani.'},
{p:'Ko je bio prvi rimski car i od kada?', o:'Avgust, od 27. p. n. e.'},
{p:'Koji car rođen u Nišu je dozvolio hrišćanstvo i kada?', o:'Konstantin Veliki, Milanski edikt 313.'},
{p:'Kada je palo Zapadno rimsko carstvo?', o:'476. godine (Istočno — Vizantija — 1453.).'},
{p:'Ko je prvi ujedinio Kinu?', o:'Čin Ši Huang, 221. p. n. e.'}
],
razgovor:['Atinska demokratija nije puštala žene i robove da glasaju. Koga bi današnja demokratija, gledano za 500 godina, mogla da „zaboravlja"?','Rim je pao sporo, iznutra i spolja. Vidiš li neki savremeni sistem koji slabi na sličan način?']},
{id:'6-4', naslov:'Srednji vek — Vizantija, islamski svet, Mongoli, Evropa',
kuka:{p:'Koje je najveće kopneno carstvo u istoriji (bez prekida)?', o:['Rimsko','Mongolsko','Osmansko'], t:1},
delovi:[
{n:'Vizantija — Rim koji je ostao', t:`Kad je Zapad pao, ISTOČNO RIMSKO CARSTVO je živelo dalje, sa prestonicom u KONSTANTINOPOLJU. Sami su sebe zvali Rimljanima; ime „Vizantija" su im dali kasnije istoričari. Govorili su grčki, verovali pravoslavno.

Car JUSTINIJAN (vladao 527–565) sagradio je crkvu AJA SOFIJA i sredio rimsko pravo u jedan zbornik (Corpus iuris civilis) — preko njega je rimsko pravo stiglo do moderne Evrope.

Godine 1054. hrišćanstvo se podelilo na istočno (PRAVOSLAVNO) i zapadno (KATOLIČKO) — VELIKI RASKOL. Razlozi: ko je glavni (papa u Rimu ili jednaki patrijarsi), jezik, obredi, ali i politika.

Godine 1204. krstaši Četvrtog krstaškog rata — hrišćani sa Zapada — opljačkali su Konstantinopolj. Vizantija se više nikad nije oporavila. Pala je pod Osmanlije 1453. — za mnoge istoričare to je kraj srednjeg veka.`,
pr:{p:'Šta je Veliki raskol 1054?', o:['Podela Rimskog carstva','Podela hrišćanstva na pravoslavno i katoličko','Rat Vizantije i Persije'], t:1, z:'Istočna i zapadna crkva su se razišle oko vlasti pape, obreda i politike.'}},
{n:'Islamski svet', t:`MUHAMED (oko 570–632) propoveda u Arabiji novu veru, ISLAM. Godine 622. seli se iz Meke u Medinu (HIDŽRA) — odatle počinje islamski kalendar. Za samo sto godina posle njegove smrti, kalifat se proteže od Španije (711.) do Indije.

U 8–10. veku BAGDAD je jedan od najvećih gradova sveta, a „Kuća mudrosti" mesto gde se prevode grčki filozofi i lekari. Islamski učenjaci razvijaju ALGEBRU (reč dolazi od arapskog al-džabr, a „algoritam" od imena matematičara Al-Hvarizmija), astronomiju, medicinu, optiku; preko njih Evropa ponovo dobija Aristotela i dobija indijske brojeve.

Krstaški ratovi (1096–1291): pohodi hrišćanske Evrope da osvoji Jerusalim. Hrišćani ih pamte kao sveti rat, muslimani kao najezdu; obe strane su činile i junaštva i pokolje. Na kraju je Sveta zemlja ostala muslimanska.

Od 14. veka raste nova islamska sila — OSMANLIJE, koji će osvojiti Balkan.`,
pr:{p:'Kako je Evropa ponovo dobila Aristotela i indijske brojeve?', o:['Iz Kine','Preko islamskog sveta — prevoda i učenjaka','Nikad ih nije izgubila'], t:1, z:'Islamski učenjaci su čuvali, prevodili i razvijali grčko i indijsko znanje; Evropa ga je preuzela preko Španije i Sicilije.'}},
{n:'Mongoli i kuga', t:`DŽINGIS-KAN (Temudžin) je 1206. ujedinio mongolska plemena, a on i njegovi naslednici napravili su NAJVEĆE KOPNENO CARSTVO u istoriji — od Koreje do istočne Evrope; pohodi su stizali i do Poljske i Mađarske. Osvajali su brzo i surovo; gradovi koji su se opirali bili su sravnjeni.

Ali kad je carstvo stalo, Putem svile se moglo putovati bezbedno kao nikad — „Mongolski mir". Marko Polo je tako stigao u Kinu. Robe, ideje (barut, papir, kompas su stizali na zapad)… i zaraze.

Sredinom 14. veka (1347–1351) kuga — CRNA SMRT — došla je tim putevima u Evropu i ubila otprilike trećinu do polovinu stanovništva. Posledice: manjak radnika, pa skuplji rad; slabljenje feudalnih obaveza; strah, progoni (Jevreja su okrivljivali), ali i nova pitanja o veri i životu.`,
pr:{p:'Kako je Crna smrt stigla do Evrope?', o:['Morem iz Amerike','Trgovačkim putevima iz Azije, koje su Mongoli učinili prohodnim','Iz Afrike preko Sahare'], t:1, z:'Bezbedni putevi su prenosili robu i ljude — i bakteriju kuge.'}},
{n:'Zapadna Evropa', t:`Na Zapadu je posle Rima nastalo mnoštvo germanskih kraljevina. KARLO VELIKI je krunisan za cara na Božić 800. i ujedinio veliki deo zapadne Evrope.

Društvo je bilo FEUDALNO: kralj daje zemlju plemićima, plemići mu duguju vojnu službu; seljaci (KMETOVI) rade zemlju gospodara i ne smeju da je napuste. Okvir svega bila je CRKVA — ona je držala škole, knjige, kalendar i moral, a papa se otimao o vlast sa carevima.

„Mračni srednji vek" je uglavnom mit. Iz tog vremena su: UNIVERZITETI (Bolonja oko 1088, Pariz, Oksford), gotske katedrale, vetrenjače, plug, naočare, mehanički satovi, i ideja da i vladar mora poštovati zakon (Magna karta, Engleska, 1215).

Ipak: većina ljudi je bila nepismena, živela na selu i retko putovala dalje od susednog sela.`,
pr:{p:'Da li je srednji vek bio samo „mračno doba"?', o:['Da, ništa novo nije nastalo','Ne — nastali su univerziteti, katedrale, satovi, Magna karta','Da, jer nije bilo knjiga'], t:1, z:'„Mračni srednji vek" je pojednostavljenje — bilo je teško, ali i mnogo novog.'}},
{n:'Gde su Srbi', t:`Sloveni dolaze na Balkan u 6. i 7. veku. Srbi primaju hrišćanstvo od Vizantije, pa su na granici dva sveta — istoka i zapada.

PISMO: braća Ćirilo i Metodije 863. kreću u misiju među Slovene i sastavljaju GLAGOLJICU; njihovi učenici u Bugarskoj krajem 9. veka prave ĆIRILICU, nazvanu po Ćirilu.

NEMANJIĆI (oko 200 godina): STEFAN NEMANJA ujedinjuje srpske zemlje; njegov sin SAVA 1219. dobija samostalnu (autokefalnu) srpsku crkvu i postaje prvi arhiepiskop; Savin brat Stefan je 1217. krunisan kao „Prvovenčani" kralj. Iz tog vremena su Studenica, Žiča, Mileševa, Sopoćani. Car DUŠAN (car od 1346) proširuje državu do Grčke i donosi ZAKONIK (1349, dopunjen 1354).

Posle Dušanove smrti država se rasparčala. KOSOVSKA BITKA 1389: poginuli su i knez Lazar i sultan Murat. Vojno je bila nerešena ili teška za obe strane, a dugoročno je Srbiju oslabila; vremenom je postala središnja priča srpskog pamćenja (kosovski zavet) — istoričari razlikuju samu bitku od kasnijeg mita. Srbija je kao despotovina trajala do pada Smedereva 1459.

Kraj oblasti je blizu: sledeće je kako je mali deo sveta — Zapadna Evropa — za četiri veka stigao do vrha.`,
pr:{p:'Šta je Sava Nemanjić postigao 1219?', o:['Krunisan je za kralja','Dobio samostalnu srpsku crkvu i postao prvi arhiepiskop','Napisao zakonik'], t:1, z:'Autokefalnost 1219. — Stefan Prvovenčani je krunisan 1217., a Dušanov zakonik je iz 1349.'}}
],
kljucno:['Vizantija = istočno Rimsko carstvo do 1453; Justinijan, Aja Sofija, zbornik prava; raskol 1054; krstaši opljačkali Carigrad 1204.','Islam od 7. veka; Bagdad i Kuća mudrosti; algebra; preko islamskog sveta Evropa dobija Aristotela i indijske brojeve.','Mongoli (Džingis-kan, 1206): najveće kopneno carstvo; putevima stiže i Crna smrt (1347–1351), umire trećina do polovina Evrope.','Zapad: Karlo Veliki (800), feudalizam, Crkva; ali i univerziteti, katedrale, Magna karta — „mračni vek" je mit.','Srbi: ćirilica (učenici Ćirila i Metodija), Nemanjići, Sava 1219, Dušanov zakonik 1349, Kosovo 1389, pad Smedereva 1459.'],
kartice:[
{p:'Šta je Veliki raskol i kada?', o:'Podela hrišćanstva na pravoslavno i katoličko, 1054.'},
{p:'Kada je pala Vizantija?', o:'1453, pod Osmanlije.'},
{p:'Odakle dolaze reči „algebra" i „algoritam"?', o:'Iz arapskog — al-džabr i ime matematičara Al-Hvarizmija.'},
{p:'Koliko je Evropljana ubila Crna smrt?', o:'Otprilike trećinu do polovinu (1347–1351).'},
{p:'Kada je srpska crkva postala samostalna i ko je bio prvi arhiepiskop?', o:'1219, Sveti Sava.'}
],
razgovor:['Srbi su od početka između Istoka i Zapada. Da li to vidiš i danas — u sebi, u ljudima oko sebe?','Kosovska bitka i kosovski mit nisu ista stvar. Zašto narodima trebaju takve priče — i kad pomažu, a kad smetaju?']},
{id:'6-5', naslov:'Otkrića, naučna i industrijska revolucija',
kuka:{p:'Oko 1800. godine na Zemlji je živelo oko milijardu ljudi. Koliko danas?', o:['Oko 2 milijarde','Oko 4 milijarde','Preko 8 milijardi'], t:2},
delovi:[
{n:'Štamparija i preporod', t:`Oko 1450. JOHAN GUTENBERG u Majncu pravi ŠTAMPARIJU sa pokretnim slovima. Pre toga se knjiga prepisivala rukom mesecima; posle — hiljade primeraka. Za pedeset godina Evropa je odštampala milione knjiga. Znanje je prestalo da bude retkost.

Istovremeno, u Italiji, RENESANSA („preporod"): povratak antičkim uzorima, čovek u centru — Leonardo, Mikelanđelo, Rafael. (Više o tome u oblasti „Umetnost i priče".)

Štamparija je omogućila i REFORMACIJU: Martin Luter 1517. napada prodaju oproštaja grehova; njegovi spisi se šire štampom brže nego što crkva može da ih zabrani. Zapadno hrišćanstvo se deli na katolike i protestante, a sledi vek verskih ratova.

Mi smo bili rani: prva štampana knjiga na srpskoj redakciji crkvenoslovenskog jezika, OKTOIH, štampana je 1494. u Cetinju, u štampariji Crnojevića.`,
pr:{p:'Zašto je štamparija bila tako važna?', o:['Knjige su postale lepše','Knjige su postale jeftine i brze — znanje i ideje su se širili kao nikad','Zbog papira'], t:1, z:'Hiljade primeraka umesto jednog prepisa — reformacija i nauka bez toga ne bi išle tako brzo.'}},
{n:'Velika otkrića — i njihova cena', t:`Osmanlije su držale puteve na istok, pa su Evropljani tražili put morem do Indije i začina:
• KOLUMBO 1492. stiže u Ameriku (mislio je da je u Aziji);
• VASKO DA GAMA 1498. oplovljava Afriku do Indije;
• Magelanova ekspedicija (1519–1522) prvi put oplovljava svet.

Usledila je KOLUMBOVSKA RAZMENA: Evropa dobija krompir, kukuruz, paradajz, papriku, duvan — bez Amerike ne bi bilo ni ajvara ni sarme sa kukuruznim hlebom. Amerika dobija konje, goveda, pšenicu… i BOLESTI. Velike boginje i druge zaraze ubile su veliki deo starosedelaca — u nekim krajevima i do devet desetina.

Potom ROPSTVO: preko Atlantika je za oko tri i po veka prevezeno oko 12 miliona Afrikanaca, za rad na plantažama šećera, duvana i pamuka. Evropske kolonije pokrivaju svet. Bogatstvo Evrope u ovom periodu ima i ovu stranu.`,
pr:{p:'Šta je najviše ubijalo starosedeoce Amerike posle 1492?', o:['Samo ratovi','Zarazne bolesti donete iz Evrope, uz ratove i prinudni rad','Glad zbog suše'], t:1, z:'Nisu imali otpornost na boginje i druge evropske zaraze; uz to ratovi i prinudni rad.'}},
{n:'Naučna revolucija', t:`Za oko 150 godina promenio se način na koji ljudi saznaju svet:
• KOPERNIK (1543): Zemlja se okreće oko Sunca, ne obrnuto;
• GALILEJ (oko 1610) kroz teleskop vidi Jupiterove mesece i mene Venere; 1633. crkveni sud ga primorava da se odrekne učenja;
• NJUTN (1687): isti zakoni kretanja i gravitacije važe i za jabuku i za planete.

Novo nije bilo samo ŠTA su otkrili, nego KAKO: ne veruj autoritetu, nego MERI, OGLEDAJ i proveravaj. (Više u lekciji „Naučni metod".)

Iz toga je izraslo PROSVETITELJSTVO (18. vek): ako razum može da objasni prirodu, može da sredi i društvo. Prava čoveka, verska tolerancija, podela vlasti. Te ideje stoje iza AMERIČKE (1776) i FRANCUSKE REVOLUCIJE (1789) — i iza nacionalnih pokreta 19. veka.

Kod nas: PRVI SRPSKI USTANAK 1804. (Karađorđe), DRUGI 1815. (Miloš Obrenović); Srbija postaje kneževina sa autonomijom, a punu međunarodno priznatu nezavisnost dobija na BERLINSKOM KONGRESU 1878. Vuk Karadžić reformiše jezik i pismo („piši kao što govoriš").`,
pr:{p:'Šta je bilo najnovije u naučnoj revoluciji?', o:['Otkriće teleskopa','Način saznavanja: meri, ogledaj, proveri — umesto da veruješ autoritetu','Povratak Aristotelu'], t:1, z:'Kopernik, Galilej i Njutn su važni, ali najveća promena je metod — dokaz preko merenja i ogleda.'}},
{n:'Industrijska revolucija', t:`Od oko 1760. u ENGLESKOJ počinje ono što je promenilo život više od svega posle poljoprivrede. MAŠINE preuzimaju posao ruku: prvo u tekstilu, pa sve. PARNA MAŠINA (Džejms Vat ju je usavršio oko 1770-ih) pokreće fabrike, pa VOZOVE (prva javna parna železnica 1825) i brodove. Gorivo: UGALJ.

Zašto baš Engleska? Spoj više stvari: mnogo uglja blizu površine, skupa radna snaga (pa se isplati mašina), banke, kolonije i trgovina, zaštićeni patenti, stabilna vlast.

Posledice:
• ljudi se sele sa sela u GRADOVE i FABRIKE; radni dan 12–14 sati, deca u rudnicima — iz toga se rađaju sindikati, socijalizam, Marks;
• proizvodnja i stanovništvo rastu kao nikad: oko 1800. milijardu ljudi, oko 1900. preko milijardu i po;
• prvi put u istoriji, zemlje koje se industrijalizuju izlaze iz večitog siromaštva.

Krajem 19. veka DRUGA industrijska revolucija: čelik, hemija, nafta i — STRUJA. Tu je i NIKOLA TESLA: naizmenična struja kojom se danas napajaju kuće širom sveta.`,
pr:{p:'Šta je pokretalo prvu industrijsku revoluciju?', o:['Struja i nafta','Parna mašina na ugalj','Vetrenjače'], t:1, z:'Ugalj i para pokreću fabrike, vozove i brodove; struja i nafta dolaze u drugoj revoluciji, krajem 19. veka.'}},
{n:'Zašto Evropa — i kraj oblasti', t:`Pitanje koje muči istoričare: zašto je baš Zapadna Evropa, koja je 1000. godine bila periferija, do 1900. zavladala većim delom sveta? Kina je imala papir, barut, kompas i štampu pre nje.

Glavni odgovori (verovatno svi delimično tačni):
• GEOGRAFIJA i podeljenost — mnogo manjih država koje se takmiče; kad jedan vladar zabrani, drugi dozvoli (Kolumbo je dobio brodove tek u Španiji);
• INSTITUCIJE — zaštita imovine, banke, ugovori, patenti;
• NAUKA kao sistem — otkrića se objavljuju i proveravaju;
• SREĆA I NASILJE — ugalj blizu površine, i bogatstvo iz kolonija i ropstva.

Kostur oblasti: lovci-sakupljači → njiva, gradovi, pismo → antika i velike ideje → srednji vek tri sveta → štampa, otkrića, nauka, mašine. Za 300.000 godina od vatre do struje.

Sledeće: alat — verovatnoća i rizik, pa onda religije: šta su ljudi verovali kroz sve ovo vreme.`,
pr:{p:'Šta je, po jednom od objašnjenja, pomoglo Evropi što je bila podeljena na mnoge države?', o:['Ništa, podela je samo smetala','Takmičenje — kad jedan vladar zabrani, drugi dozvoli','Zbog jednog jezika'], t:1, z:'Kolumbo je odbijen u Portugaliji, a dobio brodove u Španiji; ideje su imale gde da pobegnu.'}}
],
kljucno:['Gutenbergova štampa (oko 1450) širi znanje; renesansa; reformacija 1517 (Luter). Kod nas Oktoih 1494, Cetinje.','Otkrića: Kolumbo 1492, Vasko da Gama 1498, Magelan 1519–22; kolumbovska razmena — krompir i kukuruz, ali i bolesti, kolonije i ropstvo (~12 miliona Afrikanaca).','Naučna revolucija: Kopernik, Galilej, Njutn — metod merenja i ogleda; prosvetiteljstvo → revolucije 1776 i 1789.','Srbija: ustanci 1804 i 1815, puna nezavisnost 1878 (Berlinski kongres), Vukova reforma.','Industrijska revolucija od oko 1760, Engleska: para i ugalj, fabrike, gradovi, rast stanovništva; kasnije struja (i Tesla).'],
kartice:[
{p:'Kada je Gutenberg napravio štampariju?', o:'Oko 1450.'},
{p:'Šta je kolumbovska razmena?', o:'Razmena biljaka, životinja i bolesti između Amerike i Starog sveta posle 1492.'},
{p:'Šta je Njutn pokazao 1687?', o:'Da isti zakoni kretanja i gravitacije važe na Zemlji i na nebu.'},
{p:'Kada je Srbija dobila punu međunarodno priznatu nezavisnost?', o:'1878, na Berlinskom kongresu.'},
{p:'Gde i kada počinje industrijska revolucija i šta je pokreće?', o:'Engleska, oko 1760; parna mašina na ugalj.'}
],
razgovor:['Da si živeo 1850. u Engleskoj — selo ili fabrika? I kako bi o tome pisao?','Bogatstvo Evrope ima i ružnu stranu: kolonije i ropstvo. Kako se, po tebi, pošteno priča o ponosu i o sramoti u istoj istoriji?']}
]},

{id:'7', naziv:'Religije i velike ideje', ikona:'🕯️', era:'ideje', lekcije:[
{id:'7-1', naslov:'Šta je religija; Istok — hinduizam, budizam, kineska tradicija',
kuka:{p:'Da li sve religije veruju u boga ili bogove?', o:['Da, to je definicija religije','Ne — neke, kao rani budizam, ne stavljaju boga stvoritelja u centar','Ne, nijedna istočna religija nema bogove'], t:1},
delovi:[
{n:'Šta je religija', t:`Teško je dati definiciju koja pokriva sve. Naučnici koji proučavaju religije (to je posebna nauka — RELIGIOLOGIJA, koja ne pita „koja je istinita", nego opisuje šta ljudi veruju i rade) obično gledaju nekoliko sastojaka:
• VEROVANJE u sveto — bog, bogovi, duhovi, ili neki večni zakon;
• OBREDI — molitva, post, praznici, žrtve;
• PRIČE — o postanku sveta, o precima, o kraju;
• MORAL — kako treba živeti;
• ZAJEDNICA — crkva, uma, sangha; ljudi koji veruju zajedno.

Religija postoji u svakoj poznatoj kulturi. Najstariji tragovi su sahrane sa predmetima, stare desetine hiljada godina. Danas oko tri četvrtine ljudi na svetu pripada nekoj religiji; najveće su hrišćanstvo (oko 2,3 milijarde), islam (oko 1,9–2), hinduizam (oko 1,2) i budizam (oko 320 miliona). Najbrže raste grupa onih koji ne pripadaju nijednoj — oko 1,9 milijardi.`,
pr:{p:'Šta proučava religiologija?', o:['Koja je religija istinita','Šta ljudi veruju i rade — opisuje religije, ne sudi o njima','Samo hrišćanstvo'], t:1, z:'Nauka o religijama opisuje i poredi; pitanje istinitosti ostavlja vernicima i filozofima.'}},
{n:'Hinduizam', t:`HINDUIZAM je najstarija živa velika religija — nema osnivača ni jedan datum početka; korene ima u VEDAMA, svetim spisima nastalim pre oko 3.000 godina u Indiji. Više je porodica tradicija nego jedna crkva.

Ključni pojmovi:
• BRAHMAN — jedna sveobuhvatna stvarnost iza svega; mnogi bogovi (Višnu, Šiva, boginja Devi…) su njena lica. Zato hinduizam može da izgleda i kao mnogoboštvo i kao jednoboštvo.
• SAMSARA — krug ponovnih rađanja.
• KARMA — svako delo ima posledice, i u ovom i u sledećem životu.
• MOKŠA — oslobođenje iz kruga; cilj.
• DARMA — dužnost, pravi red, ono što ti je činiti.

Sa hinduizmom je istorijski povezan KASTINSKI sistem — podela društva po rođenju. Indijski ustav danas zabranjuje diskriminaciju po kasti, ali ona u praksi i dalje postoji. Mnogi hinduisti kažu da kaste nisu suština vere.

Danas: oko 1,2 milijarde, većinom u Indiji i Nepalu.`,
pr:{p:'Šta je karma?', o:['Sudbina koju bogovi odrede pri rođenju','Zakon da svako delo ima posledice, u ovom i sledećem životu','Molitva pred spavanje'], t:1, z:'Karma je zakon uzroka i posledice delovanja; vezan je za krug ponovnih rađanja (samsaru).'}},
{n:'Budizam', t:`Sidarta Gautama, princ iz severne Indije (živeo oko 5. veka p. n. e.), napustio je bogatstvo da bi razumeo patnju. Kad je, po predanju, posle meditacije „probuđen", postao je BUDA — „probuđeni".

Njegovo učenje počinje od ČETIRI PLEMENITE ISTINE:
1. život nosi patnju (nezadovoljstvo, prolaznost);
2. patnju izaziva žudnja i vezivanje;
3. patnja može da prestane;
4. put do toga je PLEMENITI OSMOSTRUKI PUT — ispravno gledanje, namera, govor, delanje, život, trud, pažnja i sabranost.

Cilj je NIRVANA — „gašenje" žudnje i izlazak iz kruga rađanja. Buda je odbacio krajnosti: ni raskoš, ni mučenje tela — SREDNJI PUT.

Budizam ne zavisi od boga stvoritelja; zato ga neki zovu i filozofijom. Ali u praksi ima hramove, obrede, molitve i svece. Dve velike grane: TERAVADA (Šri Lanka, Tajland) i MAHAJANA (Kina, Japan, Koreja — tu je i zen), plus tibetanski budizam.

Meditacija sabranosti (mindfulness), koja je danas popularna i na Zapadu, potiče baš odavde.`,
pr:{p:'Šta je, po Budi, uzrok patnje?', o:['Bogovi','Žudnja i vezivanje','Siromaštvo'], t:1, z:'Druga plemenita istina: patnju izaziva žudnja — zato je put da se žudnja ugasi.'}},
{n:'Kineska tradicija', t:`U Kini se tri učenja vekovima prepliću, a čovek često živi po sva tri:

• KONFUČIJANIZAM (Konfučije, 551–479. p. n. e.) — pre svega etika i red u društvu: poštovanje roditelja i predaka, odnos vladara i podanika, obrazovanje, „ne čini drugome ono što ne želiš sebi". Manje o bogovima, više o tome kako biti dobar čovek u porodici i državi.
• TAOIZAM (Lao Ce, „Tao te đing") — DAO, „put", prirodni tok stvari. Mudro je ne forsirati, teći kao voda koja je meka a ipak probije kamen. Jin i jang: suprotnosti koje se dopunjuju.
• BUDIZAM — stigao iz Indije oko 1. veka n. e. i postao kineski (zen je u Kini nastao kao čan).

Uz to, narodna vera: poštovanje predaka, duhovi, praznici.

Japan ima svoju staru tradiciju, ŠINTO — poštovanje duhova (kami) u prirodi, precima i mestima — koja se meša sa budizmom.`,
pr:{p:'Šta je u središtu konfučijanizma?', o:['Bog stvoritelj','Etika i red u porodici i društvu','Meditacija u samoći'], t:1, z:'Konfučije uči kako biti dobar sin, otac, činovnik i vladar — manje o bogovima, više o odnosima.'}},
{n:'Kako o ovome razmišljati', t:`Neke stvari se ponavljaju u svim ovim tradicijama: ZLATNO PRAVILO (ne čini drugome ono što ne želiš sebi) u nekom obliku postoji skoro svuda. Isto tako i ideja da je sebičnost izvor zla, i da čovek treba da savlada sebe.

Ali razlike su stvarne: hinduizam i budizam vide vreme kao KRUG (rađanja se ponavljaju), dok avramovske religije (sledeća lekcija) vide vreme kao LINIJU — od stvaranja ka kraju.

Mudro pravilo za ovu oblast: kad opisuješ tuđu veru, opiši je tako da bi se vernik prepoznao. Ne poredi tuđi najgori primer sa svojim najboljim idealom.

I još jedno razlikovanje: religija kao VERA (u šta neko veruje), kao KULTURA (praznici, hrana, običaji) i kao IDENTITET (kojem narodu ili grupi pripadaš). Na Balkanu se ova tri često mešaju — čovek može biti „pravoslavac" po identitetu, a da ne veruje.

Sledeće: tri vere koje potiču od Avrama — i od kojih je izrastao veći deo sveta u kome živimo.`,
pr:{p:'Kako hinduizam i budizam obično vide vreme?', o:['Kao liniju od stvaranja do kraja','Kao krug ponovnih rađanja','Kao nešto nevažno'], t:1, z:'Kružno vreme (samsara) — za razliku od linearnog vremena avramovskih religija.'}}
],
kljucno:['Religija obično ima verovanje u sveto, obrede, priče, moral i zajednicu; oko tri četvrtine ljudi pripada nekoj.','Hinduizam: bez osnivača, Vede; brahman, samsara, karma, mokša, darma; istorijski vezan za kaste.','Budizam: Buda (5. vek p. n. e.), četiri plemenite istine, osmostruki put, nirvana; bez boga stvoritelja u središtu.','Kina: konfučijanizam (etika, red), taoizam (dao, jin-jang), budizam — prepliću se; Japan: šinto.','Zlatno pravilo je skoro svuda; vreme kao krug (Istok) ili linija (avramovske vere); vera, kultura i identitet nisu isto.'],
kartice:[
{p:'Šta su samsara i karma?', o:'Samsara — krug ponovnih rađanja; karma — zakon da svako delo ima posledice.'},
{p:'Koje su četiri plemenite istine budizma (ukratko)?', o:'Postoji patnja; izaziva je žudnja; može da prestane; put je osmostruki put.'},
{p:'Šta znači „Buda"?', o:'„Probuđeni".'},
{p:'Šta je dao u taoizmu?', o:'„Put" — prirodni tok stvari koji ne treba forsirati.'},
{p:'Koje je zajedničko etičko pravilo skoro svih religija?', o:'Zlatno pravilo — ne čini drugome ono što ne želiš sebi.'}
],
razgovor:['Budizam kaže da patnju pravi žudnja. Slažeš li se — ili je žudnja i ono što te tera da pišeš?','Vera, kultura, identitet: šta je od toga za tebe religija u kojoj si odrastao?']},
{id:'7-2', naslov:'Avramove religije — judaizam, hrišćanstvo, islam',
kuka:{p:'Da li jevreji, hrišćani i muslimani veruju u istog Boga?', o:['Ne, svaka vera ima potpuno drugog boga','Sve tri sebe vide kao veru u jednog Boga Avramovog, ali ga različito shvataju','Samo hrišćani i muslimani'], t:1},
delovi:[
{n:'Zajednički koren', t:`Tri religije sebe vezuju za AVRAMA (Abrahama, Ibrahima) — praoca koji je, po predanju, pre oko 4.000 godina ostavio rodni grad u Mesopotamiji i poverovao u JEDNOG BOGA. Zato se zovu AVRAMOVSKE (abrahamske).

Zajedničko im je:
• MONOTEIZAM — samo jedan Bog, stvoritelj svega;
• Bog se OBJAVLJUJE ljudima preko proroka i svetih knjiga;
• vreme je LINIJA: stvaranje → istorija → kraj vremena i sud;
• mnogi isti likovi: Adam, Noje, Avram, Mojsije, David…

Zajedno ih danas ispoveda više od polovine čovečanstva. Ali razlike su važne — i oko njih je bilo i ratova i suživota.`,
pr:{p:'Šta je monoteizam?', o:['Verovanje u više bogova','Verovanje u jednog Boga','Neverovanje'], t:1, z:'Mono = jedan, teos = bog. Sve tri avramovske religije su monoteističke.'}},
{n:'Judaizam', t:`JUDAIZAM je najstarija od tri. Srž: Bog je sa narodom Izraela sklopio SAVEZ, a preko MOJSIJA dao ZAKON — TORU (pet Mojsijevih knjiga), sa Deset zapovesti u središtu. Hebrejska Biblija (TANAH) za hrišćane je Stari zavet.

Važnije od verovanja je ŽIVETI ZAKON: subota (šabat) kao dan odmora, propisi o hrani (košer), praznici kao Pesah (izlazak iz Egipta). Posle razaranja Jerusalimskog hrama (70. n. e.) središte vere postaju sinagoga, rabin i učenje — TALMUD, ogromna zbirka rasprava o zakonu.

Jevreji vekovima žive raseljeni (DIJASPORA) i često su progonjeni. Najstrašnije: HOLOKAUST — nacisti su u Drugom svetskom ratu ubili oko šest miliona Jevreja. Godine 1948. osnovana je država Izrael.

Danas: oko 15 miliona Jevreja, najviše u Izraelu i SAD. Mali broj, ogroman uticaj — iz judaizma su izrasle i druge dve vere.`,
pr:{p:'Šta je Tora?', o:['Jevrejski hram','Zakon — pet Mojsijevih knjiga, srž judaizma','Jevrejski praznik'], t:1, z:'Tora je Zakon dat preko Mojsija; za hrišćane deo Starog zaveta.'}},
{n:'Hrišćanstvo', t:`Isus iz Nazareta, Jevrejin, propovedao je u Palestini početkom 1. veka i razapet je oko 30. godine pod rimskom vlašću. Njegovi sledbenici veruju da je VASKRSAO i da je HRISTOS (grčki: „pomazanik", isto što i hebrejski „mesija") — Sin Božji.

Srž vere:
• SVETA TROJICA — jedan Bog u tri lica: Otac, Sin i Sveti Duh;
• Bog je postao čovek u Isusu, i njegovom smrću i vaskrsenjem čovek je spasen;
• zapovest LJUBAVI — prema Bogu i bližnjem, pa i prema neprijatelju.

Sveta knjiga je BIBLIJA: Stari zavet (jevrejski spisi) + Novi zavet (četiri jevanđelja, pisma apostola). Apostol Pavle širi veru među nejevrejima; posle Konstantina (313) postaje vera carstva.

Tri velike grane: PRAVOSLAVLJE (istok, samostalne crkve — srpska, ruska, grčka…), KATOLICIZAM (papa u Rimu; razdvojeni 1054) i PROTESTANTIZAM (od Lutera, 1517; bez pape, akcenat na Bibliji i ličnoj veri). Danas oko 2,3 milijarde — najveća religija sveta.`,
pr:{p:'Šta znači reč „Hristos"?', o:['Bog','Pomazanik — isto što i „mesija"','Učitelj'], t:1, z:'Grčka reč za hebrejsko „mesija" — pomazanik koga je Bog poslao.'}},
{n:'Islam', t:`Muslimani veruju da je Bog (arapski: ALAH — reč koju za Boga koriste i arapski hrišćani) preko anđela Džibrila (Gavrila) objavio poruku MUHAMEDU, trgovcu iz Meke, od 610. godine. Ta objava je KURAN. Muhamed je za muslimane POSLEDNJI PROROK, „pečat" proroka — posle Avrama, Mojsija i Isusa (koga islam poštuje kao velikog proroka, ali ne kao Sina Božjeg).

Islam znači „predanje" (Bogu). Svaki musliman ima PET STUBOVA:
1. ŠEHADET — svedočenje: „Nema boga osim Boga, a Muhamed je njegov poslanik";
2. NAMAZ — molitva pet puta dnevno;
3. ZEKAT — davanje dela imovine siromašnima;
4. POST u mesecu ramazanu, od zore do zalaska sunca;
5. HADŽ — hodočašće u Meku, bar jednom u životu ako može.

Posle Muhamedove smrti spor oko naslednika podelio je islam na SUNITE (oko 85–90%) i ŠIITE (najviše u Iranu i Iraku). Danas: oko 1,9 milijardi, druga religija sveta. Najviše muslimana nije u arapskom svetu, nego u Indoneziji, Pakistanu, Indiji i Bangladešu.`,
pr:{p:'Kako islam gleda na Isusa?', o:['Ne pominje ga','Kao velikog proroka, ali ne kao Sina Božjeg','Kao Boga'], t:1, z:'Za muslimane je Isus (Isa) prorok, a Muhamed poslednji prorok.'}},
{n:'Na Balkanu — i kraj', t:`Na Balkanu se sve tri susreću: PRAVOSLAVNI (Srbi, Crnogorci, Makedonci, Grci, Bugari, Rumuni), KATOLICI (Hrvati, Slovenci, deo Mađara i Albanaca), MUSLIMANI (Bošnjaci, većina Albanaca, Turci) i — vekovima — JEVREJI, posebno sefardski, prognani iz Španije 1492. i primljeni u Osmanskom carstvu. Beogradski Dorćol je imao jevrejsku četvrt; najveći deo te zajednice uništen je u Holokaustu.

Zato je ovde religija često pomešana sa IDENTITETOM naroda: razlika između Srba, Hrvata i Bošnjaka istorijski je najviše bila verska. To je jedan od razloga zašto su verske razlike u ratovima 1990-ih imale tako veliku težinu — a i zašto postoje primeri dugog zajedničkog života, komšiluka i mešovitih brakova.

Kostur oblasti: šta je religija → Istok (krug, oslobođenje) → avramovske vere (jedan Bog, objava, linija vremena) → filozofija → kako znamo → etika. Religija i filozofija su dva velika odgovora na ista pitanja: šta je svet, šta je dobro, kako živeti.

Sledeće: novac — izum koji je možda promenio ljudsko ponašanje više od ijednog boga.`,
pr:{p:'Zašto je religija na Balkanu tako vezana za narod?', o:['Jer su svi vernici','Jer su se narodi istorijski najviše razlikovali po veri, pa je vera postala deo identiteta','Jer država tako propisuje'], t:1, z:'Razlika Srba, Hrvata i Bošnjaka istorijski je pre svega verska — zato vera i identitet idu zajedno.'}}
],
kljucno:['Avramovske vere: jedan Bog, objava preko proroka i knjiga, vreme kao linija ka kraju i sudu.','Judaizam: savez i Tora (Mojsije), život po zakonu (šabat, košer), Talmud; Holokaust; oko 15 miliona.','Hrišćanstvo: Isus kao Hristos, Sveta Trojica, ljubav; Biblija (Stari + Novi zavet); pravoslavni, katolici (1054), protestanti (1517); oko 2,3 milijarde.','Islam: Muhamed poslednji prorok, Kuran, pet stubova; suniti i šiiti; oko 1,9 milijardi, najviše u Aziji.','Na Balkanu vera = identitet naroda; i sukobi i dug suživot.'],
kartice:[
{p:'Šta je zajedničko judaizmu, hrišćanstvu i islamu?', o:'Jedan Bog, objava preko proroka, poreklo od Avrama, linearno vreme.'},
{p:'Šta je Tora?', o:'Jevrejski Zakon — pet Mojsijevih knjiga.'},
{p:'Koje su tri velike grane hrišćanstva?', o:'Pravoslavlje, katolicizam, protestantizam.'},
{p:'Koji su pet stubova islama?', o:'Šehadet (svedočenje), namaz (molitva), zekat (davanje), post u ramazanu, hadž.'},
{p:'Zašto se islam podelio na sunite i šiite?', o:'Zbog spora oko Muhamedovog naslednika.'}
],
razgovor:['Šta od pravoslavlja živi u tebi, i kad ne veruješ — običaj, slika, rečenica, osećaj?','Zašto se, po tebi, ljudi koji veruju u istog Avramovog Boga toliko svađaju — zbog vere, ili zbog nečeg drugog obučenog u veru?']},

{id:'7-3', naslov:'Šta je filozofija i njenih pet grana',
kuka:{p:'Šta misliš, šta znači reč „filozofija"?', o:['Nauka o mišljenju','Ljubav prema mudrosti','Učenje starih Grka'], t:1},
delovi:[
{n:'Reč i početak', t:`Filozofija na grčkom znači „ljubav prema mudrosti" (philos — onaj koji voli, sophia — mudrost). Ne „posedovanje mudrosti", nego ljubav prema njoj. Filozof je onaj koji traži, ne onaj koji je našao.

Počela je u grčkim gradovima oko 600. godine pre nove ere. Prvi filozof koga pamtimo je Tales iz Mileta. Njegov odgovor je bio pogrešan („sve je od vode"), ali je pitanje bilo novo: od čega je svet — a da to ne objasnimo bogovima i mitom?

Platon i Aristotel su rekli istu stvar: filozofija počinje ČUĐENJEM. Kad ti nešto što svi uzimaju zdravo za gotovo odjednom postane čudno. Zašto uopšte postoji nešto, a ne ništa? Šta je vreme? Zašto je nešto pravedno?`,
pr:{p:'Šta je bilo novo kod Talesa?', o:['Tačan odgovor da je sve od atoma','Pitanje od čega je svet, bez objašnjavanja bogovima','Prva napisana knjiga'], t:1, z:'Odgovor („sve je od vode") je bio pogrešan, ali je način bio nov: objasniti svet razlogom, a ne mitom.'}},
{n:'Filozofija, nauka, vera', t:`NAUKA pita kako svet radi i odgovara posmatranjem, merenjem i eksperimentom. Tvrdnja važi dok je eksperiment ne obori.

VERA odgovara na velika pitanja otkrovenjem i predanjem. Odgovor se prihvata, ne dokazuje; oslonac je poverenje, ne argument.

FILOZOFIJA pita velika pitanja kao vera, ali odgovara kao nauka — razlogom. Samo što nema laboratoriju, pa joj je oruđe ARGUMENT. I pita ono što nauka ne pita: šta je uopšte dokaz, šta je uzrok, da li je dobro ono što je korisno.

Skoro sve nauke su nekad bile filozofija. Fizika se zvala „prirodna filozofija" sve do Njutna. Kad neko pitanje dobije metod za merenje, ode iz filozofije i postane nauka. Filozofiji ostaju pitanja za koja merenje ne postoji.`,
pr:{p:'Čime filozofija odgovara na pitanja?', o:['Eksperimentom u laboratoriji','Otkrovenjem i predanjem','Razlogom i argumentom'], t:2, z:'Pita velika pitanja kao vera, ali odgovara kao nauka — razlogom; samo bez laboratorije, argumentom.'}},
{n:'Sokrat i metod', t:`Tri osnovna alata filozofa:
1. ANALIZA POJMA. Šta tačno znači „hrabar"? Onaj ko se ne boji — ili onaj ko se boji pa ipak ide?
2. ARGUMENT. Ne „ja tako osećam", nego „zato što A i B, sledi C".
3. PROTIVPRIMER. Jedan slučaj koji obara opšte pravilo. „Laž je uvek loša" — a laž ubici koji pita gde ti se krije prijatelj?

Sokrat (Atina, 5. vek pre n. e.) je ovo radio na ulici. Pitao je ljude šta je pravda, hrabrost, vrlina — i pokazivao im da ne znaju ono što misle da znaju. Odatle „znam da ništa ne znam": ne skromnost, nego početna tačka. Toliko je dosadio Atini da su ga osudili na smrt. Nije napisao ništa; znamo ga iz Platonovih dijaloga.`,
pr:{p:'Šta je Sokrat hteo sa „znam da ništa ne znam"?', o:['Da je znanje nemoguće','Da je svest o sopstvenom neznanju početak pravog traženja','Da je bio skroman čovek'], t:1, z:'To je početna tačka: ko misli da zna, ne traži. Sokrat je pokazivao ljudima da ne znaju ono što misle da znaju.'}},
{n:'Pet grana', t:`Filozofija je podeljena po vrsti pitanja:

1. METAFIZIKA — šta postoji. Da li postoji duša? Da li je volja slobodna? Šta je vreme?
2. EPISTEMOLOGIJA — šta i kako znamo. Razlika između verovanja i znanja; možemo li verovati čulima.
3. LOGIKA — kako pravilno zaključujemo. Ne pita da li je tvrdnja tačna, nego da li iz razloga zaista sledi zaključak.
4. ETIKA — kako treba delati. Šta čini postupak ispravnim: namera, posledica, karakter?
5. ESTETIKA — šta je lepo i šta je umetnost. Zašto nas tužna priča privlači umesto da nas odbije? (Aristotel: katarza — pročišćenje kroz sažaljenje i strah.)

Svaki put kad kao pisac odlučiš da kraj mora da boli — radiš estetiku, samo bez naslova.`,
pr:{p:'Kojoj grani pripada pitanje „da li je volja slobodna"?', o:['Etici','Metafizici','Estetici'], t:1, z:'Pitanje šta postoji i kakva je priroda stvari (pa i volje) je metafizika.'}},
{n:'Mapa u jednoj liniji', t:`Samo skelet, da znaš gde si kad neko ime padne:

• ANTIKA: Sokrat, Platon (svet ideja), Aristotel (logika, etika, nauka); stoici — kontroliši ono što zavisi od tebe, ostalo pusti.
• SREDNJI VEK: vera i razum — Avgustin, Toma Akvinski.
• NOVI VEK (17–18. vek): Dekart („mislim, dakle jesam"), Lok i Hjum (sve znanje iz iskustva), Kant (spaja jedno i drugo).
• 19. VEK: Hegel, Marks (istorija i društvo), Niče („Bog je mrtav" — šta sad sa vrednostima?).
• 20. VEK: egzistencijalisti (Sartr, Kami — smisao nije dat, pravi ga čovek), analitička filozofija (jezik i logika).

Ne moraš ovo da pamtiš napamet. Vraćaćemo se na imena kad zatreba.`,
pr:{p:'Ko je rekao „mislim, dakle jesam"?', o:['Niče','Dekart','Sokrat'], t:1, z:'Dekart, 17. vek — o tome je sledeća lekcija.'}}
],
kljucno:['Filozofija = ljubav prema mudrosti; počinje čuđenjem (Tales, oko 600. pre n. e.).','Nauka meri, vera prihvata, filozofija pita velika pitanja i odgovara argumentom.','Alati: analiza pojma, argument, protivprimer — Sokratov metod.','Pet grana: metafizika, epistemologija, logika, etika, estetika.'],
kartice:[
{p:'Šta znači reč „filozofija"?', o:'Ljubav prema mudrosti.'},
{p:'Po čemu se filozofija razlikuje od nauke i od vere?', o:'Pita velika pitanja kao vera, ali odgovara razlogom kao nauka — bez laboratorije, argumentom.'},
{p:'Koja su tri alata filozofa?', o:'Analiza pojma, argument, protivprimer.'},
{p:'Nabroj pet grana filozofije.', o:'Metafizika, epistemologija, logika, etika, estetika.'},
{p:'Šta je katarza?', o:'Pročišćenje kroz sažaljenje i strah koje doživimo uz tragičnu priču (Aristotel).'}
],
razgovor:['Navedi jedno pitanje iz svog života koje je filozofsko, i reci zašto ga nauka ne može rešiti.','Uzmi jedan kraj koji si napisao. Koje estetsko pitanje si tu rešavao?']},

{id:'7-4', naslov:'Razum ili iskustvo — kako znamo',
kuka:{p:'Odakle, po tebi, dolazi pravo znanje?', o:['Iz razuma — iz glave','Iz iskustva — kroz čula','Iz oba, nekako zajedno'], t:2},
delovi:[
{n:'Pitanje', t:`Odakle nam znanje? Dva velika odgovora su se sudarala kroz ceo 17. i 18. vek:

RACIONALIZAM: pravo znanje dolazi iz RAZUMA. Čula varaju; samo ono što razum jasno uvidi je sigurno. Uzor je matematika: da je 2 + 2 = 4 ne znaš zato što si brojao jabuke, nego zato što ne može drugačije.

EMPIRIZAM: sve znanje dolazi iz ISKUSTVA, kroz čula. Razum samo slaže ono što su čula donela. Bez iskustva, u glavi nema ničega.

Obe strane su imale jak argument i slabu tačku. Zato je spor trajao dva veka.`,
pr:{p:'Šta tvrdi empirizam?', o:['Pravo znanje dolazi iz razuma','Sve znanje dolazi iz iskustva, kroz čula','Znanje je nemoguće'], t:1, z:'Empiristi kažu: bez iskustva u glavi nema ničega — razum samo slaže ono što su čula donela.'}},
{n:'Dekart: sumnjaj u sve', t:`Dekart (Francuska, 17. vek) je hteo znanje sigurno kao matematika. Metod: sumnjaj u sve u šta se uopšte može posumnjati.

• Čula? Varaju me (štap u vodi izgleda slomljen).
• Da sam budan? Možda sanjam.
• Matematika? Možda me neki zli demon vara i kad sabiram.

Ali jedno ne mogu da dovedem u sumnju: da sumnjam. Ako sumnjam, mislim; ako mislim, postojim. „MISLIM, DAKLE JESAM."

Na toj jednoj sigurnoj tački pokušao je da sagradi sve ostalo, razumom. Verovao je i u UROĐENE IDEJE: neke pojmove (broj, beskonačno, Bog) nismo dobili iz iskustva, nego ih nosimo sa sobom.`,
pr:{p:'U šta Dekart NE može da posumnja?', o:['Da su čula pouzdana','Da sumnja — dakle da misli i postoji','Da je matematika tačna'], t:1, z:'Sama sumnja dokazuje mišljenje, a mišljenje postojanje: „mislim, dakle jesam".'}},
{n:'Lok i Hjum: prazna tabla', t:`Lok (Engleska, 17. vek): urođenih ideja nema. Um deteta je TABULA RASA — prazna tabla. Sve upisuje iskustvo.

Hjum (Škotska, 18. vek) je empirizam doveo do kraja, i tu je postalo neprijatno:
• UZROČNOST: nikad ne vidimo da jedna stvar „izaziva" drugu. Vidimo samo da jedna stalno ide posle druge. Uzrok je navika uma.
• PROBLEM INDUKCIJE: to što je sunce izlazilo do sad ne dokazuje da će sutra. Svako takvo zaključivanje pretpostavlja da će budućnost ličiti na prošlost — a to se ne može dokazati bez kruga.

Ako je samo iskustvo izvor, onda je i nauka zasnovana na navici, ne na dokazu.`,
pr:{p:'Šta je, po Hjumu, uzrok?', o:['Nešto što jasno vidimo u svetu','Navika uma — vidimo samo da jedno ide posle drugog','Božja volja'], t:1, z:'Ne opažamo „izazivanje", samo redosled. Pojam uzroka je navika koju um stvori.'}},
{n:'Kant: naočare uma', t:`Kant (Nemačka, 18. vek) je rekao da ga je Hjum „probudio iz dogmatskog dremeža". Njegovo rešenje je spoj:

Sve znanje POČINJE sa iskustvom, ali ne POTIČE sve iz iskustva. Um nije prazna tabla, nego više kao NAOČARE: iskustvo stiže, a um ga sam slaže u prostor, vreme i uzrok. Zato su ti oblici sigurni — nisu u svetu, nego u načinu na koji ga gledamo.

„Misli bez sadržaja su prazne, opažaji bez pojmova su slepi."

Cena: svet „po sebi", kakav je bez naših naočara, ne možemo da znamo. Znamo samo svet kakav nam se pojavljuje.`,
pr:{p:'Šta je Kantovo rešenje?', o:['Pobedio je racionalizam','Znanje počinje iskustvom, ali ga um uobličava svojim „naočarima"','Ništa se ne može znati'], t:1, z:'Iskustvo daje sadržaj, um daje oblik (prostor, vreme, uzrok) — jedno bez drugog ne ide.'}},
{n:'Šta je ostalo danas', t:`Danas većina misli da su obe strane delimično u pravu:

• Nauka je spoj: hipoteza (razum) + eksperiment (iskustvo).
• Psihologija i biologija su pokazale da dete NIJE prazna tabla — ima urođene sklonosti, recimo za jezik. Ali sadržaj dolazi iz iskustva.
• Hjumov problem indukcije nije rešen. Samo smo naučili da živimo s njim.

Jedna slika: racionalista veruje glavi, empirista očima, a Kant kaže da oči bez glave ne vide, a glava bez očiju nema šta da gleda.`,
pr:{p:'Kako radi nauka, po današnjem shvatanju?', o:['Samo razumom','Samo iskustvom','Spojem hipoteze (razum) i eksperimenta (iskustvo)'], t:2, z:'Razum predloži, iskustvo proveri — zato su obe strane delimično bile u pravu.'}}
],
kljucno:['Racionalizam: znanje iz razuma (Dekart); empirizam: znanje iz iskustva (Lok, Hjum).','Dekart: „mislim, dakle jesam" — jedina sigurna tačka posle sumnje u sve.','Hjum: uzrok je navika uma; problem indukcije nije rešen.','Kant: iskustvo daje sadržaj, um daje oblik — naočare kroz koje gledamo.'],
kartice:[
{p:'Racionalizam vs. empirizam — u jednoj rečenici?', o:'Racionalizam: znanje iz razuma. Empirizam: znanje iz iskustva.'},
{p:'Zašto Dekart ne može da posumnja da postoji?', o:'Jer sama sumnja je mišljenje, a ko misli — postoji.'},
{p:'Šta je problem indukcije?', o:'Iz toga što se nešto uvek dešavalo ne sledi sigurno da će se desiti opet.'},
{p:'Šta je tabula rasa?', o:'Lokova ideja da je um deteta prazna tabla koju ispisuje iskustvo.'},
{p:'Kantova rečenica o mislima i opažajima?', o:'„Misli bez sadržaja su prazne, opažaji bez pojmova su slepi."'}
],
razgovor:['Hjum kaže da je uzrok samo navika uma. Slažeš li se? Daj primer iz života za ili protiv.','Šta u tvom pisanju dolazi iz iskustva, a šta iz glave?']},

{id:'7-5', naslov:'Etika — tri pristupa',
kuka:{p:'Prijatelj te pita da li mu je priča dobra. Nije. Šta je ispravno?', o:['Reći istinu, uvek','Reći ono što će mu najviše pomoći','Zavisi od toga kakav prijatelj želiš da budeš'], t:2},
delovi:[
{n:'Tri pitanja', t:`Kad procenjuješ da li je nešto ispravno, možeš da gledaš na tri mesta:

1. KAKAV si čovek kad to uradiš? → ETIKA VRLINE
2. Šta će iz toga PROIZAĆI? → KONSEKVENCIJALIZAM (etika posledica)
3. Da li je to tvoja DUŽNOST, po pravilu koje važi za sve? → DEONTOLOGIJA (etika dužnosti)

Nijedan nije „tačan". To su tri sočiva. Većina ljudi koristi sva tri, samo ne zna kad koje. (I pitanje sa početka je imalo smisla na sva tri načina.)`,
pr:{p:'Koji pristup pita „šta će iz toga proizaći"?', o:['Etika vrline','Konsekvencijalizam','Deontologija'], t:1, z:'Konsekvencijalizam sudi po posledicama; etika vrline po karakteru; deontologija po dužnosti.'}},
{n:'Vrlina — Aristotel', t:`Aristotel ne pita „šta da uradim", nego „kakav da budem". Cilj života je EUDAIMONIJA — ne sreća kao osećaj, nego dobro proživljen život, procvat.

Do nje se stiže VRLINAMA: hrabrost, umerenost, pravednost, velikodušnost, prijateljstvo. Svaka vrlina je SREDINA između dve krajnosti:
• hrabrost je između kukavičluka i ludosti;
• velikodušnost između škrtosti i rasipništva.

Vrlina se ne uči iz knjige nego VEŽBOM, kao zanat: postaješ pravedan radeći pravedne stvari. Zato kod Aristotela nema pravila za sve; dobar čovek u datoj situaciji vidi šta treba. To mu je i mana: šta ako ne vidi?`,
pr:{p:'Šta je hrabrost po Aristotelu?', o:['Odsustvo straha','Sredina između kukavičluka i ludosti','Spremnost da se pogine'], t:1, z:'Svaka vrlina je sredina između dve krajnosti — hrabrost između kukavičluka i ludosti.'}},
{n:'Posledice — Bentam i Mil', t:`Bentam i Mil (Engleska, 18–19. vek): ispravno je ono što donosi NAJVIŠE DOBRA ZA NAJVEĆI BROJ ljudi. To se zove UTILITARIZAM.

Namera nije bitna, bitan je ishod. Laž je loša samo ako napravi više štete nego koristi.

Snaga: jasno je, praktično, i svi se računaju jednako.

Slabost, klasičan primer: hirurg ima pet pacijenata kojima treba organ i jednog zdravog čoveka u čekaonici. Po čistom računu, jedan za pet je dobra razmena. Svima je jasno da nije u redu. Znači da sam ishod nije sve.`,
pr:{p:'Šta je slaba tačka utilitarizma u primeru sa hirurgom?', o:['Ne računa sa brojem spasenih','Po čistom računu opravdava nešto što svi osećamo kao zlo','Previše gleda na nameru'], t:1, z:'Račun „jedan za pet" izlazi dobro, a ipak je jasno da nije u redu — ishod nije sve.'}},
{n:'Dužnost — Kant', t:`Kant: postupak je ispravan ako je učinjen IZ DUŽNOSTI, po pravilu koje bi moglo da važi za svakog. Posledice ne odlučuju.

KATEGORIČKI IMPERATIV, dve verzije:
1. Radi samo po pravilu za koje bi mogao hteti da postane opšti zakon. (Ako bi svi lagali kad im odgovara, reči bi izgubile vrednost — dakle ne laži.)
2. Postupaj sa čovekom uvek i kao sa CILJEM, nikad samo kao sa SREDSTVOM. (Zato hirurg ne sme: zdrav čovek bi bio samo sredstvo.)

Snaga: ljudsko dostojanstvo je neprikosnoveno.
Slabost: Kant je tvrdio da ne smeš slagati ni ubicu koji pita gde ti se krije prijatelj. Pravilo bez izuzetka ume da bude okrutno.`,
pr:{p:'Zašto hirurg po Kantu ne sme da uzme organe zdravom čoveku?', o:['Jer bi posledice bile loše','Jer bi čoveka koristio samo kao sredstvo','Jer to zakon zabranjuje'], t:1, z:'Druga verzija kategoričkog imperativa: čovek je uvek i cilj, nikad samo sredstvo.'}},
{n:'Jedna dilema, tri odgovora', t:`Vratimo se na pitanje sa početka: prijatelj pita da li mu je priča dobra. Nije.

• VRLINA: šta bi uradio iskren i dobar prijatelj? Istinu, ali sa merom i u pravom trenutku — sredina između surovosti i ulizivanja.
• POSLEDICE: šta donosi više dobra? Ako ga istina popravi kao pisca — reci. Ako će samo da odustane — možda ne sad.
• DUŽNOST: laž je laž. Ne smeš je koristiti ni da ga zaštitiš, jer ga onda tretiraš kao dete, a ne kao čoveka koji zaslužuje istinu.

Ovde sva tri vode ka istini, ali drugim putem. U drugim slučajevima se razilaze. Kad se slože — verovatno si u pravu. Kad se raziđu — tu je prava dilema.`,
pr:{p:'Kada su tri pristupa najkorisnija zajedno?', o:['Nikad, treba izabrati jedan','Kad se slože, verovatno si u pravu; kad se raziđu, vidiš pravu dilemu','Samo u medicini'], t:1, z:'Tri sočiva na istu situaciju: slaganje daje sigurnost, razilaženje pokazuje gde je teško.'}}
],
kljucno:['Tri pristupa: vrlina (kakav si), posledice (šta proizlazi), dužnost (pravilo za sve).','Aristotel: vrlina je sredina između krajnosti i uči se vežbom; cilj je eudaimonija.','Utilitarizam: najviše dobra za najviše ljudi — slab kad račun opravda zlo.','Kant: radi po pravilu koje bi važilo za sve; čovek nikad samo sredstvo.'],
kartice:[
{p:'Tri pristupa u etici?', o:'Etika vrline, konsekvencijalizam (posledice), deontologija (dužnost).'},
{p:'Šta je eudaimonija?', o:'Aristotelov cilj života — dobro proživljen život, procvat, ne samo osećaj sreće.'},
{p:'Šta je utilitarizam?', o:'Ispravno je ono što donosi najviše dobra najvećem broju ljudi.'},
{p:'Dve verzije Kantovog kategoričkog imperativa?', o:'Radi po pravilu koje bi moglo biti opšti zakon; čovek je uvek i cilj, nikad samo sredstvo.'},
{p:'Koja je slaba tačka Kantove etike?', o:'Pravilo bez izuzetka ume da bude okrutno (ne laži ni ubicu).'}
],
razgovor:['Uzmi jednu stvarnu odluku iz svog života. Koji od tri pristupa si tada koristio, i da li bi danas drugačije?','Koji ti je pristup najbliži, a koji ti najviše smeta? Zašto?']}
]},

{id:'8', naziv:'Novac i ekonomija', ikona:'💶', era:'danas', lekcije:[
{id:'8-1', naslov:'Oskudnost, izbor, cena — ponuda i potražnja',
kuka:{p:'Ako država zabrani da hleb košta više od 20 dinara, a pekarima je skuplje da ga proizvedu — šta će se najverovatnije desiti?', o:['Hleb će biti jeftin i svega će biti dosta','Hleba će nestati iz prodavnica ili će se prodavati „ispod pulta"','Ništa se neće promeniti'], t:1},
delovi:[
{n:'Oskudnost — zašto ekonomija uopšte postoji', t:`Ekonomija ne počinje od novca, nego od jedne činjenice: želja ima više nego stvari, vremena i snage. To je OSKUDNOST.

Zato stalno BIRAMO. A svaki izbor nešto košta, i kad ne plaćaš parama. OPORTUNITETNI TROŠAK je ono najbolje čega se odrekneš kad nešto izabereš. Slobodno veče posle smene: ako ga provedeš pišući, cena nije nula — cena je san, ili društvo, ili serija koju nisi gledao.

Ekonomija je zato, najkraće, nauka o tome kako ljudi i društva biraju kad ne mogu sve. Deli se na:
• MIKROEKONOMIJU — pojedinac, domaćinstvo, firma, jedno tržište (cena hleba, tvoja plata);
• MAKROEKONOMIJU — cela država i svet (inflacija, nezaposlenost, rast, kamate).`,
pr:{p:'Šta je oportunitetni trošak?', o:['Cena na etiketi','Ono najbolje čega se odrekneš kad nešto izabereš','Porez na izbor'], t:1, z:'Svaki izbor ima cenu u propuštenoj drugoj mogućnosti — i kad ne plaćaš novcem.'}},
{n:'Podela rada i trgovina', t:`Adam Smit je 1776. u knjizi „Bogatstvo naroda" opisao fabriku čioda: jedan radnik sam napravi možda dvadesetak čioda dnevno, a deset radnika, kad podele posao na korake (jedan seče žicu, drugi oštri…), napravi desetine hiljada.

To je PODELA RADA: kad se svako specijalizuje za ono što radi najbolje i onda razmenjujemo, svi imamo više. Ti ne praviš sam svoje cipele, telefon i hleb — a imaš sve troje.

Smit je dodao još jednu čuvenu misao — „NEVIDLJIVU RUKU": pekar ne peče hleb iz dobrote, nego da bi zaradio; ali tražeći svoju korist, nahrani grad. Tržište ponekad usklađuje sebične interese u zajedničku korist, a da to niko ne planira.

Važno: Smit NIJE tvrdio da je tržište uvek dobro. Upozoravao je na trgovce koji se dogovaraju da podignu cene i smatrao da država mora da obezbedi pravdu, odbranu i javne radove.`,
pr:{p:'Šta je Smit hteo da pokaže primerom fabrike čioda?', o:['Da su fabrike loše','Da podela rada višestruko povećava proizvodnju','Da su čiode skupe'], t:1, z:'Specijalizacija i razmena — deset radnika sa podeljenim poslom napravi hiljade puta više.'}},
{n:'Ponuda i potražnja', t:`Kako se formira CENA? Dve sile:

• POTRAŽNJA — koliko kupci žele da kupe. Što je nešto jeftinije, kupuje se više.
• PONUDA — koliko prodavci žele da prodaju. Što je cena viša, više se isplati proizvoditi, pa se nudi više.

Gde se te dve sile sretnu, tu je RAVNOTEŽNA CENA: koliko ljudi hoće da kupi po toj ceni, toliko se i nudi.

Kad se nešto pomeri, cena reaguje:
• loša godina za maline (manja ponuda) → maline poskupe;
• svi odjednom hoće klima-uređaj u toplotnom talasu (veća potražnja) → poskupe i majstori;
• nova fabrika ponudi više → cena padne.

Cena je, tako gledano, PORUKA: visoka cena kaže „ovoga fali — štedi ga i proizvodi više", niska kaže „ovoga ima dosta".`,
pr:{p:'Šta se obično desi sa cenom kad ponuda opadne, a potražnja ostane ista?', o:['Cena padne','Cena poraste','Cena ostane ista'], t:1, z:'Manje robe za istu želju kupaca — cena raste dok se ponuda i potražnja ne izjednače.'}},
{n:'Kad se cena „zakuca"', t:`Šta ako država propiše najvišu cenu, ispod ravnotežne? Kupci hoće više (jeftino je), a proizvođači nude manje (ne isplati se). Rezultat: NESTAŠICA — redovi, prazne police, prodaja „ispod pulta" i crno tržište. To se viđalo mnogo puta u istoriji, i kod nas u krizama (ulje, šećer, brašno).

I obrnuto: propisana najniža cena iznad ravnotežne pravi VIŠAK. Klasičan primer su otkupne cene poljoprivrednih proizvoda.

Da li to znači da država nikad ne treba da ograniči cene? Ne nužno — u ratu, u krizi, za lekove, oko toga postoji prava rasprava. Ali ekonomisti se uglavnom slažu da ograničenje cene NE PRAVI ROBU: ako je nema dovoljno, ograničenje samo menja ko je dobija (ko pre stigne, ko ima vezu).

Takođe važno: ne reaguje svaka roba isto. Kad poskupi hleb ili struja, ljudi kupuju skoro isto — moraju. Kad poskupi skupi sat, kupuje se mnogo manje. To se zove ELASTIČNOST.`,
pr:{p:'Šta obično donosi najviša propisana cena ispod ravnotežne?', o:['Više robe','Nestašicu — redove i crno tržište','Pad potražnje'], t:1, z:'Kupci hoće više, proizvođači nude manje — robe fali.'}},
{n:'Podsticaji — i šta dalje', t:`Ako iz ekonomije poneseš samo jednu misao, neka bude ova: LJUDI REAGUJU NA PODSTICAJE. Promeni nagradu ili kaznu — promeniće se i ponašanje, ponekad na neočekivan način.

Poznata (možda ulepšana) priča iz kolonijalne Indije: vlast je plaćala nagradu za svaku ubijenu kobru, da bi ih bilo manje. Ljudi su počeli da gaje kobre radi nagrade. Kad je vlast to shvatila i ukinula nagradu, gajene kobre su puštene — i kobri je bilo više nego pre. To se zove EFEKAT KOBRE.

Kostur lekcije: oskudnost → izbor i oportunitetni trošak → podela rada i razmena → cena iz ponude i potražnje → zakucana cena pravi nestašicu → ljudi reaguju na podsticaje.

Sledeće: novac — šta je on uopšte, odakle dolazi i zašto gubi vrednost.`,
pr:{p:'Šta je „efekat kobre"?', o:['Opasnost od zmija','Mera koja proizvede suprotan efekat jer ljudi reaguju na podsticaj na neočekivan način','Nagla promena cena'], t:1, z:'Nagrada za ubijene kobre navela je ljude da ih gaje — kobri je na kraju bilo više.'}}
],
kljucno:['Oskudnost tera na izbor; svaki izbor ima oportunitetni trošak — ono najbolje čega se odrekneš.','Podela rada i razmena (Smit, 1776) višestruko povećavaju proizvodnju; „nevidljiva ruka" — ali Smit nije tvrdio da je tržište uvek dobro.','Cena nastaje gde se sretnu ponuda i potražnja; cena je poruka o tome čega fali.','Najviša propisana cena ispod ravnotežne pravi nestašicu; ograničenje ne pravi robu.','Ljudi reaguju na podsticaje — ponekad suprotno nameri (efekat kobre).'],
kartice:[
{p:'Šta je oportunitetni trošak?', o:'Ono najbolje čega se odrekneš kad nešto izabereš.'},
{p:'Ko je napisao „Bogatstvo naroda" i kada?', o:'Adam Smit, 1776.'},
{p:'Šta je ravnotežna cena?', o:'Cena po kojoj je količina koju kupci žele jednaka količini koja se nudi.'},
{p:'Šta pravi propisana cena ispod ravnotežne?', o:'Nestašicu.'},
{p:'Šta je elastičnost potražnje?', o:'Koliko se kupovina menja kad se promeni cena — kod neophodnih stvari malo, kod luksuza mnogo.'}
],
razgovor:['Koji je najveći oportunitetni trošak u tvom životu sada — čega se odričeš da bi imao nešto drugo?','Smeni ili poslu: koji podsticaj tamo pravi suprotno od onoga što je šef hteo?']},
{id:'8-2', naslov:'Novac, banke, inflacija',
kuka:{p:'Koliko je, otprilike, bila mesečna inflacija u SR Jugoslaviji u januaru 1994?', o:['Oko 50%','Oko 1.000%','Više od 300 miliona odsto'], t:2},
delovi:[
{n:'Šta je novac', t:`Bez novca trgovina je RAZMENA (trampa): imaš jaja, treba ti obuća. Problem — obućar mora baš tada da želi baš jaja. Novac rešava taj problem: svi ga primaju jer znaju da ga i drugi primaju.

Novac ima tri posla:
1. SREDSTVO RAZMENE — plaćaš njim;
2. MERA VREDNOSTI — sve ima cenu u istim jedinicama, pa možeš da porediš;
3. ČUVANJE VREDNOSTI — možeš da ga sačuvaš za sutra (dobro, ako nema inflacije).

Kroz istoriju novac je bio svašta: školjke, so, stoka, zrnevlje, pa metal. Prvi kovani novac pojavljuje se u LIDIJI (današnja Turska) oko 600. p. n. e. Papirni novac prvi su masovno koristili Kinezi, oko 11. veka.

Najvažnije: vrednost novca je u POVERENJU. Papirna novčanica sama po sebi ne vredi ništa; vredi jer svi veruju da će je drugi primiti.`,
pr:{p:'Na čemu, na kraju, počiva vrednost papirnog novca?', o:['Na zlatu u trezoru','Na poverenju da će ga svi primati','Na kvalitetu papira'], t:1, z:'Danas novac nije vezan za zlato; vredi dok ljudi veruju da će ga drugi prihvatiti.'}},
{n:'Od zlata do „fijat" novca', t:`Dugo je novac bio vezan za ZLATO: država je obećavala da možeš novčanicu da zameniš za određenu količinu zlata (ZLATNI STANDARD). To je držalo novac stabilnim, ali i krutim — u krizi država nije mogla da štampa više.

SAD su 1971. prekinule vezu dolara i zlata; od tada skoro sav novac na svetu je „FIJAT" novac — vredi zato što ga država propisuje kao zakonsko sredstvo plaćanja i zato što mu ljudi veruju.

Danas je najveći deo novca — samo BROJ na računu. U većini zemalja gotovina je mali deo ukupnog novca; ostalo su depoziti u bankama.

A kriptovalute (bitkoin, 2009)? Pokušaj da se napravi novac bez države i banaka. Za sada služe više kao špekulativna imovina nego kao novac za svakodnevno plaćanje — vrednost im previše skače da bi bile dobra „mera vrednosti". Oko njihove budućnosti mišljenja su podeljena.`,
pr:{p:'Šta se promenilo 1971?', o:['Uveden je evro','SAD su prekinule vezu dolara i zlata','Izmišljen je bitkoin'], t:1, z:'Kraj zlatnog standarda: od tada je novac „fijat" — vredi zbog zakona i poverenja.'}},
{n:'Banke i centralna banka', t:`Šta banka radi? Uzima depozite i daje KREDITE. Na kredit naplaćuje veću kamatu nego što plaća na štednju — razlika je njena zarada.

Iznenađenje za mnoge: kad banka da kredit, ona ne uzima tuđ novac iz sefa — ona većinom NAPRAVI nov novac, upisom na tvoj račun. (Tako to objašnjava i Engleska centralna banka.) Zato krediti povećavaju količinu novca, a otplata je smanjuje.

Da banke ne bi preterale, postoji CENTRALNA BANKA (kod nas Narodna banka Srbije, u evrozoni ECB, u SAD „Fed"). Ona:
• određuje osnovnu (REFERENTNU) KAMATU — kad je podigne, krediti poskupe, troši se manje, inflacija se smiruje; kad je spusti, obrnuto;
• nadzire banke;
• čuva vrednost novca.

Kamatu na tvoj kredit, dakle, delom određuje odluka centralne banke. Zato se vest „NBS podigla referentnu kamatnu stopu" vidi na rati.`,
pr:{p:'Šta obično radi centralna banka kad hoće da smiri inflaciju?', o:['Spusti kamatu','Podigne referentnu kamatu, pa krediti poskupe i troši se manje','Odštampa više novca'], t:1, z:'Viša kamata hladi potrošnju i kredite — cene sporije rastu.'}},
{n:'Inflacija', t:`INFLACIJA je opšti rast cena — isti novac kupuje sve manje.

Glavni uzroci:
• previše novca juri premalo robe (država štampa da pokrije troškove, krediti bujaju);
• poskupe troškovi proizvodnje (nafta, gas, hrana posle loše godine);
• očekivanja — ako svi očekuju poskupljenje, traže veće plate i dižu cene unapred, pa se to ostvari.

Ko gubi: ŠTEDIŠE i ljudi sa fiksnim primanjima (penzije, plate koje kasne za cenama). Ko dobija: DUŽNICI — dug se „istopi" (zato je inflacija nekad zgodna i prezaduženim državama).

Zato centralne banke ciljaju malu, stabilnu inflaciju — u razvijenim zemljama oko 2%, NBS oko 3%, uz dozvoljeno odstupanje. Ni pad cena (deflacija) nije dobar: ljudi odlažu kupovinu jer će biti jeftinije, pa privreda staje.`,
pr:{p:'Ko najviše gubi od inflacije?', o:['Dužnici','Štediše i ljudi sa fiksnim primanjima','Država'], t:1, z:'Ušteđevina i fiksna primanja kupuju sve manje, dok se dužnicima dug realno smanjuje.'}},
{n:'Hiperinflacija — naša lekcija', t:`Kad inflacija pobegne potpuno, to je HIPERINFLACIJA (dogovorno: preko 50% mesečno). Primeri: Nemačka 1923 (ljudi su nosili novac kolicima), Mađarska 1946 (najgora u istoriji), Zimbabve 2008.

I SR JUGOSLAVIJA 1992–1994 — jedna od najgorih ikada. Uz rat, sankcije i raspad zemlje, država je štampala novac da pokrije troškove. U januaru 1994. mesečna inflacija je bila oko 313 MILIONA procenata; cene su se udvostručavale svakih par sati. Štampane su novčanice od 500 milijardi dinara. Plata je trošena istog dana, a račun se računao u nemačkim markama. Hiperinflaciju je zaustavio program „Avramovića" u januaru 1994: novi dinar vezan za marku.

Lekcija koju svaki ekonomista pamti: kad država pokušava da štampanjem novca plati ono za šta nema — novac propada, a sa njim i ušteđevina ljudi.

Sledeće: država i tržište — šta ko treba da radi, i kuda idu porezi.`,
pr:{p:'Šta je glavni uzrok hiperinflacije u SRJ 1993–94?', o:['Pad cene nafte','Masovno štampanje novca da se pokriju državni troškovi, uz rat i sankcije','Previše štednje'], t:1, z:'Kad država štampa novac umesto da ima prihode, novac gubi vrednost iz sata u sat.'}}
],
kljucno:['Novac rešava problem trampe; služi za razmenu, merenje i čuvanje vrednosti; počiva na poverenju.','Zlatni standard do 1971; danas „fijat" novac, uglavnom broj na računu; kripto — više špekulacija nego novac (sporno).','Banke kreditima većinom stvaraju nov novac; centralna banka (NBS) referentnom kamatom kontroliše kredite i inflaciju.','Inflacija: previše novca, skuplji troškovi, očekivanja; gube štediše, dobijaju dužnici; cilj oko 2–3%.','Hiperinflacija u SRJ (januar 1994, ~313 miliona % mesečno) — štampanje novca bez pokrića uništava ušteđevinu.'],
kartice:[
{p:'Koja su tri posla novca?', o:'Sredstvo razmene, mera vrednosti, čuvanje vrednosti.'},
{p:'Gde i kada se pojavio prvi kovani novac?', o:'U Lidiji (današnja Turska), oko 600. p. n. e.'},
{p:'Šta radi centralna banka kad podigne referentnu kamatu?', o:'Poskupljuje kredite, smanjuje potrošnju i smiruje inflaciju.'},
{p:'Ko dobija, a ko gubi od inflacije?', o:'Dobijaju dužnici, gube štediše i ljudi sa fiksnim primanjima.'},
{p:'Kolika je bila mesečna inflacija u SRJ u januaru 1994?', o:'Oko 313 miliona procenata.'}
],
razgovor:['Šta pamtiš (ili pamte tvoji) iz 1993? Kako hiperinflacija menja to kako ljudi posle gledaju na novac i na državu?','Da li ti je bitnije da novac čuvaš ili da ga potrošiš na ono što ti sada znači? Zašto?']},
{id:'8-3', naslov:'Tržište i država — porezi i javni dug',
kuka:{p:'Šta je najveći pojedinačni izvor prihoda budžeta Srbije?', o:['Akcize na gorivo','PDV — porez na potrošnju','Porez na imovinu'], t:1},
delovi:[
{n:'Gde tržište ne radi', t:`Tržište dobro radi kad kupac i prodavac sami snose posledice svoje razmene. Ali postoje situacije u kojima to ne važi — ekonomisti ih zovu TRŽIŠNI NEUSPESI:

• EKSTERNALIJE — trošak (ili korist) pada na nekog trećeg. Fabrika zagađuje vazduh, a kašlje ceo grad; cena njenog proizvoda to ne uključuje.
• JAVNA DOBRA — od njih se niko ne može isključiti, pa niko neće dobrovoljno da plati: vojska, svetionik, ulična rasveta, čist vazduh.
• MONOPOL — samo jedan prodavac, može da diže cenu po volji.
• NEJEDNAKO ZNANJE — prodavac polovnog auta zna više od tebe; lekar zna više od pacijenta.

Na ovim mestima uglavnom postoji saglasnost da država ima posla. Rasprava je oko toga KOLIKO i KAKO.`,
pr:{p:'Šta je eksternalija?', o:['Spoljna trgovina','Trošak ili korist koja pada na nekog ko nije učestvovao u razmeni','Strani investitor'], t:1, z:'Zagađenje je klasičan primer — plaća ga komšiluk, ne kupac i prodavac.'}},
{n:'Šta radi država', t:`Moderna država u ekonomiji radi nekoliko stvari:
1. pravila igre — zakoni, ugovori, sudovi, zaštita imovine;
2. javna dobra — odbrana, policija, putevi;
3. ispravlja tržišne neuspehe — propisi o zagađenju, zaštita potrošača, kontrola monopola;
4. PRERASPODELA — penzije, socijalna pomoć, besplatno školstvo i zdravstvo;
5. stabilizacija — u krizi troši više da ublaži pad.

Oko ovoga se političke strane najviše spore. Jedni kažu: država je spora, skupa i podložna korupciji — neka radi samo najnužnije, ljudi bolje znaju šta će sa svojim novcem. Drugi: bez jake države tržište proizvodi velike nejednakosti i nesigurnost — zdravlje i školovanje ne smeju zavisiti od debljine novčanika. Većina zemalja je negde između, i to „negde" se stalno pomera.`,
pr:{p:'Oko čega se političke strane u ekonomiji najviše spore?', o:['Da li država treba da postoji','Koliko i kako država treba da se meša i preraspodeljuje','Da li treba novac'], t:1, z:'Skoro svi prihvataju pravila i javna dobra; spor je oko obima države i preraspodele.'}},
{n:'Porezi', t:`Država se uglavnom finansira porezima. Glavne vrste:
• porez na DOHODAK (platu) i DOPRINOSI (za penziju i zdravstvo) — kod nas se odbijaju od bruto plate pre nego što je dobiješ;
• porez na POTROŠNJU — kod nas PDV (opšta stopa 20%, za osnovne namirnice i neke druge stvari 10%) i AKCIZE (gorivo, cigarete, alkohol);
• porez na DOBIT firmi;
• porez na IMOVINU (stan, kuća).

Dve ideje oko kojih se spori:
• PROGRESIVAN porez — ko više zarađuje, plaća veći procenat (pravednije, kažu jedni; kažnjava trud, kažu drugi);
• PROPORCIONALAN (ravan) — svi isti procenat.

Porez na potrošnju je lakše naplatiti, ali relativno više pogađa siromašnije — oni troše skoro sve što zarade.`,
pr:{p:'Šta je progresivan porez?', o:['Svi plaćaju isti iznos','Ko više zarađuje, plaća veći procenat','Porez koji raste svake godine'], t:1, z:'Stopa raste sa dohotkom; kod ravnog poreza procenat je isti za sve.'}},
{n:'Budžet i javni dug', t:`BUDŽET države je kao kućni, samo veći: prihodi (porezi) i rashodi (plate, penzije, putevi, kamate). Kad su rashodi veći od prihoda — DEFICIT, i država se ZADUŽUJE (prodaje obveznice). Zbir svih tih dugova je JAVNI DUG.

Javni dug se meri u odnosu na BDP (koliko zemlja proizvede za godinu). Japan ima dug preko dvostrukog BDP-a i nije u krizi; Grčka je 2010. sa manjim dugom upala u veliku krizu jer su joj poverioci prestali da veruju. Pouka: nije bitan samo broj, nego POVERENJE i da li privreda raste brže od kamate.

Zašto se država uopšte zadužuje? Da gradi nešto što traje (put, bolnica — plaćaju i oni koji će ih koristiti) i da u krizi ne mora naglo da seče plate i penzije. Problem nastaje kad se zadužuje da bi pokrila tekuću potrošnju godinama — kao domaćinstvo koje kreditom plaća struju.

Kućni budžet i državni se razlikuju u jednom: država može sama da utiče na svoje prihode (porezima) i — u svojoj valuti — da štampa novac. Što je, videli smo 1993, opasan izlaz.`,
pr:{p:'Zašto Japan sa dugom preko 200% BDP-a nije u krizi, a Grčka je bila sa manjim?', o:['Japan ne plaća kamate','Bitni su poverenje poverilaca i to da li privreda raste brže od kamate, ne samo broj','Grčka nije imala dug'], t:1, z:'Japan se zadužuje uglavnom kod svojih građana u svojoj valuti; Grčka je izgubila poverenje stranih poverilaca.'}},
{n:'Dva velika pogleda', t:`U 20. veku ekonomija se oko države podelila na dva velika tabora — i ta rasprava traje:

• DŽON MEJNARD KEJNZ (posle Velike depresije 1930-ih): u krizi ljudi i firme prestanu da troše, pa kriza hrani samu sebe. Tada država treba da troši više (i zaduži se), da „upali motor". U dobrim godinama — da vrati dug.
• FRIDRIH HAJEK i MILTON FRIDMAN: država ne zna dovoljno da upravlja privredom; njeno mešanje često pravi veće probleme (inflaciju, rasipanje, zavisnost). Bolje stabilna pravila, stabilan novac i slobodno tržište.

U praksi se obe ideje koriste: 2008. i 2020. skoro sve države su u krizi trošile kejnzijanski, a protiv inflacije 1980-ih i 2022. centralne banke su delovale kako bi Fridman preporučio.

Sledeće: zašto neke zemlje rastu, zašto dolaze krize i šta je sa nejednakošću.`,
pr:{p:'Šta je, po Kejnzu, uloga države u krizi?', o:['Da štedi i čeka','Da troši više i tako pokrene privredu','Da zabrani uvoz'], t:1, z:'Kad svi prestanu da troše, država treba da uskoči potrošnjom; u dobrim godinama da vrati dug.'}}
],
kljucno:['Tržišni neuspesi: eksternalije, javna dobra, monopol, nejednako znanje — tu država ima posla; spor je oko obima.','Država: pravila, javna dobra, ispravke tržišta, preraspodela, stabilizacija.','Porezi: dohodak i doprinosi, PDV (20%/10%) i akcize, dobit, imovina; progresivan vs ravan.','Deficit → zaduživanje → javni dug (u % BDP-a); bitni su poverenje i rast, ne samo broj.','Kejnz (država troši u krizi) protiv Hajeka i Fridmana (stabilna pravila, manje mešanja) — u praksi se koriste oba.'],
kartice:[
{p:'Šta je javno dobro?', o:'Dobro od kog se niko ne može isključiti, pa ga tržište slabo obezbeđuje (odbrana, rasveta).'},
{p:'Kolika je opšta stopa PDV-a u Srbiji?', o:'20% (posebna 10%).'},
{p:'Šta je budžetski deficit?', o:'Kada su rashodi države veći od prihoda u godini.'},
{p:'U odnosu na šta se meri javni dug?', o:'U odnosu na BDP — koliko zemlja proizvede za godinu.'},
{p:'Šta je Kejnz preporučivao u krizi?', o:'Da država troši više i pokrene privredu.'}
],
razgovor:['Gde bi ti povukao granicu: šta država MORA da obezbedi svakom, a šta je stvar svakog pojedinca?','Da li bi radije plaćao veći porez za bolje zdravstvo i školstvo, ili manji pa sam biraš? Zašto?']},
{id:'8-4', naslov:'Rast, krize, nejednakost',
kuka:{p:'Koliki je deo čovečanstva živeo u krajnjem siromaštvu 1990, a koliki pred 2020?', o:['Isto, oko 10%','Oko 38% → oko 9%','Oko 9% → oko 38%'], t:1},
delovi:[
{n:'Šta je BDP', t:`BRUTO DOMAĆI PROIZVOD (BDP) je vrednost svega što se u zemlji proizvede za godinu (robe i usluge). Kad se podeli sa brojem stanovnika — BDP PO STANOVNIKU, gruba mera koliko je zemlja bogata.

BDP je koristan, ali ima rupe:
• ne meri RASPODELU — prosek može da raste dok većina stoji;
• ne meri neplaćen rad (domaćinstvo, briga o deci i roditeljima);
• ne meri štetu (zagađenje) — popravka posle poplave čak POVEĆA BDP;
• ne meri slobodno vreme, zdravlje, sreću.

Zato se uz BDP gledaju i drugi pokazatelji: očekivani životni vek, obrazovanje, nejednakost, zadovoljstvo životom.

Kad se porede zemlje, BDP se često preračunava po PARITETU KUPOVNE MOĆI — jer 100 evra u Srbiji kupi više nego u Švajcarskoj.`,
pr:{p:'Šta BDP NE meri?', o:['Vrednost proizvedenih usluga','Raspodelu, neplaćen rad i štetu po okolinu','Vrednost proizvedene robe'], t:1, z:'BDP sabira tržišnu proizvodnju; ne kaže ko je dobio i po koju cenu.'}},
{n:'Zašto neke zemlje rastu', t:`Pre 1800. skoro svi ljudi na svetu bili su siromašni. Danas je razlika između najbogatijih i najsiromašnijih zemalja i do pedeset puta. Zašto?

Rast dolazi iz:
• KAPITALA — mašine, putevi, fabrike;
• RADA i znanja — obrazovani, zdravi ljudi;
• TEHNOLOGIJE — novi način da se sa istim uradi više (to je na dugi rok najvažnije);
• INSTITUCIJA — da li ugovor važi, da li sud radi, da li će ti neko oteti ono što si stekao, koliko je korupcije. Mnogi ekonomisti (npr. Adžemoglu i Robinson, „Zašto nacije propadaju", Nobelova nagrada 2024) misle da je ovo ključno.

I jedno matematičko pravilo: SLOŽENI RAST. Zemlja koja raste 2% godišnje udvostruči BDP za oko 35 godina; koja raste 7% — za oko 10. (PRAVILO 70: podeli 70 sa stopom rasta.) Zato Kina i Južna Koreja za dve-tri generacije pređu put koji je Evropa prelazila vekovima.`,
pr:{p:'Za koliko godina se udvostruči privreda koja raste 7% godišnje?', o:['Za oko 70 godina','Za oko 10 godina','Za oko 3 godine'], t:1, z:'Pravilo 70: 70 / 7 = 10 godina.'}},
{n:'Krize', t:`Privreda ne raste ravno, nego u talasima: rast → prepumpavanje → pad → oporavak. To je PRIVREDNI CIKLUS. Pad od bar dva tromesečja zaredom zove se RECESIJA.

Velike krize obično počinju od BALONA: cena nečega (akcija, stanova) raste jer svi kupuju verujući da će još rasti — dok ne prestane. Onda svi prodaju odjednom.

• VELIKA DEPRESIJA: krah berze u Njujorku 1929, propast hiljada banaka; nezaposlenost u SAD oko 25%; posledice su doprinele usponu nacizma u Nemačkoj.
• KRIZA 2008: američke banke su davale stambene kredite ljudima koji ih nisu mogli vraćati, pa te kredite pakovale i prodavale dalje kao „sigurne". Kad su cene kuća pale, sve se srušilo; banka LEMAN BRADERS propala je 15. septembra 2008. Kriza se prelila na ceo svet, pa i na nas.

Zajedničko: preterano zaduživanje, verovanje da „ovaj put je drugačije", i rizik koji niko ne vidi jer je skriven u složenim proizvodima.`,
pr:{p:'Kako obično nastaje balon?', o:['Država propiše visoke cene','Cena raste jer svi kupuju verujući da će još rasti — dok ne prestane','Zbog loše žetve'], t:1, z:'Kupuje se zbog očekivanog rasta, ne zbog stvarne vrednosti — pa pad bude nagao.'}},
{n:'Nejednakost', t:`Dve priče koje su obe tačne:

1. IZMEĐU ZEMALJA nejednakost se od oko 1990. SMANJUJE. Kina, Indija i druge rastu brže od bogatih zemalja. Krajnje siromaštvo (po Svetskoj banci, život sa manje od oko 2 dolara dnevno) palo je sa oko 38% čovečanstva 1990. na oko 9% pred pandemiju. To je jedna od najvećih promena u istoriji, a malo ko je zna.
2. UNUTAR mnogih zemalja nejednakost RASTE — najbogatiji deo dobija sve veći deo kolača (posebno u SAD od 1980-ih).

Meri se najčešće GINIJEVIM KOEFICIJENTOM: 0 = svi imaju isto, 1 = jedan ima sve. Skandinavija je oko 0,25–0,3; SAD oko 0,4; Južna Afrika iznad 0,6.

Rasprava: koliko je nejednakosti „u redu"? Jedni kažu: nejednakost je cena podsticaja — bez nagrade za rizik i trud nema ni rasta. Drugi (npr. Toma Piketi, „Kapital u 21. veku"): kad bogatstvo raste brže od plata, bogatstvo se nasleđuje i zatvara u krug, a to kvari i demokratiju. Treći: nije bitna nejednakost, nego da siromašni žive bolje i da deca imaju šansu.`,
pr:{p:'Šta se dešavalo sa krajnjim siromaštvom u svetu od 1990. do 2019?', o:['Poraslo je','Palo je sa oko 38% na oko 9% čovečanstva','Ostalo je isto'], t:1, z:'Brz rast Kine, Indije i drugih zemalja izvukao je više od milijardu ljudi iz krajnjeg siromaštva.'}},
{n:'Šta iz ovoga za sebe', t:`Nekoliko ekonomskih ideja ima smisla i za kućni budžet:
• SLOŽENA KAMATA radi i za tebe i protiv tebe: mala ušteda dugo uložena raste, a skup kratkoročni kredit (minus na kartici) raste protiv tebe isto tako uporno.
• BALON se oseća i u malom: „svi kupuju, mora da je dobro" nije razlog.
• Krize dolaze — rezerva od nekoliko plata na strani je ekonomski najzdravija navika domaćinstva.

Kostur lekcije: BDP i njegove rupe → rast iz kapitala, rada, tehnologije i institucija → složeni rast → ciklusi, baloni i krize (1929, 2008) → nejednakost: između zemalja pada, unutar raste, a rasprava je o tome koliko je pravedno.

Sledeće: svet kao jedno tržište — trgovina, globalizacija i veliko pitanje 20. veka: kapitalizam ili socijalizam.`,
pr:{p:'Zašto se minus na kartici smatra lošim dugom?', o:['Jer se ne može otplatiti','Jer visoka kamata raste složeno, isto kao ušteda — samo protiv tebe','Jer je zabranjen'], t:1, z:'Složena kamata ne bira stranu: kod štednje radi za tebe, kod skupog duga protiv tebe.'}}
],
kljucno:['BDP meri proizvodnju, ali ne raspodelu, neplaćen rad, štetu ni sreću.','Rast iz kapitala, rada, tehnologije i institucija; pravilo 70 — složeni rast udvostručuje brzo.','Krize iz balona i prezaduženja: 1929 (Velika depresija), 2008 (krediti u SAD, Leman Braders).','Između zemalja nejednakost pada (krajnje siromaštvo ~38% → ~9%), unutar mnogih raste; Gini 0–1.','Rasprava: nejednakost kao podsticaj ili kao zatvoren krug (Piketi) — ili je bitnije da siromašni žive bolje.'],
kartice:[
{p:'Šta je BDP?', o:'Vrednost svih roba i usluga proizvedenih u zemlji za godinu.'},
{p:'Šta je pravilo 70?', o:'70 podeljeno sa stopom rasta = za koliko godina se nešto udvostruči.'},
{p:'Šta je recesija?', o:'Pad privrede bar dva tromesečja zaredom.'},
{p:'Šta je pokrenulo krizu 2008?', o:'Loši stambeni krediti u SAD, upakovani i prodavani kao sigurni; pad cena kuća.'},
{p:'Šta meri Ginijev koeficijent?', o:'Nejednakost — 0 svi isto, 1 jedan ima sve.'}
],
razgovor:['Da li je nejednakost sama po sebi problem, ili je problem samo siromaštvo? Gde ti stojiš?','Da li si osetio neku krizu (2008, 2020, poskupljenja) na sopstvenoj koži? Šta te je naučila?']},
{id:'8-5', naslov:'Globalna ekonomija — trgovina; kapitalizam i socijalizam',
kuka:{p:'Ako je jedna zemlja bolja od druge u proizvodnji SVEGA — da li joj se isplati da trguje sa njom?', o:['Ne, neka sve proizvodi sama','Da — isplati se obema, ako se svaka specijalizuje za ono u čemu je relativno najbolja','Samo ako je druga zemlja bogatija'], t:1},
delovi:[
{n:'Zašto zemlje trguju', t:`Najlepša ideja u ekonomiji, a protiv intuicije: KOMPARATIVNA PREDNOST (Dejvid Rikardo, 1817).

Primer: advokatica kuca brže od svoje sekretarice. Da li treba sama da kuca? Ne — njen sat je vredniji u sudnici. Isplati se obema da se svaka bavi onim u čemu je RELATIVNO najbolja i da razmenjuju.

Isto zemlje: čak i kad je jedna bolja u svemu, obe dobijaju ako se specijalizuju i trguju. Zato skoro nijedna zemlja ne pravi sama sve što troši. Telefon u tvom džepu ima delove iz desetak zemalja.

Zato većina ekonomista smatra da je slobodnija trgovina, gledano ukupno, dobra za obe strane. Ali „ukupno" ne znači „za svakoga".`,
pr:{p:'Šta kaže komparativna prednost?', o:['Trgovati samo sa slabijima','Isplati se specijalizovati za ono u čemu si relativno najbolji i razmenjivati, čak i kad je druga strana bolja u svemu','Uvoz je uvek štetan'], t:1, z:'Kao advokatica i sekretarica — obema se isplati podela posla, iako advokatica kuca brže.'}},
{n:'Globalizacija — dobitnici i gubitnici', t:`Posle 1990. svet se povezao kao nikad: kontejnerski brodovi, internet, pad carina, Kina u Svetskoj trgovinskoj organizaciji (2001). To je GLOBALIZACIJA.

Dobitnici: stotine miliona ljudi u Aziji izašlo je iz siromaštva; robe su postale jeftinije za sve; firme prodaju celom svetu.

Gubitnici: radnici u fabrikama bogatih zemalja čiji su poslovi preseljeni tamo gde je rad jeftiniji (npr. industrijski gradovi u SAD), i domaće firme koje nisu izdržale konkurenciju. Ukupna korist je velika, ali je RASUTA (svi plaćamo malo manje), a šteta je KONCENTRISANA (cela varoš ostane bez fabrike). Zato je otpor glasan.

Od oko 2016. vraćaju se CARINE (porez na uvoz) i „trgovinski ratovi" — posebno između SAD i Kine — i priča o vraćanju proizvodnje kući. Pandemija 2020. je pokazala i slabost: kad sve zavisi od jednog dalekog dobavljača, jedno zatvaranje zaustavi pola sveta.`,
pr:{p:'Zašto je otpor globalizaciji glasan iako je ukupna korist velika?', o:['Jer korist ne postoji','Korist je rasuta na sve, a šteta skoncentrisana na određene radnike i krajeve','Jer je zabranjena'], t:1, z:'Svi dobijaju malo jeftinije robe, a jedna varoš izgubi celu fabriku — ti glasovi se čuju.'}},
{n:'Kapitalizam i socijalizam — pojmovi', t:`Prvo pojmovi, pa rasprava.

KAPITALIZAM: sredstva za proizvodnju (fabrike, zemlja, firme) su uglavnom u PRIVATNOM vlasništvu; šta će se proizvoditi i po kojoj ceni određuje uglavnom TRŽIŠTE; pokretač je profit.

SOCIJALIZAM: sredstva za proizvodnju su u DRUŠTVENOM ili DRŽAVNOM vlasništvu; cilj je jednakost i da plodovi rada pripadnu radnicima. KOMUNIZAM je, kod Marksa, krajnji cilj — društvo bez klasa, novca i države; partije koje su sebe zvale komunističkim vladale su „socijalizmom" kao putem do njega.

KARL MARKS (19. vek, „Kapital") je gledao fabrike industrijske revolucije: radnik stvara vrednost, a vlasnik uzima višak; kapitalizam će, mislio je, zbog svojih protivrečnosti propasti i ustupiti mesto socijalizmu.

U praksi skoro sve današnje zemlje su MEŠOVITE PRIVREDE: tržište i privatno vlasništvo + država koja oporezuje, reguliše i obezbeđuje školu, zdravstvo, penzije. Razlika je u meri.`,
pr:{p:'Šta je glavna razlika između kapitalizma i socijalizma?', o:['Da li postoji novac','Ko poseduje sredstva za proizvodnju i ko odlučuje — tržište i privatnici ili društvo i država','Da li postoje porezi'], t:1, z:'Kapitalizam: privatno vlasništvo i tržište; socijalizam: društveno/državno vlasništvo i plan ili raspodela.'}},
{n:'Šta se desilo u praksi', t:`20. vek je bio veliki ogled.

• SSSR (od 1917) i istočni blok: PLANSKA PRIVREDA — država odlučuje šta se proizvodi i po kojoj ceni. Brza industrijalizacija, opismenjavanje, besplatno školstvo i zdravstvo; ali i nestašice, redovi, slaba inovacija, gušenje sloboda i milioni žrtava represije i gladi (posebno pod Staljinom). Sistem se urušio 1989–1991.
• KINA je pod Mao Cedongom prošla katastrofu (glad 1959–61, desetine miliona mrtvih); od 1978. Deng Sjaoping uvodi TRŽIŠTE uz vlast Komunističke partije — sledi najbrži rast u istoriji.
• JUGOSLAVIJA je išla svojim putem: SAMOUPRAVLJANJE (od 1950) — firme u „društvenom" vlasništvu, kojima formalno upravljaju radnički saveti, uz delimično tržište, otvorene granice i rad u inostranstvu. Životni standard je bio viši nego u istočnom bloku, ali i rastuća nezaposlenost, dug i inflacija 1980-ih.
• SKANDINAVSKI MODEL: tržišna, kapitalistička privreda + visoki porezi i jaka socijalna država. Često se pogrešno zove „socijalizam".

Danas je rasprava manje „kapitalizam ILI socijalizam", a više: koliko tržišta, koliko države, i kako ih spojiti. Ljudi iz različitih tabora iz istih činjenica izvlače različite pouke — i to je u redu da znaš.`,
pr:{p:'Kako se zvao jugoslovenski ekonomski model?', o:['Planska privreda po sovjetskom uzoru','Samoupravljanje — društveno vlasništvo, radnički saveti i delimično tržište','Skandinavski model'], t:1, z:'Od 1950. Jugoslavija razvija samoupravni socijalizam, različit i od sovjetskog i od zapadnog modela.'}},
{n:'Kraj oblasti', t:`Kostur oblasti „Novac i ekonomija":
1. oskudnost tera na izbor; cena nastaje iz ponude i potražnje i nosi poruku;
2. novac počiva na poverenju; banke ga stvaraju kreditom; centralna banka čuva njegovu vrednost; hiperinflacija je ono kad poverenje pukne;
3. tržište ima neuspehe; država ih ispravlja i preraspodeljuje — spor je koliko;
4. rast iz tehnologije i institucija; krize iz balona i duga; nejednakost između zemalja pada, unutar raste;
5. trgovina koristi obema stranama, ali ne svakome; kapitalizam i socijalizam — 20. vek je bio ogled, a danas su skoro sve zemlje mešavina.

Jedna rečenica za pamćenje: ekonomija nije nauka o novcu, nego o izborima ljudi kad nemaju dovoljno svega.

Sledeće: alat — naučni metod: kako se nešto zaista dokazuje. Pa onda vlast, pravo i svet.`,
pr:{p:'Kako bi u jednoj rečenici opisao ekonomiju?', o:['Nauka o novcu i bankama','Nauka o izborima ljudi i društava kad nemaju dovoljno svega','Nauka o berzi'], t:1, z:'Oskudnost i izbor su srž; novac je samo jedan od alata.'}}
],
kljucno:['Komparativna prednost (Rikardo): trgovina se isplati obema stranama i kad je jedna bolja u svemu.','Globalizacija: velika ukupna korist (Azija iz siromaštva, jeftinije robe), ali koncentrisani gubitnici; povratak carina.','Kapitalizam: privatno vlasništvo i tržište; socijalizam: društveno/državno vlasništvo; Marks; danas mešovite privrede.','SSSR plan (industrija i školstvo, ali nestašice i represija, pad 1991); Kina tržište od 1978; Jugoslavija samoupravljanje; Skandinavija = tržište + socijalna država.','Ekonomija je nauka o izboru u oskudici.'],
kartice:[
{p:'Šta je komparativna prednost?', o:'Isplati se specijalizovati za ono u čemu si relativno najbolji i razmenjivati.'},
{p:'Zašto je otpor globalizaciji jak iako je ukupna korist velika?', o:'Korist je rasuta, a šteta koncentrisana na određene radnike i krajeve.'},
{p:'Šta je mešovita privreda?', o:'Tržište i privatno vlasništvo uz državu koja oporezuje, reguliše i pruža javne usluge.'},
{p:'Šta je jugoslovensko samoupravljanje?', o:'Društveno vlasništvo, radnički saveti i delimično tržište (od 1950).'},
{p:'Da li je skandinavski model socijalizam?', o:'Ne — to je tržišna privreda sa visokim porezima i jakom socijalnom državom.'}
],
razgovor:['Šta od jugoslovenskog modela ljudi oko tebe pamte sa nostalgijom, a šta se zaboravlja? Šta misliš ti?','Da možeš da biraš jednu stvar koju bi država u Srbiji radila bolje, a jednu koju bi prepustio tržištu — šta bi izabrao?']}
]},
{id:'9', naziv:'Vlast, pravo i svet', ikona:'⚖️', era:'danas', lekcije:[
{id:'9-1', naslov:'Šta je država — oblici vlasti'},
{id:'9-2', naslov:'Pravo, ustav, ljudska prava'},
{id:'9-3', naslov:'Ideologije — levica, desnica i ostale'},
{id:'9-4', naslov:'Geopolitika — geografija, resursi, velike sile'},
{id:'9-5', naslov:'Svet danas — UN, NATO, EU, BRICS i Balkan'}
]},
{id:'10', naziv:'Umetnost i priče', ikona:'🎭', era:'ideje', lekcije:[
{id:'10-1', naslov:'Šta je umetnost i čemu služi'},
{id:'10-2', naslov:'Mit, ep i tragedija'},
{id:'10-3', naslov:'Roman i epohe književnosti u jednoj liniji'},
{id:'10-4', naslov:'Slikarstvo i arhitektura kroz epohe'},
{id:'10-5', naslov:'Muzika — od klasike do roka'}
]},
{id:'11', naziv:'Tehnologija', ikona:'💻', era:'danas → sutra', lekcije:[
{id:'11-1', naslov:'Kako tehnologija menja ljude — od vatre do struje'},
{id:'11-2', naslov:'Kako radi računar'},
{id:'11-3', naslov:'Internet i podaci — ko šta zna o tebi'},
{id:'11-4', naslov:'Veštačka inteligencija — šta je, a šta nije'},
{id:'11-5', naslov:'Energija i tehnologije budućnosti'}
]},

{id:'12', naziv:'Alati mišljenja', ikona:'🔧', era:'kroz celu priču', lekcije:[
{id:'12-1', naslov:'Logika i argument',
kuka:{p:'„Sve ribe lete. Kit je riba. Dakle, kit leti." Da li je ovaj zaključak logički ispravno izveden?', o:['Ne, jer kit ne leti','Da — forma je ispravna, samo su premise lažne','Ne može se reći'], t:1},
delovi:[
{n:'Šta je argument', t:`U svakodnevici „argument" znači svađa. U filozofiji znači niz tvrdnji gde jedne (PREMISE) podupiru drugu (ZAKLJUČAK).

1. Svi ljudi su smrtni. (premisa)
2. Sokrat je čovek. (premisa)
3. Dakle, Sokrat je smrtan. (zaključak)

Kad čuješ nečiji stav, prvi korak je da ga razložiš: šta je zaključak, a koji su razlozi? Ljudi često iznesu samo zaključak, a razlozi ostanu prećutani. U prećutanim premisama se kriju greške.`,
pr:{p:'Šta je premisa?', o:['Konačan zaključak','Tvrdnja koja treba da podupre zaključak','Pitanje na koje se odgovara'], t:1, z:'Premise su razlozi, zaključak je ono što iz njih treba da sledi.'}},
{n:'Dedukcija, indukcija, abdukcija', t:`DEDUKCIJA: od opšteg ka posebnom. Ako su premise istinite, zaključak MORA biti istinit. Sigurna je, ali ne daje novo znanje — samo razvije ono što je već bilo u premisama.

INDUKCIJA: od posebnog ka opštem. „Sunce je izašlo svakog jutra koje pamtimo, dakle izaći će i sutra." Daje novo znanje, ali samo verovatno. Na njoj počiva skoro sva nauka i svakodnevni život.

ABDUKCIJA: zaključak na najbolje objašnjenje. Ulica je mokra — verovatno je padala kiša. Tako rade detektivi i lekari.`,
pr:{p:'„Svaki put kad pijem kafu posle 18h, ne mogu da spavam — znači kafa me drži budnim." Koje je ovo zaključivanje?', o:['Dedukcija','Indukcija','Nije zaključivanje'], t:1, z:'Od mnogo pojedinačnih slučajeva ka opštem pravilu — indukcija. Verovatno je tačno, ali nije sigurno.'}},
{n:'Valjano nije isto što i istinito', t:`Najvažnija stvar u lekciji — i odgovor na pitanje sa početka.

Argument je VALJAN kad zaključak sledi iz premisa, bez obzira da li su premise tačne.
• Sve ribe lete. Kit je riba. Dakle, kit leti. → VALJANO (forma savršena), ali su premise lažne, pa je i zaključak lažan.

Argument je ISPRAVAN kad je valjan I premise su istinite. Samo to garantuje istinit zaključak.

I obrnuto: istinit zaključak iz loše forme.
• Neki ljudi su pisci. Bukovski je čovek. Dakle, Bukovski je pisac. → Zaključak tačan, ali ne sledi iz premisa. Slučajno pogođen.

Kod svakog argumenta pitaš dve odvojene stvari: da li forma drži, i da li su premise tačne.`,
pr:{p:'„Svi pisci piju. Bukovski je pisac. Dakle, Bukovski pije." Šta važi?', o:['Valjan je, ali prva premisa nije tačna, pa nije ispravan','Nije valjan','Ispravan je, jer je zaključak tačan'], t:0, z:'Forma drži (valjan), ali „svi pisci piju" nije istina — pa argument nije ispravan, čak i ako je zaključak slučajno tačan.'}},
{n:'Česte greške', t:`Greške u zaključivanju zovu se ZABLUDE. Tri najčešće:

• NAPAD NA ČOVEKA: umesto argumenta napadaš onoga ko ga iznosi. „Šta ti znaš o zdravlju, pušiš." Možda puši, ali to ne govori da li je u pravu.
• SLAMNATI ČOVEK: izvrneš tuđi stav u slabiju verziju i oboriš nju. „Hoćeš manje poreza? Znači hoćeš da bolnice propadnu."
• LAŽNA DILEMA: ponudiš samo dve mogućnosti kad ih ima više. „Ili si sa nama ili protiv nas."

Ima ih desetine; poslednja lekcija ove linije („Kako te ubeđuju") ide dublje. Za sad: prepoznaj ih kad ih čuješ na televiziji. A čućeš ih svaki dan.`,
pr:{p:'„Ili podržavaš ovu vladu, ili mrziš svoju zemlju." Koja je ovo zabluda?', o:['Napad na čoveka','Slamnati čovek','Lažna dilema'], t:2, z:'Nudi samo dve mogućnosti, a ima ih mnogo više — lažna dilema.'}}
],
kljucno:['Argument = premise + zaključak; greške se kriju u prećutanim premisama.','Dedukcija je sigurna, indukcija verovatna, abdukcija — najbolje objašnjenje.','Valjano (forma drži) nije isto što i istinito; ispravan = valjan + istinite premise.','Tri zablude: napad na čoveka, slamnati čovek, lažna dilema.'],
kartice:[
{p:'Šta je premisa, a šta zaključak?', o:'Premisa je razlog; zaključak je ono što iz razloga treba da sledi.'},
{p:'Razlika između dedukcije i indukcije?', o:'Dedukcija: od opšteg ka posebnom, sigurna. Indukcija: od posebnog ka opštem, samo verovatna.'},
{p:'Kad je argument valjan, a kad ispravan?', o:'Valjan kad zaključak sledi iz premisa; ispravan kad je valjan i premise su istinite.'},
{p:'Šta je slamnati čovek?', o:'Izvrtanje tuđeg stava u slabiju verziju da bi se lakše oborio.'},
{p:'Šta je lažna dilema?', o:'Nuđenje samo dve mogućnosti kad ih ima više.'}
],
razgovor:['Seti se jedne rasprave (TV, posao, internet) gde je neko upotrebio jednu od tri zablude. Koju i kako?','Daj svoj primer indukcije iz posla ili kuće i reci zašto zaključak nije siguran.']},
{id:'12-2', naslov:'Brojevi koji varaju — procenti, proseci, velike brojke',
kuka:{p:'U gradu A prošle godine je bilo 100 krađa, u gradu B 50. Gde je opasnije?', o:['U gradu A','U gradu B','Ne može se reći bez broja stanovnika'], t:2},
delovi:[
{n:'U odnosu na šta?', t:`Broj sam po sebi skoro nikad ništa ne govori. Uvek pitaj: U ODNOSU NA ŠTA?

• 100 krađa u gradu od milion ljudi je mnogo bezbednije od 50 u gradu od 10.000. Poredi se BROJ NA 1.000 ili 100.000 STANOVNIKA.
• „Najviše saobraćajnih nesreća desi se po lepom vremenu!" Znači li da je magla bezbednija? Ne — po lepom vremenu se mnogo više vozi.
• „Većina nesreća se desi nadomak kuće." Pa da — tu se najviše i vozi.

Novinari i političari često daju samo jedan broj, bez onog drugog. Kad čuješ broj, u glavi dodaj: „od koliko?"`,
pr:{p:'„Najviše nesreća se desi po lepom vremenu." Da li je magla bezbednija?', o:['Da, brojevi to pokazuju','Ne — po lepom vremenu se mnogo više vozi','Ne može se reći ništa'], t:1, z:'Bez podatka koliko se vozi po lepom, a koliko po maglovitom vremenu, sam broj nesreća ne govori o opasnosti.'}},
{n:'Zamke procenata', t:`Procenti zvuče precizno, a lako varaju.

1. GORE PA DOLE NIJE ISTO. Cena 100 dinara poskupi 50% → 150. Pa pojeftini 50% → 75. Nisi na početku! Procenat se uvek računa od trenutne vrednosti.

2. PROCENAT I PROCENTNI POEN. Kamata poraste sa 2% na 3%. To je rast od jednog PROCENTNOG POENA — ali od 50 PROCENATA (jer je 1 polovina od 2). Obe rečenice su tačne; ko hoće da uplaši, reći će „50%", a ko hoće da umiri, „samo jedan poen".

3. PROCENAT OD MALOG BROJA. „Broj slučajeva porastao 200%!" — sa 1 na 3. Kad je osnova mala, procenti divljaju.`,
pr:{p:'Cena 100, poskupi 50%, pa pojeftini 50%. Kolika je?', o:['100','75','125'], t:1, z:'100 → 150 → 75. Pojeftinjenje od 50% računa se od 150, ne od 100.'}},
{n:'Prosek i medijana', t:`U kafani sedi devet radnika, svaki ima platu 80.000. Uđe milijarder. PROSEČNA plata u kafani skoči na nekoliko miliona — a niko nije bogatiji nego pre minut.

Zato postoji MEDIJANA: poređaš sve od najmanjeg do najvećeg i uzmeš onog u SREDINI. U kafani je medijana i dalje 80.000. Medijana je mnogo bolja slika „tipičnog" kad ima nekoliko ogromnih vrednosti.

Plate su baš takve: nekolicina zarađuje mnogo, pa je PROSEČNA plata viša od onoga što zarađuje „obični" čovek. U Srbiji je medijalna plata osetno niža od prosečne — zato mnogi kad čuju prosek kažu „ko to prima?". Imaju pravo.`,
pr:{p:'Devet ljudi ima platu 80.000, a deseti je milijarder. Šta bolje opisuje tipičnu platu?', o:['Prosek','Medijana','Ni jedno ni drugo'], t:1, z:'Medijana (vrednost u sredini) se ne pomera zbog jednog milijardera; prosek leti u nebo.'}},
{n:'Velike brojke', t:`Milion, milijarda, bilion — mozak ih sve oseti kao „puno". Probaj ovako, u sekundama:

• MILION sekundi = oko 11 i po DANA.
• MILIJARDA sekundi = oko 32 GODINE.
• BILION (hiljadu milijardi) sekundi = oko 32.000 GODINA — duže od cele pisane istorije.

Između milijarde i miliona nije „malo više" — razlika je kao između jedanaest dana i jednog života.

I trik za državne brojke: PODELI PO GLAVI. „Država daje milijardu evra" — Srbija ima oko 6,6 miliona ljudi, znači oko 150 evra po stanovniku. Odjednom znaš da li je to mnogo ili malo.`,
pr:{p:'Koliko traje milijardu sekundi?', o:['Oko 11 dana','Oko 32 godine','Oko 3 godine'], t:1, z:'Milion sekundi je oko 11 dana, a milijarda oko 32 godine — hiljadu puta više.'}},
{n:'Grafikoni koji lažu', t:`Grafikon može biti tačan i istovremeno lagati:

• ODSEČENA OSA. Stubovi 51 i 49 izgledaju kao tri prema jedan ako osa ne počinje od nule, nego od 48. Uvek pogledaj odakle kreće osa.
• BIRANI PERIOD. Ako hoćeš da pokažeš rast, kreneš od najniže tačke; ako hoćeš pad — od najviše. Isti podaci, suprotna priča.
• MALI UZORAK. „80% ispitanih zadovoljno" — od pet ljudi?
• PROSEK BEZ RASPONA. Prosečno je bilo 20 °C — između 19 i 21, ili između 0 i 40?

Pet pitanja za svaki broj u vestima:
1. U odnosu na šta?
2. Procenat od koliko?
3. Prosek ili medijana?
4. Koliki uzorak i koji period?
5. Ko meri i šta dobija od toga?`,
pr:{p:'Stub od 51 i stub od 49 na grafikonu izgledaju kao tri prema jedan. Kako je to moguće?', o:['Brojevi su pogrešni','Osa ne počinje od nule','Grafikon je okrenut'], t:1, z:'Kad osa kreće od 48, razlika od 2 izgleda ogromno. Uvek pogledaj početak ose.'}}
],
kljucno:['Broj bez „u odnosu na šta" ne govori ništa — poredi na 1.000 ili 100.000.','Procenti: gore-pa-dole nije isto; procentni poen nije procenat; procenti od malih brojeva divljaju.','Medijana je bolja slika tipičnog od proseka kad ima ekstremnih vrednosti (plate).','Milion sekundi ≈ 11 dana, milijarda ≈ 32 godine; državne brojke podeli po glavi.','Grafikoni varaju odsečenom osom, biranim periodom, malim uzorkom.'],
kartice:[
{p:'Prvo pitanje za svaki broj u vestima?', o:'U odnosu na šta?'},
{p:'Kamata sa 2% na 3% — koliko je porasla?', o:'Jedan procentni poen, ali 50%.'},
{p:'Razlika između proseka i medijane?', o:'Prosek je zbir podeljen brojem; medijana je vrednost u sredini — otporna na ekstreme.'},
{p:'Koliko traju milion i milijarda sekundi?', o:'Milion ≈ 11 dana; milijarda ≈ 32 godine.'},
{p:'Najčešći trik sa grafikonom?', o:'Osa koja ne počinje od nule.'}
],
razgovor:['Nađi u vestima ove nedelje jedan broj bez „u odnosu na šta". Šta ti fali da bi ga razumeo?','Objasni nekome razliku između prosečne i medijalne plate, na primeru koji on razume.']},
{id:'12-3', naslov:'Verovatnoća i rizik'},
{id:'12-4', naslov:'Naučni metod — kako se nešto dokazuje'},
{id:'12-5', naslov:'Kako te ubeđuju — retorika, propaganda, manipulacija'}
]}
];

// Redosled učenja: priča 1→11, a „Alati mišljenja" posle svake druge oblasti.
export const RED = (() => {
  const o = id => OBLASTI.find(x => x.id === id).lekcije.map(l => l.id);
  const a = o('12');
  return [...o('1'), ...o('2'), a[0], ...o('3'), ...o('4'), a[1], ...o('5'), ...o('6'), a[2],
          ...o('7'), ...o('8'), a[3], ...o('9'), ...o('10'), a[4], ...o('11')];
})();

// Razmaci ponavljanja u danima, po „kutiji" kartice (0 = nova ili promašena).
export const RAZMACI = [1, 3, 7, 21, 60, 120];
