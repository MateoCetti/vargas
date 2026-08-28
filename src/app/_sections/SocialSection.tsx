import FacebookIcon from "@/components/icons/facebook"
import InstagramIcon from "@/components/icons/instagram"
import { chocoFont } from "@/lib/fonts"

export default function SocialSection() {
  return (
    <section className="bg-neutral-900 px-6 py-16 lg:px-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
        <div>
          <h2 className={`text-3xl text-white lg:text-4xl ${chocoFont.className}`}>
            ¡Seguinos en nuestras redes!
          </h2>
          <p className="mt-2 text-neutral-400">Novedades, ingresos del día y ofertas de temporada.</p>
        </div>
        <div className="flex gap-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/vargas.cba"
            className="flex size-11 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
          >
            <FacebookIcon fill="#fff" viewBox="0 0 50 50" width={20} height={20} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/vargas.productosfrescos/"
            className="flex size-11 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
          >
            <InstagramIcon fill="#fff" width={20} height={20} />
          </a>
        </div>
      </div>
    </section>
  )
}
