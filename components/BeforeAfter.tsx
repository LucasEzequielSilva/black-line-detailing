import CompareSlider from "./CompareSlider";
import SectionDivider from "./SectionDivider";

function asset(path: string) {
  return `https://storage.googleapis.com/webild/default/templates/${path}`;
}

const PARES = [
  { servicio: "Interior", antes: asset("detailing/features/feature1.webp"), despues: asset("detailing/features/features3.webp") },
  { servicio: "Pintura Exterior", antes: asset("detailing/features/features2.webp"), despues: asset("detailing/team/team1.webp") },
  { servicio: "Recubrimiento Cerámico", antes: asset("detailing/features/features3.webp"), despues: asset("detailing/team/team2.webp") },
  { servicio: "Tapizados y Cuero", antes: asset("detailing/team/team1.webp"), despues: asset("detailing/team/team3.webp") },
  { servicio: "Rines y Llantas", antes: asset("detailing/team/team2.webp"), despues: asset("detailing/features/feature1.webp") },
  { servicio: "Plásticos y Tablero", antes: asset("detailing/team/team3.webp"), despues: asset("detailing/features/features2.webp") },
];

export default function BeforeAfter() {
  return (
    <section id="resultados" className="relative px-5 sm:px-8 py-24" style={{ background: "#101010" }}>
      <SectionDivider edge="bottom" shape="asymmetric" />
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <span className="section-badge mb-5">Resultados reales</span>
          <h2 className="text-3xl md:text-5xl font-medium text-gold mb-4">Antes y Después</h2>
          <p className="text-slate-400">Así queda un auto cuando se trabaja en serio, no a las apuradas.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {PARES.map((p) => (
            <div key={p.servicio} className="product-card rounded-[24px] overflow-hidden">
              <CompareSlider before={p.antes} after={p.despues} alt={p.servicio} />
              <div className="p-4">
                <h3 className="font-semibold text-sm" style={{ textTransform: "none", fontFamily: "inherit" }}>
                  {p.servicio}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
