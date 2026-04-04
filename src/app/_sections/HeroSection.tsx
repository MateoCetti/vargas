import Image from "next/image"
import Link from "next/link"
import photo from "@/assets/photo.jpg"
import { chocoFont } from "@/lib/fonts"

export default function HeroSection() {
  return (
    <section
      className="h-[800px] flex flex-col justify-between items-center bg-auto bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${photo.src})` }}
    >
      <Image src="/logo_3.png" width={100} height={100} alt="Vargas logo" />
      <div>
        <h1 className={`text-white text-6xl text-center ${chocoFont.className}`}>
          Vargas Productos Frescos
        </h1>
        <div className="flex justify-center gap-4 mt-10">
          <Link
            href="/main/products"
            className="p-2 bg-green-600 text-white rounded hover:bg-white hover:text-black"
          >
            Productos
          </Link>
          <Link
            href="#about-us"
            className="p-2 border-2 text-white rounded hover:bg-white hover:text-black"
          >
            Sobre nosotros
          </Link>
        </div>
      </div>
      <div />
    </section>
  )
}
