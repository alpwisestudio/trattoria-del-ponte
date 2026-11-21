import type { Metadata } from "next";
import { EventForm } from "../booking-form";
import { delay } from "../components/delay";
import { Container, Feature, Heading, PageHero } from "../components/ui";
import { EVENT_MENUS, SEASONAL } from "../info";
import convivio from "../../public/images/convivio.jpg";
import sala from "../../public/images/sala.jpg";

export const metadata: Metadata = {
    title: "Eventi e cerimonie",
    description:
        "Sala eventi a Gallarate fino a 50 persone: battesimi, comunioni, cresime, compleanni e cene aziendali alla Trattoria del Ponte. Menù da € 25 a persona.",
};

const OCCASIONS = ["Battesimi", "Comunioni", "Cresime", "Compleanni", "Cene aziendali", "Matrimoni"];

export default function EventiPage() {
    return (
        <>
            <PageHero
                kicker="Eventi e cerimonie"
                title={
                    <>
                        I vostri giorni
                        <br />
                        importanti
                    </>
                }
                text="Una sala riservata fino a 50 persone e un menù preparato insieme a voi."
                image={sala}
                alt="Tavola apparecchiata in sala"
            >
                <a href="#preventivo" className="btn btn-blue">
                    Chiedi un preventivo
                </a>
            </PageHero>

            <section className="py-24 md:py-32">
                <Feature kicker="La sala" title="Pensiamo noi a tutto, voi festeggiate" image={convivio} alt="Una tavolata di amici a cena">
                    <p>
                        Dal menù alla disposizione dei tavoli, dalla scelta dei vini ai tempi del servizio. Pesce, carne o pizza
                        artigianale: il menù si costruisce sulle vostre esigenze.
                    </p>
                    <ul className="flex flex-wrap gap-2 pt-2">
                        {OCCASIONS.map((o) => (
                            <li key={o} className="border border-ink/25 px-3 pb-1.5 pt-2 font-display text-xs uppercase tracking-[0.14em] text-ink">
                                {o}
                            </li>
                        ))}
                    </ul>
                </Feature>
            </section>

            <section className="border-y border-line bg-paper py-24 md:py-28">
                <Container>
                    <Heading kicker="Menù per gruppi" title="Tre proposte da cui partire" text="Prezzi a persona, da personalizzare insieme." />
                    <div className="grid md:grid-cols-3">
                        {EVENT_MENUS.map((m, i) => (
                            <article
                                key={m.name}
                                data-reveal
                                style={delay(i)}
                                className="flex flex-col border-b border-line py-10 md:border-b-0 md:px-8 md:first:pl-0 md:[&:not(:first-child)]:border-l"
                            >
                                <h3 className="deco text-2xl !font-normal tracking-[0.06em]">{m.name}</h3>
                                <p className="mt-3 font-display text-4xl font-light text-blue">{m.price}</p>
                                <p className="mt-2 text-xs text-muted">{m.note}</p>
                                <ul className="mt-6 flex-1 space-y-2.5 border-t border-line pt-6 text-sm text-muted">
                                    {m.items.map((it) => (
                                        <li key={it} className="flex gap-3">
                                            <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-steel" />
                                            {it}
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="py-24 md:py-28">
                <Container>
                    <Heading kicker="Le feste" title="Natale e Capodanno al Ponte" />
                    <div className="grid md:grid-cols-2">
                        {SEASONAL.map((s, i) => (
                            <article
                                key={s.name}
                                data-reveal
                                style={delay(i)}
                                className={`border-b border-line py-10 md:border-b-0 ${i ? "md:border-l md:pl-12" : "md:pr-12"}`}
                            >
                                <p className="kicker text-blue">{s.when}</p>
                                <div className="mt-4 flex items-baseline justify-between gap-4">
                                    <h3 className="deco text-3xl">{s.name}</h3>
                                    <span className="shrink-0 font-display text-3xl tabular-nums">{s.price}</span>
                                </div>
                                <p className="mt-4 leading-relaxed text-muted">{s.text}</p>
                            </article>
                        ))}
                    </div>
                </Container>
            </section>

            <section id="preventivo" className="scroll-mt-16 bg-ink py-24 text-white md:py-28">
                <Container className="grid items-start gap-14 lg:grid-cols-[1fr_1.3fr]">
                    <div data-reveal>
                        <p className="kicker text-ice">Preventivo</p>
                        <h2 className="deco mt-4 text-4xl leading-[1.05] md:text-5xl">Raccontaci la vostra festa</h2>
                        <p className="mt-5 max-w-sm leading-relaxed text-white/70">
                            Occasione, data e numero di ospiti: ti ricontattiamo su WhatsApp con una proposta di menù.
                        </p>
                    </div>
                    <div data-reveal style={delay(1)} className="bg-paper p-7 text-ink md:p-10">
                        <EventForm />
                    </div>
                </Container>
            </section>
        </>
    );
}
