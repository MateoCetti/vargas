import { products } from "@/db/schema/products";
import { varieties as Varieties } from "@/db/schema/varieties";
import db from "../../../../db";
import { eq } from "drizzle-orm";
import Link from "next/link";
import BackIcon from "@/components/icons/back";

export default async function Page({ params }: { params: { product: string } }) {
    const productID = Number(params.product);
    const product = await db.query.products.findFirst({
        where: eq(products.id, productID)
    });
    const varieties = await db.select().from(Varieties).where(eq(Varieties.productId, productID));

    return (
        <>
            <div className="mt-20 flex justify-around items-center">
                <Link href={`/admin/`}><BackIcon className="ml-2" /></Link>
                <h1 className="grow text-4xl text-center">{product?.name}</h1>
            </div>
            <div className="mt-5 bg-white pb-5 rounded-xl mx-5 px-4">
                <div className="flex justify-center">
                    <h1 className="text-2xl">Propiedades</h1>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col justify-center">
                        <label htmlFor="">Nombre</label>
                        <input defaultValue={product?.name} type="text" className="border w-full" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <label htmlFor="">Imagen</label>
                        <input defaultValue={product?.image} type="text" className="border w-full" />
                    </div>
                </div>
            </div>
            <div className="mt-5 bg-white pb-5 rounded-xl mx-5 px-4">
                <div className="flex justify-center mb-4">
                    <h1 className="text-2xl">Variedades</h1>
                </div>
                <div className="flex flex-col gap-2 divide-x">
                {varieties.map((variety) => <div className="flex justify-center"><Link href={`/admin/${productID}/${variety.id}`}>{variety.name}</Link></div>)}
                </div>
            </div>
        </>
    );
}