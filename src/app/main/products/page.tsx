"use client"

import { useMemo, useState } from "react"
import { PRODUCTS, Product } from "@/data/products"
import ProductCard from "./productCard"
import SparkleIcon from "@/components/icons/sparkle"
import SnowflakeIcon from "@/components/icons/snowflake"
import LeafIcon from "@/components/icons/leaf"
import PhoneIcon from "@/components/icons/phone"
import { chocoFont } from "@/lib/fonts"

const FILTERS = ["Todos", "Frutas", "Verduras"] as const

const HIGHLIGHTS = [
    {
        icon: SparkleIcon,
        title: "Selección diaria",
        description: "Revisamos cada cajón antes de salir al reparto.",
    },
    {
        icon: SnowflakeIcon,
        title: "Cadena de frío",
        description: "Conservación cuidada desde el origen hasta la entrega.",
    },
    {
        icon: LeafIcon,
        title: "Origen conocido",
        description: "Trabajamos con productores de distintos puntos del país.",
    },
]

function sortProducts(products: Product[]) {
    return [...products].sort((a, b) => {
        if (a.category !== b.category) return a.category === "Frutas" ? -1 : 1
        return a.name.localeCompare(b.name)
    })
}

export default function ProductsPage() {
    const [filter, setFilter] = useState<(typeof FILTERS)[number]>("Todos")
    const products = useMemo(() => sortProducts(PRODUCTS), [])
    const filtered = filter === "Todos" ? products : products.filter((p) => p.category === filter)

    return (
        <>
            <section className="bg-green-600 px-6 pb-20 pt-28 lg:px-12">
                <div className="mx-auto max-w-6xl">
                    <span className="w-fit rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white">
                        Catálogo
                    </span>
                    <h1 className={`mt-4 text-4xl text-white lg:text-5xl ${chocoFont.className}`}>
                        Nuestros productos
                    </h1>
                    <p className="mt-4 max-w-xl text-green-50">
                        Frutas y verduras seleccionadas a mano, cuidando su economía sin dejar de lado la calidad.
                        Estos son algunos de los productos que comercializamos todos los días.
                    </p>
                </div>
            </section>

            <section className="bg-stone-50 px-6 py-16 lg:px-12">
                <div className="mx-auto max-w-6xl">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex gap-2">
                            {FILTERS.map((f) => (
                                <button
                                    key={f}
                                    onClick={() => setFilter(f)}
                                    className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                                        filter === f
                                            ? "bg-neutral-900 text-white"
                                            : "bg-white text-neutral-700 hover:bg-stone-200"
                                    }`}
                                >
                                    {f}
                                </button>
                            ))}
                        </div>
                        <span className="text-sm text-neutral-500">{filtered.length} productos</span>
                    </div>

                    <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {filtered.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-white px-6 py-16 lg:px-12">
                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-3">
                    {HIGHLIGHTS.map(({ icon: Icon, title, description }) => (
                        <article key={title} className="rounded-xl border border-stone-200 bg-stone-50 p-6">
                            <div className="flex size-10 items-center justify-center rounded-full bg-green-100 text-green-600">
                                <Icon width={20} height={20} />
                            </div>
                            <h3 className="mt-4 font-bold text-neutral-900">{title}</h3>
                            <p className="mt-2 text-sm text-neutral-600">{description}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="bg-neutral-900 px-6 py-16 lg:px-12">
                <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
                    <div>
                        <h2 className={`text-3xl text-white lg:text-4xl ${chocoFont.className}`}>
                            ¿Buscás un producto en particular?
                        </h2>
                        <p className="mt-2 max-w-xl text-neutral-400">
                            Trabajamos con mucha más variedad según la temporada. Escribinos y armamos tu pedido.
                        </p>
                    </div>
                    <a
                        href="tel:+5493513252930"
                        className="flex items-center gap-2 whitespace-nowrap rounded-full bg-orange-500 px-6 py-3 font-semibold text-white hover:bg-orange-600"
                    >
                        <PhoneIcon width={18} height={18} />
                        Consultar disponibilidad →
                    </a>
                </div>
            </section>
        </>
    )
}
