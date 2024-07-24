import Image from "next/image";

import ProductCard from "./productCard";

export type product = {
    name: string,
    price: number,
    image: string
}

const products: product[] = [
    { name: "Naranjas", price: 500, image: "/naranja.png" },
    { name: "Manzanas", price: 500, image: "/manzana.png" },
    { name: "Mandarinas", price: 500, image: "/mandarina.png" },
    { name: "Peras", price: 500, image: "/pera.png" }
]

export default function productsPage() {
    return (
        <section className="mt-20 mb-10 lg:mx-2 bg-white grid grid-cols-1 lg:grid-cols-4 justify-items-center items-center gap-6">
            <div className="col-span-full bg-green-700 w-full text-center p-2 text-white text-2xl">Nuestros productos</div>

            {
                products.map((p, i) =><ProductCard key={i} product={p} />)
            }
        </section>
    );
}