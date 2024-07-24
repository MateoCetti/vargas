import Image from "next/image";
import Link from "next/link";
import Drawer from "./drawer";

const menuItems: Array<{ name: string, href: string }> = [
    { name: "Inicio", href: "/" },
    { name: "Productos", href: "/products" },
    { name: "Sobre nosotros", href: "/about_us" },
    { name: "Donde ubicarnos", href: "/find_us" }
]

export type itemsType = typeof menuItems;

export default function Navbar() {

    return (
        <nav className="grid grid-cols-3 p-2 bg-white shadow-md fixed top-0 w-screen z-40">
            <Drawer items={menuItems} />
            <Image className="col-span-2 lg:col-span-1"
                src="/logo_1.png"
                width={94}
                height={43}
                alt="Picture of the author" />
            <ul className="hidden lg:flex flex-row justify-around mt-2.5">
                {
                    menuItems.map((element, index) =>
                        <li key={index} className="hover:font-bold hover:underline decoration-green-800 decoration-2 transition duration-300 ease-in-out hover:scale-110">
                            <Link
                                key={index}
                                href={element.href}>{element.name}
                            </Link>
                        </li>)
                }
            </ul>
        </nav>
    );
}