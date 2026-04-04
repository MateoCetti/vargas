import Image from "next/image"
import Link from "next/link"
import naranjas from "@/assets/naranjas.jpg"
import { chocoFont } from "@/lib/fonts"

export default function ProductsSection() {
  return (
    <section className="bg-white py-10 justify-center items-center">
      <div className="flex justify-center mb-10">
        <div
          className="size-[350px] bg-auto bg-no-repeat rounded-xl shadow bg-center"
          style={{ backgroundImage: `url(${naranjas.src})` }}
        />
      </div>
      <div className="flex flex-col px-4 items-center justify-center">
        <h2 className={`text-4xl font-bold text-center lg:text-left ${chocoFont.className}`}>
          Productos frescos y seleccionados
        </h2>
        <p className="mt-5">
          Conozca acerca de los productos que comercializamos buscando siempre cuidar su economía
          sin dejar de lado la calidad donde hacemos mucha hincapié para que puedan sentir el amor
          que transmitimos a través de los mismos.
        </p>
        <Link
          href="/main/products"
          className="p-3 border border-3 border-orange-500 self-start lg:self-center rounded-xl font-bold mt-5 hover:bg-white hover:text-orange-500"
        >
          Ver nuestros productos
        </Link>
      </div>
    </section>
  )
}
