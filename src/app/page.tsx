import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatIsGromatik from "@/components/WhatIsGromatik";
import Problems from "@/components/Problems";
import KPIs from "@/components/KPIs";
import Deliverables from "@/components/Deliverables";
import AISection from "@/components/AISection";
import QuienesSomos from "@/components/QuienesSomos";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Gromatik",
  description:
    "Diagnóstico técnico-económico integral para establecimientos agropecuarios de escala comercial en Argentina.",
  url: "https://gromatik.ar",
  areaServed: {
    "@type": "Country",
    name: "Argentina",
  },
  serviceType: [
    "Diagnóstico técnico-económico",
    "Consultoría agropecuaria",
    "Análisis productivo y económico",
    "Plan de mejoras",
  ],
  knowsAbout: [
    "Ganadería",
    "Agricultura",
    "Eficiencia productiva",
    "Análisis económico agropecuario",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <WhatIsGromatik />
        <Problems />
        <KPIs />
        <Deliverables />
        <AISection />
        <QuienesSomos />
        <ContactForm />
        <Footer />
      </main>
    </>
  );
}
