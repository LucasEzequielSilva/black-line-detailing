import { FaWhatsapp } from "react-icons/fa";
import { type Business, MSG_FOTOS, MSG_PRESUPUESTO, waHref } from "@/data/businesses";

const SERVICIOS = [
  {
    nombre: "Detail de Interior",
    descripcion: "Aspirado profundo, manchas en tapizados, cuero tratado y desinfección completa.",
    ideal_si: "Compraste un usado, tenés chicos o usás el auto todos los días.",
    precio: "Desde $60.000",
    img: "/before-after/interior-despues.jpg",
  },
  {
    nombre: "Detail de Exterior",
    descripcion: "Lavado a mano, descontaminación con arcilla, corrección de pintura y cera premium.",
    ideal_si: "Notás la pintura opaca o con marcas.",
    precio: "Desde $95.000",
    destacado: true,
    img: "/before-after/pintura-despues.jpg",
  },
  {
    nombre: "Tratamiento Acrílico",
    descripcion: "Sellador de pintura de alta durabilidad, una alternativa más accesible al cerámico.",
    ideal_si: "Querés protección extra sin el gasto del tratamiento cerámico.",
    precio: "Desde $110.000",
    img: "/before-after/ceramico.jpg",
  },
  {
    nombre: "Recubrimiento Cerámico",
    descripcion: "Incluye el Detail de Exterior completo, más protección cerámica que dura años.",
    ideal_si: "Ya lo dejaste impecable y querés que se mantenga así.",
    precio: "Desde $140.000",
    img: "/before-after/ceramico.jpg",
  },
  {
    nombre: "PPF (Film de Protección)",
    descripcion: "Película transparente que blinda la pintura contra piedras, ramas y rayones.",
    ideal_si: "Tenés un auto nuevo o premium y querés cuidarlo desde el día uno.",
    precio: "Desde $250.000",
    img: "/before-after/ceramico.jpg",
  },
  {
    nombre: "Polarizado",
    descripcion: "Película de control solar en los vidrios: menos calor adentro y más privacidad.",
    ideal_si: "Viajás mucho al sol o querés más intimidad en el auto.",
    precio: "Desde $80.000",
    img: "/before-after/ceramico.jpg",
  },
  {
    nombre: "Ploteo",
    descripcion: "Vinilo decorativo o wrap completo para cambiar el color o sumar un diseño propio.",
    ideal_si: "Querés renovar el look del auto sin pintarlo.",
    precio: "Desde $180.000",
    img: "/before-after/ceramico.jpg",
  },
  {
    nombre: "Saca Bollos (PDR)",
    descripcion: "Reparación de abolladuras sin pintar, sin dejar marcas ni diferencia de color.",
    ideal_si: "Tenés un golpe de puerta o granizo y querés arreglarlo sin repintar.",
    precio: "Desde $70.000",
    img: "/before-after/ceramico.jpg",
  },
];

export default function Inventory({ biz }: { biz: Business }) {
  return (
    <section id="servicios" className="px-5 sm:px-8 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <span className="section-badge mb-5">Nuestros servicios</span>
          <h2 className="text-3xl md:text-5xl font-medium text-gold mb-4">Qué Hacemos</h2>
          <p className="text-slate-400">
            Lavado a mano, corrección de pintura y protección cerámica. Sin remolinos, sin atajos.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICIOS.map((s, i) => (
            <div key={s.nombre} className="product-card rounded-[24px] overflow-hidden flex flex-col relative">
              {s.destacado && (
                <span className="absolute top-3 right-3 z-10 text-[10px] px-2.5 py-1 rounded-full text-black font-semibold uppercase" style={{ background: "#b8c2cc" }}>
                  Más elegido
                </span>
              )}
              <div className="aspect-[4/3] overflow-hidden" style={{ background: "#141414" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={biz.fotos[i] ?? s.img} alt={s.nombre} className="w-full h-full object-cover" />
              </div>
              <div className="p-5 flex flex-col gap-2 flex-1">
                <h3 className="font-semibold text-lg" style={{ textTransform: "none", fontFamily: "inherit" }}>
                  {s.nombre}
                </h3>
                <p className="text-sm font-semibold" style={{ color: "#b8c2cc" }}>{s.precio}</p>
                <p className="text-sm text-slate-400 leading-relaxed">{s.descripcion}</p>
                <p className="text-xs text-slate-500"><span className="font-semibold text-slate-400">Ideal si:</span> {s.ideal_si}</p>
                <a
                  href={waHref(biz, MSG_PRESUPUESTO)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-gold mt-3 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold uppercase"
                >
                  <FaWhatsapp aria-hidden className="size-3.5" />
                  Reservar
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="glass-panel rounded-[28px] mt-8 p-8 md:p-10 flex flex-col md:flex-row items-center gap-6 justify-between">
          <div>
            <span className="section-badge mb-3">¿No sabés qué necesita tu auto?</span>
            <h3 className="font-semibold text-xl md:text-2xl mb-2" style={{ textTransform: "none", fontFamily: "inherit" }}>
              Mandanos 3 Fotos y Te Decimos Qué Hacerle
            </h3>
            <p className="text-sm text-slate-400 max-w-xl">
              Sacale fotos del techo, capot e interior. Te decimos qué tratamiento le hace falta.
            </p>
          </div>
          <a
            href={waHref(biz, MSG_FOTOS)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold uppercase tracking-wide whitespace-nowrap"
          >
            <FaWhatsapp aria-hidden className="size-4" />
            Mandar fotos
          </a>
        </div>
      </div>
    </section>
  );
}
