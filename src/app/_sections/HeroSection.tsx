import Image from "next/image"
import Link from "next/link"
import photo from "@/assets/photo.jpg"
import { chocoFont } from "@/lib/fonts"
import Reveal from "@/components/reveal"

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[700px] flex flex-col bg-cover bg-center"
      style={{ backgroundImage: `url(${photo.src})` }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <nav className="relative z-10 flex items-center justify-between px-6 py-6 lg:px-12">
        <Link href="/" className="flex items-center">
          <Image src="/logo_3.png" width={40} height={40} alt="Vargas logo" />
        </Link>
        <div className="flex items-center gap-6">
          <Link href="#about-us" className="text-sm font-semibold text-white/90 hover:text-white">
            Sobre nosotros
          </Link>
          <Link
            href="/main/products"
            className="rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-600"
          >
            Productos
          </Link>
        </div>
      </nav>

      <div className="relative z-10 flex flex-1 flex-col justify-center px-6 py-16 lg:px-12">
        <Reveal delay={0}>
          <span className="mb-6 w-fit rounded-full bg-neutral-900/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white">
            Córdoba · Desde hace tres generaciones
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className={`text-5xl leading-tight text-white lg:text-6xl ${chocoFont.className}`}>
            Productos frescos,
            <br />
            <span className="text-orange-500">todos los días.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-md text-white/80">
            Frutas y verduras seleccionadas a mano, cuidadas desde el origen hasta la mesa de tu familia.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/main/products"
              className="rounded-full bg-orange-500 px-6 py-3 font-semibold text-white hover:bg-orange-600"
            >
              Ver productos →
            </Link>
            <Link
              href="#about-us"
              className="rounded-full border border-white/60 px-6 py-3 font-semibold text-white hover:bg-white hover:text-neutral-900"
            >
              Sobre nosotros
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
