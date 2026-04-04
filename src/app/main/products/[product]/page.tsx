import Image from "next/image";
import { notFound } from "next/navigation";

import { PRODUCTS } from "@/data/products";
import Variety from "./variety";
import BackIcon from "@/components/icons/back";
import Link from "next/link";
import localFont from "next/font/local";

const myFont = localFont({
    src: '../../../../../public/fonts/choco.woff2',
    display: 'swap',
    variable: '--font-choco',
})

export default function Page({ params }: { params: { product: string } }) {
    const productID = Number(params.product);
    const product = PRODUCTS.find((p) => p.id === productID);

    if (!product) notFound();

    return (
        <div className="flex bg-white rounded-xl mb-5 mt-20 lg:mx-5 flex-col items-center py-5 px-1 lg:px-5">
            <div className="flex flex-row w-full justify-around">
                <Link className="self-center" href={"/main/products"}><BackIcon /></Link>
                <div className="flex self-center mb-10 gap-5">
                    <Image src={product.image} width={100} height={100} alt={product.name} />
                    <h1 className={`mt-10 text-xl ${myFont.className}`}>{product.name}</h1>
                </div>
                <div></div>
            </div>

            <div className="grid grid-cols-3 w-full text-center text-xs lg:text-xl">
                <div className="bg-green-700 py-4 text-white uppercase">Producto</div>
                <div className="bg-green-700 py-4 text-white uppercase">Precio</div>
                <div className="bg-green-700 py-4 text-white uppercase">Disponibilidad</div>

                {product.varieties.map((v, i) => (
                    <Variety variety={v} key={i} />
                ))}
            </div>
        </div>
    );
}