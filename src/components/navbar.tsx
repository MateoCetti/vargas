import Image from "next/image";
import Link from "next/link";
import Drawer from "./drawer";
import ShoppingCart from "./shoppingCart";

const menuItems: Array<{ name: string, href: string }> = [
    { name: "Inicio", href: "/" },
    { name: "Productos", href: "/main/products" },
    { name: "Sobre nosotros", href: "/main/about_us" },
    { name: "Donde ubicarnos", href: "/main/find_us" }
]

const adminItems: Array<{ name: string, href: string }> = [
    { name: "Productos", href: "/admin" },
    { name: "Logout", href: "/logout" }
]

export type itemsType = typeof menuItems;

export default function Navbar({ type }: {type: "admin" | "user"}) {

    return (
        <nav className={`grid grid-cols-3 p-2 ${type === "admin" ? "bg-blue-500" : "bg-white"} shadow-md fixed top-0 w-screen z-40`}>
            <Drawer items={menuItems} />
            <Image
                src="/logo_1.png"
                width={94}
                height={43}
                alt="Picture of the author" />
            <ul className="hidden lg:flex flex-row justify-around mt-2.5">
                {
                    type === "admin" ? 
                    
                    adminItems.map((element, index) =>
                        <li key={index} className="hover:font-bold hover:underline decoration-green-800 decoration-2 transition duration-300 ease-in-out hover:scale-110">
                            <Link
                                key={index}
                                href={element.href}>{element.name}
                            </Link>
                        </li>)
                    :
                    
                    menuItems.map((element, index) =>
                        <li key={index} className="group transition duration-300 ease-in-out hover:scale-110">
                            <Link className="group-hover:bg-green-600 p-2 rounded rounded-l group-hover:text-white"
                                key={index}
                                href={element.href}>{element.name}
                            </Link>
                        </li>)
                }
            </ul>
            {type === "user" && <ShoppingCart />}
        </nav>
    );
}