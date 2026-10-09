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
{id:'4-1', naslov:'Telo kao sistem — srce, krv, pluća, organi'},
{id:'4-2', naslov:'Hrana, metabolizam i energija'},
{id:'4-3', naslov:'Imunitet — bakterije, virusi, vakcine, antibiotici'},
{id:'4-4', naslov:'Mozak, nervi i san'},
{id:'4-5', naslov:'Kako medicina zna šta radi — studije, lekovi, placebo'}
]},
{id:'5', naziv:'Um', ikona:'🧠', era:'ti, iznutra', lekcije:[
{id:'5-1', naslov:'Šta je psihologija — mozak, um i svest'},
{id:'5-2', naslov:'Pamćenje i učenje'},
{id:'5-3', naslov:'Emocije i motivacija'},
{id:'5-4', naslov:'Zašto grešimo u odlukama'},
{id:'5-5', naslov:'Jezik — šta je, kako ga dete uči, kako se menja'}
]},
{id:'6', naziv:'Kako smo stigli dovde', ikona:'🏛️', era:'300.000 god. → 1900.', lekcije:[
{id:'6-1', naslov:'Poreklo čoveka i lovci-sakupljači'},
{id:'6-2', naslov:'Poljoprivreda, gradovi, pismo — prve civilizacije'},
{id:'6-3', naslov:'Antika — Grčka, Rim, Persija, Indija, Kina'},
{id:'6-4', naslov:'Srednji vek — Vizantija, islamski svet, Mongoli, Evropa'},
{id:'6-5', naslov:'Otkrića, naučna i industrijska revolucija'}
]},

{id:'7', naziv:'Religije i velike ideje', ikona:'🕯️', era:'ideje', lekcije:[
{id:'7-1', naslov:'Šta je religija; Istok — hinduizam, budizam, kineska tradicija'},
{id:'7-2', naslov:'Avramove religije — judaizam, hrišćanstvo, islam'},

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
{id:'8-1', naslov:'Oskudnost, izbor, cena — ponuda i potražnja'},
{id:'8-2', naslov:'Novac, banke, inflacija'},
{id:'8-3', naslov:'Tržište i država — porezi i javni dug'},
{id:'8-4', naslov:'Rast, krize, nejednakost'},
{id:'8-5', naslov:'Globalna ekonomija — trgovina; kapitalizam i socijalizam'}
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
{id:'12-2', naslov:'Brojevi koji varaju — procenti, proseci, velike brojke'},
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
