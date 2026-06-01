"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import FadeIn from "@/components/brand/FadeIn";
import { servicios, type Servicio } from "@/data/servicios";

function ServicioItem({
  servicio,
  isOpen,
  onToggle,
}: {
  servicio: Servicio;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const Icon = servicio.icon;
  const buttonId = `servicio-${servicio.numero}`;
  const panelId = `servicio-panel-${servicio.numero}`;

  return (
    <div className="relative bg-crema rounded-2xl border border-verde-profundo/10 hover:shadow-xl hover:border-verde-acento/40 transition-all duration-300">
      {/* Franja superior de acento (se engrosa al abrir) */}
      <span
        aria-hidden="true"
        className={`absolute top-0 left-8 right-8 ${
          isOpen ? "h-1.5" : "h-1"
        } bg-verde-acento rounded-b transition-all duration-300`}
      />

      {/* Cabecera: heading + button (patrón disclosure WAI-ARIA) */}
      <h3 className="m-0">
        <button
          id={buttonId}
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="cursor-pointer w-full flex items-center gap-4 sm:gap-5 p-6 sm:p-8 text-left rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-verde-acento focus-visible:ring-offset-2"
        >
          <span
            aria-hidden="true"
            className="hidden sm:block font-[var(--font-sora)] text-sm font-bold tabular-nums text-verde-acento/50"
          >
            {servicio.numero}
          </span>

          <span
            aria-hidden="true"
            className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-xl ${
              isOpen ? "bg-verde-oscuro" : "bg-verde-profundo"
            } transition-colors duration-300`}
          >
            <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-verde-acento" />
          </span>

          <span className="flex-1 min-w-0">
            <span className="block font-[var(--font-sora)] text-lg sm:text-2xl font-bold text-verde-profundo leading-tight">
              {servicio.title}
            </span>
            <span className="block text-sm sm:text-base text-grafito/70 mt-1">
              {servicio.hook}
            </span>
          </span>

          <ChevronDown
            aria-hidden="true"
            className={`flex-shrink-0 w-6 h-6 text-verde-acento transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </h3>

      {/*
        Panel SIEMPRE montado (clave para SEO: el texto vive en el HTML aunque
        esté cerrado). El alto se anima con el truco de CSS grid 0fr -> 1fr,
        que no requiere medir alturas y no produce CLS en la carga.
      */}
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden min-h-0">
          <div className="px-6 sm:px-8 pb-6 sm:pb-8" inert={!isOpen}>
            <p className="text-grafito leading-relaxed">{servicio.intro}</p>

            {servicio.bullets && (
              <ul className="mt-4 space-y-2.5">
                {servicio.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-grafito">
                    <span aria-hidden="true" className="mt-1 font-bold text-verde-acento">
                      ›
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {servicio.subgrupos && (
              <div className="mt-4 grid gap-x-8 gap-y-5 sm:grid-cols-2">
                {servicio.subgrupos.map((sg) => (
                  <div key={sg.label}>
                    <p className="mb-2 font-semibold text-verde-profundo">{sg.label}</p>
                    <ul className="space-y-2">
                      {sg.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-grafito">
                          <span aria-hidden="true" className="mt-1 font-bold text-verde-acento">
                            ›
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Servicios() {
  // Un solo servicio abierto a la vez; arrancan todas cerradas.
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="servicios" className="py-20 sm:py-28 bg-verde-profundo relative overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm tracking-[0.3em] font-bold text-verde-acento uppercase mb-3">
            Qué ofrecemos
          </p>
          <h2 className="font-[var(--font-sora)] text-3xl sm:text-4xl md:text-5xl font-bold text-blanco">
            Qué servicios ofrecemos
          </h2>
          <p className="mt-5 text-base sm:text-lg text-crema/80 max-w-2xl mx-auto leading-relaxed">
            No son servicios sueltos, sino un mismo proceso de acompañamiento:
            medimos tu sistema, planificamos las mejoras, seguimos la
            implementación, investigamos a campo y resolvemos las consultas que
            aparecen. Entrás por donde lo necesites.
          </p>
        </FadeIn>

        <div className="space-y-4 sm:space-y-5">
          {servicios.map((servicio, index) => (
            <FadeIn key={servicio.numero} delay={index * 0.06}>
              <ServicioItem
                servicio={servicio}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
