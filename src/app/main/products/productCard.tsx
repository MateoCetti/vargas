"use client"
import Image from "next/image"
import { useRouter } from 'next/navigation'

import { product } from "@/db/schema/products"

export default function ProductCard({ product}: { product: product}) {
    const imageURL = product.image
    const router = useRouter();
    
    return (
        <>
            <div className="group border border-gray bg-white lg:mx-2 lg:my-2 w-screen lg:w-full hover:bg-green-700 flex flex-col items-center"
                onClick={() => { router.push(`/main/products/${product.id}`) }}>
                {/* TODO: Change to set only de google drive image ID on DB and hardcode url here. */}
                <Image width={300} height={200} src={`https://drive.google.com/uc?id=${product.image}`} 
                alt={product.name} className="transition duration-300 ease-in-out group-hover:scale-110" />
                <p className="text-center pt-2 pb-1 group-hover:text-white">{product.name}</p>
                <p className="text-center text-green-500 pb-2 group-hover:text-white">${ }</p>
            </div>
        </>
    )
}

