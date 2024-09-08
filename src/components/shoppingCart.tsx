"use client"
import Link from "next/link";

import Cart from "./icons/cart";

import { useAppSelector } from "@/lib/hooks";

export default function ShoppingCart() {
    const products = useAppSelector((s) => s.persistedReducer.productsState.cart)

    return (
        <Link href={"/main/buy"} className="relative">
            { products.length !== 0 && <span className="absolute bg-green-700 text-green-100 px-1 text-xs font-bold rounded-full top-0 right-3 ">{products.length}</span>}
            <Cart className="absolute right-5 top-3" /> 
        </Link>
    )
}