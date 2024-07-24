"use client"

import Image from "next/image"
import { product } from "./page"
import { useState } from "react"

export default function ProductCard({ product }: { product: product }) {
    const [hidden, setHidden] = useState<boolean>(true)
    return (
        <>
            <div className="group border border-gray bg-white lg:mx-2 lg:my-2 w-screen lg:w-full hover:bg-green-700 flex flex-col items-center"
                onClick={() => { setHidden(false) }}>
                <Image width={300} height={200} src={product.image} alt={product.name} className="transition duration-300 ease-in-out group-hover:scale-110" />
                <p className="text-center pt-2 pb-1 group-hover:text-white">{product.name}</p>
                <p className="text-center text-green-500 pb-2 group-hover:text-white">${product.price}</p>
            </div>

            {
                !hidden &&
                <>
                    <div className="fixed bg-black opacity-70 w-screen h-screen top-0 z-40" onClick={() => { setHidden(true) }}>
                    </div>
                    <div className="fixed bg-white rounded-xl w-5/6 h-4/5 inset-y-0 my-auto inset-x-0 mx-auto z-50 flex flex-col items-center p-5">
                        <h1 className="text-2xl">{product.name}</h1>
                        <p className="mt-20">__TODO__</p>
                    </div>
                </>
            }
        </>
    )
}

