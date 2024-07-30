"use client"
import { useState } from "react"

import Image from "next/image"

import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { setProducts } from "@/lib/features/counterSlice"

import { product } from "@/db/schema/products"
import { variety } from "@/db/schema/varieties"

export default function ProductCard({ product, varieties }: { product: product, varieties: variety[] }) {

    const cart = useAppSelector(state => state.counterReducer.products)
    const dispatch = useAppDispatch()

    const [hidden, setHidden] = useState<boolean>(true)
    const [quantity, setQuantity] = useState<number>(0)

    // pasar esta func al reducer/action
    function handleAdd(quantity: number) {
        let newCart = [...cart];
        const prod = cart.find((p) => p.name == product.name)
        if (prod) {
            newCart.splice(
                newCart.indexOf(prod),
                1,
                { name: prod.name, quantity: prod.quantity + quantity }
            );
        } else {
            newCart.push({ name: product.name, quantity: quantity })
        }
        dispatch(setProducts(newCart))

        setHidden(true);
    }

    return (
        <>
            <div className="group border border-gray bg-white lg:mx-2 lg:my-2 w-screen lg:w-full hover:bg-green-700 flex flex-col items-center"
                onClick={() => { setHidden(false) }}>
                {/* TODO: Change to set only de google drive image ID on DB and hardcode url here. */}
                <Image width={300} height={200} src={product.image} alt={product.name} className="transition duration-300 ease-in-out group-hover:scale-110" />
                <p className="text-center pt-2 pb-1 group-hover:text-white">{product.name}</p>
                <p className="text-center text-green-500 pb-2 group-hover:text-white">${ }</p>

            </div>
            {
                !hidden &&
                <>
                    <div className="fixed bg-black opacity-70 w-screen h-screen top-0 z-40" onClick={() => { setHidden(true) }}>
                    </div>
                    <div className=" flex fixed bg-white rounded-xl w-5/6 h-4/5 inset-y-0 my-auto inset-x-0 mx-auto z-50 flex flex-col items-center p-5">
                        <h1 className="mt-10 text-4xl">Variedades</h1>

                        <div className="grid grid-cols-3 lg:grid-cols-4 w-full">
                            <div className="bg-green-700 py-4 text-white">Producto</div>
                            <div className="bg-green-700 py-4 text-white">Precio</div>
                            <div className="bg-green-700 py-4 text-white">Cantidad</div>
                            <div className="bg-green-700 py-4 text-white hidden lg:inline">Total</div>

                            {
                                varieties.map((v, i) =>
                                    <div key={i}>
                                        <p>{v.name}</p>
                                        <p>{v.price}</p>
                                        <div className="relative flex items-center max-w-[8rem]">
                                            <button className="bg-green-700 hover:bg-green-400 border border-gray-300 rounded-s-full p-3  focus:ring-gray-100 focus:ring-2 focus:outline-none"
                                                onClick={() => setQuantity(quantity - 1)}>
                                                <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                                    <path stroke="currentColor" d="M1 1h16" />
                                                </svg>
                                            </button>
                                            <input type="number" className="bg-gray-50 border-x-0 border-gray-300 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                value={quantity} onChange={(e) => { setQuantity(e.target.valueAsNumber) }} />
                                            <button className="bg-green-700  hover:bg-green-400 border border-gray-300 rounded-e-full p-3 focus:ring-gray-100 focus:ring-2 focus:outline-none"
                                                onClick={() => setQuantity(quantity + 1)}>
                                                <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                    <path stroke="currentColor" d="M9 1v16M1 9h16" />
                                                </svg>
                                            </button>
                                        </div>
                                        <p className="hidden lg:inline">{v.price * quantity}</p>
                                    </div>)
                            }
                        </div>
                        <button className="absolute bottom-5 bg-green-700 text-white p-2 px-5 hover:bg-green-400 rounded-full" onClick={() => { handleAdd(quantity) }}>guardar</button>
                    </div>
                </>
            }
        </>
    )
}

