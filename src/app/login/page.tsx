"use client"

import { login } from "../../../auth"
import { useFormState } from "react-dom";

export default function Page() {
    const [state, formAction] = useFormState(login, {message: ""});
    return (
        <div className="h-screen w-full flex items-center justify-center gap-2">
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
    )
}