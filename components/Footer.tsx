import type { Business } from "@/data/businesses";

export default function Footer({ biz }: { biz: Business }) {
  return (
    <footer className="px-5 sm:px-8 pt-14 pb-8" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-500">
        <span>© {new Date().getFullYear()} {biz.nombre} — {biz.ciudad}</span>
        <span>{biz.direccion} · {biz.telefono}</span>
      </div>
      <div className="max-w-6xl mx-auto text-center sm:text-left mt-3">
        <p className="text-[11px] text-slate-600">
          Modelo 3D &ldquo;BMW M4 G82 Coupe&rdquo; por{" "}
          <a
            href="https://sketchfab.com/Sloftm_Carz"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-slate-400"
          >
            Sloftm_Carz
          </a>
          , usado bajo licencia{" "}
          <a
            href="https://creativecommons.org/licenses/by/4.0/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-slate-400"
          >
            CC Attribution
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
