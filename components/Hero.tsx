"use client";

import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineCheckCircle, HiOutlineSparkles, HiOutlineStar, HiOutlineClock } from "react-icons/hi2";
import { type Business, MSG_PRESUPUESTO, heroFoto, waHref } from "@/data/business-helpers";

export default function Hero({ biz }: { biz: Business }) {
  const foto = heroFoto(biz);
  const stats = [
    biz.rating != null
      ? `★ ${biz.rating.toFixed(1)} en Google${biz.reviews_count != null ? ` (${biz.reviews_count} reseñas)` : ""}`
      : "+800 autos detailed",
    "8 años en el rubro",
    "Garantía por escrito",
  ];

  return (
    <section id="hero" className="relative lg:h-dvh pt-24 pb-12 lg:pb-0 px-4 sm:px-6 overflow-x-clip">
      {foto ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={foto}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover opacity-40 contrast-110"
        />
      ) : (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-55 contrast-110"
          src="https://storage.googleapis.com/webild/default/templates/detailing/hero/hero.mp4"
        />
      )}
      <div className="absolute inset-0" style={{ background: "linear-gradient(100deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 45%, rgba(0,0,0,0.35) 100%)" }} />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full h-full flex items-center">
        <div className="max-w-xl text-center lg:text-left space-y-5 mx-auto lg:mx-0 py-12 lg:py-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs sm:text-sm font-medium text-slate-300">
            <span className="flex size-2 rounded-full shrink-0 animate-pulse" style={{ background: "#b8c2cc", boxShadow: "0 0 6px rgba(184,194,204,0.8)" }} />
            <span>{biz.ciudad}</span>
            <span className="text-slate-500">·</span>
            <span>Turnos para esta semana</span>
          </div>

          <h1 className="text-[32px] font-medium tracking-tight leading-tight text-balance">
            El Lavadero le Está Arruinando
            <br />
            <span className="text-gold">la Pintura a tu Auto.</span>
          </h1>

          <p className="text-base md:text-lg text-slate-400 max-w-2xl font-light leading-relaxed text-pretty">
            Trabajamos a mano: sacamos los remolinos que dejó el lavadero y te devolvemos un brillo que se nota de lejos.
          </p>

          <div className="flex flex-col sm:flex-row items-center lg:items-start gap-3 w-full sm:w-auto">
            <a
              href={waHref(biz, MSG_PRESUPUESTO)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold group w-full sm:w-auto px-7 py-3.5 min-h-[44px] rounded-full text-sm font-semibold uppercase tracking-wide active:scale-95 transition-[transform,filter] duration-150 flex items-center justify-center gap-2.5"
            >
              <FaWhatsapp aria-hidden className="size-4" />
              Consultar por WhatsApp
            </a>
            <a
              href="#servicios"
              className="btn-outline-gold text-nowrap group w-full sm:w-auto px-7 py-3.5 min-h-[44px] rounded-full text-sm font-semibold uppercase active:scale-95 flex items-center justify-center gap-2.5"
            >
              <HiOutlineSparkles aria-hidden className="size-4" />
              Ver Servicios
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 pt-1">
            {stats.map((item) => (
              <span key={item} className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-slate-400">
                <HiOutlineCheckCircle aria-hidden className="size-4 shrink-0" style={{ color: "#b8c2cc" }} />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="hidden lg:flex absolute top-28 right-8 xl:right-16 items-center gap-3 glass-panel rounded-2xl px-4 py-3 shadow-xl backdrop-blur-md z-10" style={{ border: "1px solid rgba(184,194,204,0.35)" }}>
        <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(184,194,204,0.15)" }}>
          <HiOutlineStar aria-hidden className="size-4" style={{ color: "#b8c2cc" }} />
        </div>
        <div className="leading-tight">
          <p className="text-gold font-semibold text-sm">
            {biz.rating != null ? biz.rating.toFixed(1) : "4.9"} / 5
          </p>
          <p className="text-[11px] text-slate-400">
            {biz.reviews_count != null ? `${biz.reviews_count} reseñas` : "+800 autos detailed"}
          </p>
        </div>
      </div>

      <div className="hidden lg:flex absolute bottom-16 right-8 xl:right-16 items-center gap-3 glass-panel rounded-2xl px-4 py-3 shadow-xl backdrop-blur-md z-10" style={{ border: "1px solid rgba(184,194,204,0.35)" }}>
        <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(184,194,204,0.15)" }}>
          <HiOutlineClock aria-hidden className="size-4" style={{ color: "#b8c2cc" }} />
        </div>
        <div className="leading-tight">
          <p className="text-gold font-semibold text-sm">8 años</p>
          <p className="text-[11px] text-slate-400">en el rubro</p>
        </div>
      </div>
    </section>
  );
}
