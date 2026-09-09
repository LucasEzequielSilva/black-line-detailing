import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const soehne = localFont({
  src: [
    { path: "./fonts/soehne_buch-s.p.2faoiug7xav04.woff2", weight: "400", style: "normal" },
    { path: "./fonts/soehne_buch_kursiv-s.p.2olvm13bchd_3.woff2", weight: "400", style: "italic" },
    { path: "./fonts/soehne_halbfett-s.p.0cjwyfhpx35x7.woff2", weight: "600", style: "normal" },
    { path: "./fonts/soehne_dreiviertelfett-s.p.3afamixnanxop.woff2", weight: "700", style: "normal" },
    { path: "./fonts/soehne_extrafett-s.p.237as54tdb2in.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-soehne",
});

const soehneBreit = localFont({
  src: "./fonts/soehne_breit_extrafett-s.p.3us7o9sn4w6yj.woff2",
  weight: "800",
  variable: "--font-soehne-breit",
});

const TITULO = "Black Line Detailing — Car Detailing en Vicente López";
const DESCRIPCION = "Detailing profesional a mano en Vicente López: lavado sin remolinos, corrección de pintura y recubrimiento cerámico con garantía por escrito.";

export const metadata: Metadata = {
  title: TITULO,
  description: DESCRIPCION,
  applicationName: "Black Line Detailing",
  openGraph: {
    title: TITULO,
    description: DESCRIPCION,
    locale: "es_AR",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#0b0b0b",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-AR" className="scroll-smooth">
      <body className={`${soehne.className} ${soehneBreit.variable} bg-black text-slate-300 antialiased`}>
        {children}
      </body>
    </html>
  );
}
