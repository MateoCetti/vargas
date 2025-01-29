import { product, products } from "@/db/schema/products";
import db from "../../../../db";
import { eq } from "drizzle-orm";
import Link from "next/link";
import BackIcon from "@/components/icons/back";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import localFont from "next/font/local";

const myFont = localFont({
    src: '../../../../public/fonts/choco.woff2',
    display: 'swap',
    variable: '--font-choco',
  })

export default async function Page() {

    async function create(formData: FormData) {
        'use server'
        const res = await db.insert(products).values({name: formData.get("name"), image: formData.get("image")} as product);
        revalidatePath(`/admin`)
        redirect(`/admin`)
      }
    return (
        <form action={create}>
            <div className="mt-20 flex justify-around items-center">
                <Link href={`/admin/`}><BackIcon className="ml-2" /></Link>
                <h1 className={`grow text-4xl text-center ${myFont.className}`}>Nuevo producto</h1>
            </div>
            <div className="mt-5 bg-white pb-5 rounded-xl mx-5 px-4">
                <div className="flex justify-center">
                    <h1 className={`text-2xl ${myFont.className}`}>Propiedades</h1>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col justify-center">
                        <label htmlFor="">Nombre</label>
                        <input required name="name" type="text" className="border w-full" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <label htmlFor="">Imagen</label>
                        <input required name="image" type="text" className="border w-full" />
                    </div>
                </div>
            </div>

            <div className="mt-5 bg-white rounded-xl mx-5 px-4 flex justify-around py-2">
                <Link href={`/admin/`} className="bg-red-500 text-white rounded-xl p-2">Cancelar</Link>
                <button type="submit" className="bg-green-500 text-white rounded-xl p-2">Guardar</button>
            </div>
        </form>
    );
}