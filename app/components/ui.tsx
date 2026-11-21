import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { ArchPhoto } from "../decor";
import logoDark from "../../public/images/logo-dark.png";
import logoLight from "../../public/images/logo-light.png";
import { delay } from "./delay";

/** Logo del locale scontornato dal fondo blu: scuro sui fondi chiari, bianco sui fondi scuri. */
export function Logo({ light, className = "h-12 w-auto" }: { light?: boolean; className?: string }) {
    return (
        <Image src={light ? logoLight : logoDark} alt="Trattoria del Ponte" priority sizes="240px" className={className} />
    );
}

export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return <div className={`mx-auto w-full max-w-6xl px-6 ${className}`}>{children}</div>;
}

/** Intestazione di sezione: titolo a sinistra, testo a destra, filo sotto. */
export function Heading({
    kicker,
    title,
    text,
    light,
}: {
    kicker?: string;
    title: React.ReactNode;
    text?: string;
    light?: boolean;
}) {
    return (
        <div
            data-reveal
            className={`flex flex-col gap-5 border-b pb-7 md:flex-row md:items-end md:justify-between md:gap-12 ${
                light ? "border-white/40" : "border-ink"
            }`}
        >
            <div>
                {kicker && <p className={`kicker ${light ? "text-ice" : "text-blue"}`}>{kicker}</p>}
                <h2 className={`deco mt-4 text-4xl leading-[1.05] md:text-5xl ${light ? "text-white" : "text-ink"}`}>{title}</h2>
            </div>
            {text && (
                <p className={`max-w-sm text-[0.95rem] leading-relaxed md:pb-1 ${light ? "text-white/70" : "text-muted"}`}>{text}</p>
            )}
        </div>
    );
}

/** Testata delle pagine interne: testo a sinistra, foto nell'arco a destra. */
export function PageHero({
    kicker,
    title,
    text,
    image,
    alt = "",
    children,
}: {
    kicker: string;
    title: React.ReactNode;
    text?: string;
    image: StaticImageData;
    alt?: string;
    children?: React.ReactNode;
}) {
    return (
        <section className="border-b border-line bg-paper pt-16 md:pt-20">
            <Container className="grid items-end gap-10 pt-10 md:grid-cols-[1.25fr_1fr] md:gap-16 md:pt-16">
                <div className="md:pb-20">
                    <p className="hero-in kicker text-blue">{kicker}</p>
                    <h1 style={delay(1)} className="hero-in deco mt-5 text-5xl leading-[1.02] md:text-7xl">
                        {title}
                    </h1>
                    {text && (
                        <p style={delay(2)} className="hero-in mt-6 max-w-md text-[1.05rem] leading-relaxed text-muted">
                            {text}
                        </p>
                    )}
                    {children && (
                        <div style={delay(3)} className="hero-in mt-8 flex flex-wrap gap-3">
                            {children}
                        </div>
                    )}
                </div>
                <div style={delay(2)} className="hero-in mx-auto w-full max-w-sm md:max-w-none">
                    <ArchPhoto src={image} alt={alt} priority sizes="(max-width: 768px) 90vw, 440px" ratio="aspect-[5/4] md:aspect-[4/5]" />
                </div>
            </Container>
        </section>
    );
}

/** Foto nell'arco e testo affiancati. */
export function Feature({
    kicker,
    title,
    children,
    image,
    alt,
    reverse,
    cta,
}: {
    kicker: string;
    title: string;
    children: React.ReactNode;
    image: StaticImageData;
    alt: string;
    reverse?: boolean;
    cta?: { href: string; label: string };
}) {
    return (
        <Container className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
            <div data-reveal className={`group mx-auto w-full max-w-md ${reverse ? "md:order-2" : ""}`}>
                <ArchPhoto src={image} alt={alt} sizes="(max-width: 768px) 90vw, 460px" />
            </div>
            <div data-reveal style={delay(1)}>
                <p className="kicker text-blue">{kicker}</p>
                <h2 className="deco mt-4 text-4xl leading-[1.05] md:text-5xl">{title}</h2>
                <div className="mt-6 space-y-4 leading-relaxed text-muted">{children}</div>
                {cta && (
                    <Link href={cta.href} className="btn btn-ink mt-8">
                        {cta.label}
                    </Link>
                )}
            </div>
        </Container>
    );
}
