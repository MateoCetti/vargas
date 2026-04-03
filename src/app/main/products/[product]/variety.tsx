import Image from "next/image";
import { variety } from "@/db/schema/varieties";

export default function Variety({ variety }: { variety: variety }) {
    return (
        <div className="col-span-3 grid grid-cols-3 w-full text-center items-center">
            <div className="flex items-center justify-center gap-5">
                <Image src={variety.img_src} width={100} height={100} alt="" />
                <p>{variety.name}</p>
            </div>
            {variety.availability ? <p>{variety.price}</p> : <p>---</p>}
            <h1 className={`font-bold rounded-xl p-2 ${variety.availability ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}>
                {variety.availability ? "Disponible" : "No disponible"}
            </h1>
        </div>
    );
}
