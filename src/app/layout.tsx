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
  title: "Gromatik | Diagnóstico técnico-económico para campos en Argentina",
  description:
    "Diagnóstico técnico-económico integral para establecimientos agropecuarios en Argentina. Analizamos producción, costos, márgenes y capital para decidir con datos.",
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
