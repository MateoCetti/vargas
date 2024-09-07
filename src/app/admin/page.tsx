import EditIcon from "@/components/icons/edit";
import db from "../../../db"
import DeleteIcon from "@/components/icons/delete";
import Link from "next/link";
import AddIcon from "@/components/icons/add";
import { products as Products } from "@/db/schema/products";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export default async function Page() {
    const products = await db.query.products.findMany();
    const rowClassName = "flex w-full h-10 items-center justify-around";

    async function remove(formData: FormData){
        "use server"
        const id = Number(formData.get("productID"));
        try {
            await db.delete(Products).where(eq(Products.id, id))
        } catch (error) {
            
        }
        revalidatePath(`/admin/`);
    }
    return (
        <div className="bg-white mt-20 mb-10 h-full flex flex-col">
            <div className="flex justify-center">
                <h1 className="text-4xl">Productos</h1>
            </div>
            <div className={rowClassName}>
                <p>Nombre</p>
                <p>Editar</p>
                <p>Borrar</p>
            </div>
            {
                products.map((product, i) =>
                    <div key={i} className={rowClassName}>
                        <Link href={`/admin/${product.id}`}>
                            {product.name}
                        </Link>
                        <Link href={`/admin/${product.id}`}><EditIcon /></Link>
                        <form action={remove}><button name="productID" value={product.id}><DeleteIcon /></button></form>
                    </div>)
            }

            <Link href={`/admin/new_product`} className="fixed bottom-5 right-5 bg-green-500 rounded-full p-2"><AddIcon /></Link>

        </div>)
}