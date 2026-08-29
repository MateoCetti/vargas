import RouteIcon from "@/components/icons/route"
import ClockIcon from "@/components/icons/clock"
import TruckIcon from "@/components/icons/truck"
import { chocoFont } from "@/lib/fonts"
import Reveal from "@/components/reveal"

const REPARTOS = [
  {
    icon: RouteIcon,
    title: "Zonas de reparto",
    description: "Llegamos a comercios y hogares de toda la ciudad de Córdoba y alrededores.",
  },
  {
    icon: ClockIcon,
    title: "Pedidos del día",
    description: "Los pedidos realizados por la mañana se despachan en el reparto del mismo día.",
  },
  {
    icon: TruckIcon,
    title: "Cadena de frío",
    description: "Transportamos cada producto cuidando su frescura desde el origen hasta la entrega.",
  },
]

export default function RepartosSection() {
  return (
    <section className="bg-white px-6 py-20 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-wide text-green-600">Logística</span>
          <h2 className={`mt-3 text-4xl text-neutral-900 lg:text-5xl ${chocoFont.className}`}>Repartos</h2>
          <p className="mt-5 max-w-2xl text-neutral-600">
            Coordinamos entregas propias para que cada pedido llegue en el mejor estado posible, en
            tiempo y forma.
          </p>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REPARTOS.map(({ icon: Icon, title, description }, index) => (
            <Reveal key={title} delay={Math.min(index * 0.1, 0.3)}>
              <article className="rounded-xl border border-stone-200 bg-stone-50 p-6">
                <div className="flex size-10 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <Icon width={20} height={20} />
                </div>
                <h3 className="mt-4 font-bold text-neutral-900">{title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
