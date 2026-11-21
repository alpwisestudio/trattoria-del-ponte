export const INFO = {
  name: "Trattoria del Ponte",
  fullName: "Trattoria del Ponte",
  street: "Corso Sempione, 99",
  city: "Gallarate",
  zip: "21013",
  province: "VA",
  phone: "+39 0331 777292",
  phoneHref: "tel:+390331777292",
  whatsapp: "393518404200",
  whatsappLabel: "+39 351 840 4200",
  email: "trattoriadelpontesrl@gmail.com",
  instagram: "https://www.instagram.com/trattoria_del_ponte_gallarate",
  facebook: "https://www.facebook.com/trattoriadelpontegallarate/",
  vat: "03658690122",
  mapsQuery: "Trattoria del Ponte, Corso Sempione 99, Gallarate",
};

// Aperto tutti i giorni. 0 = domenica … 6 = sabato
export const HOURS: { day: string; idx: number; lunch: string; dinner: string }[] = [
  { day: "Lunedì", idx: 1, lunch: "12:00 – 15:00", dinner: "19:00 – 23:30" },
  { day: "Martedì", idx: 2, lunch: "12:00 – 15:00", dinner: "19:00 – 23:30" },
  { day: "Mercoledì", idx: 3, lunch: "12:00 – 15:00", dinner: "19:00 – 23:30" },
  { day: "Giovedì", idx: 4, lunch: "12:00 – 15:00", dinner: "19:00 – 23:30" },
  { day: "Venerdì", idx: 5, lunch: "12:00 – 15:00", dinner: "19:00 – 23:30" },
  { day: "Sabato", idx: 6, lunch: "12:00 – 15:00", dinner: "19:00 – 23:45" },
  { day: "Domenica", idx: 0, lunch: "12:00 – 15:00", dinner: "19:00 – 23:30" },
];

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menù" },
  { href: "/giro-pesce", label: "Giro pesce" },
  { href: "/eventi", label: "Eventi" },
  { href: "/contatti", label: "Contatti" },
];

export type MenuItem = { name: string; desc?: string; price: string };
export type MenuCategory = { id: string; title: string; short?: string; note: string; items: MenuItem[] };

// Piatti e prezzi dal menù 2026 del locale.
export const MENU: MenuCategory[] = [
  {
    id: "antipasti-mare",
    title: "Antipasti di mare",
    short: "Antipasti mare",
    note: "Il benvenuto del pescato",
    items: [
      { name: "Antipasto imperiale", desc: "Insalata di mare, polpo e patate, alici e salmone marinato, cocktail di gamberi", price: "€ 20" },
      { name: "Astice alla catalana", price: "€ 22" },
      { name: "Zuppa di cozze e vongole", desc: "Piccante", price: "€ 18" },
      { name: "Polpo con patate", price: "€ 16" },
      { name: "Capesante alla veneziana", desc: "4 pezzi", price: "€ 16" },
      { name: "Capesante gratinate", desc: "4 pezzi", price: "€ 15" },
      { name: "Cannolicchi salsa soia e aceto", price: "€ 15" },
      { name: "Insalata di mare", price: "€ 13" },
      { name: "Pepata di cozze", price: "€ 12" },
      { name: "Alici o salmone marinato", price: "€ 12" },
    ],
  },
  {
    id: "antipasti-terra",
    title: "Antipasti di terra",
    short: "Antipasti terra",
    note: "Salumi, formaggi e gnocco fritto",
    items: [
      { name: "Tagliere di salumi con formaggio e bufala", price: "€ 16" },
      { name: "Gnocco fritto con crudo di Parma", price: "€ 12" },
      { name: "Bruschette al pomodoro", desc: "2 pezzi", price: "€ 3" },
    ],
  },
  {
    id: "crudite",
    title: "Crudité",
    note: "Prodotti variabili secondo stagione",
    items: [
      { name: "Crudité di pesce reale", desc: "4 ostriche, 4 scampi, 4 gamberi di Mazara, bis di tartare, cannolicchi, fasolari, cozze, noci e capesante", price: "€ 70" },
      { name: "Crudité di pesce imperiale", desc: "3 ostriche, 3 scampi, 3 gamberi di Mazara, bis di tartare, cannolicchi, fasolari, cozze e noci", price: "€ 50" },
      { name: "Crudité di pesce", desc: "2 ostriche, 2 gamberi rossi, 2 scampi, bis di tartare", price: "€ 30" },
      { name: "Bis di carpaccio", price: "€ 18" },
      { name: "Tartare di tonno o salmone", price: "€ 15" },
      { name: "Carpaccio di tonno o salmone", price: "€ 15" },
      { name: "Ostriche fine de claire", desc: "4 pezzi", price: "€ 14" },
      { name: "Ostriche Gillardeau", desc: "Al pezzo", price: "€ 6,50" },
      { name: "Gamberi rossi di Mazara", desc: "Al pezzo", price: "€ 4,50" },
    ],
  },
  {
    id: "primi-mare",
    title: "Primi di mare",
    short: "Primi mare",
    note: "Pasta fresca o senza glutine + € 2",
    items: [
      { name: "Spaghetti all'astice", price: "€ 22" },
      { name: "Spaghetti 3 orgasmi", desc: "Vongole, bottarga e ricci di mare", price: "€ 20" },
      { name: "Paella", desc: "Minimo 2 persone, a testa", price: "€ 20" },
      { name: "Spaghetti con vongole veraci", price: "€ 16" },
      { name: "Spaghetti al cartoccio", price: "€ 16" },
      { name: "Tagliatelle con gamberoni e stracciatella di burrata", price: "€ 16" },
      { name: "Tagliatelle con crema di scampi", price: "€ 16" },
      { name: "Paccheri con gamberi di Mazara e pistacchi", price: "€ 16" },
      { name: "Paccheri con granchio", price: "€ 16" },
      { name: "Paccheri con tonno fresco", desc: "Capperi, olive taggiasche, pomodorini e granella di pistacchio", price: "€ 15" },
      { name: "Risotto peschereccio", desc: "Gamberetti, calamari e cipolla croccante", price: "€ 15" },
    ],
  },
  {
    id: "primi-terra",
    title: "Primi di terra",
    short: "Primi terra",
    note: "I classici della trattoria",
    items: [
      { name: "Risotto con funghi porcini", price: "€ 13,90" },
      { name: "Spaghetti alla carbonara", price: "€ 13" },
      { name: "Paccheri pomodorino fresco e burrata", price: "€ 13" },
      { name: "Spaghetti alla Nerano", desc: "Zucchine, grana, basilico e scaglie di provolone", price: "€ 12" },
      { name: "Gnocchi speck e zafferano", price: "€ 12" },
    ],
  },
  {
    id: "secondi-mare",
    title: "Secondi di mare",
    short: "Secondi mare",
    note: "Pesce alla griglia e fritto",
    items: [
      { name: "Grigliata di pesce media", price: "€ 23" },
      { name: "Filetto di branzino con patate al forno", desc: "Alla mediterranea", price: "€ 20" },
      { name: "Gamberoni alla griglia", desc: "6 pezzi", price: "€ 20" },
      { name: "Orata o branzino alla griglia", price: "€ 16" },
      { name: "Fritto misto di pesce", price: "€ 16" },
      { name: "Pesce spada alla siciliana o alla griglia", price: "€ 15" },
      { name: "Calamari fritti", price: "€ 15" },
    ],
  },
  {
    id: "da-condividere",
    title: "Grigliate e barca di mare",
    short: "Da condividere",
    note: "Piatti da dividere al tavolo",
    items: [
      { name: "Grigliata extra large", desc: "Insalata di mare, capesante, gamberoni, scampi, branzino, pesce spada, fritto misto, spiedini, patatine e verdure", price: "€ 100" },
      { name: "Barca di mare", desc: "Per 2 persone: astice, capesante, gamberi, seppia, cozze e vongole al sugo di pomodoro", price: "€ 69" },
      { name: "Grigliata reale", desc: "Capesante, gamberoni, scampi, seppie, pesce spada e spiedini di gamberi", price: "€ 65" },
      { name: "Gratinati large", desc: "Capesante, gamberoni, scampi, fritto misto, spiedini e cannolicchi", price: "€ 65" },
    ],
  },
  {
    id: "secondi-terra",
    title: "Secondi di terra",
    short: "Carne",
    note: "Alla griglia o impanata",
    items: [
      { name: "Costata alla griglia con patate", price: "€ 25" },
      { name: "Tagliata di manzo con rucola e grana", price: "€ 15" },
      { name: "Cotoletta alla milanese con patatine", price: "€ 15" },
      { name: "Grigliata di carne", price: "€ 15" },
    ],
  },
  {
    id: "pizze",
    title: "Pizze classiche",
    short: "Pizze",
    note: "Forno a legna · anche con impasto a lievitazione naturale",
    items: [
      { name: "Margherita", desc: "Pomodoro, mozzarella", price: "€ 7,50" },
      { name: "Marinara", desc: "Doppio pomodoro, origano, aglio", price: "€ 6,50" },
      { name: "Diavola", desc: "Pomodoro, mozzarella, salame piccante", price: "€ 8,50" },
      { name: "Napoli", desc: "Pomodoro, mozzarella, origano, acciughe", price: "€ 8,50" },
      { name: "Capricciosa", desc: "Pomodoro, mozzarella, cotto, funghi, carciofi, olive, acciughe, origano", price: "€ 9,50" },
      { name: "Quattro stagioni", desc: "Pomodoro, mozzarella, cotto, funghi, carciofi, olive", price: "€ 9" },
      { name: "Cinque formaggi", desc: "Mozzarella, zola, taleggio, fontina, grana", price: "€ 9,50" },
      { name: "Bufala", desc: "Pomodoro, mozzarella di bufala", price: "€ 10,50" },
      { name: "Friarielli", desc: "Mozzarella, cime di rapa, salsiccia", price: "€ 10,50" },
      { name: "Porcini e crudo", desc: "Pomodoro, mozzarella, funghi porcini, crudo", price: "€ 11" },
    ],
  },
  {
    id: "pizze-casa",
    title: "Pizze speciali",
    short: "Pizze speciali",
    note: "Con pesce, salumi e formaggi",
    items: [
      { name: "Frutti di mare", desc: "Pomodoro, mozzarella, cozze, vongole, calamari, gamberi", price: "€ 12" },
      { name: "Focaccia con carpaccio di salmone", desc: "Rucola, pomodorini e pistacchi", price: "€ 12" },
      { name: "Crudaiola", desc: "Pomodoro, mozzarella, burrata, salmone fresco", price: "€ 11,50" },
      { name: "Fantasia", desc: "Pomodoro, mozzarella, tonno, grana, rucola, pomodorini", price: "€ 11" },
      { name: "Gamberetti e rucola", desc: "Pomodoro, mozzarella, gamberi, rucola", price: "€ 11" },
      { name: "Amicizia", desc: "Pomodoro, mozzarella, scamorza, crudo, pomodorini", price: "€ 11" },
      { name: "Silvia", desc: "Pomodoro, mozzarella, speck, brie", price: "€ 10,50" },
      { name: "Patatosa", desc: "Pomodoro, mozzarella, würstel, patatine fritte", price: "€ 10" },
    ],
  },
  {
    id: "dolci",
    title: "Dolci",
    note: "Fatti in casa",
    items: [
      { name: "Tiramisù della casa", price: "€ 6" },
      { name: "Crema catalana della casa", price: "€ 6" },
    ],
  },
  {
    id: "cantina",
    title: "Vini e bollicine",
    short: "Vini",
    note: "Una selezione dalla cantina",
    items: [
      { name: "Trentodoc brut millesimato", price: "€ 28" },
      { name: "Falanghina, Fiano, Greco di Tufo", desc: "San Gregorio DOCG", price: "€ 25" },
      { name: "Vermentino di Gallura", price: "€ 25" },
      { name: "Prosecco di Valdobbiadene millesimato", price: "da € 18" },
      { name: "Rossi in bottiglia", desc: "Nero d'Avola, Montepulciano, Chianti, Bonarda, Barbera", price: "da € 15" },
      { name: "Vino frizzante alla spina", desc: "Bianco o rosso, al litro", price: "€ 12" },
    ],
  },
];

/** Giro pesce: portate a volontà fino allo stop, minimo 4 persone. */
export const GIRO = [
  { name: "Basic", price: "40", text: "Almeno 6 antipasti, 2 primi e 2 secondi di pesce, finché non dici basta." },
  { name: "Gold", price: "45", text: "Il Basic più un primo a scelta: spaghetti 3 orgasmi, risotto alla pescatora o spaghetti con gamberi di Mazara e pistacchio." },
  { name: "Platinum", price: "50", text: "Il Basic più una crudité di pesce.", highlight: true },
  { name: "Diamond", price: "60", text: "Il Basic con crudité di pesce e paccheri all'astice." },
];

export const EVENT_MENUS = [
  {
    name: "Cena aziendale",
    price: "da € 30",
    note: "Minimo 20 persone · bevande escluse · anche da € 35 e € 40",
    items: ["Margherita, affettati misti, gnocco fritto e pepata di cozze", "Risotto ai porcini e paccheri con gamberi e olive", "Fritto misto di pesce con patatine"],
  },
  {
    name: "Menù cerimonie",
    price: "€ 35",
    note: "Battesimi, comunioni, cresime · personalizzabile",
    items: ["Insalata di mare, affettati e gnocchi fritti", "Spaghetti ai frutti di mare e risotto ai porcini", "Fritto misto di pesce con patatine"],
  },
  {
    name: "Apericena",
    price: "€ 25",
    note: "A persona · 1 litro di bevande ogni 4 persone",
    items: ["Taglieri di salumi e formaggi", "Gnocco fritto, focaccia e pizzette", "Stuzzichini caldi e fritti"],
  },
];

export const SEASONAL = [
  {
    name: "Menù di Natale",
    when: "Vigilia, pranzo e cena di Natale",
    price: "€ 45",
    text: "Giro pesce illimitato, piatti preparati al momento. Bambini sotto 1,20 m € 30. Su richiesta anche di carne.",
  },
  {
    name: "Cenone di Capodanno",
    when: "31 dicembre",
    price: "€ 78",
    text: "Pesce e carne illimitati, brindisi di mezzanotte, musica dal vivo e DJ set. C'è anche una sala senza musica.",
  },
];
