import { eq } from "drizzle-orm";
import db from "../../../../../db";
import { products } from "@/db/schema/products";
import { varieties, NewVariety } from "@/db/schema/varieties";
import { redirect } from "next/navigation";
import Link from "next/link";
import BackIcon from "@/components/icons/back";

export default async function Page({ params }: { params: { product: string } }) {
    const productID = Number(params.product);
    const product = await db.query.products.findFirst({
        where: eq(products.id, productID)
    });

    async function create(formData: FormData) {
        'use server'
        const newVariety: NewVariety = {
            name: formData.get("name") as string,
            description: formData.get("description") as string,
            productId: productID,
            availability: Boolean(formData.get("availability")),
            img_src: formData.get("image") as string,
            price: Number(formData.get("price")),
            season: formData.get("season") as string,
            createdAt: new Date()
        }
        console.log(newVariety)
        try {
            const res = await db.insert(varieties).values(newVariety);
        } catch (error) {1
            console.log(error)
        }
        redirect(`/admin/${String(productID)}`)
    }

    return (
        <>

            <div className="mt-20 flex justify-around items-center">
                <Link href={`/admin/${productID}`}><BackIcon className="ml-2" /></Link>
                <h1 className="text-4xl">Nueva variedad</h1>
            </div>
            <form action={create} className="mt-5 bg-white pb-5 rounded-xl mx-5 px-4">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col justify-center">
                        <label htmlFor="">Nombre</label>
                        <input name="name" required type="text" className="border w-full" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <label htmlFor="">Descripción</label>
                        <input name="description" required type="text" className="border w-full" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <label htmlFor="">Imagen</label>
                        <input name="image" required type="text" className="border w-full" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <label htmlFor="">Producto</label>
                        <input name="product" required value={product?.name} disabled type="text" className="border w-full" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <label htmlFor="">Precio</label>
                        <input name="price" required type="number" className="border w-full" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <label htmlFor="">Temporada</label>
                        <input name="season" required type="text" className="border w-full" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <label htmlFor="">Disponibilidad</label>
                        <input name="availability" required type="checkbox" className="border w-full" />
                    </div>
                </div>
                <div className="mt-5 bg-white rounded-xl mx-5 px-4 flex justify-around py-2">
                    <Link href={`/admin/${productID}/`} className="bg-red-500 text-white rounded-xl p-2">Cancelar</Link>
                    <button type="submit" className="bg-green-500 text-white rounded-xl p-2">Guardar</button>
                </div>
            </form>
        </>
    )
}