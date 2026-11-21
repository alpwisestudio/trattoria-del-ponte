"use client";

import { useSearchParams } from "next/navigation";
import { useRef } from "react";
import { MenuGrid } from "../components/sections";
import { MENU } from "../info";

function Pill({ active, label, onClick }: { active: boolean; label: string; onClick?: (el: HTMLButtonElement) => void }) {
    return (
        <button
            type="button"
            aria-pressed={active}
            onClick={(e) => onClick?.(e.currentTarget)}
            className={`shrink-0 snap-center border px-4 pb-2 pt-2.5 font-display text-xs uppercase tracking-[0.16em] transition-colors ${
                active ? "border-ink bg-ink text-white" : "border-line bg-paper text-muted hover:border-ink hover:text-ink"
            }`}
        >
            {label}
        </button>
    );
}

function FilterBar({
    selected,
    onToggle,
    onClear,
}: {
    selected: string[];
    onToggle?: (id: string, el: HTMLButtonElement) => void;
    onClear?: () => void;
}) {
    return (
        <div className="sticky top-16 z-30 border-b border-line bg-stone/95 backdrop-blur-md md:top-20">
            <div
                role="group"
                aria-label="Filtra le categorie del menù"
                className="mx-auto flex max-w-6xl snap-x gap-2 overflow-x-auto px-6 py-4 [scrollbar-width:none] lg:flex-wrap lg:justify-center [&::-webkit-scrollbar]:hidden"
            >
                <Pill active={selected.length === 0} label="Tutto" onClick={onClear} />
                {MENU.map((c) => (
                    <Pill key={c.id} active={selected.includes(c.id)} label={c.short ?? c.title} onClick={(el) => onToggle?.(c.id, el)} />
                ))}
            </div>
        </div>
    );
}

function MenuPanel({ selected }: { selected: string[] }) {
    const categories = selected.length ? MENU.filter((c) => selected.includes(c.id)) : MENU;
    return (
        <div id="menu-panel" aria-live="polite" className="px-6 py-16 md:py-20">
            <div key={selected.join()} className="animate-menu-in">
                <MenuGrid categories={categories} single={categories.length === 1} />
            </div>
        </div>
    );
}

/** Filtro a selezione multipla (`?categoria=pizze,dolci`). Nessuna selezione = tutto il menù. */
export function MenuFilter() {
    const params = useSearchParams();
    const selected = (params.get("categoria") ?? "").split(",").filter((id) => MENU.some((c) => c.id === id));
    const rootRef = useRef<HTMLDivElement>(null);

    function apply(next: string[]) {
        window.history.replaceState(null, "", next.length ? `/menu?categoria=${next.join(",")}` : "/menu");
        const top = rootRef.current?.getBoundingClientRect().top ?? 0;
        if (top < 0) window.scrollBy({ top, behavior: "smooth" });
    }

    function toggle(id: string, el: HTMLButtonElement) {
        const next = selected.includes(id) ? selected.filter((s) => s !== id) : [...selected, id];
        apply(MENU.map((c) => c.id).filter((c) => next.includes(c)));
        el.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }

    return (
        <div ref={rootRef}>
            <FilterBar selected={selected} onToggle={toggle} onClear={() => apply([])} />
            <MenuPanel selected={selected} />
        </div>
    );
}

export function MenuFilterFallback() {
    return (
        <div>
            <FilterBar selected={[]} />
            <MenuPanel selected={[]} />
        </div>
    );
}
