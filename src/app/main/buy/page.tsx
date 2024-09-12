"use client"

import Image from "next/image";
import Link from "next/link";

import { useAppSelector } from "@/lib/hooks";
import { getImageId } from "@/utils";
import BackIcon from "@/components/icons/back";

export default function BuyPage() {
    const cart = useAppSelector((s) => s.persistedReducer.productsState.cart);
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
                        <p>{product.item.quantity}</p>
                        <p>{product.item.quantity*product.item.price}</p>
                    </div>)}
            </div>
            <div className="w-full flex justify-center">
                <Link href={'/main/buy/confirmPurchase'} className="text-center border rounded-full px-2 bg-green-700 text-white">Continuar</Link>
            </div>
        </section>
    )
}