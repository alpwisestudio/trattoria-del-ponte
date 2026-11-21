"use client";

import { useState } from "react";
import { INFO } from "./info";

const LUNCH = ["12:00", "12:30", "13:00", "13:30", "14:00"];
const DINNER = ["19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30"];

const field =
    "mt-1.5 w-full rounded-[2px] border border-ink/20 bg-white px-3.5 py-3 text-sm outline-none transition placeholder:text-ink/40 focus:border-navy focus:ring-2 focus:ring-navy/15";

function Label({ children, required }: { children: React.ReactNode; required?: boolean }) {
    return (
        <span className="text-xs font-bold text-ink/75">
            {children}
            {required && <span className="text-gold-deep"> *</span>}
        </span>
    );
}

function openWhatsApp(lines: (string | false)[]) {
    const text = lines.filter(Boolean).join("\n");
    window.open(`https://wa.me/${INFO.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
}

function formatDate(iso: FormDataEntryValue | null) {
    const [y, m, d] = String(iso).split("-");
    return `${d}/${m}/${y}`;
}

const SubmitNote = () => (
    <p className="text-xs text-ink/55">
        La richiesta arriva su WhatsApp. Oppure chiama il{" "}
        <a href={INFO.phoneHref} className="font-bold text-navy underline underline-offset-2">
            {INFO.phone}
        </a>
    </p>
);

const WaIcon = () => (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.5-3.9-4.7-4.1-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.3 0 .5l-.4.6-.3.4c-.1.1-.3.3-.1.6.1.3.7 1.1 1.4 1.8 1 .9 1.8 1.1 2.1 1.3.3.1.4.1.6-.1l.8-1c.2-.3.4-.2.6-.1l1.9.9c.3.1.5.2.5.3.1.1.1.7-.2 1.3z" />
    </svg>
);

export function BookingForm() {
    const [service, setService] = useState<"pranzo" | "cena">("cena");
    const slots = service === "pranzo" ? LUNCH : DINNER;

    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        openWhatsApp([
            "Ciao, vorrei prenotare un tavolo alla Trattoria del Ponte.",
            `Nome: ${data.get("name")}`,
            `Data: ${formatDate(data.get("date"))}, ${service} alle ${data.get("time")}`,
            `Persone: ${data.get("guests")}`,
            data.get("giro") === "on" && "Siamo interessati al giro pesce.",
            data.get("notes") ? `Note: ${data.get("notes")}` : false,
        ]);
    }

    return (
        <form onSubmit={onSubmit} className="grid gap-5 text-left sm:grid-cols-2">
            <label className="sm:col-span-2">
                <Label required>Nome e cognome</Label>
                <input name="name" required autoComplete="name" className={field} />
            </label>
            <label>
                <Label required>Data</Label>
                <input name="date" type="date" required className={field} />
            </label>
            <fieldset>
                <legend className="text-xs font-bold text-ink/75">
                    Servizio<span className="text-gold-deep"> *</span>
                </legend>
                <div className="mt-1.5 grid grid-cols-2 border border-ink/20">
                    {(["pranzo", "cena"] as const).map((s) => (
                        <label
                            key={s}
                            className={`cursor-pointer py-3 text-center text-sm font-bold capitalize transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-navy/30 ${
                                service === s ? "bg-navy text-white" : "bg-white text-ink/70 hover:bg-sand/50"
                            }`}
                        >
                            <input
                                type="radio"
                                name="service"
                                value={s}
                                checked={service === s}
                                onChange={() => setService(s)}
                                className="sr-only"
                            />
                            {s}
                        </label>
                    ))}
                </div>
            </fieldset>
            <label>
                <Label required>Orario</Label>
                <select key={service} name="time" required className={field} defaultValue="">
                    <option value="" disabled>
                        Scegli l&apos;orario
                    </option>
                    {slots.map((s) => (
                        <option key={s}>{s}</option>
                    ))}
                </select>
            </label>
            <label>
                <Label required>Persone</Label>
                <select name="guests" required className={field} defaultValue="2">
                    {Array.from({ length: 14 }, (_, i) => i + 1).map((n) => (
                        <option key={n}>{n}</option>
                    ))}
                    <option>Più di 14</option>
                </select>
            </label>
            <label className="flex items-start gap-3 rounded-[2px] border border-gold/60 bg-gold/10 p-3.5 sm:col-span-2">
                <input name="giro" type="checkbox" className="mt-0.5 h-4 w-4 accent-navy" />
                <span className="text-sm text-ink/80">
                    <strong className="text-navy">Vogliamo il giro pesce</strong>, portate a volontà da € 40 a persona (minimo
                    4 persone)
                </span>
            </label>
            <label className="sm:col-span-2">
                <Label>Note</Label>
                <textarea
                    name="notes"
                    rows={3}
                    placeholder="Allergie, seggiolone, tavolo nel dehor…"
                    className={`${field} resize-none`}
                />
            </label>
            <div className="flex flex-col items-start gap-3 pt-1 sm:col-span-2">
                <button type="submit" className="btn btn-wa">
                    <WaIcon />
                    Invia su WhatsApp
                </button>
                <SubmitNote />
            </div>
        </form>
    );
}

const EVENTS = ["Battesimo", "Comunione", "Cresima", "Compleanno", "Cena aziendale", "Matrimonio", "Altro"];

export function EventForm() {
    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        openWhatsApp([
            "Ciao, vorrei informazioni per un evento alla Trattoria del Ponte.",
            `Nome: ${data.get("name")}`,
            `Occasione: ${data.get("type")}`,
            `Data: ${formatDate(data.get("date"))}`,
            `Ospiti: circa ${data.get("guests")}`,
            data.get("notes") ? `Note: ${data.get("notes")}` : false,
        ]);
    }

    return (
        <form onSubmit={onSubmit} className="grid gap-5 text-left sm:grid-cols-2">
            <label className="sm:col-span-2">
                <Label required>Nome e cognome</Label>
                <input name="name" required autoComplete="name" className={field} />
            </label>
            <label>
                <Label required>Occasione</Label>
                <select name="type" required className={field} defaultValue="">
                    <option value="" disabled>
                        Scegli l&apos;occasione
                    </option>
                    {EVENTS.map((t) => (
                        <option key={t}>{t}</option>
                    ))}
                </select>
            </label>
            <label>
                <Label required>Data</Label>
                <input name="date" type="date" required className={field} />
            </label>
            <label className="sm:col-span-2">
                <Label required>Numero di ospiti</Label>
                <input name="guests" type="number" min={10} max={50} required placeholder="Fino a 50" className={field} />
            </label>
            <label className="sm:col-span-2">
                <Label>Note</Label>
                <textarea
                    name="notes"
                    rows={3}
                    placeholder="Menù di pesce o di carne, torta, allestimento…"
                    className={`${field} resize-none`}
                />
            </label>
            <div className="flex flex-col items-start gap-3 pt-1 sm:col-span-2">
                <button type="submit" className="btn btn-wa">
                    <WaIcon />
                    Chiedi un preventivo
                </button>
                <SubmitNote />
            </div>
        </form>
    );
}
