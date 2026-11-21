"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Arch } from "../decor";
import { INFO, NAV } from "../info";
import { Logo } from "./ui";

export function SiteHeader() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
        document.documentElement.style.overflow = "hidden";
        window.addEventListener("keydown", onKey);
        return () => {
            document.documentElement.style.overflow = "";
            window.removeEventListener("keydown", onKey);
        };
    }, [open]);

    const close = () => setOpen(false);

    return (
        <>
            {/* Sempre blu: il logo ha il fondo blu e deve fondersi con la barra */}
            <header
                className={`fixed inset-x-0 top-0 z-50 bg-navy transition-shadow duration-500 ${
                    scrolled && !open ? "shadow-[0_10px_30px_-12px_rgba(10,8,40,0.6)]" : ""
                }`}
            >
                <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6 md:h-20">
                    <Link href="/" aria-label="Trattoria del Ponte, home" onClick={close}>
                        <Logo className="h-11 w-auto md:h-14" />
                    </Link>
                    <nav aria-label="Menu principale" className="hidden gap-8 text-[0.7rem] font-bold uppercase tracking-[0.18em] lg:flex">
                        {NAV.map((n) => (
                            <Link
                                key={n.href}
                                href={n.href}
                                aria-current={pathname === n.href ? "page" : undefined}
                                className={`transition-colors hover:text-gold ${pathname === n.href ? "text-gold" : "text-white/75"}`}
                            >
                                {n.label}
                            </Link>
                        ))}
                    </nav>
                    <div className="flex items-center gap-3">
                        <Link href="/contatti#prenota" className="btn btn-compact btn-gold !px-5 !py-3 max-lg:hidden!">
                            Prenota
                        </Link>
                        <button
                            type="button"
                            onClick={() => setOpen((o) => !o)}
                            aria-expanded={open}
                            aria-controls="mobile-nav"
                            aria-label={open ? "Chiudi menu" : "Apri menu"}
                            className={`relative flex h-11 w-11 items-center justify-center border transition-colors lg:hidden ${
                                open ? "border-gold bg-gold text-navy-deep" : "border-white/25 text-white hover:border-white/60"
                            }`}
                        >
                            <span aria-hidden className="relative block h-3.5 w-5">
                                <span className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition-transform duration-300 ${open ? "translate-y-[6px] rotate-45" : ""}`} />
                                <span className={`absolute left-0 top-[6px] h-0.5 bg-current transition-all duration-300 ${open ? "w-0 opacity-0" : "w-3.5"}`} />
                                <span className={`absolute left-0 top-3 h-0.5 w-5 bg-current transition-transform duration-300 ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
                            </span>
                        </button>
                    </div>
                </div>
            </header>

            <div
                id="mobile-nav"
                aria-hidden={!open}
                inert={!open}
                className={`night fixed inset-0 z-40 flex flex-col overflow-y-auto px-6 pb-8 pt-24 text-white transition-[opacity,clip-path] duration-500 ease-[cubic-bezier(.7,0,.2,1)] lg:hidden ${
                    open
                        ? "opacity-100 [clip-path:circle(150%_at_calc(100%-2.75rem)_2rem)]"
                        : "pointer-events-none opacity-0 [clip-path:circle(0%_at_calc(100%-2.75rem)_2rem)]"
                }`}
            >
                <Arch className="pointer-events-none absolute -bottom-6 -right-16 w-96 text-white/[0.05]" />
                <nav aria-label="Menu principale mobile" className="relative flex-1">
                    <ul>
                        {NAV.map((n, i) => {
                            const active = pathname === n.href;
                            return (
                                <li
                                    key={n.href}
                                    style={{ transitionDelay: open ? `${150 + i * 60}ms` : "0ms" }}
                                    className={`border-b border-white/10 transition-all duration-500 ${open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
                                >
                                    <Link
                                        href={n.href}
                                        onClick={close}
                                        aria-current={active ? "page" : undefined}
                                        className="group flex items-center justify-between gap-4 py-4"
                                    >
                                        <span className={`font-serif text-4xl font-semibold transition-colors ${active ? "text-gold" : "group-hover:text-gold"}`}>
                                            {n.label}
                                        </span>
                                        <svg viewBox="0 0 16 16" className={`h-4 w-4 transition-transform group-hover:translate-x-1 ${active ? "text-gold" : "text-white/40"}`} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                                            <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
                <div
                    style={{ transitionDelay: open ? `${150 + NAV.length * 60}ms` : "0ms" }}
                    className={`relative mt-10 space-y-3 transition-all duration-500 ${open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
                >
                    <Link href="/contatti#prenota" onClick={close} className="btn btn-gold w-full">
                        Prenota un tavolo
                    </Link>
                    <a href={INFO.phoneHref} className="btn btn-line w-full">
                        Chiama {INFO.phone}
                    </a>
                    <p className="pt-3 text-center text-xs text-white/50">
                        {INFO.street}, {INFO.city} · aperti tutti i giorni
                    </p>
                </div>
            </div>
        </>
    );
}
