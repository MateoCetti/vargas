import Image from "next/image"
import InstagramIcon from "./icons/instagram"
import FacebookIcon from "./icons/facebook"
import LocationIcon from "./icons/location"
import PhoneIcon from "./icons/phone"
import { chocoFont } from "@/lib/fonts"

export default function Footer() {
    return (
        <footer className="bg-orange-500 px-6 py-16 text-white lg:px-12">
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 text-center sm:grid-cols-2 lg:grid-cols-4 lg:text-left">
                <div className="flex flex-col items-center lg:items-start">
                    <Image src="/logo_1.png" width={140} height={140} alt="Vargas" />
                    <p className="mt-2 text-orange-50">
                        Alimentos frescos de primera calidad, con el cuidado de una empresa familiar.
                    </p>
                </div>
                <div>
                    <h2 className={`text-xl ${chocoFont.className}`}>Ubicación</h2>
                    <a
                        href="https://maps.app.goo.gl/ZNHZ2aoDLKRewaLWA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 flex items-center justify-center gap-2 text-orange-50 hover:text-white lg:justify-start"
                    >
                        <LocationIcon width={18} height={18} />
                        Ver en Google Maps
                    </a>
                </div>
                <div>
                    <h2 className={`text-xl ${chocoFont.className}`}>Contactanos</h2>
                    <ul className="mt-2 space-y-2">
                        <li>
                            <a
                                href="tel:+5493513252930"
                                className="flex items-center justify-center gap-2 text-orange-50 hover:text-white lg:justify-start"
                            >
                                <PhoneIcon width={18} height={18} />
                                <span>Federico +54 9 351-3252930</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="tel:+5493513154814"
                                className="flex items-center justify-center gap-2 text-orange-50 hover:text-white lg:justify-start"
                            >
                                <PhoneIcon width={18} height={18} />
                                <span>Lucas +54 9 351-3154814</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className={`text-xl ${chocoFont.className}`}>Seguinos</h2>
                    <div className="mt-2 flex flex-row justify-center gap-4 lg:justify-start">
                        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/vargas.cba">
                            <FacebookIcon viewBox="0 0 50 50" width={25} />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/vargas.productosfrescos/">
                            <InstagramIcon width={25} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="mx-auto mt-12 max-w-6xl border-t border-white/20 pt-6 text-center text-sm text-orange-50">
                © {new Date().getFullYear()} <b>Vargas</b> — Todos los derechos reservados.
            </div>
        </footer>
    )
}
