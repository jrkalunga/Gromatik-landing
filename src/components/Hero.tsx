"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import VerticalLines from "@/components/brand/VerticalLines";

const trustBullets = [
  "Mirada técnico-económica integrada",
  "Plan de mejoras de mediano y largo plazo",
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-verde-profundo pt-20">
      <div className="absolute inset-0 pointer-events-none">
        <VerticalLines
          className="absolute bottom-0 left-0 right-0 h-14 sm:h-20 text-verde-acento"
          opacity={0.22}
          count={60}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 sm:py-24">
        <motion.p
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-3 text-xs sm:text-sm tracking-[0.32em] font-semibold text-verde-acento uppercase mb-6 sm:mb-8"
        >
          <span className="inline-block w-8 h-px bg-verde-acento/60" />
          Medir el campo · Decidir el negocio
          <span className="inline-block w-8 h-px bg-verde-acento/60" />
        </motion.p>

        <motion.h1
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-[var(--font-sora)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-blanco leading-[1.05] tracking-tight"
        >
          Entendé cómo funciona tu sistema productivo.{" "}
          <span className="text-verde-acento">Mejorá donde realmente importa.</span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 sm:mt-10 text-lg sm:text-xl md:text-2xl text-crema/85 max-w-3xl mx-auto leading-relaxed"
        >
          Gromatik realiza diagnósticos técnico-económicos integrales que combinan
          producción, costos, márgenes y capital para detectar restricciones,
          oportunidades y caminos de mejora con impacto medible.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contacto"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-verde-oscuro bg-verde-acento rounded-full hover:bg-crema transition-all duration-200 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-verde-acento focus-visible:ring-offset-2 focus-visible:ring-offset-verde-profundo"
          >
            Conversar sobre el diagnóstico de mi campo
          </a>
          <a
            href="#que-entregamos"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blanco border-2 border-blanco/30 rounded-full hover:border-verde-acento hover:text-verde-acento transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-verde-acento focus-visible:ring-offset-2 focus-visible:ring-offset-verde-profundo"
          >
            Ver qué incluye
          </a>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8"
        >
          {trustBullets.map((bullet, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-crema/70"
            >
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-verde-acento/20">
                <Check className="w-3 h-3 text-verde-acento" />
              </span>
              <span className="text-sm sm:text-base">{bullet}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
