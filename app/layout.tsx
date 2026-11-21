import type { Metadata } from "next";
import { Inter, Josefin_Sans } from "next/font/google";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import { RevealObserver } from "./components/motion";
import "./globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

// Geometrica e Art Deco, vicina al lettering del logo
const josefin = Josefin_Sans({
    variable: "--font-josefin",
    subsets: ["latin"],
    weight: ["300", "400", "600"],
});

export const metadata: Metadata = {
    title: {
        default: "Trattoria del Ponte Gallarate | Pesce, carne e pizza nel forno a legna",
        template: "%s | Trattoria del Ponte Gallarate",
    },
    description:
        "Trattoria del Ponte a Gallarate (VA), Corso Sempione 99: pesce fresco, crudité, giro pesce a volontà, carne e pizza nel forno a legna. Sala per cerimonie fino a 50 persone. Prenota online.",
    // Concept dimostrativo: non deve finire nei motori di ricerca.
    robots: { index: false, follow: false },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html lang="it" data-scroll-behavior="smooth" className={`${inter.variable} ${josefin.variable} h-full antialiased`}>
            <body className="flex min-h-full flex-col font-sans">
                <SiteHeader />
                <main className="flex-1 overflow-x-clip">{children}</main>
                <SiteFooter />
                <RevealObserver />
            </body>
        </html>
    );
}
