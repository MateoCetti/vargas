import Image from "next/image"
import Link from "next/link"
import { chocoFont } from "@/lib/fonts"

export default function AboutSection() {
  return (
    <section id="about-us" className="bg-green-600 h-500 pb-5 relative">
      <div className="flex justify-center h-500 bg-white">
        <Image
          src="/naranja.png"
          className="absolute -top-40"
          width={400}
          height={100}
          alt="Naranja"
        />
      </div>
      <div className="flex flex-col items-center h-full mx-5">
        <h2 className={`text-5xl mt-[200px] font-bold text-center lg:text-left ${chocoFont.className}`}>
          Una empresa, un legado de familia.
        </h2>
        <p className="mt-5">
          Conozca más acerca de lo que fue, y es Vargas una empresa dedicada al comercio y cuidado
          de alimentos frescos que llegan a nuestros hogares para sacar una sonrisa en la mesa de
          las familias pudiendo así con cada producto de primera calidad acercar a los lugares en
          donde se elaboran los mismos en cada rincon de nuestro país.
        </p>
        <Link
          href="/main/about_us"
          className="p-3 text-xl self-start lg:self-center border-2 border-black rounded mt-6 hover:bg-orange-500 hover:text-white hover:border-orange-500"
        >
          Ver mas
        </Link>
      </div>
    </section>
  )
}
