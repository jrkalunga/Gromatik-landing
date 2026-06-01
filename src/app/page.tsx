import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatIsGromatik from "@/components/WhatIsGromatik";
import Servicios from "@/components/Servicios";
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
    "Consultora agropecuaria técnico-económica en Argentina. Acompaña a establecimientos ganaderos, agrícolas y mixtos en todo el ciclo —diagnóstico, plan de mejora, seguimiento, I+D y consultas— integrando producción, costos, márgenes y capital para decidir mejor.",
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
    "Plan de mejora estratégico",
    "Seguimiento de sistemas agropecuarios",
    "Investigación y desarrollo a campo",
    "Consultas técnicas agropecuarias",
    "Análisis de márgenes brutos por actividad",
    "Análisis de rentabilidad del capital",
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
        <Servicios />
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
