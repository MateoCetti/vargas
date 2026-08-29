import Image from "next/image"
import Link from "next/link"
import { chocoFont } from "@/lib/fonts"
import Reveal from "@/components/reveal"

export default function AboutSection() {
  return (
    <section id="about-us" className="bg-green-600 px-6 py-20 lg:px-12">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <Reveal delay={0} className="text-center lg:text-left">
          <span className="text-sm font-semibold uppercase tracking-wide text-green-100">
            Nuestra historia
          </span>
          <h2 className={`mt-3 text-4xl text-white lg:text-5xl ${chocoFont.className}`}>
            Una empresa, un legado de familia.
          </h2>
          <p className="mt-5 text-green-50">
            Conozca más acerca de lo que fue, y es Vargas: una empresa dedicada al comercio y cuidado
            de alimentos frescos que llegan a nuestros hogares para sacar una sonrisa en la mesa de las
            familias, acercando productos de primera calidad desde cada rincón de nuestro país.
          </p>
          <Link
            href="/main/about_us"
            className="mt-6 inline-block rounded-full bg-white px-6 py-3 font-semibold text-green-700 hover:bg-green-50"
          >
            Ver más →
          </Link>
        </Reveal>
        <Reveal delay={0.15} className="flex justify-center">
          <div className="flex size-72 items-center justify-center rounded-full bg-green-500/50">
            <div className="flex size-52 items-center justify-center rounded-full bg-green-400/50">
              <Image src="/naranja.png" width={220} height={220} alt="Naranja" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
