import type { LucideIcon } from "lucide-react";
import { Stethoscope, Route, Activity, FlaskConical, Lightbulb } from "lucide-react";

export type Subgrupo = {
  label: string;
  items: string[];
};

export type Servicio = {
  numero: string;
  icon: LucideIcon;
  title: string;
  /** Frase corta visible con la tarjeta cerrada (invita a abrir). */
  hook: string;
  /** Cuerpo principal al expandir. */
  intro: string;
  /** Servicios 1-3: lista simple. */
  bullets?: string[];
  /** Servicios 4-5: sub-listas agrupadas. */
  subgrupos?: Subgrupo[];
};

export const servicios: Servicio[] = [
  {
    numero: "01",
    icon: Stethoscope,
    title: "Diagnóstico Integral",
    hook: "Conocé cómo funciona tu sistema",
    intro:
      "Relevamos los datos productivos y económicos de tu establecimiento para entender cómo funciona tu sistema. Cruzamos suelos, forrajes, dietas y márgenes, y detectamos oportunidades de mejora con impacto real en tu rentabilidad.",
    bullets: [
      "Análisis de suelos y forrajes",
      "Evaluación de dietas y alimentación",
      "Márgenes brutos por actividad",
      "Oportunidades de mejora priorizadas",
    ],
  },
  {
    numero: "02",
    icon: Route,
    title: "Plan de Mejora Estratégico",
    hook: "Una hoja de ruta a tu medida",
    intro:
      "Diseñamos un plan anual ajustado a tu campo, que prioriza actividades y objetivos según tu realidad productiva y económica. Cada propuesta se construye a medida, con escenarios que evalúan impacto, riesgos y retornos.",
    bullets: [
      "Priorización de actividades y objetivos",
      "Propuestas construidas a medida",
      "Escenarios con impacto y riesgos",
      "Retornos esperados antes de invertir",
    ],
  },
  {
    numero: "03",
    icon: Activity,
    title: "Seguimiento Continuo",
    hook: "Acompañamiento para sostener resultados",
    intro:
      "Te acompañamos en la implementación del plan con asesoría integral y mirada técnico-económica continua. Ajustamos las decisiones a medida que avanza la campaña, para que se traduzcan en resultados concretos y sostenibles.",
    bullets: [
      "Asesoría integral durante la campaña",
      "Ajustes según resultados reales",
      "Mirada técnico-económica permanente",
      "Resultados concretos y sostenibles",
    ],
  },
  {
    numero: "04",
    icon: FlaskConical,
    title: "Investigación y Desarrollo",
    hook: "Datos locales para decidir con seguridad",
    intro:
      "Realizamos ensayos en campos agrícolas y ganaderos para generar datos locales de calidad. Convertimos la experiencia práctica en conocimiento que podés aplicar.",
    subgrupos: [
      {
        label: "Agrícolas",
        items: ["Fertilización", "Densidad de siembra", "Manejo de variedades"],
      },
      {
        label: "Ganaderos",
        items: ["Suplementación estratégica", "Forrajeras", "Silajes"],
      },
    ],
  },
  {
    numero: "05",
    icon: Lightbulb,
    title: "Consultas Técnicas",
    hook: "Soluciones puntuales para tu sistema",
    intro:
      "Resolvemos problemas concretos que afectan la eficiencia de tu sistema, con datos técnicos y económicos que llevan a una solución práctica y rentable.",
    subgrupos: [
      {
        label: "Alimentación",
        items: ["Diagnóstico de dietas", "Balance nutricional", "Conversión alimenticia"],
      },
      {
        label: "Fertilización",
        items: ["Planes balanceados", "Recomendaciones según análisis", "Seguimiento en campo"],
      },
      {
        label: "Cultivos y forrajes",
        items: ["Malezas, plagas y enfermedades", "Rotaciones", "Planificación forrajera"],
      },
      {
        label: "Asesoría",
        items: ["Solución práctica y rentable", "Datos técnicos y económicos"],
      },
    ],
  },
];
