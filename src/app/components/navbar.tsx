import Image from "next/image";
import Link from "next/link";

import MenuIcon from "../icons/menu";

export default function Navbar() {
    return (
        <nav className="grid grid-cols-3 p-2 bg-white shadow-md fixed top-0 w-screen">
                <MenuIcon className="col-span-1 lg:hidden self-center"  width={25} height={25}  />
                <Image className="col-span-2 lg:col-span-1"
                    src="/logo_1.png"
                    width={94}
                    height={43}
                    alt="Picture of the author" />
                <ul className="hidden lg:flex flex-row justify-around mt-2.5">
                    <li><Link href={"/"}>Inicio</Link></li>
                    <li><Link href={"/products"}>Productos</Link></li>
                    <li><Link href={"/about_us"}>Sobre nosotros</Link></li>
                    <li><Link href={"/find_us"}>Donde ubicarnos</Link></li>
                </ul>
        </nav>
    );
}