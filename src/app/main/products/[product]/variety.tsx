"use client"

import { useState } from "react";

import { variety } from "@/db/schema/varieties";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { updateItem, isInCart, Item } from "@/lib/features/storeSlice";

export default function Variety({ variety }: { variety: variety }) {
    const store = useAppSelector((s) => s.persistedReducer.productsState.cart);
    const dispatch = useAppDispatch()
    const isItem = isInCart(store, variety.id)
    const [item, setItem] = useState<Item>(isItem ? isItem :
        {
            id: variety.id,
            item: {
                name: variety.name,
                picture: variety.img_src,
                quantity: 0,
                price: variety.price
            }
        })

    function changeQuantity(value: number) {
        if(value < 0) return;
        const newItem: Item = {
            id: item.id,
            item: {
                name: item.item.name,
                picture: item.item.picture,
                quantity: value,
                price: item.item.price
            }
        }
        setItem(newItem);
        dispatch(updateItem(newItem));
    }

    return (
        <>
            <div className="col-span-3 lg:col-span-4 grid grid-cols-3 lg:grid-cols-4 w-full text-center items-center">
                <p>{variety.name}</p>
                <p>{variety.price}</p>
                <div className="relative flex items-center justify-center">
                    <button className="bg-green-700 hover:bg-green-400 border border-gray-300 rounded-s-full p-1 lg:p-3  focus:ring-gray-100 focus:ring-2 focus:outline-none"
                        onClick={(e) => { changeQuantity(item.item.quantity-1)}}>
                        <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                            <path stroke="currentColor" d="M1 1h16" />
                        </svg>
                    </button>
                    <input type="number" className="bg-gray-50 border-x-0 border-gray-300 text-center text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-10 py-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={item.item.quantity} onChange={() => { }} />
                    <button className="bg-green-700  hover:bg-green-400 border border-gray-300 rounded-e-full p-1 lg:p-3 focus:ring-gray-100 focus:ring-2 focus:outline-none"
                        onClick={(e) => { changeQuantity(item.item.quantity+1)}}>
                        <svg className="h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" d="M9 1v16M1 9h16" />
                        </svg>
                    </button>
                </div>
                <p className="hidden lg:inline">{ variety.price* item.item.quantity}</p>
            </div>
        </>
    );
};