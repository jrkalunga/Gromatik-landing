import { User } from "lucide-react";
import FadeIn from "@/components/brand/FadeIn";

const team = [
  {
    name: "Juan",
    description:
      "Ingeniero Agrónomo, Magíster en Economía Agraria por la Universidad de Buenos Aires, con trayectoria en INTA. Experiencia en análisis de márgenes brutos por actividad, sensibilidad económica, rentabilidad del capital y evaluación económica ex ante y ex post. Integra la mirada económica, financiera y de gestión al diagnóstico integral del establecimiento.",
  },
  {
    name: "Manuel",
    description:
      "Ingeniero Agrónomo con sólida trayectoria en INTA, donde lideró el grupo de Producción Animal y coordinó el área de investigación de la EEA San Luis. Experiencia en diseño de ensayos a campo, asesoramiento técnico directo a productores y liderazgo de equipos multidisciplinarios. Integra investigación aplicada y gestión operativa con enfoque agroecosistémico.",
  },
];

export default function QuienesSomos() {
  return (
    <section className="py-20 sm:py-28 bg-blanco relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-verde-profundo/10 to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-10 sm:mb-12">
          <p className="text-xs sm:text-sm tracking-[0.3em] font-bold text-verde-acento uppercase mb-3">
            Equipo
          </p>
          <h2 className="font-[var(--font-sora)] text-3xl sm:text-4xl md:text-5xl font-bold text-verde-profundo">
            Quiénes somos
          </h2>
        </FadeIn>

        <FadeIn
          delay={0.1}
          className="space-y-6 text-lg sm:text-xl text-grafito/80 leading-relaxed mb-16"
        >
          <p>
            Gromatik está conformado por un equipo de profesionales con formación y
            experiencia en producción agropecuaria, economía agraria y gestión
            de empresas agropecuarias.
          </p>
          <p>
            El proyecto surge de la complementariedad entre el análisis
            técnico-productivo y la lectura económica del sistema, entendiendo
            que las decisiones que realmente mejoran resultados requieren
            integrar producción, costos, capital y contexto.
          </p>
          <p>
            Nuestro enfoque se apoya en experiencia desarrollada tanto en el
            ámbito productivo como institucional, particularmente en INTA, con
            una mirada integral y de largo plazo, orientada a productores que
            gestionan su establecimiento como una empresa.
          </p>
        </FadeIn>

        <FadeIn delay={0.2} className="mb-8">
          <h3 className="font-[var(--font-sora)] text-2xl sm:text-3xl font-bold text-verde-profundo text-center">
            Equipo
          </h3>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {team.map((member, index) => (
            <FadeIn
              key={index}
              delay={0.3 + index * 0.12}
              className="group bg-arena rounded-2xl p-6 sm:p-8 border border-verde-profundo/5 hover:shadow-lg hover:border-verde-acento/20 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-verde-acento/10 group-hover:bg-verde-acento/20 transition-colors duration-300">
                  <User className="w-7 h-7 text-verde-acento" />
                </div>
                <h4 className="font-[var(--font-sora)] text-xl sm:text-2xl font-semibold text-verde-profundo">
                  {member.name}
                </h4>
              </div>
              <p className="text-grafito/80 leading-relaxed">
                {member.description}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
