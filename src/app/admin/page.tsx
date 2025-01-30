import EditIcon from "@/components/icons/edit";
import db from "../../../db"
import DeleteIcon from "@/components/icons/delete";
import Link from "next/link";
import AddIcon from "@/components/icons/add";
import { products as Products } from "@/db/schema/products";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import localFont from "next/font/local";

const myFont = localFont({
    src: '../../../public/fonts/choco.woff2',
    display: 'swap',
    variable: '--font-choco',
  })

export const fetchCache = 'force-no-store';

export default async function Page() {
    const products = await db.query.products.findMany();

    async function remove(formData: FormData) {
        "use server"
        const id = Number(formData.get("productID"));
        try {
            await db.delete(Products).where(eq(Products.id, id))
        } catch (error) {

        }
        revalidatePath(`/admin`);
        redirect("/admin")

    }
    return (
        <div className="bg-white mt-20 mb-10 h-full flex flex-col">
            <div className="flex justify-center">
                <h1 className={`text-4xl ${myFont.className}`}>Productos</h1>
            </div>
            <div className="grid grid-cols-3 place-items-center my-5 divide-y-2">
                <div className={`col-span-full place-self-stretch grid grid-cols-3 place-items-center bg-blue-500 text-white p-2 ${myFont.className}`}>
                    <p>Nombre</p>
                    <p>Editar</p>
                    <p>Borrar</p>
                </div>
                {
                    products.map((product, i) =>
                        <div key={i} className="col-span-full place-self-stretch grid grid-cols-3 place-items-center py-2 pt-4 hover:bg-blue-500 hover:text-white hover:font-bold hover:text-xl">
                            <Link href={`/admin/${product.id}`} className="place-self-start ms-10">
                                {product.name}
                            </Link>
                            <Link href={`/admin/${product.id}`}><EditIcon /></Link>
                            <form action={remove}><button name="productID" value={product.id}><DeleteIcon /></button></form>
                        </div>)
                }
            </div>

            <Link href={`/admin/new_product`} className="fixed bottom-5 right-5 bg-green-500 rounded-full p-2"><AddIcon /></Link>

        </div>)
}