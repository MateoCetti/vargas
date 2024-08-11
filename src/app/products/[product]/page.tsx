import Image from "next/image";

import { eq } from "drizzle-orm";

import db from "../../../../db";
import { varieties as Varieties } from "@/db/schema/varieties";
import { products } from "@/db/schema/products";

import Variety from "./variety";

export default async function Page({ params }: { params: { product: string } }) {
    const productID = Number(params.product);
    const product = await db.select().from(products).where(eq(products.id, productID))
    const varieties = await db.select().from(Varieties).where(eq(Varieties.productId, productID));

    return (
        <>
            <div className=" flex bg-white rounded-xl mb-5 mt-20 mx-5 flex flex-col items-center p-5">
                <div className="flex flex-row w-full justify-center">
                    <Image src={product[0].image} width={100} height={100} alt=""></Image>
                    <h1 className="mt-10 text-4xl">{product[0].name}</h1>
                </div>

                <div className="grid grid-cols-3 lg:grid-cols-4 w-full text-center">
                    <div className="bg-green-700 py-4 text-white">Producto</div>
                    <div className="bg-green-700 py-4 text-white">Precio</div>
                    <div className="bg-green-700 py-4 text-white">Cantidad</div>
                    <div className="bg-green-700 py-4 text-white hidden lg:inline">Total</div>

                    {
                        varieties.map((v, i) =>
                            <Variety variety={v} key={i}></Variety>
                        )
                    }
                </div>
            </div>
        </>
    );
}