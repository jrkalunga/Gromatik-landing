"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer className="bg-verde-profundo py-12 sm:py-16 relative overflow-hidden">
      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <a href="#" aria-label="Gromatik — ir al inicio" className="mb-4">
            <Image
              src="/brand/logo-negativo.png"
              alt="Gromatik — Medir el campo, decidir el negocio"
              width={520}
              height={180}
              className="h-16 sm:h-20 w-auto"
            />
          </a>
          <p className="text-blanco/70 text-base sm:text-lg mb-2">
            Acompañamiento técnico-económico integral
          </p>
          <p className="text-blanco/50 text-sm mb-6">Argentina</p>
          <div className="w-16 h-px bg-blanco/20 mb-6" />
          <p className="text-blanco/40 text-sm">
            © 2026 Gromatik. Todos los derechos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
