"use client"
import Image from "next/image"

import { Product } from "@/data/products"
import { chocoFont } from "@/lib/fonts"

export default function ProductCard({ product }: { product: Product }) {

    return (
        <article
            className="group cursor-pointer overflow-hidden rounded-2xl border border-stone-200 bg-white transition hover:shadow-md"
        >
            <div className="relative aspect-square bg-gradient-to-b from-amber-100 to-orange-50">
                <span className="absolute left-3 top-3 z-10 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-neutral-700">
                    {product.category}
                </span>
                <Image
                    src={product.image}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    alt={product.name}
                    className={`transition duration-300 ease-in-out group-hover:scale-105 ${
                        product.imageFit === "cover" ? "object-cover" : "object-contain p-8"
                    }`}
                />
            </div>
            <div className="p-5">
                <h2 className={`text-2xl ${chocoFont.className}`}>{product.name}</h2>
                <p className="mt-1 text-sm text-neutral-600">{product.shortDescription}</p>
                <p className="mt-2 text-sm font-semibold text-orange-500">{product.seasonLabel}</p>
            </div>
        </article>
    )
}
