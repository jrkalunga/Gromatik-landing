export type FAQ = {
  question: string;
  answer: string;
};

export const faqs: FAQ[] = [
  {
    question: "¿Qué información necesitan para el diagnóstico?",
    answer:
      "Trabajamos con la información que tengas disponible: registros de rodeo, datos de manejo, sanidad, alimentación y resultados productivos. Te guiamos en el proceso.",
  },
  {
    question: "¿La demo tiene costo?",
    answer:
      "No. La demo es una conversación inicial para entender tu situación y mostrarte cómo sería el diagnóstico para tu establecimiento.",
  },
  {
    question: "¿Cuánto tarda el diagnóstico completo?",
    answer:
      "Depende del alcance, pero típicamente entre 2 y 4 semanas desde el relevamiento inicial.",
  },
  {
    question: "¿La información es confidencial?",
    answer:
      "Absolutamente. Toda la información de tu establecimiento se trata con estricta confidencialidad.",
  },
  {
    question: "¿Trabajan con cría, invernada o feedlot?",
    answer:
      "Sí, adaptamos el diagnóstico al sistema productivo de cada establecimiento.",
  },
];
