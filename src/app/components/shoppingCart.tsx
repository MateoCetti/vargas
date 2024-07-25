"use client"
import Cart from "./icons/cart";

import { useAppSelector } from "@/lib/hooks";

export default function ShoppingCart() {
    const products = useAppSelector((s) => s.counterReducer.products)

    return (
        <div className="relative">
            { products.length !== 0 && <span className="absolute bg-green-700 text-green-100 px-1 text-xs font-bold rounded-full top-0 right-3 ">{products.length}</span>}
            <Cart onClick={() => { console.log(products) }} className="absolute right-5 top-3" /> 
        </div>
    )
}