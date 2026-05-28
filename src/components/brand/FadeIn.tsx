"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
  id?: string;
};

/**
 * Fade-in en scroll usando CSS transitions + IntersectionObserver.
 *
 * Por qué no framer-motion: framer-motion aplica el estilo `initial` como
 * `style` inline en SSR. En Firefox, hay un microparpadeo entre la
 * hidratación de React y el momento en que framer-motion toma control de
 * la animación. CSS + IntersectionObserver evita ese gap porque el navegador
 * aplica el estilo desde el CSS bundle (no inline) y la transición es nativa.
 */
export default function FadeIn({
  children,
  delay = 0,
  className = "",
  id,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      id={id}
      className={`gromatik-fade ${visible ? "gromatik-fade-in" : ""} ${className}`}
      style={delay > 0 ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}
