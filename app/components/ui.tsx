import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { Arch, Rule, Wave } from "../decor";
import logo from "../../public/images/logo-ponte.png";
import { delay } from "./delay";

/** Logo originale del locale (scritta bianca su blu): va sempre su fondo navy. */
export function Logo({ className = "h-12 w-auto" }: { className?: string }) {
    return <Image src={logo} alt="Trattoria del Ponte" priority sizes="200px" className={className} />;
}

export function Heading({
    kicker,
    title,
    text,
    light,
}: {
    kicker?: string;
    title: string;
    text?: string;
    light?: boolean;
}) {
    return (
        <div data-reveal className="mx-auto max-w-2xl text-center">
            {kicker && <p className={`kicker ${light ? "text-gold" : "text-gold-deep"}`}>{kicker}</p>}
            <h2
                className={`mt-3 font-serif text-4xl font-semibold leading-tight md:text-5xl ${light ? "text-white" : "text-navy"}`}
            >
                {title}
            </h2>
            <Rule className={`mt-5 ${light ? "text-gold" : "text-gold-deep"}`} />
            {text && (
                <p className={`mx-auto mt-5 max-w-lg leading-relaxed ${light ? "text-white/70" : "text-ink/65"}`}>{text}</p>
            )}
        </div>
    );
}

/** Testata delle pagine interne: foto scurita in blu, titolo e arco. */
export function PageHero({
    kicker,
    title,
    text,
    image,
}: {
    kicker: string;
    title: string;
    text?: string;
    image: StaticImageData;
}) {
    return (
        <section className="night relative px-6 pb-24 pt-36 text-center text-white md:pb-28 md:pt-44">
            <div className="absolute inset-0 overflow-hidden">
                <Image
                    src={image}
                    alt=""
                    fill
                    priority
                    placeholder="blur"
                    sizes="100vw"
                    className="animate-ken-burns object-cover opacity-35"
                />
            </div>
            <div className="absolute inset-0 bg-linear-to-b from-navy/60 via-navy/40 to-navy" />
            <div className="relative mx-auto max-w-3xl">
                <Arch animate className="mx-auto w-40 text-silver/70 md:w-52" />
                <p className="hero-in kicker -mt-2 text-gold">{kicker}</p>
                <h1 style={delay(1)} className="hero-in mt-4 font-serif text-5xl font-semibold leading-[1.05] md:text-7xl">
                    {title}
                </h1>
                {text && (
                    <p style={delay(2)} className="hero-in mx-auto mt-6 max-w-xl leading-relaxed text-white/75">
                        {text}
                    </p>
                )}
            </div>
            <Wave side="bottom" />
        </section>
    );
}

/** Foto e testo affiancati. */
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
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16">
            <div data-reveal={reverse ? "right" : "left"} className={`group relative ${reverse ? "md:order-2" : ""}`}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] shadow-2xl shadow-navy/20 md:aspect-[5/6]">
                    <Image
                        src={image}
                        alt={alt}
                        fill
                        sizes="(max-width: 768px) 90vw, 520px"
                        placeholder="blur"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                </div>
                <div
                    aria-hidden
                    className={`absolute -bottom-5 h-24 w-24 border-b-2 border-gold-deep/50 ${reverse ? "-left-5 border-l-2" : "-right-5 border-r-2"}`}
                />
            </div>
            <div data-reveal style={delay(1)} className="text-center md:text-left">
                <p className="kicker text-gold-deep">{kicker}</p>
                <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-navy md:text-5xl">{title}</h2>
                <div className="mt-6 space-y-4 leading-relaxed text-ink/70">{children}</div>
                {cta && (
                    <Link href={cta.href} className="btn btn-navy mt-8">
                        {cta.label}
                    </Link>
                )}
            </div>
        </div>
    );
}
