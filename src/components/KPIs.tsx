"use client";

import { motion } from "framer-motion";
import IconHoja from "@/components/brand/IconHoja";
import IconGrafico from "@/components/brand/IconGrafico";
import IconGranero from "@/components/brand/IconGranero";

const categories = [
  {
    icon: IconHoja,
    title: "Indicadores técnicos",
    items: [
      "eficiencia reproductiva y productiva,",
      "productividad por hectárea,",
      "carga animal y uso del recurso forrajero,",
      "pérdidas, mermas y manejo.",
    ],
  },
  {
    icon: IconGrafico,
    title: "Indicadores económicos",
    items: [
      "márgenes brutos por actividad,",
      "estructura de costos directos y totales,",
      "resultado global de la empresa,",
      "rentabilidad del capital invertido.",
    ],
  },
  {
    icon: IconGranero,
    title: "Sistema y contexto",
    items: [
      "coherencia técnica-económica del planteo productivo,",
      "restricciones estructurales del sistema,",
      "impacto del ambiente y del clima,",
      "escenarios de mejora posibles.",
    ],
  },
];

export default function KPIs() {
  return (
    <section className="py-20 sm:py-28 bg-crema relative overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 16 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-xs sm:text-sm tracking-[0.3em] font-bold text-verde-acento uppercase mb-3">
            Qué analizamos
          </p>
          <h2 className="font-[var(--font-sora)] text-3xl sm:text-4xl md:text-5xl font-bold text-verde-profundo">
            Datos que generan decisiones
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ y: 24 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative bg-blanco rounded-2xl p-6 sm:p-8 border border-verde-profundo/10 hover:shadow-xl hover:border-verde-acento/40 transition-all duration-300"
              >
                <div className="absolute top-0 left-8 right-8 h-1 bg-verde-acento rounded-b" />

                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-verde-profundo group-hover:bg-verde-oscuro transition-colors duration-300">
                    <Icon className="w-8 h-8 text-verde-acento" />
                  </div>
                  <h3 className="font-[var(--font-sora)] text-xl sm:text-2xl font-bold text-verde-profundo">
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-3 text-grafito"
                    >
                      <span className="text-verde-acento mt-1 font-bold">›</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
