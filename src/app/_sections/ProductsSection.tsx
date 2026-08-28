import Link from "next/link"
import naranjas from "@/assets/naranjas.jpg"
import { chocoFont } from "@/lib/fonts"

export default function ProductsSection() {
  return (
    <section className="bg-stone-50 px-6 py-20 lg:px-12">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div
          className="aspect-square w-full rounded-2xl border border-stone-200 bg-cover bg-center shadow-sm lg:aspect-auto lg:h-96"
          style={{ backgroundImage: `url(${naranjas.src})` }}
        />
        <div className="text-center lg:text-left">
          <span className="text-sm font-semibold uppercase tracking-wide text-orange-500">
            Nuestros productos
          </span>
          <h2 className={`mt-3 text-4xl text-neutral-900 lg:text-5xl ${chocoFont.className}`}>
            Productos frescos y seleccionados
          </h2>
          <p className="mt-5 text-neutral-600">
            Conozca acerca de los productos que comercializamos, buscando siempre cuidar su economía
            sin dejar de lado la calidad, donde hacemos mucho hincapié para que puedan sentir el amor
            que transmitimos a través de los mismos.
          </p>
          <Link
            href="/main/products"
            className="mt-6 inline-block rounded-full bg-neutral-900 px-6 py-3 font-semibold text-white hover:bg-neutral-800"
          >
            Ver nuestros productos →
          </Link>
        </div>
      </div>
    </section>
  )
}
