import type { Metadata } from "next";
import { EventForm } from "../booking-form";
import { delay } from "../components/delay";
import { Feature, Heading, PageHero } from "../components/ui";
import { Arch, Wave } from "../decor";
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
                title="I vostri giorni importanti, a tavola"
                text="Una sala riservata fino a 50 persone e un menù preparato insieme a voi."
                image={sala}
            />

            <section className="px-6 py-24">
                <Feature kicker="La sala" title="Pensiamo noi a tutto, voi festeggiate" image={convivio} alt="Una tavolata di amici a cena">
                    <p>
                        Dal menù alla disposizione dei tavoli, dalla scelta dei vini ai tempi del servizio. Pesce, carne o pizza
                        artigianale: il menù si costruisce sulle vostre esigenze.
                    </p>
                    <ul className="flex flex-wrap justify-center gap-2 pt-2 md:justify-start">
                        {OCCASIONS.map((o) => (
                            <li key={o} className="border border-navy/15 bg-white px-3 py-1.5 text-xs font-bold text-navy">
                                {o}
                            </li>
                        ))}
                    </ul>
                </Feature>
            </section>

            <section className="bg-sand/60 px-6 py-24">
                <Heading kicker="Menù per gruppi" title="Tre proposte da cui partire" text="Prezzi a persona, personalizzabili." />
                <div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-3">
                    {EVENT_MENUS.map((m, i) => (
                        <article key={m.name} data-reveal style={delay(i)} className="flex flex-col border border-navy/10 bg-cream p-8">
                            <h3 className="font-serif text-3xl font-semibold text-navy">{m.name}</h3>
                            <p className="mt-1 font-serif text-4xl font-bold text-gold-deep">{m.price}</p>
                            <p className="mt-2 text-xs font-semibold text-ink/55">{m.note}</p>
                            <ul className="mt-6 flex-1 space-y-2.5 border-t border-navy/10 pt-6 text-sm text-ink/75">
                                {m.items.map((it) => (
                                    <li key={it} className="flex gap-3">
                                        <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-gold-deep" />
                                        {it}
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </section>

            <section className="px-6 py-24">
                <Heading kicker="Le feste" title="Natale e Capodanno al Ponte" />
                <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2">
                    {SEASONAL.map((s, i) => (
                        <article key={s.name} data-reveal style={delay(i)} className="border border-navy/10 bg-white p-8">
                            <p className="kicker text-gold-deep">{s.when}</p>
                            <div className="mt-3 flex items-baseline justify-between gap-4">
                                <h3 className="font-serif text-3xl font-semibold text-navy">{s.name}</h3>
                                <span className="font-serif text-3xl font-bold text-navy">{s.price}</span>
                            </div>
                            <p className="mt-4 leading-relaxed text-ink/70">{s.text}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section id="preventivo" className="night relative scroll-mt-16 px-6 py-28 text-white">
                <Wave side="top" />
                <Arch className="pointer-events-none absolute -right-24 bottom-16 hidden w-[28rem] text-white/[0.04] md:block" />
                <div className="relative mx-auto grid max-w-6xl items-start gap-14 lg:grid-cols-[1fr_1.3fr]">
                    <div data-reveal className="text-center lg:pt-6 lg:text-left">
                        <p className="kicker text-gold">Preventivo</p>
                        <h2 className="mt-3 font-serif text-5xl font-semibold leading-tight">Raccontaci la vostra festa</h2>
                        <p className="mt-5 leading-relaxed text-white/70">
                            Occasione, data e numero di ospiti: ti ricontattiamo su WhatsApp con una proposta di menù.
                        </p>
                    </div>
                    <div data-reveal="zoom" style={delay(1)} className="bg-cream p-7 text-ink shadow-2xl md:p-10">
                        <EventForm />
                    </div>
                </div>
                <Wave side="bottom" />
            </section>
            <div className="h-6" />
        </>
    );
}
