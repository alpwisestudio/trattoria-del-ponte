import type { Metadata } from "next";
import { Suspense } from "react";
import { CtaBand } from "../components/sections";
import { PageHero } from "../components/ui";
import { MenuFilter, MenuFilterFallback } from "./menu-filter";
import scoglio from "../../public/images/scoglio.jpg";

export const metadata: Metadata = {
    title: "Menù",
    description:
        "Il menù della Trattoria del Ponte a Gallarate: antipasti e crudité di pesce, primi e secondi di mare e di terra, pizze nel forno a legna, dolci e vini.",
};

export default function MenuPage() {
    return (
        <>
            <PageHero
                kicker="Il menù"
                title="Dal mercato alla tavola"
                text="Tocca una categoria per vedere solo quella. Prezzi aggiornati al menù 2026."
                image={scoglio}
            />
            <Suspense fallback={<MenuFilterFallback />}>
                <MenuFilter />
            </Suspense>
            <p className="mx-auto max-w-xl px-6 text-center text-xs leading-relaxed text-ink/55">
                Il pesce è acquistato fresco ogni giorno secondo il mercato. Tonno, salmone, orata e branzino sono abbattuti a
                norma di legge; alcuni prodotti, come gamberi, polpo e seppie, possono essere surgelati. Per allergie e
                intolleranze chiedi la tabella degli allergeni al personale. Coperto € 2,50.
            </p>
            <CtaBand title="Hai già scelto?" text="Prenota il tavolo online o chiamaci per l'asporto." />
        </>
    );
}
