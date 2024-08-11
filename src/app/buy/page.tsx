"use client"

import { useAppSelector } from "@/lib/hooks";
import Image from "next/image";

export default function BuyPage() {
    const cart = useAppSelector((s) => s.persistedReducer.productsState.cart);
    return (
        <section className="mt-20 mb-10 bg-white rounded-xl mx-2">
            {cart.map((product, i) =>
                <div key={i}>
                    <p>{product.item.name}</p>
                    <p>{product.item.quantity}</p>
                    <Image src={product.item.picture} alt="image" width={150} height={"150"}></Image>
                </div>)}
            <a href={`https://wa.me/+5493516455611?text=sape`}>Confirmar compra</a>
        </section>
    )
}