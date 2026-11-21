import Image from "next/image";
import Link from "next/link";
import { delay } from "./components/delay";
import { BookingSection, ContactCard, GiroCards, MapEmbed } from "./components/sections";
import { Feature, Heading } from "./components/ui";
import { Arch, Wave } from "./decor";
import { SEASONAL } from "./info";
import scoglio from "../public/images/scoglio.jpg";
import fritto from "../public/images/fritto.jpg";
import tagliata from "../public/images/tagliata.jpg";
import margherita from "../public/images/margherita.jpg";
import grigliata from "../public/images/grigliata.jpg";
import convivio from "../public/images/convivio.jpg";

const FACTS = [
    { n: "7 su 7", l: "Aperti a pranzo e a cena" },
    { n: "da € 40", l: "Giro pesce a volontà" },
    { n: "50", l: "Posti nella sala cerimonie" },
    { n: "Asporto", l: "Pizza e cucina da portare a casa" },
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
            {/* Hero */}
            <section className="night relative px-6 pb-32 pt-36 text-white md:pb-40 md:pt-48">
                <div className="absolute inset-0 overflow-hidden">
                    <Image
                        src={scoglio}
                        alt=""
                        fill
                        priority
                        placeholder="blur"
                        sizes="100vw"
                        className="animate-ken-burns object-cover opacity-45"
                    />
                </div>
                <div className="absolute inset-0 bg-linear-to-r from-navy via-navy/80 to-navy/30" />
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-navy/80" />

                <div className="relative mx-auto max-w-6xl">
                    <div className="max-w-2xl">
                        <Arch animate className="w-36 text-silver/70 md:w-44" />
                        <p className="hero-in kicker mt-2 text-gold">Trattoria · Pizzeria · Gallarate</p>
                        <h1
                            style={delay(1)}
                            className="hero-in mt-5 font-serif text-6xl font-semibold leading-[0.95] sm:text-7xl md:text-8xl"
                        >
                            Il mare,
                            <br />
                            <em className="font-medium text-gold">a due passi</em>
                            <br />
                            dal Sempione
                        </h1>
                        <p style={delay(2)} className="hero-in mt-7 max-w-lg text-lg leading-relaxed text-white/80">
                            Pesce fresco ogni giorno, carne alla griglia e pizza nel forno a legna. Aperti tutti i giorni, a
                            pranzo e a cena, in Corso Sempione 99.
                        </p>
                        <div style={delay(3)} className="hero-in mt-10 flex flex-wrap gap-4">
                            <Link href="/contatti#prenota" className="btn btn-gold">
                                Prenota un tavolo
                            </Link>
                            <Link href="/menu" className="btn btn-line">
                                Guarda il menù
                            </Link>
                        </div>
                    </div>
                </div>
                <Wave side="bottom" />
            </section>

            {/* Fatti */}
            <section className="px-6">
                <dl className="mx-auto -mt-6 grid max-w-6xl grid-cols-2 border border-navy/10 bg-white shadow-xl shadow-navy/5 md:-mt-10 md:grid-cols-4">
                    {FACTS.map((f, i) => (
                        <div
                            key={f.l}
                            data-reveal
                            style={delay(i)}
                            className={`px-5 py-7 text-center md:px-8 ${i % 2 ? "border-l border-navy/10" : ""} ${i > 1 ? "border-t border-navy/10 md:border-t-0" : ""} ${i === 2 ? "md:border-l" : ""}`}
                        >
                            <dt className="font-serif text-3xl font-bold text-navy md:text-4xl">{f.n}</dt>
                            <dd className="mt-1 text-xs font-semibold text-ink/60">{f.l}</dd>
                        </div>
                    ))}
                </dl>
            </section>

            {/* Tre cucine */}
            <section className="px-6 py-28">
                <Heading
                    kicker="La cucina"
                    title="Mare, terra e forno a legna"
                    text="Il pesce arriva fresco ogni mattina e cambia con il mercato. Accanto, i classici di carne e una pizzeria vera."
                />
                <div className="mx-auto mt-16 grid max-w-6xl gap-10 md:grid-cols-3 md:gap-8">
                    {KITCHENS.map((k, i) => (
                        <Link key={k.title} href={k.href} data-reveal style={delay(i + 1)} className="group text-center">
                            <div className="relative mx-auto aspect-[4/5] max-w-sm overflow-hidden rounded-t-[999px] shadow-xl shadow-navy/15">
                                <Image
                                    src={k.img}
                                    alt={k.alt}
                                    fill
                                    sizes="(max-width: 768px) 90vw, 360px"
                                    placeholder="blur"
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            <h3 className="mt-7 font-serif text-3xl font-semibold text-navy">{k.title}</h3>
                            <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-ink/65">{k.text}</p>
                            <span className="kicker mt-4 inline-flex items-center gap-2 text-gold-deep transition-[gap] group-hover:gap-3">
                                Vedi i piatti <span aria-hidden>→</span>
                            </span>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Giro pesce */}
            <section className="night relative px-6 py-28 text-white">
                <Wave side="top" />
                <Heading
                    light
                    kicker="La specialità della casa"
                    title="Il giro pesce, finché non dici basta"
                    text="Portate di pesce a volontà, preparate al momento, fino allo stop del tavolo. Minimo 4 persone."
                />
                <div className="mt-16">
                    <GiroCards light />
                </div>
                <div data-reveal className="mt-14 flex flex-wrap justify-center gap-4">
                    <Link href="/giro-pesce" className="btn btn-gold">
                        Scopri il giro pesce
                    </Link>
                    <Link href="/contatti#prenota" className="btn btn-line">
                        Prenota per il tuo gruppo
                    </Link>
                </div>
                <Wave side="bottom" />
            </section>

            {/* Crudité */}
            <section className="px-6 py-28">
                <Feature
                    kicker="Crudité"
                    title="Ostriche, scampi e gamberi rossi di Mazara"
                    image={grigliata}
                    alt="Piatto di pesce con branzino, capesante e gamberi"
                    cta={{ href: "/menu?categoria=crudite,da-condividere", label: "Crudité e grigliate" }}
                >
                    <p>
                        Dalla tartare di tonno alla crudité reale con ostriche Gillardeau, scampi e capesante. E per la tavolata, la
                        barca di mare per due o la grigliata extra large.
                    </p>
                    <p className="text-sm text-ink/55">Prodotti variabili secondo stagione e disponibilità del mercato.</p>
                </Feature>
            </section>

            {/* Menù delle feste */}
            <section className="bg-sand/60 px-6 py-24">
                <Heading kicker="Le feste al Ponte" title="Natale e Capodanno" />
                <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2">
                    {SEASONAL.map((s, i) => (
                        <article key={s.name} data-reveal style={delay(i + 1)} className="flex flex-col border border-navy/10 bg-cream p-8 md:p-10">
                            <p className="kicker text-gold-deep">{s.when}</p>
                            <div className="mt-3 flex items-baseline justify-between gap-4">
                                <h3 className="font-serif text-4xl font-semibold text-navy">{s.name}</h3>
                                <span className="shrink-0 font-serif text-3xl font-bold text-navy">{s.price}</span>
                            </div>
                            <p className="mt-4 flex-1 leading-relaxed text-ink/70">{s.text}</p>
                            <Link href="/contatti#prenota" className="btn btn-line-dark mt-8 self-start">
                                Prenota il tuo posto
                            </Link>
                        </article>
                    ))}
                </div>
            </section>

            {/* Eventi */}
            <section className="px-6 py-28">
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
            <section className="px-6 py-28">
                <Heading kicker="Dove siamo" title="In Corso Sempione 99" text="A Gallarate, con parcheggio. In estate si mangia fuori, nel dehor." />
                <div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-[1fr_1.4fr]">
                    <ContactCard />
                    <MapEmbed />
                </div>
            </section>
        </>
    );
}
