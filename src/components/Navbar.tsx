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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-blanco/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a
            href="#"
            aria-label="Gromatik — ir al inicio"
            className="flex items-center"
          >
            <Image
              src="/brand/logo-positivo.png"
              alt="Gromatik — Medir el campo, decidir el negocio"
              width={420}
              height={140}
              priority
              className="hidden sm:block h-10 lg:h-12 w-auto"
            />
            <Image
              src="/brand/icono-positivo.png"
              alt="Gromatik"
              width={120}
              height={120}
              priority
              className="sm:hidden h-10 w-10"
            />
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-blanco bg-verde-profundo rounded-full hover:bg-verde-oscuro transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-verde-acento focus-visible:ring-offset-2"
          >
            Solicitar demo
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
