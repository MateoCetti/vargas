import db from "../../../../db";

import ProductCard from "./productCard";

export default async function productsPage() {
    const res = await db.query.products.findMany()


    return (
        <section className="mt-20 mb-10 lg:mx-2 bg-white grid grid-cols-1 gap-2 lg:grid-cols-6 justify-items-center items-center">
            <div className="col-span-full bg-green-700 w-full text-center p-2 text-white text-2xl">Nuestros productos</div>

            {
                res.map((p, i) => <ProductCard key={i} product={p} />)
            }
        </section>
    );
}