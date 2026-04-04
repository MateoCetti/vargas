import Image from "next/image"
import Link from "next/link"
import photo from "@/assets/photo.jpg"

export default function HeroSection() {
  return (
    <section
      className="h-[800px] flex flex-col justify-between items-center bg-auto bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${photo.src})` }}
    >
      <Image src="/logo_3.png" width={100} height={100} alt="Vargas logo" />
      <div>
        <Image src="/logo_3.png" width={500} height={200} alt="Vargas Productos Frescos" className="lg:-translate-x-10" />
        <div className="flex justify-center gap-4 mt-10">
          <Link
            href="/main/products"
            className="p-2 bg-orange-500 text-white rounded hover:bg-white hover:text-orange-500"
          >
            Productos
          </Link>
          <Link
            href="#about-us"
            className="p-2 border-2 text-white rounded hover:bg-orange-500"
          >
            Sobre nosotros
          </Link>
        </div>
      </div>
      <div />
    </section>
  )
}
