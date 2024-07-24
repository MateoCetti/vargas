"use client"

import Image from "next/image"
import { product } from "./page"

export default function ProductCard({product}: {product:product}) {
    return (
            <div className="group 
                        border border-gray bg-white 
                        lg:mx-2 lg:my-2
                        w-screen lg:w-full 
                        hover:bg-green-700
                        flex flex-col items-center">
                <Image width={300} height={200} src={product.image} alt={product.name} className="transition duration-300 ease-in-out group-hover:scale-110" />
                <p className="text-center pt-2 pb-1 group-hover:text-white">{product.name}</p>
                <p className="text-center text-green-500 pb-2 group-hover:text-white">${product.price}</p>
            </div>
    )
}

