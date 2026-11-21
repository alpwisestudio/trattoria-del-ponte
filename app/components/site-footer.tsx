import Link from "next/link";
import { HOURS, INFO, NAV } from "../info";
import { Logo } from "./ui";

export function HoursList({ className = "", compact }: { className?: string; compact?: boolean }) {
    if (compact) {
        return (
            <dl className={`grid grid-cols-[auto_1fr] gap-x-6 gap-y-1.5 ${className}`}>
                <dt>Tutti i giorni</dt>
                <dd className="text-right tabular-nums">
                    12:00 – 15:00
                    <br />
                    19:00 – 23:30
                </dd>
                <dt>Sabato sera</dt>
                <dd className="text-right tabular-nums">fino alle 23:45</dd>
            </dl>
        );
    }
    return (
        <ul className={`divide-y divide-line ${className}`}>
            {HOURS.map((h) => (
                <li key={h.day} className="flex justify-between gap-4 py-2.5">
                    <span className="font-medium text-ink">{h.day}</span>
                    <span className="tabular-nums">
                        {h.lunch} · {h.dinner}
                    </span>
                </li>
            ))}
        </ul>
    );
}

export function SiteFooter() {
    return (
        <footer className="bg-ink text-white">
            <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-12 pt-20 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
                <div>
                    <Logo light className="h-16 w-auto" />
                    <p className="mt-6 text-sm leading-relaxed text-white/60">
                        {INFO.street}
                        <br />
                        {INFO.zip} {INFO.city} ({INFO.province})
                    </p>
                </div>
                <div>
                    <h3 className="kicker text-ice">Pagine</h3>
                    <ul className="mt-5 space-y-2.5 text-sm text-white/70">
                        {NAV.map((n) => (
                            <li key={n.href}>
                                <Link href={n.href} className="hover:text-white">
                                    {n.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="kicker text-ice">Orari</h3>
                    <HoursList compact className="mt-5 max-w-60 text-sm text-white/70" />
                </div>
                <div>
                    <h3 className="kicker text-ice">Prenotazioni</h3>
                    <a href={INFO.phoneHref} className="deco mt-5 block text-3xl hover:text-ice">
                        {INFO.phone}
                    </a>
                    <a href={`https://wa.me/${INFO.whatsapp}`} className="mt-2 block text-sm text-white/70 hover:text-white">
                        WhatsApp {INFO.whatsappLabel}
                    </a>
                    <Link href="/contatti#prenota" className="btn btn-light mt-6">
                        Prenota online
                    </Link>
                </div>
            </div>

            <div className="mx-auto max-w-6xl px-6 pb-10">
                <div className="flex flex-col gap-4 border-t border-white/15 pt-6 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center gap-5">
                        <a href={INFO.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-white">
                            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
                                <path d="M14 8h3V4h-3c-2.8 0-4 1.7-4 4.3V10H7v4h3v8h4v-8h3l1-4h-4V8.6c0-.4.3-.6.6-.6z" />
                            </svg>
                        </a>
                        <a href={INFO.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-white">
                            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                                <rect x="3" y="3" width="18" height="18" rx="5" />
                                <circle cx="12" cy="12" r="4" />
                                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                            </svg>
                        </a>
                        <span>
                            © {INFO.fullName} · P.IVA {INFO.vat}
                        </span>
                    </div>
                    <span>Coperto € 2,50 · allergeni disponibili in sala</span>
                </div>

                {/* Dicitura del concept */}
                <div className="mt-6 space-y-1 text-[0.7rem] leading-relaxed text-white/40">
                    <p>
                        Concept a cura di{" "}
                        <a href="https://www.alpwise.studio" className="underline underline-offset-2 hover:text-white/70">
                            Alpwise Studio
                        </a>
                        . Non è il sito ufficiale della Trattoria del Ponte.
                    </p>
                    <p>
                        Foto illustrative. Spaghetti allo scoglio: Arnaud 25 (CC0); grigliata di pesce: Daderot (CC0); fritto misto:
                        Sergio Conti (CC BY-SA 2.0), via Wikimedia Commons.
                    </p>
                </div>
            </div>
        </footer>
    );
}
