/** Arco del ponte, ripreso dal logo: una linea che si disegna all'ingresso. */
export function Arch({ className = "", animate = false }: { className?: string; animate?: boolean }) {
    return (
        <svg viewBox="0 0 400 140" fill="none" aria-hidden className={className}>
            <path
                d="M8 136C40 52 112 10 200 10s160 42 192 126"
                stroke="currentColor"
                strokeWidth="10"
                strokeLinecap="round"
                pathLength={1}
                strokeDasharray={1}
                className={animate ? "animate-draw" : undefined}
            />
        </svg>
    );
}

/** Onda di separazione tra due sezioni. `fill` è il colore della sezione che segue (o precede). */
export function Wave({
    side,
    className = "fill-cream",
}: {
    side: "top" | "bottom";
    className?: string;
}) {
    return (
        <svg
            viewBox="0 0 1440 48"
            preserveAspectRatio="none"
            aria-hidden
            className={`pointer-events-none absolute inset-x-0 h-6 w-full md:h-10 ${
                side === "bottom" ? "bottom-[-1px]" : "top-[-1px] rotate-180"
            } ${className}`}
        >
            <path d="M0 48V28c120-18 240-26 360-14s240 30 360 22 240-34 360-30 240 20 360 16v26z" />
        </svg>
    );
}

/** Piccolo ornamento: due linee e un punto, sotto i titoli. */
export function Rule({ className = "" }: { className?: string }) {
    return (
        <span aria-hidden className={`flex items-center justify-center gap-3 ${className}`}>
            <span className="h-px w-10 bg-current opacity-50" />
            <span className="h-1.5 w-1.5 rotate-45 bg-current" />
            <span className="h-px w-10 bg-current opacity-50" />
        </span>
    );
}
