import Image from "next/image"

import InstagramIcon from "./icons/instagram"
import FacebookIcon from "./icons/facebook"

import localFont from 'next/font/local'

const myFont = localFont({
  src: '../../public/fonts/choco.woff2',
  display: 'swap',
  variable: '--font-choco',
})

export default function Footer() {
    return (
        <footer className="grid grid-cols-1 lg:grid-cols-4 gap-4 bg-white pt-12 text-center">
            <div className="flex justify-center items-center"><Image src={"/logo_1.png"} width={200} height={200} alt="vargas" /></div>
            <div className="my-10">
                <h1 className={`text-xl ${myFont.className}`}>Ubicación</h1>
                <p className="text-sm">Mercado de Abasto</p>
                <p className="text-sm">Ruta 19, Km 7 1/2, Córdoba Argentina.</p>
                <p className="text-sm">Nave 3, Puesto 322.</p>
            </div>
            <div className="my-10">
                <h1 className={`text-xl ${myFont.className}`}>Contactanos</h1>
                <p>Federico</p>
                <p>+54 9 351-3252930</p>
                <p>Lucas</p>
                <p>+54 9 351-3154814</p>
            </div>
            <div className="my-10">
                <h1 className={`text-xl ${myFont.className}`}>Seguinos</h1>
                <div className="flex flex-row gap-4 justify-center">
                    <a target="_blank" href="https://www.facebook.com/vargas.cba" >
                        <FacebookIcon viewBox="0 0 50 50" width={25} />
                    </a>
                    <a target="_blank" href="https://www.instagram.com/vargas.productosfrescos/">
                        <InstagramIcon width={25} />
                    </a>
                </div>
            </div>
            <div className="col-span-full bg-green-900 tex-center text-white text-sm py-4 mt-10">© {new Date().getFullYear()} <b>Vargas</b> - Todos los Derechos Reservados. -</div>
        </footer>)
}