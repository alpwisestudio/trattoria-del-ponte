import type { Metadata } from "next";
import { BookingSection, ContactCard, MapEmbed } from "../components/sections";
import { HoursList } from "../components/site-footer";
import { Container, Heading, PageHero } from "../components/ui";
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
                title={
                    <>
                        Ti aspettiamo
                        <br />
                        al Ponte
                    </>
                }
                text="Prenota online, scrivici su WhatsApp o chiamaci. Aperti tutti i giorni a pranzo e a cena."
                image={sala}
                alt="Tavola apparecchiata in sala"
            >
                <a href="#prenota" className="btn btn-blue">
                    Prenota un tavolo
                </a>
            </PageHero>
            <section className="py-24 md:py-28">
                <Container>
                    <Heading kicker="Dove siamo" title="Corso Sempione 99, Gallarate" />
                    <div className="mt-12 grid gap-12 md:grid-cols-[1fr_1.3fr] md:gap-14">
                        <div className="space-y-12">
                            <ContactCard />
                            <div data-reveal>
                                <h3 className="kicker text-blue">Orari</h3>
                                <HoursList className="mt-3 text-sm text-muted" />
                            </div>
                        </div>
                        <MapEmbed />
                    </div>
                </Container>
            </section>
            <BookingSection />
        </>
    );
}
