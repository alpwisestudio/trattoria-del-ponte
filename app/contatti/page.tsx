import type { Metadata } from "next";
import { BookingSection, ContactCard, MapEmbed } from "../components/sections";
import { HoursList } from "../components/site-footer";
import { Heading, PageHero } from "../components/ui";
import sala from "../../public/images/sala.jpg";

export const metadata: Metadata = {
    title: "Contatti e prenotazioni",
    description:
        "Prenota un tavolo alla Trattoria del Ponte, Corso Sempione 99, Gallarate. Aperti tutti i giorni a pranzo e a cena. Telefono 0331 777292, WhatsApp 351 840 4200.",
};

export default function ContattiPage() {
    return (
        <>
            <PageHero
                kicker="Contatti"
                title="Ti aspettiamo al Ponte"
                text="Prenota online, scrivici su WhatsApp o chiamaci. Aperti tutti i giorni a pranzo e a cena."
                image={sala}
            />
            <BookingSection />
            <section className="px-6 py-24">
                <Heading kicker="Dove siamo" title="Corso Sempione 99, Gallarate" />
                <div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-[1fr_1.4fr]">
                    <div className="space-y-6">
                        <ContactCard />
                        <div data-reveal className="border border-navy/10 bg-white p-8">
                            <h3 className="kicker text-gold-deep">Orari</h3>
                            <HoursList className="mt-4 text-sm text-ink/75" />
                        </div>
                    </div>
                    <MapEmbed />
                </div>
            </section>
        </>
    );
}
