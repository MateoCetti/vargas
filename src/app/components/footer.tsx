import Image from "next/image"

import InstagramIcon from "../icons/instagram"
import FacebookIcon from "../icons/facebook"

export default function Footer() {
    return (
        <footer className="grid grid-cols-1 lg:grid-cols-4 gap-4 bg-white pt-12 text-center">
            <div className="flex justify-center items-center"><Image src={"/logo_1.png"} width={200} height={200} alt="vargas" /></div>
            <div className="my-10">
                <h1 className="text-xl">Ubicación</h1>
                <p className="text-sm">Mercado de Abasto</p>
                <p className="text-sm">Ruta 19, Km 7 1/2, Córdoba Argentina.</p>
                <p className="text-sm">Nave 3, Puesto 322.</p>
            </div>
            <div className="my-10">
                <h1 className="text-xl">Contactanos</h1>
                <p>Federico Vargas</p>
                <p>+54 9 351-3252930</p>
                <p>Lucas Vargas</p>
                <p>+54 9 351-3154814</p>
            </div>
            <div className="my-10">
                <h1 className="text-xl">seguinos</h1>
                <div className="flex flex-row gap-4 justify-center">
                    <a target="_blank" href="https://www.facebook.com/vargas.cba" >
                        <FacebookIcon viewBox="0 0 50 50" width={25} />
                    </a>
                    <a target="_blank" href="https://www.instagram.com/vargas.productosfrescos/">
                        <InstagramIcon viewBox="0 0 50 50" width={25} />
                    </a>
                </div>
            </div>
            <div className="col-span-full bg-green-900 tex-center text-white text-sm py-4 mt-10">© 2023 <b>Vargas</b> - Todos los Derechos Reservados. -</div>
        </footer>)
}