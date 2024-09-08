"use client"

import { login } from "../../../auth"
import { useFormStatus } from "react-dom";

export default function Page() {
    const { pending } = useFormStatus();
    return (
        <div className="h-screen w-full flex items-center justify-center">
            <div className="bg-white p-5 rounded-lg">
                <form action={login} className="flex flex-col">
                    <label htmlFor="">email</label>
                    <input type="email" name="email" className="border rounded-lg" />
                    <label htmlFor="">Contraseña</label>
                    <input type="password" name="password" className="border rounded-lg" />
                    <button disabled={pending} type="submit">dasad</button>
                </form>
            </div>
        </div>
    )
}