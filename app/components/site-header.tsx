"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
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
            <header
                className={`fixed inset-x-0 top-0 z-50 border-b bg-paper/95 backdrop-blur-md transition-[border-color,box-shadow] duration-300 ${
                    scrolled && !open ? "border-line shadow-[0_8px_24px_-16px_rgba(24,28,40,0.35)]" : "border-line/70"
                }`}
            >
                <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6 md:h-20">
                    <Link href="/" aria-label="Trattoria del Ponte, home" onClick={close} className="shrink-0">
                        <Logo className="h-10 w-auto md:h-13" />
                    </Link>
                    <nav aria-label="Menu principale" className="hidden items-center gap-9 lg:flex">
                        {NAV.map((n) => {
                            const active = pathname === n.href;
                            return (
                                <Link
                                    key={n.href}
                                    href={n.href}
                                    aria-current={active ? "page" : undefined}
                                    className={`font-display text-[0.8rem] uppercase tracking-[0.2em] transition-colors hover:text-blue ${
                                        active ? "border-b border-blue pb-1 pt-[5px] text-blue" : "py-1 text-ink"
                                    }`}
                                >
                                    {n.label}
                                </Link>
                            );
                        })}
                    </nav>
                    <div className="flex items-center gap-3">
                        <Link href="/contatti#prenota" className="btn btn-compact btn-ink max-lg:hidden!">
                            Prenota
                        </Link>
                        <button
                            type="button"
                            onClick={() => setOpen((o) => !o)}
                            aria-expanded={open}
                            aria-controls="mobile-nav"
                            aria-label={open ? "Chiudi menu" : "Apri menu"}
                            className={`relative flex h-11 w-11 items-center justify-center border transition-colors lg:hidden ${
                                open ? "border-ink bg-ink text-white" : "border-ink text-ink"
                            }`}
                        >
                            <span aria-hidden className="relative block h-3 w-5">
                                <span className={`absolute left-0 top-0 h-px w-5 bg-current transition-transform duration-300 ${open ? "translate-y-[6px] rotate-45" : ""}`} />
                                <span className={`absolute left-0 top-[6px] h-px w-5 bg-current transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
                                <span className={`absolute left-0 top-3 h-px w-5 bg-current transition-transform duration-300 ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
                            </span>
                        </button>
                    </div>
                </div>
            </header>

            <div
                id="mobile-nav"
                aria-hidden={!open}
                inert={!open}
                className={`fixed inset-0 z-40 flex flex-col overflow-y-auto bg-paper px-6 pb-8 pt-24 transition-[opacity,transform] duration-400 lg:hidden ${
                    open ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-3 opacity-0"
                }`}
            >
                <nav aria-label="Menu principale mobile" className="flex-1">
                    <ul className="border-t border-ink">
                        {NAV.map((n, i) => {
                            const active = pathname === n.href;
                            return (
                                <li key={n.href} className="border-b border-line">
                                    <Link
                                        href={n.href}
                                        onClick={close}
                                        aria-current={active ? "page" : undefined}
                                        className="flex items-baseline gap-5 py-5"
                                    >
                                        <span className="font-display text-sm font-light text-steel">0{i + 1}</span>
                                        <span className={`deco text-3xl ${active ? "text-blue" : "text-ink"}`}>{n.label}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
                <div className="mt-10 space-y-3">
                    <Link href="/contatti#prenota" onClick={close} className="btn btn-blue w-full">
                        Prenota un tavolo
                    </Link>
                    <a href={INFO.phoneHref} className="btn btn-line w-full">
                        Chiama {INFO.phone}
                    </a>
                    <p className="pt-3 text-center text-xs text-muted">
                        {INFO.street}, {INFO.city} · aperti tutti i giorni
                    </p>
                </div>
            </div>
        </>
    );
}
