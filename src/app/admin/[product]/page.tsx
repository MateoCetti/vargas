import { products, product } from "@/db/schema/products";
import { varieties as Varieties } from "@/db/schema/varieties";
import db from "../../../../db";
import { eq } from "drizzle-orm";
import Link from "next/link";
import BackIcon from "@/components/icons/back";
import EditIcon from "@/components/icons/edit";
import DeleteIcon from "@/components/icons/delete";
import AddIcon from "@/components/icons/add";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import localFont from "next/font/local";

const myFont = localFont({
    src: '../../../../public/fonts/choco.woff2',
    display: 'swap',
    variable: '--font-choco',
  })

export const fetchCache = 'force-no-store';

export default async function Page({ params }: { params: { product: string } }) {
    const productID = Number(params.product);
    const product = await db.query.products.findFirst({
        where: eq(products.id, productID)
    });
    const varieties = await db.select().from(Varieties).where(eq(Varieties.productId, productID));

    async function save(formData: FormData) {
        "use server"
        const productToUpdate: product = {
            id: product?.id as number,
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
        revalidatePath(`/admin`)
        redirect(`/admin`)
    }

    async function remove(formData: FormData){
        "use server"
        const id = Number(formData.get("varietyID"));
        try {
            await db.delete(Varieties).where(eq(Varieties.id, id))
        } catch (error) {
            
        }
        revalidatePath(`/admin/${productID}`);
    }

    return (
        <>
            <div className="mt-20 flex justify-around items-center">
                <Link href={`/admin/`}><BackIcon className="ml-2" /></Link>
                <h1 className={`grow text-4xl text-center ${myFont.className}`}>Producto</h1>
            </div>
            <form action={save} className="mt-5 bg-white pb-5 rounded-xl mx-5 px-4">
                <div className="flex justify-center">
                    <h1 className={`text-2xl ${myFont.className}`}>Propiedades</h1>
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
                    <h1 className={`text-2xl ${myFont.className}`}>Variedades</h1>
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
                            <form action={remove}><button type="submit" name="varietyID" value={variety.id}><DeleteIcon /></button></form>
                        </div>)}
                    <Link className="w-full text-center font-bold flex justify-center" href={`/admin/${productID}/new_variety`}><AddIcon />Nueva variedad</Link>
                </div>
            </div>
        </>
    );
}