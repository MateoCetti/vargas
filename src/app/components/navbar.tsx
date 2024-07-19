import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="grid grid-cols-2 lg:grid-cols-3 p-2 bg-white shadow-md fixed top-0 w-screen">
                <Image
                    src="/logo_1.png"
                    width={94}
                    height={43}
                    alt="Picture of the author" />
                <ul className="hidden lg:flex flex-row justify-around mt-2.5">
                    <li><Link href={""}>Inicio</Link></li>
                    <li><Link href={""}>Productos</Link></li>
                    <li><Link href={""}>Sobre nosotros</Link></li>
                    <li><Link href={""}>Donde ubicarnos</Link></li>
                </ul>
        </nav>
    );
}