import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatIsGromatik from "@/components/WhatIsGromatik";
import Problems from "@/components/Problems";
import KPIs from "@/components/KPIs";
import Deliverables from "@/components/Deliverables";
import AISection from "@/components/AISection";
import QuienesSomos from "@/components/QuienesSomos";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { faqs } from "@/data/faqs";

const SITE_URL = "https://gromatik.ar";

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}#organization`,
  name: "Gromatik",
  alternateName: "Gromatik — Medir el campo, decidir el negocio",
  description:
    "Diagnóstico técnico-económico integral para establecimientos agropecuarios de escala comercial en Argentina. Combina análisis productivo, económico y de capital para detectar restricciones y caminos de mejora con impacto medible.",
  slogan: "Medir el campo, decidir el negocio",
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  image: `${SITE_URL}/og-image.png`,
  address: {
    "@type": "PostalAddress",
    addressCountry: "AR",
  },
  areaServed: {
    "@type": "Country",
    name: "Argentina",
  },
  serviceType: [
    "Diagnóstico técnico-económico agropecuario",
    "Consultoría ganadera",
    "Análisis de márgenes brutos por actividad",
    "Análisis de rentabilidad del capital",
    "Plan de mejoras priorizado",
  ],
  knowsAbout: [
    "Ganadería",
    "Agricultura",
    "Sistemas mixtos agrícola-ganaderos",
    "Eficiencia reproductiva",
    "Eficiencia productiva",
    "Margen bruto por actividad",
    "Rentabilidad del capital agropecuario",
    "Análisis económico agropecuario",
    "Producción animal",
    "Economía agraria",
  ],
  founder: [
    {
      "@type": "Person",
      name: "Juan Froment",
      jobTitle: "Cofundador · Dirección económica",
      description:
        "Ingeniero Agrónomo, Magíster en Economía Agraria por la Universidad de Buenos Aires. Trayectoria en INTA. Experiencia en márgenes brutos por actividad, sensibilidad económica, rentabilidad del capital y evaluación económica ex ante y ex post.",
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "Universidad de Buenos Aires",
        },
      ],
      sameAs: ["https://www.linkedin.com/in/jrfroment"],
      worksFor: { "@id": `${SITE_URL}#organization` },
    },
    {
      "@type": "Person",
      name: "Manuel Martínez",
      jobTitle: "Cofundador · Dirección técnica",
      description:
        "Ingeniero Agrónomo con sólida trayectoria en INTA, donde lideró el grupo de Producción Animal y coordinó el área de investigación de la EEA San Luis. Experiencia en diseño de ensayos a campo, asesoramiento técnico directo a productores y liderazgo de equipos multidisciplinarios.",
      sameAs: ["https://www.linkedin.com/in/manuel-martinez-9b079676/"],
      worksFor: { "@id": `${SITE_URL}#organization` },
    },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.answer,
    },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
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
        <FAQ />
        <ContactForm />
        <Footer />
      </main>
    </>
  );
}
