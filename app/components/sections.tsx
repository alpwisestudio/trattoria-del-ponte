import Link from "next/link";
import { BookingForm } from "../booking-form";
import { Arch, Wave } from "../decor";
import { GIRO, INFO, type MenuCategory } from "../info";
import { delay } from "./delay";
import { HoursList } from "./site-footer";
import { Heading } from "./ui";

export function MenuGrid({ categories, single }: { categories: MenuCategory[]; single?: boolean }) {
    return (
        <div className={`mx-auto grid items-start gap-6 ${single ? "max-w-2xl" : "max-w-6xl md:grid-cols-2"}`}>
            {categories.map((cat, i) => (
                <div key={cat.id} data-reveal style={delay(i % 2)}>
                    <section aria-labelledby={`cat-${cat.id}`} className="border border-navy/10 bg-white p-7 shadow-sm md:p-9">
                        <h3 id={`cat-${cat.id}`} className="font-serif text-3xl font-semibold text-navy">
                            {cat.title}
                        </h3>
                        <p className="kicker mt-1 !tracking-[0.18em] text-gold-deep">{cat.note}</p>
                        <ul className="mt-6 space-y-4">
                            {cat.items.map((it) => (
                                <li key={it.name}>
                                    <div className="flex items-baseline gap-3">
                                        <span className="font-bold text-ink">{it.name}</span>
                                        <span aria-hidden className="mb-1 flex-1 border-b border-dotted border-ink/25" />
                                        <span className="shrink-0 font-serif text-lg font-bold text-navy">{it.price}</span>
                                    </div>
                                    {it.desc && <p className="mt-0.5 pr-16 text-sm text-ink/60">{it.desc}</p>}
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>
            ))}
        </div>
    );
}

export function GiroCards({ light }: { light?: boolean }) {
    return (
        <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {GIRO.map((g, i) => (
                <div key={g.name} data-reveal style={delay(i)}>
                    <article
                        className={`relative flex h-full flex-col border p-7 transition duration-300 hover:-translate-y-1 ${
                            g.highlight
                                ? "border-gold bg-gold text-navy-deep shadow-2xl shadow-gold/20"
                                : light
                                  ? "border-white/15 bg-white/[0.04] text-white"
                                  : "border-navy/15 bg-white text-ink"
                        }`}
                    >
                        {g.highlight && (
                            <span className="kicker absolute -top-3 left-7 bg-navy px-2.5 py-1 !text-[0.6rem] text-gold">
                                Il più scelto
                            </span>
                        )}
                        <h3 className="font-serif text-2xl font-semibold">Giro {g.name}</h3>
                        <p className="mt-3 font-serif text-5xl font-bold">
                            € {g.price}
                            <span className={`ml-1 font-sans text-xs font-bold ${g.highlight ? "text-navy-deep/70" : "opacity-60"}`}>
                                a persona
                            </span>
                        </p>
                        <p className={`mt-4 text-sm leading-relaxed ${g.highlight ? "text-navy-deep/80" : "opacity-70"}`}>{g.text}</p>
                    </article>
                </div>
            ))}
        </div>
    );
}

export function BookingSection() {
    return (
        <section id="prenota" className="night relative scroll-mt-16 px-6 py-28 text-white">
            <Wave side="top" />
            <Arch className="pointer-events-none absolute -left-24 top-24 hidden w-[28rem] text-white/[0.04] md:block" />
            <div className="relative mx-auto grid max-w-6xl items-start gap-14 lg:grid-cols-[1fr_1.3fr]">
                <div data-reveal className="text-center lg:pt-6 lg:text-left">
                    <p className="kicker text-gold">Prenotazioni</p>
                    <h2 className="mt-3 font-serif text-5xl font-semibold leading-tight">Prenota il tuo tavolo</h2>
                    <p className="mt-5 leading-relaxed text-white/70">
                        Scegli giorno, servizio e numero di persone: la richiesta ci arriva su WhatsApp e ti confermiamo il tavolo
                        in pochi minuti. Nel weekend i posti finiscono presto.
                    </p>
                    <div className="mx-auto mt-10 max-w-xs border-t border-white/15 pt-8 lg:mx-0">
                        <p className="kicker text-gold">Siamo aperti</p>
                        <HoursList compact className="mt-4 text-left text-sm text-white/75" />
                    </div>
                </div>
                <div data-reveal="zoom" style={delay(1)} className="bg-cream p-7 text-ink shadow-2xl md:p-10">
                    <BookingForm />
                </div>
            </div>
            <Wave side="bottom" />
        </section>
    );
}

export function ContactCard() {
    const rows = [
        { label: "Indirizzo", value: `${INFO.street}, ${INFO.zip} ${INFO.city} (${INFO.province})` },
        { label: "Telefono", value: INFO.phone, href: INFO.phoneHref },
        { label: "WhatsApp", value: INFO.whatsappLabel, href: `https://wa.me/${INFO.whatsapp}` },
        { label: "Email", value: INFO.email, href: `mailto:${INFO.email}` },
    ];
    return (
        <address data-reveal className="border border-navy/10 bg-white p-8 not-italic shadow-sm">
            <dl className="space-y-5">
                {rows.map((r) => (
                    <div key={r.label}>
                        <dt className="kicker text-gold-deep">{r.label}</dt>
                        <dd className="mt-1 break-words font-serif text-xl font-semibold text-navy">
                            {r.href ? (
                                <a href={r.href} className="hover:text-gold-deep">
                                    {r.value}
                                </a>
                            ) : (
                                r.value
                            )}
                        </dd>
                    </div>
                ))}
            </dl>
            <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(INFO.mapsQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-navy mt-8"
            >
                Indicazioni stradali
            </a>
        </address>
    );
}

export function MapEmbed() {
    return (
        <div data-reveal style={delay(1)} className="min-h-80 overflow-hidden shadow-sm">
            <iframe
                title={`Mappa: ${INFO.fullName}, ${INFO.street}, ${INFO.city}`}
                src={`https://maps.google.com/maps?q=${encodeURIComponent(INFO.mapsQuery)}&z=16&output=embed`}
                className="h-full min-h-80 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
    );
}

export function CtaBand({ title, text }: { title: string; text: string }) {
    return (
        <section className="px-6 py-24 text-center">
            <Heading title={title} text={text} />
            <div data-reveal style={delay(1)} className="mx-auto mt-10 flex max-w-md flex-wrap justify-center gap-4">
                <Link href="/contatti#prenota" className="btn btn-navy">
                    Prenota un tavolo
                </Link>
                <a href={INFO.phoneHref} className="btn btn-line-dark">
                    Chiama
                </a>
            </div>
        </section>
    );
}
