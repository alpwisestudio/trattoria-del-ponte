import Link from "next/link";
import { Wave } from "../decor";
import { HOURS, INFO, NAV } from "../info";
import { Logo } from "./ui";

export function HoursList({ className = "", compact }: { className?: string; compact?: boolean }) {
    if (compact) {
        return (
            <dl className={`space-y-1.5 ${className}`}>
                <div className="flex justify-between gap-6">
                    <dt>Tutti i giorni</dt>
                    <dd>12:00 – 15:00</dd>
                </div>
                <div className="flex justify-between gap-6">
                    <dt />
                    <dd>19:00 – 23:30</dd>
                </div>
                <div className="flex justify-between gap-6">
                    <dt>Sabato sera</dt>
                    <dd>fino alle 23:45</dd>
                </div>
            </dl>
        );
    }
    return (
        <ul className={`space-y-1.5 ${className}`}>
            {HOURS.map((h) => (
                <li key={h.day} className="flex gap-4">
                    <span className="w-24 shrink-0 font-semibold">{h.day}</span>
                    <span>
                        {h.lunch} · {h.dinner}
                    </span>
                </li>
            ))}
        </ul>
    );
}

export function SiteFooter() {
    return (
        <footer className="night relative px-6 pb-10 pt-24 text-white">
            <Wave side="top" />
            <div className="relative mx-auto grid max-w-6xl gap-12 text-center md:grid-cols-4 md:text-left">
                <div className="flex flex-col items-center md:items-start">
                    <Logo className="h-20 w-auto" />
                    <p className="mt-4 text-sm leading-relaxed text-white/60">
                        {INFO.street}
                        <br />
                        {INFO.zip} {INFO.city} ({INFO.province})
                    </p>
                </div>
                <div>
                    <h3 className="kicker text-gold">Pagine</h3>
                    <ul className="mt-4 space-y-2 text-sm text-white/70">
                        {NAV.map((n) => (
                            <li key={n.href}>
                                <Link href={n.href} className="hover:text-gold">
                                    {n.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mx-auto w-full max-w-60 md:mx-0">
                    <h3 className="kicker text-gold">Orari</h3>
                    <HoursList compact className="mt-4 text-left text-sm text-white/70" />
                </div>
                <div className="flex flex-col items-center gap-2 md:items-end">
                    <h3 className="kicker text-gold">Prenotazioni</h3>
                    <a href={INFO.phoneHref} className="mt-2 font-serif text-3xl font-semibold hover:text-gold">
                        {INFO.phone}
                    </a>
                    <a href={`https://wa.me/${INFO.whatsapp}`} className="text-sm text-white/70 hover:text-gold">
                        WhatsApp {INFO.whatsappLabel}
                    </a>
                    <Link href="/contatti#prenota" className="btn btn-gold mt-4">
                        Prenota online
                    </Link>
                </div>
            </div>

            <div className="relative mx-auto mt-14 flex max-w-6xl flex-col items-center gap-4 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:justify-between">
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
            <div className="relative mx-auto mt-6 max-w-6xl space-y-1 text-center text-[0.7rem] leading-relaxed text-white/35 md:text-left">
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
        </footer>
    );
}
