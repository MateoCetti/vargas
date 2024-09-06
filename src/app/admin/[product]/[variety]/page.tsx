import { varieties } from "@/db/schema/varieties";
import db from "../../../../../db";
import { eq } from "drizzle-orm";
import BackIcon from "@/components/icons/back";
import Link from "next/link";

export default async function Page({ params }: { params: { variety: string } }) {
    const varietyID = Number(params.variety);
    const variety = await db.query.varieties.findFirst({
        where: eq(varieties.id, varietyID)
    });

    return (
        <>
            <div className="mt-20 flex justify-around items-center">
                <Link href={`/admin/${variety?.productId}`}><BackIcon className="ml-2" /></Link>
                <h1 className="grow text-4xl text-center">{variety?.name}</h1>
            </div>
            <div className="mt-5 bg-white pb-5 rounded-xl mx-5 px-4">
                <div className="flex justify-center">
                    <h1 className="text-2xl">Propiedades</h1>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col justify-center">
                        <label htmlFor="">Nombre</label>
                        <input defaultValue={variety?.name} type="text" className="border w-full" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <label htmlFor="">Imagen</label>
                        <input defaultValue={variety?.img_src} type="text" className="border w-full" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <label htmlFor="">Precio</label>
                        <input defaultValue={variety?.price} type="text" className="border w-full" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <label htmlFor="">Temporada</label>
                        <input defaultValue={variety?.season} type="text" className="border w-full" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <label htmlFor="">Descripción</label>
                        <input defaultValue={variety?.description} type="text" className="border w-full" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <label htmlFor="">Disponibilidad</label>
                        <input defaultChecked={variety?.availability} type="checkbox" className="border w-full" />
                    </div>
                </div>
            </div>
        </>
    );
}