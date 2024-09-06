import EditIcon from "@/components/icons/edit";
import db from "../../../db"
import DeleteIcon from "@/components/icons/delete";
import Link from "next/link";
import AddIcon from "@/components/icons/add";

export default async function Page() {
    const products = await db.query.products.findMany();
    const rowClassName = "flex w-full h-10 items-center justify-around";
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
                        <DeleteIcon />
                    </div>)
            }

            <Link href={`/admin/new_product`} className="fixed bottom-5 right-5 bg-green-500 rounded-full p-2"><AddIcon /></Link>

        </div>)
}