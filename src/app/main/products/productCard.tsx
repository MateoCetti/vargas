"use client"
import Image from "next/image"
import { useRouter } from 'next/navigation'

import { Product } from "@/data/products"

export default function ProductCard({ product }: { product: Product }) {
    const router = useRouter();

    return (
        <div className="group border border-gray rounded rounded-xl lg:bg-white lg:my-2 p-5 w-screen lg:w-auto hover:bg-green-700 flex flex-col items-center cursor-pointer"
            onClick={() => { router.push(`/main/products/${product.id}`) }}>
            <Image width={200} height={200} src={product.image}
                alt={product.name} className="transition duration-300 ease-in-out group-hover:scale-110" />
            <p className="text-center group-hover:text-white">{product.name}</p>
        </div>
    )
}


