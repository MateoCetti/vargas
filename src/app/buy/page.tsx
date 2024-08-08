"use client"

import { useAppSelector } from "@/lib/hooks";
import Image from "next/image";

export default function BuyPage() {
    const products = useAppSelector((s) => s.persistedReducer.productsState.products)
    return (
        <section className="mt-20 mb-10 bg-white rounded-xl mx-2">
            {products.map((p, i) =>
                <div key={i}>
                    <p>{p.name}</p>
                    <p>{p.quantity}</p>
                    <Image src={p.picture} alt="image" width={150} height={"150"}></Image>
                </div>)}
            <a href={`https://wa.me/+5493516455611?text=sape`}>Confirmar compra</a>
        </section>
    )
}