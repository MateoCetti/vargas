"use client"

import Image from "next/image";
import Link from "next/link";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { getImageId } from "@/utils";
import BackIcon from "@/components/icons/back";
import { Item, updateItem } from "@/lib/features/storeSlice";

type Operation = "+" | "-"

export default function BuyPage() {
    const cart = useAppSelector((s) => s.persistedReducer.productsState.cart);

    const dispatch = useAppDispatch()

    function changeQuantity(operation: Operation, item: Item) {
        const newValue = operation === "+" ? item.item.quantity + 1 : item.item.quantity - 1
        if (newValue <= 0) return;
        const newItem: Item = {
            id: item.id,
            item: {
                name: item.item.name,
                picture: item.item.picture,
                quantity: newValue,
                price: item.item.price
            }
        }
        dispatch(updateItem(newItem));
    }
    return (
        <section className="mt-20 mb-10 bg-white mx-2 py-5">
            <div className="flex justify-around my-5 items-center">
                <Link href={"/main/products"}><BackIcon /></Link>
                <h1 className="text-4xl text-center">Carrito</h1>
                <div></div>
            </div>
            <div className="grid grid-cols-4 justify-center items-center text-center bg-gray-200 mx-4 my-5">
                <div className="col-span-4 grid grid-cols-4 bg-green-700 text-white">
                    <p>Producto</p>
                    <div></div>
                    <p>Cantidad</p> {/*TODO: hacer quantity variable aca tmb*/}
                    <p>precio</p>
                </div>
                {cart.map((product, i) =>
                    <div key={i} className="col-span-4 grid grid-cols-4 justify-center items-center text-center justify-items-center">
                        <p>{product.item.name}</p>
                        <Image src={`https://drive.google.com/uc?id=${getImageId(product.item.picture)}`} alt="image" width={50} height={"50"}></Image>
                        <div className="flex ">
                            <button className="bg-green-700 hover:bg-green-400 border border-gray-300 rounded-s-full p-1 lg:p-3  focus:ring-gray-100 focus:ring-2 focus:outline-none"
                                onClick={(e) => { changeQuantity("-", product) }}>
                                <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                    <path stroke="currentColor" d="M1 1h16" />
                                </svg>
                            </button>
                            <input type="number" className="bg-gray-50 border-x-0 border-gray-300 text-center text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-10 py-1 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                value={product.item.quantity} onChange={() => { }} />
                            <button className="bg-green-700  hover:bg-green-400 border border-gray-300 rounded-e-full p-1 lg:p-3 focus:ring-gray-100 focus:ring-2 focus:outline-none"
                                onClick={(e) => { changeQuantity("+", product) }}>
                                <svg className="h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    <path stroke="currentColor" d="M9 1v16M1 9h16" />
                                </svg>
                            </button>
                        </div>
                        <p>{product.item.quantity * product.item.price}</p>
                    </div>)}
            </div>
            <div className="w-full flex justify-center">
                <Link href={'/main/buy/confirmPurchase'} className="text-center border rounded-full px-2 bg-green-700 text-white">Continuar</Link>
            </div>
        </section>
    )
}

function setItem(newItem: Item) {
    throw new Error("Function not implemented.");
}
