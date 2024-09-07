import { products, NewProduct } from "@/db/schema/products";
import { varieties as Varieties } from "@/db/schema/varieties";
import db from "../../../../db";
import { eq } from "drizzle-orm";
import Link from "next/link";
import BackIcon from "@/components/icons/back";
import EditIcon from "@/components/icons/edit";
import DeleteIcon from "@/components/icons/delete";
import AddIcon from "@/components/icons/add";
import { redirect } from "next/navigation";

export default async function Page({ params }: { params: { product: string } }) {
    const productID = Number(params.product);
    const product = await db.query.products.findFirst({
        where: eq(products.id, productID)
    });
    const varieties = await db.select().from(Varieties).where(eq(Varieties.productId, productID));

    async function save(formData: FormData) {
        "use server"
        const productToUpdate: NewProduct = {
            name: formData.get("name") as string,
            image: formData.get("image") as string,
            createdAt: new Date()
        }

        try {
            const res = await db.update(products)
            .set(productToUpdate)
            .where(eq(products.id,productID));
        } catch (error) {
            console.log(error)
        }
        redirect(`/admin`)
    }

    return (
        <>
            <div className="mt-20 flex justify-around items-center">
                <Link href={`/admin/`}><BackIcon className="ml-2" /></Link>
                <h1 className="grow text-4xl text-center">Producto</h1>
            </div>
            <form action={save} className="mt-5 bg-white pb-5 rounded-xl mx-5 px-4">
                <div className="flex justify-center">
                    <h1 className="text-2xl">Propiedades</h1>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col justify-center">
                        <label htmlFor="">Nombre</label>
                        <input name="name" required defaultValue={product?.name} type="text" className="border w-full" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <label htmlFor="">Imagen</label>
                        <input name="image" required defaultValue={product?.image} type="text" className="border w-full" />
                    </div>
                </div>
                <div className="flex justify-center mt-8">
                    <button type="submit" className="bg-green-500 text-white rounded-xl p-2">Guardar</button>
                </div>
            </form>
            <div className="mt-5 bg-white pb-5 rounded-xl mx-5 px-4">
                <div className="flex justify-center mb-4">
                    <h1 className="text-2xl">Variedades</h1>
                </div>
                <div className="flex flex-col gap-2 divide-y">
                    {varieties.map((variety, i) =>
                        <div key={i} className="flex justify-around">
                            <Link href={`/admin/${productID}/${variety.id}`}>
                                {variety.name}
                            </Link>
                            <Link href={`/admin/${productID}/${variety.id}`}>
                                <EditIcon />
                            </Link>
                            <DeleteIcon />
                        </div>)}
                    <Link className="w-full text-center font-bold flex justify-center" href={`/admin/${productID}/new_variety`}><AddIcon />Nueva variedad</Link>
                </div>
            </div>
        </>
    );
}