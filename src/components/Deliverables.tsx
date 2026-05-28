"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const deliverables = [
  "Dashboard de KPIs técnicos y económicos del establecimiento.",
  "Márgenes por actividad (cría, recría, engorde, agricultura).",
  "Resultado global de la empresa y análisis de rentabilidad del capital.",
  "Diagnóstico integrado del funcionamiento del sistema.",
  "Plan de mejoras personalizado, diseñado en función de los objetivos, prioridades y ambiciones del productor, reconociendo que cada establecimiento es un sistema único.",
  "Escenarios de mejora productiva y económica, con evaluación de impacto, riesgos y retornos esperados.",
];

export default function Deliverables() {
  return (
    <section id="que-entregamos" className="py-20 sm:py-28 bg-blanco relative overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 16 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-xs sm:text-sm tracking-[0.3em] font-bold text-verde-acento uppercase mb-3">
            Entregables
          </p>
          <h2 className="font-[var(--font-sora)] text-3xl sm:text-4xl md:text-5xl font-bold text-verde-profundo">
            Qué entregamos
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-10">
          {deliverables.map((item, index) => (
            <motion.div
              key={index}
              initial={{ x: -16 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="group flex items-start gap-4 p-5 sm:p-6 bg-crema/50 rounded-xl border border-verde-profundo/10 hover:shadow-md hover:border-verde-acento/40 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-6 h-6 mt-0.5">
                <CheckCircle2 className="w-6 h-6 text-verde-acento" />
              </div>
              <p className="text-grafito leading-relaxed">{item}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ y: 16 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-lg sm:text-xl text-verde-profundo font-medium"
        >
          No trabajamos con recomendaciones genéricas: las propuestas se
          construyen a medida de cada campo y de cada proyecto productivo.
        </motion.p>
      </div>
    </section>
  );
}
