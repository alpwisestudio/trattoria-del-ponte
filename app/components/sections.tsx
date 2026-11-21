import Image from "next/image";
import Link from "next/link";
import { BookingForm } from "../booking-form";
import { GIRO, INFO, type MenuCategory } from "../info";
import sala from "../../public/images/sala.jpg";
import { delay } from "./delay";
import { HoursList } from "./site-footer";
import { Container } from "./ui";

/** Carta del menù: due colonne di categorie, piatti con i puntini fino al prezzo. */
export function MenuGrid({ categories, single }: { categories: MenuCategory[]; single?: boolean }) {
    return (
        <div className={`mx-auto grid items-start gap-x-16 gap-y-14 ${single ? "max-w-2xl" : "max-w-6xl md:grid-cols-2"}`}>
            {categories.map((cat, i) => (
                <section key={cat.id} data-reveal style={delay(i % 2)} aria-labelledby={`cat-${cat.id}`}>
                    <div className="border-b border-ink pb-4">
                        <h3 id={`cat-${cat.id}`} className="deco text-3xl">
                            {cat.title}
                        </h3>
                        <p className="mt-2 text-sm text-muted">{cat.note}</p>
                    </div>
                    <ul className="divide-y divide-line">
                        {cat.items.map((it) => (
                            <li key={it.name} className="py-4">
                                <div className="flex items-baseline gap-3">
                                    <span className="font-medium">{it.name}</span>
                                    <span aria-hidden className="mb-1 flex-1 border-b border-dotted border-steel" />
                                    <span className="shrink-0 font-display text-lg tabular-nums text-blue">{it.price}</span>
                                </div>
                                {it.desc && <p className="mt-1 pr-16 text-sm text-muted">{it.desc}</p>}
                            </li>
                        ))}
                    </ul>
                </section>
            ))}
        </div>
    );
}

/** Le quattro formule del giro pesce come tabella di confronto, su fondo scuro. */
export function GiroTable() {
    return (
        <div role="table" aria-label="Formule del giro pesce" className="mt-4">
            <div role="row" className="hidden grid-cols-[1fr_1fr_2.4fr] gap-8 border-b border-white/15 px-4 py-4 md:grid">
                {["Formula", "A persona", "Cosa arriva in tavola"].map((h) => (
                    <span key={h} role="columnheader" className="kicker text-steel">
                        {h}
                    </span>
                ))}
            </div>
            {GIRO.map((g, i) => (
                <div
                    key={g.name}
                    role="row"
                    data-reveal
                    style={delay(i)}
                    className={`grid grid-cols-[1fr_auto] gap-x-8 gap-y-2 border-b border-white/15 px-4 py-6 md:grid-cols-[1fr_1fr_2.4fr] md:items-center ${
                        g.highlight ? "bg-white/[0.07]" : ""
                    }`}
                >
                    <div role="rowheader">
                        <span className="deco text-2xl !font-normal tracking-[0.08em]">{g.name}</span>
                        {g.highlight && <span className="kicker mt-2 block !text-[0.65rem] text-ice">Il più scelto</span>}
                    </div>
                    <span role="cell" className="font-display text-3xl font-light tabular-nums md:text-4xl">
                        € {g.price}
                    </span>
                    <span role="cell" className="col-span-2 text-[0.95rem] leading-relaxed text-white/70 md:col-span-1">
                        {g.text}
                    </span>
                </div>
            ))}
        </div>
    );
}

export function BookingSection() {
    return (
        <section id="prenota" className="grid scroll-mt-16 bg-paper lg:grid-cols-2">
            <div className="relative min-h-72 lg:min-h-full">
                <Image src={sala} alt="" fill sizes="(max-width: 1024px) 100vw, 50vw" placeholder="blur" className="object-cover" />
            </div>
            <div className="px-6 py-20 md:px-16 lg:py-24">
                <div className="max-w-xl">
                    <div data-reveal>
                        <p className="kicker text-blue">Prenotazioni</p>
                        <h2 className="deco mt-4 text-4xl leading-[1.05] md:text-5xl">Prenota il tuo tavolo</h2>
                        <p className="mt-5 leading-relaxed text-muted">
                            Scegli giorno, servizio e numero di persone: la richiesta ci arriva su WhatsApp e ti confermiamo il
                            tavolo in pochi minuti. Nel weekend i posti finiscono presto.
                        </p>
                    </div>
                    <div data-reveal style={delay(1)} className="mt-10">
                        <BookingForm />
                    </div>
                    <div data-reveal className="mt-12 border-t border-ink pt-6">
                        <p className="kicker text-blue">Siamo aperti</p>
                        <HoursList compact className="mt-4 max-w-72 text-sm text-muted" />
                    </div>
                </div>
            </div>
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
        <address data-reveal className="not-italic">
            <dl className="divide-y divide-line border-y border-ink">
                {rows.map((r) => (
                    <div key={r.label} className="grid gap-1 py-5 sm:grid-cols-[8rem_1fr] sm:gap-4">
                        <dt className="kicker pt-1 text-blue">{r.label}</dt>
                        <dd className="break-words text-lg">
                            {r.href ? (
                                <a href={r.href} className="underline-offset-4 hover:text-blue hover:underline">
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
                className="btn btn-ink mt-8"
            >
                Indicazioni stradali
            </a>
        </address>
    );
}

export function MapEmbed() {
    return (
        <div data-reveal style={delay(1)} className="min-h-80 overflow-hidden border border-line bg-paper">
            <iframe
                title={`Mappa: ${INFO.fullName}, ${INFO.street}, ${INFO.city}`}
                src={`https://maps.google.com/maps?q=${encodeURIComponent(INFO.mapsQuery)}&z=16&output=embed`}
                className="h-full min-h-80 w-full grayscale-[0.4]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
    );
}

/** Fascia di chiusura con titolo a sinistra e azioni a destra. */
export function CtaBand({ title, text }: { title: string; text: string }) {
    return (
        <section className="bg-ink py-20 text-white">
            <Container className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                <div data-reveal>
                    <h2 className="deco text-4xl md:text-5xl">{title}</h2>
                    <p className="mt-3 text-white/70">{text}</p>
                </div>
                <div data-reveal style={delay(1)} className="flex flex-col gap-3 sm:flex-row">
                    <Link href="/contatti#prenota" className="btn btn-light">
                        Prenota un tavolo
                    </Link>
                    <a href={INFO.phoneHref} className="btn btn-line-light">
                        Chiama
                    </a>
                </div>
            </Container>
        </section>
    );
}
