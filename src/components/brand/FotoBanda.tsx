import Image from "next/image";

/**
 * Banda de foto accesoria: contenida (no full-bleed), redondeada, lazy.
 * Las fotos vienen tratadas en duotono de marca para integrarse a la paleta.
 */
export default function FotoBanda({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl border border-verde-profundo/10 shadow-sm">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 768px"
        className="object-cover"
        quality={80}
      />
    </div>
  );
}
