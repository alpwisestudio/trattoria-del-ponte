import Image, { type StaticImageData } from "next/image";

/**
 * Foto dentro un arco, ripreso dal ponte del logo, con il filo d'acciaio
 * che la incornicia. `ratio` è il rapporto della foto.
 */
export function ArchPhoto({
    src,
    alt,
    sizes,
    priority,
    className = "",
    ratio = "aspect-[4/5]",
}: {
    src: StaticImageData;
    alt: string;
    sizes: string;
    priority?: boolean;
    className?: string;
    ratio?: string;
}) {
    return (
        <div className={`relative px-3 pt-3 md:px-4 md:pt-4 ${className}`}>
            <div className={`relative overflow-hidden rounded-t-[999px] ${ratio}`}>
                <Image
                    src={src}
                    alt={alt}
                    fill
                    priority={priority}
                    sizes={sizes}
                    placeholder="blur"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
            </div>
            <div aria-hidden className="pointer-events-none absolute inset-0 rounded-t-[999px] border-2 border-b-0 border-steel" />
        </div>
    );
}

/** Piccolo arco d'acciaio usato come segno grafico. */
export function ArchMark({ className = "" }: { className?: string }) {
    return (
        <svg viewBox="0 0 40 22" fill="none" aria-hidden className={className}>
            <path d="M2 21C5 9 12 2 20 2s15 7 18 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
    );
}
