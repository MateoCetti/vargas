import localFont from "next/font/local";
import { PRODUCTS } from "@/data/products";
import ProductCard from "./productCard";

const myFont = localFont({
    src: '../../../../public/fonts/choco.woff2',
    display: 'swap',
    variable: '--font-choco',
})

export default function productsPage() {
    const products = [...PRODUCTS].sort((a, b) => a.name.localeCompare(b.name));

    return (
        <section className="mt-20 mb-10 lg:mx-2 bg-white grid grid-cols-1 gap-2 lg:grid-cols-6 justify-items-center items-center">
            <div className={`bg-green-900 text-center col-span-1 lg:col-span-6 py-4 text-white text-xl w-full ${myFont.className}`}>Nuestros productos</div>

            {
                products.map((p, i) => <ProductCard key={i} product={p} />)
            }
        </section>
    );
}