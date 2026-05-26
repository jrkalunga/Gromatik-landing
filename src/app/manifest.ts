import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Gromatik — Diagnóstico técnico-económico integral",
    short_name: "Gromatik",
    description:
      "Medir el campo, decidir el negocio. Diagnóstico técnico-económico integral para establecimientos agropecuarios.",
    start_url: "/",
    display: "standalone",
    background_color: "#F4F1EA",
    theme_color: "#1A3A2A",
    icons: [
      {
        src: "/icon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
