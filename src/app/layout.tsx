import type { Metadata, Viewport } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gromatik | Diagnóstico técnico-económico integral",
  description:
    "Gromatik evalúa el desempeño productivo y de manejo de tu establecimiento ganadero, detecta oportunidades y entrega un plan priorizado para mejorar resultados.",
  keywords: [
    "diagnóstico ganadero",
    "mejora productiva",
    "ganadería Argentina",
    "inteligencia artificial",
    "establecimientos ganaderos",
    "cría",
    "invernada",
    "feedlot",
    "eficiencia reproductiva",
    "plan de mejoras",
  ],
  authors: [{ name: "Gromatik" }],
  creator: "Gromatik",
  metadataBase: new URL("https://gromatik.ar"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Gromatik | Medir el campo, decidir el negocio",
    description:
      "Evaluamos tu establecimiento ganadero y entregamos un plan de mejoras priorizado para aumentar rentabilidad.",
    url: "https://gromatik.ar",
    siteName: "Gromatik",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gromatik — Medir el campo, decidir el negocio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gromatik | Medir el campo, decidir el negocio",
    description:
      "Evaluamos tu establecimiento ganadero y entregamos un plan de mejoras priorizado.",
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
      </body>
    </html>
  );
}
