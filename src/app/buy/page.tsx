"use client"

import { useAppSelector } from "@/lib/hooks";
import { redirect } from "next/navigation";

export default function BuyPage(){
    const products = useAppSelector((s) => s.counterReducer.products)
    return (
        <section className="mt-20 mb-10 bg-white rounded-xl mx-2">
        {products.map((p, i) => <div key={i}>{p.name}</div>)}
        <a href={`https://wa.me/+5493516455611?text=${products.map((p) => p.name)}`}>Comprar</a>
        </section>
    )
}