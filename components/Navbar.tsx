"use client";

import { FaWhatsapp } from "react-icons/fa";
import { type Business, MSG_PRESUPUESTO, waHref } from "@/data/business-helpers";

export default function Navbar({ biz }: { biz: Business }) {
  // primera palabra blanca, resto en gold (BLACK LINE)
  const [primera, ...resto] = (biz.nombreCorto ?? biz.nombre).toUpperCase().split(" ");
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm" style={{ background: "rgba(8,8,8,0.35)" }}>
      <div className="max-w-6xl mx-auto flex items-center justify-between px-5 sm:px-8 h-16">
        <a href="#hero" className="text-base font-bold tracking-widest text-white" style={{ fontFamily: "var(--font-soehne-breit)" }}>
          {resto.length > 0 ? (
            <>
              {`${primera} `}
              <span className="text-gold">{resto.join(" ")}</span>
            </>
          ) : (
            primera
          )}
        </a>
        <div className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest text-slate-400">
          <a href="#resultados" className="hover:text-white transition-colors">Resultados</a>
          <a href="#servicios" className="hover:text-white transition-colors">Servicios</a>
          <a href="#garantia" className="hover:text-white transition-colors">Por qué nosotros</a>
          <a href="#ubicacion" className="hover:text-white transition-colors">Ubicación</a>
        </div>
        <a
          href={waHref(biz, MSG_PRESUPUESTO)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white hover:opacity-70 transition-opacity"
        >
          <FaWhatsapp aria-hidden className="size-4" />
          Escribinos
        </a>
      </div>
    </header>
  );
}
