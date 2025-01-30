"use client"

import { login } from "../../../auth"
import { useFormState } from "react-dom";
import Image from "next/image";
import localFont from "next/font/local";

const myFont = localFont({
    src: '../../../public/fonts/choco.woff2',
    display: 'swap',
    variable: '--font-choco',
})

export default function Page() {
    const [state, formAction] = useFormState(login, { message: "" });
    return (
        <div className="flex flex-col mt-24">
            <div className="self-center place-items-center me-10 flex gap-5">
                <Image alt="" src={"/logo_1.png"} width={250} height={250} />
                <h1 className={`mt-8 text-6xl ${myFont.className}`}>Admin</h1>
            </div>
            <div className="h-max grow flex items-center justify-center gap-2 flex items-center justify-center mt-10">
                <div className="bg-white p-5 rounded-lg">
                    <form action={formAction} className="flex flex-col">
                        <label htmlFor="">email</label>
                        <input type="email" name="email" className="border rounded-lg" />
                        <label htmlFor="">Contraseña</label>
                        <input type="password" name="password" className="border rounded-lg" />
                        <p className="text-red-500 text-center">{state?.message}</p>
                        <button type="submit" className="p-2 bg-blue-600 mt-2 text-white rounded-xl">Iniciar sesión</button>
                    </form>
                </div>
            </div>
        </div>
    )
}