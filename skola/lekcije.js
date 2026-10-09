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
{id:'2-1', naslov:'Kako je nastala Zemlja i šta je u njoj'},
{id:'2-2', naslov:'Tektonske ploče — kontinenti, planine, zemljotresi, vulkani'},
{id:'2-3', naslov:'Atmosfera i okeani — vreme nije isto što i klima'},
{id:'2-4', naslov:'Klimatske promene — šta je dokazano, a šta sporno'},
{id:'2-5', naslov:'Resursi — voda, energija, hrana, sirovine'}
]},
{id:'3', naziv:'Život', ikona:'🧬', era:'pre 3,8 mlrd god.', lekcije:[
{id:'3-1', naslov:'Šta je život — ćelija'},
{id:'3-2', naslov:'DNK i geni — recept za organizam'},
{id:'3-3', naslov:'Evolucija prirodnom selekcijom'},
{id:'3-4', naslov:'Drvo života — od bakterije do čoveka'},
{id:'3-5', naslov:'Ekosistemi — ko koga jede i zašto je to bitno'}
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
