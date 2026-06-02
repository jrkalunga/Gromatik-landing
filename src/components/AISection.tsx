"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import BulletGroma from "@/components/brand/BulletGroma";

const aiUseCases = [
  "Integrar y procesar grandes volúmenes de información productiva, económica y ambiental",
  "Incorporar variables climáticas, edáficas y agroecosistémicas relevantes para cada región",
  "Explorar escenarios futuros posibles y alternativas de mejora",
];

export default function AISection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 sm:py-28 bg-verde-oscuro relative overflow-hidden">

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <p className="text-xs sm:text-sm tracking-[0.3em] font-bold text-verde-acento uppercase mb-3">
            AgTech aplicado al campo
          </p>
          <h2 className="font-[var(--font-sora)] text-3xl sm:text-4xl md:text-5xl font-bold text-blanco">
            Nuestro enfoque
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          <p className="text-lg sm:text-xl text-blanco/80 leading-relaxed">
            La inteligencia artificial se utiliza como herramienta de apoyo
            para:
          </p>

          <ul className="space-y-4">
            {aiUseCases.map((useCase, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-4 text-lg sm:text-xl text-blanco/85"
              >
                <BulletGroma className="text-blanco" />
                <span>{useCase}</span>
              </motion.li>
            ))}
          </ul>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg sm:text-xl text-blanco leading-relaxed"
          >
            Las conclusiones, prioridades y recomendaciones surgen del criterio
            técnico-económico profesional, apoyado en la información disponible
            y en la interpretación integral del sistema productivo,{" "}
            <span className="text-verde-acento font-medium">
              no de decisiones automáticas.
            </span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
