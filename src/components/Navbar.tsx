"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      aria-label="Navegación principal"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-verde-oscuro/95 backdrop-blur-md shadow-lg shadow-verde-oscuro/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          <a
            href="#"
            aria-label="Gromatik — ir al inicio"
            className="flex items-center"
          >
            <Image
              src="/brand/logo-negativo.png"
              alt="Gromatik — Medir el campo, decidir el negocio"
              width={520}
              height={180}
              priority
              className="hidden sm:block h-14 lg:h-16 w-auto"
            />
            <Image
              src="/brand/icono-negativo.png"
              alt="Gromatik"
              width={120}
              height={120}
              priority
              className="sm:hidden h-12 w-12 rounded-lg"
            />
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-verde-oscuro bg-verde-acento rounded-full hover:bg-crema transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-verde-acento focus-visible:ring-offset-2 focus-visible:ring-offset-verde-oscuro"
          >
            Solicitar demo
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
