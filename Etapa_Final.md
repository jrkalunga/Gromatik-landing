# Etapa Final — Llevar gromatik.ar al siguiente nivel

> **Origen:** sesión de brainstorming en mesa de equipo (5 especialidades) + ronda de crítica adversarial. Esto vive aparte del `Plan_Mejoras_Web_Gromatik.md` (deudas técnicas, fuera del repo, en la carpeta padre) y del rebrand visual (rama `rebrand` ya mergeada a `main`).
>
> **Cuándo retomar:** cuando estén disponibles los materiales bloqueantes que se anotan abajo (sobre todo: número de WhatsApp Business y autorización de productor para caso real).
>
> **Para quien lo retome:** este documento es el resultado, no el proceso. Las críticas ya están aplicadas; lo descartado quedó descartado por una razón concreta.

---

## Estado actual (corte: 2026-05-26)

El rebrand cierra:

- Paleta oficial aplicada estrictamente (`#0B261D` · `#1A3A2A` · `#8CA72D` · `#DADDC4` · `#464941` · `#FFFFFF`).
- Tipografía **Sora** (sustituto web de Naste, geométrico-grotesque).
- Logo oficial en navbar (versión recortada sin slogan) y footer (versión completa con slogan).
- Slogan oficial *"Medir el campo · Decidir el negocio"* visible en Hero como eyebrow grande.
- Íconos custom para KPIs (hoja, gráfico con flecha, granero con techo a dos aguas) basados en el manual.
- Bullets `BulletGroma` (3 líneas verticales que ecoan el isotipo).
- Alternancia limpia de fondos oscuro/claro entre secciones.
- og-image, favicon y manifest con la identidad oficial.
- Eyebrows en cada sección (Concepto · El diagnóstico · Qué analizamos · Entregables · AgTech aplicado al campo · Equipo · Conversemos).

**Lo que la web NO tiene todavía** (foco de este documento): prueba social, fricción cero al contacto, descubribilidad orgánica, transparencia comercial.

---

## Tier 1 — Atacar primero (alto impacto, esfuerzo bajo-medio)

### 1. CTA WhatsApp Business en ContactForm
**Bloqueante:** número de WhatsApp Business confirmado por Juan/Manuel.

Botón secundario al lado del form actual, con ícono oficial de WhatsApp y mensaje pre-poblado (`?text=Hola%2C%20quiero%20conversar%20sobre%20un%20diagn%C3%B3stico%20para%20mi%20campo.`). El productor agropecuario de 50+ años prefiere chat por audio a un form web. Reduce la fricción de conversión sin sacar el form (que sirve para los más jóvenes y para CRM).

**Archivos a tocar:** `src/components/ContactForm.tsx` — agregar botón debajo o al lado del form principal.

### 2. Trust ladder en el Hero
**Bloqueante:** acordar internamente los 3 números a publicar (años INTA combinados, hectáreas analizadas a la fecha, provincias trabajadas).

Bloque de 3 stats con número grande (Sora bold 4xl) + label chico, en lima sobre fondo verde-profundo. Va arriba del fold, debajo de los bullets de confianza actuales del Hero. Refuerza credibilidad antes de que el productor decida si scrollear o irse.

Ejemplo de copy:
- **35+ años** de experiencia combinada (Juan + Manuel)
- **N° de provincias** trabajadas (Buenos Aires, San Luis, La Pampa…)
- **N° de hectáreas** diagnosticadas (cuando lo tengamos)

**Archivos a tocar:** `src/components/Hero.tsx`.

### 3. FAQ activado en la home con schema FAQPage
**Sin bloqueante.** El componente `src/components/FAQ.tsx` ya está escrito, con 5 preguntas, pero **no está incluido en la home** (`page.tsx` lo omite). Activarlo cierra dos cosas: usabilidad para visitantes que duden y SEO con rich snippet de Google.

**Archivos a tocar:**
- `src/app/page.tsx`: importar FAQ y agregar antes de ContactForm.
- `src/app/page.tsx`: extender el `jsonLd` actual con un objeto `@type: FAQPage` y `mainEntity` con las 5 Q&A.

### 4. Páginas legales mínimas
**Sin bloqueante crítico; requiere texto.**

- `/privacidad` — Política de privacidad acorde a la Ley 25.326 de Protección de Datos Personales (Argentina). Hoy el form recolecta nombre/whatsapp/provincia y no hay aviso.
- `/terminos` — Términos del servicio del sitio (no del producto).

Footer enlaza a ambas. Templates disponibles en el AAIP (Agencia de Acceso a Información Pública) ajustables al sitio.

**Archivos a crear:** `src/app/privacidad/page.tsx`, `src/app/terminos/page.tsx`. Footer actualizado.

---

## Tier 2 — Atacar pronto (alto impacto, requiere materiales)

### 5. Caso real antes/después
**Bloqueante:** autorización firmada de un productor para publicar datos anonimizados o nombrados.

Una sola card destacada, números concretos, dos líneas de contexto. Estructura sugerida:

```
[Tipo de campo · Provincia · Hectáreas]

Antes              →   Después (18 meses)
Margen $/ha: X         Margen $/ha: Y (+Z%)
Ef. reproductiva: A%   Ef. reproductiva: B% (+pp)
[Frase del productor en blockquote]
```

Vive arriba de Deliverables o como bloque dedicado entre Problems y KPIs. Es **la** prueba social que el segmento responde.

**Sin esto el sitio funciona; con esto convierte ~2× según benchmarks B2B servicios.**

### 6. Página `/como-trabajamos`
**Bloqueante:** definición interna del modelo de servicio (formatos, alcance, duración).

Tres formatos en cards comparativas (no precio, sí alcance):

- **Diagnóstico único** — relevamiento + diagnóstico integrado. ~4 semanas.
- **Diagnóstico + Plan** — lo anterior + plan de mejoras priorizado. ~6 semanas.
- **Acompañamiento anual** — diagnóstico + plan + revisiones trimestrales. 12 meses.

Lo que cambia es el alcance, no la calidad. El productor decide qué le sirve.

**Riesgo legal:** lo publicado tiene fuerza de oferta. Aclarar explícitamente *"alcance referencial; cada propuesta se ajusta tras relevamiento inicial"*.

### 7. Demo navegable real en `/demo`
**Sin bloqueante grande.** Recharts ya está instalado. El dashboard `El Piojillo` existe como demo estática.

Mejorar a interactiva: filtros por actividad (cría/recría/agricultura), drill-down a margen por actividad, slider de escenarios. Que el productor "pruebe" la herramienta antes de hablar.

Riesgo a evitar: que parezca un SaaS que se vende solo (Gromatik es servicio, no producto autoservicio). La demo debe abrir hacia el contacto, no cerrar la venta.

---

## Tier 3 — Pulir cuando lo anterior esté

### 8. Migración a Server Components + Speed Insights
Ya planificado en `../Plan_Mejoras_Web_Gromatik.md` Etapa 3 y 5.2 (archivo en la carpeta padre del repo). Después del rebrand y del Tier 2, retomar ese plan.

### 9. Un artículo ancla SEO por trimestre
**Empezar solo si hay compromiso multi-año.** Una vez por trimestre es sostenible, una vez por semana no. Si en 6 meses no se sostienen 2 artículos, mejor no haberlo empezado.

Primeros 4 títulos candidatos:
1. *Cómo se calcula el margen bruto por actividad ganadera*
2. *Eficiencia reproductiva real vs. eficiencia teórica: por qué importa la diferencia*
3. *Capital inmovilizado en ganadería: cuándo es estructura y cuándo es problema*
4. *Sistemas mixtos agrícola-ganaderos: cómo se diagnostica la complementariedad*

Cada uno con 1.500–2.000 palabras, Schema Article, ancla interna a `/como-trabajamos`. Long-tail SEO, captura productores en fase de investigación (no transaccional).

### 10. Revisión de copy con productor real
**Sin costo.** Sentar a Manuel (o un productor amigo via su red INTA) 30 minutos a leer la web con él, en voz alta, marcando dónde se traba. Vale más que cualquier consultoría externa.

Hipótesis a chequear: *"Diagnóstico técnico-económico integral"* es jerga consultora. Probar variantes como *"Te ayudamos a ver cómo le va a tu campo en plata, no solo en kilos"* o *"Cómo gestionar tu campo como una empresa, con datos"*.

---

## Descartado tras la mesa de trabajo

Por si en algún momento alguien vuelve a proponer estas ideas, queda registrado por qué se descartaron:

| Idea | Razón del descarte |
|---|---|
| **M intervenida del isotipo reemplazando letras en headlines** | Rompe lectura, rompe peso tipográfico, satura si se repite. El isotipo ya vive en el logo. |
| **Calculadora "estimá tu margen"** | Si el resultado es bajo, espanta. Si es alto, no contratan. Difícil de calibrar sin sesgo. |
| **Cursor custom con elementos de marca** | Gimmick visual sin correlación con conversión en segmento B2B. |
| **Blog semanal** | Insostenible. Abandonado vale menos que no empezado. La forma sostenible es 1 ancla/trimestre. |
| **Tipografía display custom (serif) para números de KPIs** | Bonito, marginal, costo de implementación alto. Sora va sobrada. |
| **Cursor / scroll animations elaboradas** | Comen performance en celulares con conexión rural. El segmento accede mayoritariamente mobile. |
| **Sección "fichas técnicas" individuales por KPI con gráfico embebido** | Costoso de mantener (los KPIs cambian de relevamiento en relevamiento). Mejor mantener listas + casos reales. |

---

## Inventario de materiales pendientes para arrancar

| Materia | Quién la consigue | Bloquea |
|---|---|---|
| Número de WhatsApp Business | Juan / Manuel | Tier 1 #1 |
| 3 números para Trust ladder (años, ha, provincias) | Juan + Manuel | Tier 1 #2 |
| Texto base para `/privacidad` y `/terminos` | Juan (con templates AAIP) | Tier 1 #4 |
| Autorización firmada de productor para caso real | Manuel (vía relación INTA) | Tier 2 #5 |
| Definición interna de formatos de servicio | Juan + Manuel | Tier 2 #6 |
| Compromiso multi-año para artículos SEO | Juan | Tier 3 #9 |
| Sentada de revisión de copy con productor | Manuel | Tier 3 #10 |

Apenas se complete cualquier fila de la columna *"Materia"*, se puede arrancar la tarea correspondiente sin esperar al resto.

---

## Cómo retomar este documento

1. Revisar la tabla de inventario de arriba.
2. Encontrar la primera fila completada.
3. Ir a la tarea correspondiente (Tier 1/2/3) y empezar.
4. Marcar la tarea como completada acá agregando una sección `## Hecho` al final con fecha + commit.

---

**Documento generado: 2026-05-26**
**Próxima revisión sugerida: cuando se confirme el número de WhatsApp Business (es el primer desbloqueo).**
