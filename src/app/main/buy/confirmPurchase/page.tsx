"use client"

import { useEffect, useState } from "react";

import { useAppSelector } from "@/lib/hooks";
import { useRouter } from "next/navigation";
import BackIcon from "@/components/icons/back";
import Link from "next/link";
import localFont from "next/font/local";

const myFont = localFont({
    src: '../../../../../public/fonts/choco.woff2',
    display: 'swap',
    variable: '--font-choco',
})

export default function Page() {
    const cart = useAppSelector((s) => s.persistedReducer.productsState.cart);
    const [show, setShow] = useState<boolean>(false);
    const router = useRouter();

    const [totalQuantity, setTotalQuantity] = useState<Number>(0);
    const [totalPrice, setTotalPrice] = useState<Number>(0);

    useEffect(() => {
        let [quantity, price] = [0, 0];
        cart.forEach(item => {
            quantity += item.item.quantity,
            price += item.item.price
        })
        setTotalQuantity(quantity)
        setTotalPrice(price)
    }, [])

    async function buy(formData: FormData) {

        const userData = {
            name: `${formData.get("name")} ${formData.get("surname")}`,
            phone: formData.get("phone") as string,
            email: formData.get("email") as string,
        }

        let text = `¡Hola, Soy ${userData.name} y quiero hacer un pedido 🍋!\n\n`;
        text += `Estaría necesitando:\n\n`;
        cart.forEach(item => text +=` - ${item.item.quantity} ${item.item.name}\n`);
        text += `\nDatos personales:\n - Nombre y apellido: ${userData.name}\n - Telefono: ${userData.phone}\n`

        const url = `https://api.whatsapp.com/send/?phone=+5493513252930&text=${encodeURIComponent(text)}`
        router.push(url)
    }

    return (
        <section className="mt-20 mb-10 bg-white rounded-xl mx-2 py-5">
            <div className="flex my-5 items-center justify-around">
                <Link href={"/main/buy"}><BackIcon /></Link>
                <h1 className={`text-4xl ${myFont.className} text-center`}>Llena el formulario</h1>
                <div></div>
            </div>
            <form action={buy} className="grid grid-cols-2 lg:grid-cols-4 mx-5 justify-items-center gap-2 ">
                <div className="col-span-2 flex flex-col ">
                    <label htmlFor="">Nombre</label>
                    <input name="name" type="text" required className="p-3 border" />
                </div>
                <div className="col-span-2 flex flex-col ">
                    <label htmlFor="">Apellido</label>
                    <input name="surname" type="text" required className="p-3 border" />
                </div>
                <div className="col-span-2 flex flex-col ">
                    <label htmlFor="">Telefono</label>
                    <input name="phone" type="phone" required className="p-3 border" />
                </div>
                <div className="col-span-2 flex flex-col ">
                    <label htmlFor="">Email</label>
                    <input name="email" type="email" required className="p-3 border" />
                </div>


                <div className="col-span-2 lg:col-span-4 w-full">
                    <h2 id="accordion-collapse-heading-2">
                        <button onClick={() => setShow(!show)} type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border  focus:ring-4 focus:ring-green-200 gap-3">
                            <span>Compra</span>
                            <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                            </svg>
                        </button>
                    </h2>
                    <div id="accordion-collapse-body-2" className={`${!show && "hidden"}`} aria-labelledby="accordion-collapse-heading-2">
                        <div className="p-5 border grid grid-cols-3">
                            <div className={`col-span-3 py-3 grid grid-cols-3 bg-green-800 text-white font-bold justify-items-center ${myFont.className}`}>
                                <p>Nombre</p>
                                <p>Cantidad</p>
                                <p>Subtotal</p>
                            </div>
                            {cart.map((product, i) =>
                                <div key={i} className="text-center col-span-3 py-2 grid grid-cols-3">
                                    <p>{product.item.name}</p>
                                    <p>{product.item.quantity}</p>
                                    <p>{product.item.price}</p>
                                </div>
                            )}
                            <div className="col-span-3 grid grid-cols-3 py-2 text-center font-bold bg-green-800 text-white">
                                <p>Total: </p>
                                <p>{totalQuantity.toString()}</p>
                                <p>{totalPrice.toString()}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="submit" className="col-span-2 lg:col-span-4 w-52 text-center border rounded-full px-2 bg-green-700 text-white">Confirmar compra</button>
            </form>
        </section>
    );
}