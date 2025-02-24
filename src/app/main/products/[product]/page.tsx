import Image from "next/image";

import { eq } from "drizzle-orm";

import db from "../../../../../db";
import { varieties as Varieties } from "@/db/schema/varieties";
import { products } from "@/db/schema/products";

import Variety from "./variety";

import { getImageId } from "@/utils";
import BackIcon from "@/components/icons/back";
import Link from "next/link";
import localFont from "next/font/local";

const myFont = localFont({
    src: '../../../../../public/fonts/choco.woff2',
    display: 'swap',
    variable: '--font-choco',
})

export const fetchCache = 'force-no-store';
export const dynamic = 'force-dynamic'

export default async function Page({ params }: { params: { product: string } }) {
    const productID = Number(params.product);
    const product = await db.select().from(products).where(eq(products.id, productID))
    const varieties = await db.select().from(Varieties).where(eq(Varieties.productId, productID));

    return (
        <>
            <div className=" flex bg-white rounded-xl mb-5 mt-20 lg:mx-5 flex flex-col items-center py-5 px-1 lg:px-5">
                <div className="flex flex-row w-full justify-around">
                    <Link className="self-center" href={"/main/products"}><BackIcon /></Link>
                    <div className="flex self-center mb-10 gap-5">
                        <Image src={`https://drive.google.com/uc?id=${getImageId(product[0].image)}`} width={100} height={100} alt=""></Image>
                        <h1 className={`mt-10 text-xl ${myFont.className}`}>{product[0].name}</h1>
                    </div>
                    <div></div>
                </div>

                <div className="grid grid-cols-3 lg:grid-cols-4 w-full text-center text-xs lg:text-xl">
                    <div className="bg-green-700 py-4 text-white uppercase">Producto</div>
                    <div className="bg-green-700 py-4 text-white uppercase">Precio</div>
                    <div className="bg-green-700 py-4 text-white uppercase">Cantidad</div>
                    <div className="bg-green-700 py-4 text-white hidden uppercase lg:inline">Total</div>

                    {
                        varieties.map((v, i) =>
                            <Variety productName={product[0].name} variety={v} key={i}></Variety>
                        )
                    }
                </div>
            </div>
        </>
    );
}