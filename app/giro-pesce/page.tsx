import type { Metadata } from "next";
import Link from "next/link";
import { delay } from "../components/delay";
import { BookingSection, GiroTable, MenuGrid } from "../components/sections";
import { Container, Feature, Heading, PageHero } from "../components/ui";
import { MENU } from "../info";
import grigliata from "../../public/images/grigliata.jpg";
import fritto from "../../public/images/fritto.jpg";

export const metadata: Metadata = {
    title: "Giro pesce",
    description:
        "Il giro pesce della Trattoria del Ponte a Gallarate: antipasti, primi e secondi di pesce a volontà da € 40 a persona, minimo 4 persone.",
};

const STEPS = [
    { t: "Almeno 6 antipasti", d: "Si comincia con un giro di antipasti di pesce, almeno sei." },
    { t: "Due primi", d: "Poi arrivano due primi di pesce." },
    { t: "Due secondi", d: "E due secondi di pesce." },
    { t: "Finché non dici basta", d: "Le portate continuano fino allo stop del tavolo." },
];

export default function GiroPage() {
    const crudite = MENU.filter((c) => c.id === "crudite");
    return (
        <>
            <PageHero
                kicker="La specialità della casa"
                title={
                    <>
                        Il giro
                        <br />
                        pesce
                    </>
                }
                text="Portate di pesce a volontà, fino allo stop del tavolo. Minimo 4 persone, da € 40 a persona."
                image={fritto}
                alt="Fritto misto di pesce"
            >
                <Link href="/contatti#prenota" className="btn btn-blue">
                    Prenota il giro pesce
                </Link>
            </PageHero>

            <section className="py-24 md:py-28">
                <Container>
                    <Heading kicker="Come funziona" title="Voi vi sedete, noi portiamo in tavola" />
                    <ol className="grid sm:grid-cols-2 lg:grid-cols-4">
                        {STEPS.map((s, i) => (
                            <li
                                key={s.t}
                                data-reveal
                                style={delay(i)}
                                className="border-b border-line py-8 sm:px-6 sm:[&:nth-child(2n)]:border-l lg:border-b-0 lg:[&:not(:first-child)]:border-l lg:first:pl-0"
                            >
                                <span className="font-display text-4xl font-light text-steel">0{i + 1}</span>
                                <h3 className="deco mt-4 text-xl !font-normal tracking-[0.06em]">{s.t}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-muted">{s.d}</p>
                            </li>
                        ))}
                    </ol>
                </Container>
            </section>

            <section className="bg-ink py-24 text-white md:py-28">
                <Container>
                    <Heading light kicker="Quattro formule" title="Scegli il tuo giro" text="Prezzi a persona, minimo 4 persone." />
                    <GiroTable />
                </Container>
            </section>

            <section className="py-24 md:py-32">
                <Feature
                    kicker="Per chi vuole il crudo"
                    title="Con il Platinum e il Diamond arriva anche la crudité"
                    image={grigliata}
                    alt="Piatto di pesce con branzino, capesante e gamberi"
                >
                    <p>
                        Ostriche, scampi, gamberi rossi di Mazara e bis di tartare. Con il Diamond arrivano anche i paccheri
                        all&apos;astice.
                    </p>
                </Feature>
                <div className="mt-24 px-6">
                    <MenuGrid categories={crudite} single />
                </div>
            </section>

            <BookingSection />
        </>
    );
}
