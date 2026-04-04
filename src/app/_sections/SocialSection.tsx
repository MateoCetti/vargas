import FacebookIcon from "@/components/icons/facebook"
import InstagramIcon from "@/components/icons/instagram"
import { chocoFont } from "@/lib/fonts"

export default function SocialSection() {
  return (
    <section className="text-white flex flex-col bg-black py-10 gap-5 justify-center items-center">
      <h2 className={`text-3xl text-center ${chocoFont.className}`}>¡Seguinos en nuestras redes!</h2>
      <div className="grid grid-cols-2 gap-10">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/vargas.cba"
        >
          <FacebookIcon fill="#fff" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/vargas.productosfrescos/"
        >
          <InstagramIcon fill="#fff" />
        </a>
      </div>
    </section>
  )
}
