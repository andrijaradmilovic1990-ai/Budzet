// Škola — sadržaj lekcija. Svaka lekcija: delovi (ekrani za čitanje) + pitanja na kraju.
// Lekcije se pišu jednom, ovde. Napredak i odgovori su u bazi (skola/...), ne ovde.
export const OBLASTI = [
{id:'fil', naziv:'Filozofija', ikona:'🦉', lekcije:[

{id:'fil-1', naslov:'Šta je filozofija i čime se bavi', delovi:[
{n:'Reč i početak', t:`Filozofija na grčkom znači „ljubav prema mudrosti" (philos — onaj koji voli, sophia — mudrost). Ne „posedovanje mudrosti", nego ljubav prema njoj. Filozof je onaj koji traži, ne onaj koji je našao.

Počela je u grčkim gradovima oko 600. godine pre nove ere. Prvi filozof koga pamtimo je Tales iz Mileta. Njegov odgovor je bio pogrešan („sve je od vode"), ali je pitanje bilo novo: od čega je svet, a da to ne objasnimo bogovima i mitom?

Platon i Aristotel su kasnije rekli istu stvar: filozofija počinje čuđenjem. Kad ti nešto što svi uzimaju zdravo za gotovo odjednom postane čudno. Zašto uopšte postoji nešto, a ne ništa? Šta je vreme? Zašto je nešto pravedno?`},
{n:'Čime se bavi', t:`Filozofija se bavi pitanjima koja ostanu kad svakodnevica i nauka završe svoj posao. Grubo, ima ih tri vrste:

1. Šta postoji? (Da li postoji duša? Da li je volja slobodna? Šta je vreme?)
2. Šta možemo da znamo? (Kako znam da ne sanjam? Šta je dokaz? Gde je granica znanja?)
3. Kako treba živeti? (Šta je dobro? Šta dugujem drugima? Šta je smisao?)

Važno: filozofija ne skuplja nove činjenice. Ona radi sa pojmovima: šta tačno mislimo kad kažemo „pravda", „uzrok", „znanje", „ja". Ljudi se često svađaju, a u stvari ne misle isto pod istom rečju. Filozof prvo to raspetljava.`},
{n:'Filozofija, nauka, vera', t:`Ovo je ključna razlika, pa polako.

NAUKA pita kako svet radi i odgovara posmatranjem, merenjem i eksperimentom. Tvrdnja važi dok je eksperiment ne obori.

VERA odgovara na velika pitanja otkrovenjem i predanjem. Odgovor se prihvata, ne dokazuje; oslonac je poverenje, ne argument.

FILOZOFIJA pita velika pitanja kao vera, ali odgovara kao nauka: razlogom. Samo što nema laboratoriju, pa joj je oruđe argument. I pita ono što nauka ne pita: šta je uopšte dokaz, šta je uzrok, da li je dobro ono što je korisno.

Zanimljivo je da su skoro sve nauke nekad bile filozofija. Fizika se zvala „prirodna filozofija" sve do Njutna. Psihologija se odvojila tek krajem 19. veka. Kad neko pitanje dobije metod za merenje, ono ode iz filozofije i postane nauka. Filozofiji ostaju pitanja za koja merenje ne postoji.`},
{n:'Kako filozof radi', t:`Tri osnovna alata:

1. ANALIZA POJMA. Šta tačno znači „hrabar"? Da li je hrabar onaj ko se ne boji, ili onaj ko se boji pa ipak ide?
2. ARGUMENT. Tvrdnja plus razlozi koji je podupiru. Ne „ja tako osećam", nego „zato što A i B, sledi C".
3. PROTIVPRIMER. Jedan slučaj koji obara opšte pravilo. „Laž je uvek loša" — a laž ubici koji pita gde ti se krije prijatelj?

Sokrat (Atina, 5. vek pre n. e.) je ovo radio na ulici. Pitao je ljude šta je pravda, hrabrost, vrlina, i pokazivao im da ne znaju ono što misle da znaju. Odatle ono „znam da ništa ne znam": nije to skromnost, nego početna tačka. Tako je dosadio Atini da su ga osudili na smrt. Nije napisao ništa; znamo ga iz Platonovih dijaloga.`},
{n:'Mapa u jednoj liniji', t:`Samo skelet, da znaš gde si kad neko ime padne:

• ANTIKA (6. vek pre n. e. – 5. vek n. e.): Sokrat, Platon (svet ideja), Aristotel (logika, etika, nauka). Kasnije stoici: kontroliši ono što zavisi od tebe, ostalo pusti.
• SREDNJI VEK: vera i razum. Avgustin, Toma Akvinski: kako pomiriti Boga i Aristotela.
• NOVI VEK (17–18. vek): Dekart („mislim, dakle jesam"), Lok i Hjum (sve znanje iz iskustva), Kant (spaja jedno i drugo).
• 19. VEK: Hegel, Marks (istorija i društvo), Niče („Bog je mrtav", šta sad s vrednostima?).
• 20. VEK: egzistencijalisti (Sartr, Kami — smisao nije dat, pravi ga čovek), analitička filozofija (jezik i logika).

Ne moraš ovo da pamtiš. Vratićemo se na svako ime kad zatreba.`}
], pitanja:[
'Svojim rečima: čime se filozofija razlikuje od nauke, a čime od vere?',
'Navedi jedno pitanje iz svog života koje je filozofsko, i reci zašto ga nauka ne može rešiti.',
'Šta je Sokrat hteo da kaže sa „znam da ništa ne znam"?'
]},

{id:'fil-2', naslov:'Pet grana filozofije', delovi:[
{n:'Zašto grane', t:`Filozofija je široka, pa je podeljena po vrsti pitanja. Pet glavnih grana:

1. METAFIZIKA — šta postoji
2. EPISTEMOLOGIJA — šta i kako znamo
3. LOGIKA — kako pravilno zaključujemo
4. ETIKA — kako treba delati
5. ESTETIKA — šta je lepo i šta je umetnost

Postoje i druge (politička filozofija, filozofija uma, filozofija jezika), ali su one uglavnom izdanci ovih pet. Kad ti neko postavi „duboko" pitanje, prvi korak je da prepoznaš kojoj grani pripada. Pola zabune nestane.`},
{n:'Metafizika', t:`Metafizika pita šta je stvarno i kakva je priroda onoga što postoji. Njen glavni deo zove se ONTOLOGIJA (nauka o biću).

Tipična pitanja:
• Da li postoji samo materija, ili i nešto nematerijalno (duša, um)?
• Da li je volja slobodna, ili je sve unapred određeno uzrocima?
• Šta je vreme? Šta je uzrok?
• Da li si ti isti čovek kao pre dvadeset godina, kad ti se promenila svaka ćelija?

Ime je slučajno: Aristotelov spis koji je stajao „posle fizike" (meta ta physika) dobio je taj naziv u biblioteci. Slučajno je pogodio. To je ono što je iza i ispod fizike.`},
{n:'Epistemologija i logika', t:`EPISTEMOLOGIJA (teorija saznanja) pita šta je znanje i kako do njega dolazimo.
• Koja je razlika između verovanja i znanja? (Klasičan odgovor: znanje je opravdano istinito verovanje.)
• Možemo li verovati čulima?
• Odakle znanje — iz razuma ili iz iskustva? (To je tema četvrte lekcije.)

LOGIKA proučava pravila ispravnog zaključivanja. Ne pita da li je tvrdnja istinita, nego da li iz razloga zaista sledi zaključak. To je alat za sve ostale grane, pa je Aristotel nije ni smatrao granom, nego „oruđem" (organon). Treća lekcija je cela o njoj.`},
{n:'Etika i estetika', t:`ETIKA pita šta je dobro i kako treba delati.
• Šta čini postupak ispravnim: namera, posledica, karakter?
• Šta dugujemo drugima, a šta sebi?
• Postoji li moral koji važi za sve, ili je sve stvar kulture?
Peta lekcija daje tri glavna odgovora.

ESTETIKA pita o lepom i o umetnosti.
• Da li je lepota u stvari ili u oku posmatrača?
• Šta je umetnost, i zašto nas tužna priča privlači umesto da nas odbije? (Aristotel je to zvao katarza — pročišćenje kroz sažaljenje i strah.)
• Može li nešto ružno biti veliko delo?

Ovo je grana koja se tebe tiče kao pisca: svaki put kad odlučiš da kraj mora da boli, ti radiš estetiku, samo bez naslova.`},
{n:'Kako se prepliću', t:`Grane nisu zidovi. Primer, jedno pitanje: „Da li je u redu kazniti čoveka koji nije mogao drugačije?"

• Metafizika: da li je mogao drugačije, tj. postoji li slobodna volja?
• Epistemologija: kako to možemo znati o drugom čoveku?
• Logika: da li iz „nije slobodan" zaista sledi „ne sme se kazniti"?
• Etika: šta je svrha kazne — odmazda, zaštita, popravljanje?

Vidiš: jedno pitanje, četiri grane. Zato se kaže da filozofija nema delove nego uglove gledanja.`}
], pitanja:[
'Kojoj grani pripada pitanje „da li je volja slobodna", a kojoj „da li je laž ikad opravdana"?',
'Svojim rečima: koja je razlika između metafizike i epistemologije?',
'Uzmi jednu svoju priču ili kraj koji si napisao. Koje estetsko pitanje si tu rešavao, i kako?'
]},

{id:'fil-3', naslov:'Logika i argument', delovi:[
{n:'Šta je argument', t:`U svakodnevici „argument" znači svađa. U filozofiji znači nešto drugo: niz tvrdnji gde jedne (PREMISE) treba da podrže drugu (ZAKLJUČAK).

Klasičan primer:
1. Svi ljudi su smrtni. (premisa)
2. Sokrat je čovek. (premisa)
3. Dakle, Sokrat je smrtan. (zaključak)

Kad čuješ nečiji stav, prvi korak je da ga razložiš ovako: šta je zaključak, a koji su razlozi? Ljudi često iznesu samo zaključak, a razlozi ostanu prećutani. Prećutane premise su mesto gde se kriju greške.`},
{n:'Dedukcija i indukcija', t:`Dva osnovna načina zaključivanja:

DEDUKCIJA: od opšteg ka posebnom. Ako su premise istinite, zaključak MORA biti istinit. Primer sa Sokratom gore. Sigurna je, ali ne daje novo znanje; samo razvije ono što je već bilo u premisama.

INDUKCIJA: od posebnog ka opštem. „Sunce je izašlo svakog jutra koje pamtimo, dakle izaći će i sutra." Daje novo znanje, ali nikad sigurno, samo verovatno. Na njoj počiva skoro sva nauka i svakodnevni život.

Postoji i treća, ABDUKCIJA: zaključivanje na najbolje objašnjenje. Mokra ulica, dakle verovatno je padala kiša. Tako rade detektivi i lekari.`},
{n:'Valjano nije isto što i istinito', t:`Ovo je najvažnija stvar u lekciji.

Argument je VALJAN kad zaključak sledi iz premisa, bez obzira da li su premise tačne.
• Sve ribe lete. Kit je riba. Dakle, kit leti.
Ovo je VALJANO (forma je savršena), ali su premise lažne, pa je i zaključak lažan.

Argument je ISPRAVAN (zdrav) kad je valjan I premise su istinite. Samo ispravan argument garantuje istinit zaključak.

Obrnuto takođe važi: možeš imati istinit zaključak iz loše forme.
• Neki ljudi su pisci. Bukovski je čovek. Dakle, Bukovski je pisac.
Zaključak je tačan, ali ne sledi iz premisa. Slučajno je pogođen.

Zato kod svakog argumenta pitaš dve odvojene stvari: da li forma drži, i da li su premise tačne.`},
{n:'Česte greške', t:`Greške u zaključivanju zovu se ZABLUDE (latinski fallacia). Tri najčešće, za početak:

• NAPAD NA ČOVEKA (ad hominem): umesto argumenta napadaš onoga ko ga iznosi. „Šta ti znaš o zdravlju, pušiš." Možda puši, ali to ne govori ništa o tome da li je u pravu.
• SLAMNATI ČOVEK: izvrneš tuđi stav u slabiju verziju i oboriš nju. „Hoćeš manje poreza? Znači hoćeš da bolnice propadnu."
• LAŽNA DILEMA: ponudiš samo dve mogućnosti kad ih ima više. „Ili si sa nama ili protiv nas."

Ima ih desetine; retorika (7. oblast) ih obrađuje detaljnije. Za sad je dosta da ih prepoznaš kad ih čuješ na televiziji. A čućeš ih svaki dan.`}
], pitanja:[
'„Svi pisci piju. Bukovski je pisac. Dakle, Bukovski pije." Da li je argument valjan? Da li je ispravan? Objasni.',
'Daj svoj primer indukcije iz posla ili kuće, i reci zašto zaključak nije siguran.',
'Seti se jedne rasprave (TV, posao, internet) gde je neko upotrebio jednu od tri zablude. Koju i kako?'
]},

{id:'fil-4', naslov:'Razum ili iskustvo', delovi:[
{n:'Pitanje', t:`Odakle nam znanje? Dva velika odgovora su se sudarala kroz ceo novi vek (17. i 18. vek):

RACIONALIZAM: pravo znanje dolazi iz RAZUMA. Čula varaju; samo ono što razum jasno uvidi je sigurno. Uzor je matematika: da je 2 + 2 = 4 ne znaš zato što si brojao jabuke, nego zato što ne može drugačije.

EMPIRIZAM: sve znanje dolazi iz ISKUSTVA, kroz čula. Razum samo slaže ono što su čula donela. Bez iskustva, u glavi nema ničega.

Obe strane su imale jak argument i slabu tačku. Zato je spor trajao dva veka.`},
{n:'Racionalisti: Dekart', t:`René Descartes (Dekart, Francuska, 17. vek) je hteo znanje sigurno kao matematika. Metod: sumnjaj u sve u šta se uopšte može posumnjati.

• Čula? Varaju me (štap u vodi izgleda slomljen).
• Da sam budan? Možda sanjam.
• Matematika? Možda me neki zli demon vara i kad sabiram.

Ali jedno ne mogu da dovedem u sumnju: da sumnjam. A ako sumnjam, mislim; a ako mislim, postojim. „MISLIM, DAKLE JESAM" (cogito ergo sum).

Na toj jednoj sigurnoj tački pokušao je da sagradi sve ostalo, razumom. Verovao je i u UROĐENE IDEJE: neke pojmove (Bog, broj, beskonačno) nismo dobili iz iskustva, nego ih nosimo sa sobom.`},
{n:'Empiristi: Lok i Hjum', t:`John Locke (Lok, Engleska, 17. vek): urođenih ideja nema. Um deteta je TABULA RASA, prazna tabla. Sve što znamo upisalo je iskustvo.

David Hume (Hjum, Škotska, 18. vek) je empirizam doveo do kraja, i tu je postalo neprijatno:
• UZROČNOST: nikad ne vidimo da jedna stvar „izaziva" drugu. Vidimo samo da jedna stalno ide posle druge. Pojam uzroka je navika uma, ne nešto što smo opazili.
• PROBLEM INDUKCIJE: to što je sunce izlazilo do sad ne dokazuje da će sutra. Svako takvo zaključivanje pretpostavlja da će budućnost ličiti na prošlost, a to se ne može dokazati bez kruga.

Hjum je pokazao da, ako je samo iskustvo izvor, onda je i nauka zasnovana na navici, ne na dokazu.`},
{n:'Kant: obe strane', t:`Immanuel Kant (Nemačka, 18. vek) je rekao da ga je Hjum „probudio iz dogmatskog dremeža". Njegovo rešenje je spoj:

Svo znanje POČINJE sa iskustvom, ali ne POTIČE sve iz iskustva. Um nije prazna tabla, nego više kao naočare: iskustvo stiže, a um ga sam slaže u prostor, vreme i uzrok. Zato su ti oblici sigurni: nisu u svetu, nego u načinu na koji ga gledamo.

Njegova čuvena rečenica: „Misli bez sadržaja su prazne, opažaji bez pojmova su slepi."

Cena: svet „po sebi", kakav je bez naših naočara, ne možemo da znamo. Znamo samo svet kakav nam se pojavljuje.`},
{n:'Šta je ostalo', t:`Danas većina misli da su obe strane delimično u pravu:

• Nauka je spoj: hipoteza (razum) plus eksperiment (iskustvo).
• Psihologija i biologija su pokazale da dete NIJE prazna tabla. Ima urođene sklonosti, recimo za jezik (to ćeš videti u lingvistici). Ali sadržaj dolazi iz iskustva.
• Hjumov problem indukcije nije rešen. Samo smo naučili da živimo s njim.

Ako zapamtiš jednu sliku: racionalista veruje glavi, empirista očima, a Kant kaže da oči bez glave ne vide, a glava bez očiju nema šta da gleda.`}
], pitanja:[
'Svojim rečima: šta tvrdi racionalizam, a šta empirizam?',
'Zašto Dekart ne može da posumnja u to da postoji? Objasni korak po korak.',
'Hjum kaže da je uzrok samo navika uma. Da li se slažeš? Daj primer iz života za ili protiv.'
]},

{id:'fil-5', naslov:'Tri pristupa u etici', delovi:[
{n:'Tri pitanja', t:`Kad procenjuješ da li je nešto ispravno, možeš da gledaš na tri mesta:

1. KAKAV si čovek kad to uradiš? → ETIKA VRLINE
2. Šta će iz toga PROIZAĆI? → KONSEKVENCIJALIZAM (etika posledica)
3. Da li je to tvoja DUŽNOST, po pravilu koje važi za sve? → DEONTOLOGIJA (etika dužnosti)

Nijedan nije „tačan". To su tri sočiva. Većina ljudi koristi sva tri, samo ne zna kad koje.`},
{n:'Etika vrline — Aristotel', t:`Aristotel ne pita „šta da uradim", nego „kakav da budem". Cilj života je EUDAIMONIJA — ne sreća kao osećaj, nego dobro proživljen život, procvat.

Do nje se stiže VRLINAMA: hrabrost, umerenost, pravednost, velikodušnost, prijateljstvo. Svaka vrlina je SREDINA između dve krajnosti:
• hrabrost je između kukavičluka i ludosti
• velikodušnost između škrtosti i rasipništva

Vrlina se ne uči iz knjige nego VEŽBOM, kao zanat: postaješ pravedan radeći pravedne stvari, dok ti ne uđu u karakter. Zato kod Aristotela nema pravila za sve; dobar čovek u datoj situaciji vidi šta treba. To mu i jeste mana: šta ako ne vidi?`},
{n:'Posledice — Bentam i Mil', t:`Jeremy Bentham (Bentam) i John Stuart Mill (Mil), Engleska, 18–19. vek: ispravno je ono što donosi NAJVIŠE DOBRA ZA NAJVEĆI BROJ ljudi. To se zove UTILITARIZAM.

Namera nije bitna, bitan je ishod. Lagati je loše samo ako laž napravi više štete nego koristi.

Snaga: jasno je, praktično, i svi se računaju jednako (tvoja sreća ne vredi više od tuđe).

Slabost, klasičan primer: hirurg ima pet pacijenata kojima treba organ i jednog zdravog čoveka u čekaonici. Po čistom računu, jedan za pet je dobra razmena. Svima je jasno da nije u redu. Znači da sam ishod nije sve.`},
{n:'Dužnost — Kant', t:`Kant: postupak je ispravan ako je učinjen IZ DUŽNOSTI, po pravilu koje bi mogao da važi za svakog. Posledice ne odlučuju.

KATEGORIČKI IMPERATIV, dve glavne verzije:
1. Radi samo po onom pravilu za koje bi mogao hteti da postane opšti zakon. (Ako bi svi lagali kad im odgovara, reči bi izgubile vrednost; dakle ne laži.)
2. Postupaj sa čovekom uvek i kao sa CILJEM, nikad samo kao sa SREDSTVOM. (Zato hirurg ne sme: zdrav čovek bi bio samo sredstvo.)

Snaga: ljudsko dostojanstvo je neprikosnoveno, nema računanja ljudi.

Slabost: Kant je tvrdio da ne smeš slagati ni ubicu koji pita gde ti se krije prijatelj. Pravilo bez izuzetka ume da bude okrutno.`},
{n:'Jedna dilema, tri odgovora', t:`Prijatelj te pita da li je njegova priča dobra. Nije.

• VRLINA: šta bi uradio iskren i dobar prijatelj? Verovatno istinu, ali sa merom i u pravom trenutku. Sredina između surovosti i ulizivanja.
• POSLEDICE: šta donosi više dobra? Ako ga istina popravi kao pisca, reci. Ako će samo da odustane, možda ne sad.
• DUŽNOST: laž je laž. Ne smeš je koristiti ni da ga zaštitiš, jer ga onda tretiraš kao dete, ne kao čoveka koji zaslužuje istinu.

Primeti: sva tri ovde vode ka istini, ali iz različitih razloga i različitim putem. U drugim slučajevima se razilaze. Zato je korisno znati sva tri: kad se slože, verovatno si u pravu; kad se raziđu, tu je prava dilema.`}
], pitanja:[
'Svojim rečima: šta je u centru pažnje kod etike vrline, kod utilitarizma i kod Kanta?',
'Zašto hirurg iz primera ne sme da uzme organe zdravom čoveku? Odgovori jednom po Kantu, a jednom po utilitaristi koji bi se ipak usprotivio.',
'Uzmi jednu stvarnu odluku iz svog života. Koji od tri pristupa si tada (bez imena) koristio?'
]}

]},
{id:'eko', naziv:'Ekonomija', ikona:'💶', lekcije:[]},
{id:'evo', naziv:'Evolutivna biologija', ikona:'🧬', lekcije:[]},
{id:'lin', naziv:'Lingvistika', ikona:'🗣️', lekcije:[]},
{id:'psi', naziv:'Psihologija', ikona:'🧠', lekcije:[]},
{id:'fiz', naziv:'Fizika', ikona:'⚛️', lekcije:[]},
{id:'ret', naziv:'Retorika', ikona:'🎤', lekcije:[]},
{id:'knj', naziv:'Svetska književnost', ikona:'📚', lekcije:[]},
{id:'geo', naziv:'Geopolitika', ikona:'🌍', lekcije:[]}
];
