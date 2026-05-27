import type { Metadata, Viewport } from "next";
import { Sora } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gromatik | Diagnóstico técnico-económico para campos en Argentina",
  description:
    "Consultoría técnico-económica para campos ganaderos, agrícolas y mixtos en Argentina. Analizamos margen bruto, eficiencia productiva y rentabilidad del capital para mejorar resultados con plan priorizado.",
  authors: [{ name: "Gromatik" }],
  creator: "Gromatik",
  metadataBase: new URL("https://gromatik.ar"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Gromatik",
    description: "Medir el campo, decidir el negocio.",
    url: "https://gromatik.ar",
    siteName: "Gromatik",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 1200,
        alt: "Gromatik — Medir el campo, decidir el negocio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gromatik",
    description: "Medir el campo, decidir el negocio.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "ByOrzIYwBPKQLm7O1zinADxBi_FojbqzFF94ySdojHY",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1A3A2A" },
    { media: "(prefers-color-scheme: dark)", color: "#1A3A2A" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${sora.variable} font-sans antialiased bg-blanco text-grafito`}
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
