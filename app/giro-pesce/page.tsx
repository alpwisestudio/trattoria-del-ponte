import type { Metadata } from "next";
import Link from "next/link";
import { delay } from "../components/delay";
import { BookingSection, GiroCards, MenuGrid } from "../components/sections";
import { Feature, Heading, PageHero } from "../components/ui";
import { MENU } from "../info";
import grigliata from "../../public/images/grigliata.jpg";
import fritto from "../../public/images/fritto.jpg";

export const metadata: Metadata = {
    title: "Giro pesce",
    description:
        "Il giro pesce della Trattoria del Ponte a Gallarate: antipasti, primi e secondi di pesce a volontà da € 40 a persona, minimo 4 persone.",
};

const STEPS = [
    { n: "01", t: "Almeno 6 antipasti", d: "Insalata di mare, polpo e patate, pepata di cozze, marinati, gratinati." },
    { n: "02", t: "2 primi", d: "Paccheri, spaghetti e risotti ai frutti di mare, preparati al momento." },
    { n: "03", t: "2 secondi", d: "Fritto misto, grigliata e i piatti del giorno secondo il mercato." },
    { n: "04", t: "Finché non dici basta", d: "Le portate continuano fino allo stop del tavolo." },
];

export default function GiroPage() {
    const crudite = MENU.filter((c) => c.id === "crudite");
    return (
        <>
            <PageHero
                kicker="La specialità della casa"
                title="Il giro pesce"
                text="Portate di pesce a volontà, fino allo stop del tavolo. Minimo 4 persone, da € 40 a persona."
                image={fritto}
            />

            <section className="px-6 py-24">
                <Heading kicker="Come funziona" title="Voi vi sedete, noi portiamo in tavola" />
                <ol className="mx-auto mt-14 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {STEPS.map((s, i) => (
                        <li key={s.n} data-reveal style={delay(i)} className="border-t-2 border-navy pt-6">
                            <span className="font-serif text-5xl font-bold text-gold-deep">{s.n}</span>
                            <h3 className="mt-3 font-serif text-2xl font-semibold text-navy">{s.t}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-ink/65">{s.d}</p>
                        </li>
                    ))}
                </ol>
            </section>

            <section className="bg-sand/60 px-6 py-24">
                <Heading kicker="Quattro formule" title="Scegli il tuo giro" text="Tutti i prezzi sono a persona, bevande escluse." />
                <div className="mt-14">
                    <GiroCards />
                </div>
            </section>

            <section className="px-6 py-28">
                <Feature
                    kicker="Per chi vuole il crudo"
                    title="Con il Platinum e il Diamond arriva anche la crudité"
                    image={grigliata}
                    alt="Piatto di pesce con branzino, capesante e gamberi"
                >
                    <p>
                        Ostriche, scampi, gamberi rossi di Mazara e bis di tartare. Con il Diamond si chiude con i paccheri
                        all&apos;astice.
                    </p>
                    <Link href="/contatti#prenota" className="btn btn-navy mt-2">
                        Prenota il giro pesce
                    </Link>
                </Feature>
                <div className="mt-24">
                    <MenuGrid categories={crudite} single />
                </div>
            </section>

            <BookingSection />
            <div className="h-6" />
        </>
    );
}
