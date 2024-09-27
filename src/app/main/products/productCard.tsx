"use client"
import Image from "next/image"
import { useRouter } from 'next/navigation'

import { product } from "@/db/schema/products"
import { getImageId } from "@/utils"

export default function ProductCard({ product}: { product: product}) {
    const imageURL = product.image
    const router = useRouter();
    
    return (
        <>
            <div className="group border border-gray rounded rounded-xl lg:bg-white lg:my-2 p-5 w-screen lg:w-auto hover:bg-green-700 flex flex-col items-center cursor-pointer"
                onClick={() => { router.push(`/main/products/${product.id}`) }}>
                {/* TODO: Change to set only de google drive image ID on DB and hardcode url here. */}
                <Image width={200} height={200} src={`https://drive.google.com/uc?id=${getImageId(product.image)}`} 
                alt={product.name} className="transition duration-300 ease-in-out group-hover:scale-110" />
                <p className="text-center group-hover:text-white">{product.name}</p>
            </div>
        </>
    )
}


