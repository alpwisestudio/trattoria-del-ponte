import Image from "next/image";
import Link from "next/link";
import { delay } from "./components/delay";
import { BookingSection, ContactCard, GiroTable, MapEmbed } from "./components/sections";
import { Container, Feature, Heading } from "./components/ui";
import { ArchPhoto } from "./decor";
import { SEASONAL } from "./info";
import scoglio from "../public/images/scoglio.jpg";
import fritto from "../public/images/fritto.jpg";
import tagliata from "../public/images/tagliata.jpg";
import margherita from "../public/images/margherita.jpg";
import grigliata from "../public/images/grigliata.jpg";
import convivio from "../public/images/convivio.jpg";

const FACTS = [
    { n: "7 su 7", l: "Pranzo e cena" },
    { n: "Da € 40", l: "Giro pesce a volontà" },
    { n: "50 posti", l: "Sala per cerimonie" },
    { n: "Asporto", l: "Pizza e cucina" },
];

const KITCHENS = [
    {
        img: fritto,
        alt: "Fritto misto di pesce con limone",
        title: "Il mare",
        text: "Crudité, antipasti, paccheri e spaghetti allo scoglio, grigliate e fritto misto.",
        href: "/menu?categoria=antipasti-mare,crudite,primi-mare,secondi-mare",
    },
    {
        img: tagliata,
        alt: "Tagliata di manzo con patate",
        title: "La terra",
        text: "Gnocco fritto e salumi, carbonara, costata alla griglia e cotoletta alla milanese.",
        href: "/menu?categoria=antipasti-terra,primi-terra,secondi-terra",
    },
    {
        img: margherita,
        alt: "Pizza margherita cotta nel forno a legna",
        title: "La pizzeria",
        text: "Pizza bassa e croccante nel forno a legna, anche con impasto a lievitazione naturale.",
        href: "/menu?categoria=pizze,pizze-casa",
    },
];

export default function Home() {
    return (
        <>
            {/* Hero: testo a sinistra, foto nell'arco del ponte a destra */}
            <section className="border-b border-line bg-paper pt-16 md:pt-20">
                <Container className="grid items-end gap-10 pt-8 md:grid-cols-[1.15fr_1fr] md:gap-16 md:pt-16">
                    <div className="md:pb-20">
                        <p className="hero-in kicker text-blue">Trattoria · Pizzeria · Gallarate</p>
                        <h1 style={delay(1)} className="hero-in deco mt-6 text-[2.9rem] leading-[1.02] sm:text-6xl lg:text-[5.25rem]">
                            Il mare,
                            <br />a due passi
                            <br />
                            dal <span className="font-normal text-blue">Sempione</span>
                        </h1>
                        <p style={delay(2)} className="hero-in mt-7 max-w-md text-[1.05rem] leading-relaxed text-muted">
                            Pesce fresco ogni giorno, carne alla griglia e pizza nel forno a legna. Aperti tutti i giorni, a pranzo e
                            a cena, in Corso Sempione 99.
                        </p>
                        <div style={delay(3)} className="hero-in mt-9 flex flex-wrap gap-3">
                            <Link href="/contatti#prenota" className="btn btn-blue">
                                Prenota un tavolo
                            </Link>
                            <Link href="/menu" className="btn btn-line">
                                Guarda il menù
                            </Link>
                        </div>
                    </div>
                    <div style={delay(2)} className="hero-in order-first mx-auto w-full max-w-sm md:order-none md:max-w-none">
                        <ArchPhoto
                            src={scoglio}
                            alt="Spaghetti allo scoglio con cozze, vongole e gamberi"
                            priority
                            sizes="(max-width: 768px) 90vw, 500px"
                            ratio="aspect-[5/4] md:aspect-[4/5]"
                        />
                    </div>
                </Container>
            </section>

            {/* Fatti */}
            <Container>
                <dl className="grid grid-cols-2 md:grid-cols-4">
                    {FACTS.map((f, i) => (
                        <div
                            key={f.l}
                            data-reveal
                            style={delay(i)}
                            className={`border-line py-7 md:px-6 ${i % 2 ? "border-l pl-5" : "pr-5 md:pl-0"} ${i > 1 ? "border-t md:border-t-0" : ""} ${i === 2 ? "md:border-l md:pl-6" : ""}`}
                        >
                            <dt className="font-display text-[1.65rem] leading-none md:text-3xl">{f.n}</dt>
                            <dd className="mt-2 text-[0.8rem] text-muted">{f.l}</dd>
                        </div>
                    ))}
                </dl>
            </Container>

            {/* Le tre cucine, come un indice */}
            <section className="border-t border-line py-24 md:py-28">
                <Container>
                    <Heading
                        kicker="La cucina"
                        title={
                            <>
                                Mare, terra
                                <br />e forno a legna
                            </>
                        }
                        text="Il pesce arriva fresco ogni giorno e cambia con il mercato. Accanto, i classici di carne e la pizzeria con forno a legna."
                    />
                    <ul>
                        {KITCHENS.map((k, i) => (
                            <li key={k.title} data-reveal style={delay(i)} className="border-b border-line">
                                <Link
                                    href={k.href}
                                    className="group grid grid-cols-[3rem_1fr] items-center gap-x-4 gap-y-2 py-7 md:grid-cols-[5rem_1fr_1.3fr_11rem] md:gap-8"
                                >
                                    <span className="row-span-2 self-start font-display text-3xl font-light text-steel md:row-span-1 md:self-center md:text-4xl">
                                        0{i + 1}
                                    </span>
                                    <h3 className="deco text-2xl !font-normal tracking-[0.06em] transition-colors group-hover:text-blue md:text-3xl">
                                        {k.title}
                                    </h3>
                                    <p className="text-[0.95rem] leading-relaxed text-muted">
                                        {k.text}
                                        <span className="mt-3 block md:hidden">
                                            <span className="arrow-link text-ink">
                                                Vedi i piatti <span aria-hidden>→</span>
                                            </span>
                                        </span>
                                    </p>
                                    <div className="relative hidden h-28 overflow-hidden md:block">
                                        <Image
                                            src={k.img}
                                            alt={k.alt}
                                            fill
                                            sizes="176px"
                                            placeholder="blur"
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </Container>
            </section>

            {/* Giro pesce */}
            <section className="bg-ink py-24 text-white md:py-28">
                <Container>
                    <Heading
                        light
                        kicker="La specialità della casa"
                        title="Il giro pesce"
                        text="Portate di pesce a volontà, fino allo stop del tavolo. Minimo 4 persone."
                    />
                    <GiroTable />
                    <div data-reveal className="mt-12 flex flex-col gap-3 sm:flex-row">
                        <Link href="/giro-pesce" className="btn btn-light">
                            Scopri il giro pesce
                        </Link>
                        <Link href="/contatti#prenota" className="btn btn-line-light">
                            Prenota per il tuo gruppo
                        </Link>
                    </div>
                </Container>
            </section>

            {/* Crudité */}
            <section className="py-24 md:py-32">
                <Feature
                    kicker="Crudité"
                    title="Ostriche, scampi e gamberi rossi di Mazara"
                    image={grigliata}
                    alt="Piatto di pesce con branzino, capesante e gamberi"
                    cta={{ href: "/menu?categoria=crudite,da-condividere", label: "Crudité e grigliate" }}
                >
                    <p>
                        Dalla tartare di tonno alla crudité reale con ostriche, scampi, gamberi di Mazara e capesante. E per la tavolata, la
                        barca di mare per due o la grigliata extra large.
                    </p>
                    <p className="text-sm">Prodotti variabili secondo stagione e disponibilità del mercato.</p>
                </Feature>
            </section>

            {/* Menù delle feste */}
            <section className="border-y border-line bg-paper py-24 md:py-28">
                <Container>
                    <Heading kicker="Le feste al Ponte" title="Natale e Capodanno" text="Due serate con il menù fisso, da prenotare per tempo." />
                    <div className="grid md:grid-cols-2">
                        {SEASONAL.map((s, i) => (
                            <article
                                key={s.name}
                                data-reveal
                                style={delay(i)}
                                className={`flex flex-col border-b border-line py-10 md:border-b-0 ${i ? "md:border-l md:pl-12" : "md:pr-12"}`}
                            >
                                <p className="kicker text-blue">{s.when}</p>
                                <div className="mt-4 flex items-baseline justify-between gap-4">
                                    <h3 className="deco text-3xl md:text-4xl">{s.name}</h3>
                                    <span className="shrink-0 font-display text-3xl tabular-nums">{s.price}</span>
                                </div>
                                <p className="mt-4 flex-1 leading-relaxed text-muted">{s.text}</p>
                                <Link href="/contatti#prenota" className="arrow-link mt-6 text-ink">
                                    Prenota il tuo posto <span aria-hidden>→</span>
                                </Link>
                            </article>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Eventi */}
            <section className="py-24 md:py-32">
                <Feature
                    reverse
                    kicker="Eventi e cerimonie"
                    title="Una sala tutta per voi, fino a 50 persone"
                    image={convivio}
                    alt="Una tavolata di amici a cena"
                    cta={{ href: "/eventi", label: "Organizza il tuo evento" }}
                >
                    <p>
                        Battesimi, comunioni, cresime, compleanni e cene aziendali. Prepariamo il menù con voi, di pesce o di carne,
                        e pensiamo noi a tavoli, vini e tempi del servizio.
                    </p>
                    <p>Menù cerimonie da € 35, cene aziendali da € 30 e apericena a € 25 a persona.</p>
                </Feature>
            </section>

            <BookingSection />

            {/* Dove siamo */}
            <section className="py-24 md:py-28">
                <Container>
                    <Heading kicker="Dove siamo" title="In Corso Sempione 99" text="A Gallarate, con parcheggio. In estate si mangia fuori, nel dehor." />
                    <div className="mt-12 grid gap-10 md:grid-cols-[1fr_1.3fr] md:gap-14">
                        <ContactCard />
                        <MapEmbed />
                    </div>
                </Container>
            </section>
        </>
    );
}
