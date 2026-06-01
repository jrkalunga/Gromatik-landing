"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/faqs";

function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
  index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}) {
  const buttonId = `faq-question-${index}`;
  const panelId = `faq-answer-${index}`;
  const action = isOpen ? "Ocultar respuesta" : "Mostrar respuesta";

  return (
    <div className="border-b border-verde-profundo/10 last:border-b-0">
      <button
        id={buttonId}
        type="button"
        onClick={onClick}
        aria-expanded={isOpen}
        aria-controls={panelId}
        aria-label={`${action} a: ${question}`}
        title={action}
        className="cursor-pointer w-full flex items-center justify-between py-5 sm:py-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-verde-acento focus-visible:ring-offset-2 rounded-lg"
      >
        <span className="font-[var(--font-sora)] text-lg sm:text-xl font-semibold text-verde-profundo pr-4">
          {question}
        </span>
        <span
          aria-hidden="true"
          className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-verde-acento/10 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <ChevronDown className="w-5 h-5 text-verde-acento" />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 sm:pb-6 text-grafito leading-relaxed pr-12">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 sm:py-28 bg-blanco relative overflow-hidden">
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 16 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-xs sm:text-sm tracking-[0.3em] font-bold text-verde-acento uppercase mb-3">
            Dudas frecuentes
          </p>
          <h2 className="font-[var(--font-sora)] text-3xl sm:text-4xl md:text-5xl font-bold text-verde-profundo">
            Preguntas frecuentes
          </h2>
        </motion.div>

        <motion.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-crema rounded-2xl p-6 sm:p-8 border border-verde-profundo/10"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              index={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
