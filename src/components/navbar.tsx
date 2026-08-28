import Image from "next/image";
import Link from "next/link";
import Drawer from "./drawer";

const menuItems: Array<{ name: string, href: string }> = [
    { name: "Inicio", href: "/" },
    { name: "Productos", href: "/main/products" },
    { name: "Sobre nosotros", href: "/main/about_us" }
]

const adminItems: Array<{ name: string, href: string }> = [
    { name: "Productos", href: "/admin" },
    { name: "Logout", href: "/logout" }
]

export type itemsType = typeof menuItems;

export default function Navbar({ type }: { type: "admin" | "user" }) {
    if (type === "admin") {
        return (
            <nav className="grid grid-cols-3 p-2 bg-blue-500 shadow-md fixed top-0 w-screen z-40">
                <Drawer items={adminItems} />
                <Link href="">
                    <Image src="/logo_1.png" width={94} height={43} alt="Vargas" />
                </Link>
                <ul className="hidden lg:flex flex-row justify-around mt-2.5">
                    {adminItems.map((element, index) =>
                        <li key={index} className="hover:font-bold hover:underline decoration-green-800 decoration-2 transition duration-300 ease-in-out hover:scale-110">
                            <Link href={element.href}>{element.name}</Link>
                        </li>
                    )}
                </ul>
                <div />
            </nav>
        )
    }

    return (
        <header className="fixed top-0 z-40 w-full border-b border-stone-200 bg-white/90 backdrop-blur">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 lg:px-12">
                <Link href="/" className="flex items-center">
                    <Image src="/logo_1.png" width={90} height={41} alt="Vargas" />
                </Link>
                <div className="flex items-center gap-3 lg:gap-6">
                    <Link href="/main/about_us" className="whitespace-nowrap text-sm font-semibold text-neutral-700 hover:text-neutral-900">
                        Sobre nosotros
                    </Link>
                    <Link
                        href="/main/products"
                        className="rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-600"
                    >
                        Productos
                    </Link>
                </div>
            </nav>
        </header>
    );
}
