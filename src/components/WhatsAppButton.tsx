"use client";

import { motion } from "framer-motion";

/** Canal de atención por WhatsApp de Gromatik. */
const WHATSAPP_NUMBER = "5491134602116";
const DEFAULT_MESSAGE = "Hola Gromatik, me gustaría hacer una consulta.";

const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  DEFAULT_MESSAGE
)}`;

export default function WhatsAppButton() {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 1, ease: "easeOut" }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="group fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-verde-acento focus-visible:ring-offset-2 rounded-full"
    >
      {/* Etiqueta en hover (solo desktop, decorativa) */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-verde-profundo px-3 py-1.5 text-sm font-medium text-blanco opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 sm:block"
      >
        ¿Hablamos?
      </span>

      {/* Botón circular */}
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-blanco shadow-lg shadow-verde-oscuro/30 transition-colors duration-200 group-hover:bg-[#1ebe57]">
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-7 w-7"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.359.101 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.582 0 11.94-5.359 11.944-11.893a11.821 11.821 0 00-3.487-8.471z" />
        </svg>
      </span>
    </motion.a>
  );
}
