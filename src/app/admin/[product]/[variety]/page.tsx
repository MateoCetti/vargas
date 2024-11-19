import { varieties, variety } from "@/db/schema/varieties";
import db from "../../../../../db";
import { eq } from "drizzle-orm";
import BackIcon from "@/components/icons/back";
import Link from "next/link";
import { products } from "@/db/schema/products";
import { redirect } from "next/navigation";

export default async function Page({ params }: { params: { variety: string } }) {
    const varietyID = Number(params.variety);
    const variety = await db.query.varieties.findFirst({
        where: eq(varieties.id, varietyID)
    });

    const product = await db.query.products.findFirst({
        where: eq(products.id, Number(variety?.productId))
    })

    async function save(formData: FormData){
        "use server"
        const varietyToUpdate: variety = {
            id: variety?.id as number,
            name: formData.get("name") as string,
            description: formData.get("description") as string,
            productId: variety?.productId as number,
            availability: Boolean(formData.get("availability")),
            img_src: formData.get("image") as string,
            price: Number(formData.get("price")),
            season: formData.get("season") as string,
            createdAt: variety?.createdAt as Date
        }

        try {
            const res = await db.update(varieties)
            .set(varietyToUpdate)
            .where(eq(varieties.id, variety?.id as number))
        } catch (error) {
            
        }
        redirect(`/admin/${Number(variety?.productId)}`)
    }

    return (
        <>
            <div className="mt-20 flex justify-around items-center">
                <Link href={`/admin/${variety?.productId}`}><BackIcon className="ml-2" /></Link>
                <h1 className="grow text-4xl text-center">Variedad</h1>
            </div>
            <div className="mt-5 bg-white pb-5 rounded-xl mx-5 px-4">
                <div className="flex justify-center">
                    <h1 className="text-2xl">Propiedades</h1>
                </div>
                <form action={save} className="mt-5 bg-white pb-5 rounded-xl mx-5 px-4">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col justify-center">
                        <label htmlFor="">Nombre</label>
                        <input name="name" defaultValue={variety?.name} required type="text" className="border w-full" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <label htmlFor="">Descripción</label>
                        <textarea name="description" defaultValue={variety?.description} required className="border w-full" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <label htmlFor="">Imagen</label>
                        <input name="image" defaultValue={variety?.img_src} required type="text" className="border w-full" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <label htmlFor="">Producto</label>
                        <input name="product" required value={product?.name} disabled type="text" className="border w-full" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <label htmlFor="">Precio</label>
                        <input name="price" defaultValue={variety?.price} required type="number" className="border w-full" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <label htmlFor="">Temporada</label>
                        <input name="season" defaultValue={variety?.season} required type="text" className="border w-full" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <label htmlFor="">Disponibilidad</label>
                        <input name="availability" defaultChecked={variety?.availability} type="checkbox" className="border w-full" />
                    </div>
                </div>
                <div className="mt-5 bg-white rounded-xl mx-5 px-4 flex justify-around py-2">
                    <Link href={`/admin/${variety?.productId}`} className="bg-red-500 text-white rounded-xl p-2">Cancelar</Link>
                    <button type="submit" className="bg-green-500 text-white rounded-xl p-2">Guardar</button>
                </div>
            </form>
            </div>
        </>
    );
}