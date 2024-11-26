import localFont from "next/font/local";
import db from "../../../../db";

import ProductCard from "./productCard";

export const fetchCache = 'force-no-store';

const myFont = localFont({
    src: '../../../../public/fonts/choco.woff2',
    display: 'swap',
    variable: '--font-choco',
})

export default async function productsPage() {
    const res = await db.query.products.findMany()


    return (
        <section className="mt-20 mb-10 lg:mx-2 bg-white grid grid-cols-1 gap-2 lg:grid-cols-6 justify-items-center items-center">
            <div className={`bg-green-900 text-center col-span-6 py-4 text-white text-xl w-full ${myFont.className}`}>Nuestros productos</div>

            {
                res.map((p, i) => <ProductCard key={i} product={p} />)
            }
        </section>
    );
}