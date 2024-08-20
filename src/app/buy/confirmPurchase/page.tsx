"use client"

import { useState } from "react";

import { useAppSelector } from "@/lib/hooks";

export default function Page() {
    const cart = useAppSelector((s) => s.persistedReducer.productsState.cart);
    const [show, setShow] = useState<boolean>(false);

    return (
        <section className="mt-20 mb-10 bg-white rounded-xl mx-2 pb-5">
            <form action="" className="grid grid-cols-2 lg:grid-cols-4 mx-5 justify-items-center gap-2 ">
                <div className="col-span-2 flex flex-col ">
                    <label htmlFor="">Nombre</label>
                    <input type="text" required className="p-3 border" />
                </div>
                <div className="col-span-2 flex flex-col ">
                    <label htmlFor="">Apellido</label>
                    <input type="text" required className="p-3 border" />
                </div>
                <div className="col-span-2 flex flex-col ">
                    <label htmlFor="">Telefono</label>
                    <input type="text" required className="p-3 border" />
                </div>
                <div className="col-span-2 flex flex-col ">
                    <label htmlFor="">Email</label>
                    <input type="text" required className="p-3 border" />
                </div>
                <div className="col-span-2 flex flex-col ">
                    <label htmlFor="">Provincia</label>
                    <input type="text" required className="p-3 border" />
                </div>
                <div className="col-span-2 flex flex-col ">
                    <label htmlFor="">Calle</label>
                    <input type="text" required className="p-3 border" />
                </div>
                <div className="col-span-2 flex flex-col ">
                    <label htmlFor="">Numero</label>
                    <input type="text" required className="p-3 border" />
                </div>
                <div className="col-span-2 flex flex-col ">
                    <label htmlFor="">Barrio</label>
                    <input type="text" required className="p-3 border" />
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
                        <div className="p-5 border flex flex-col text-center">
                            <div className="flex flex-row gap-4 w-full justify-around">
                                <p>Nombre</p>
                                <p>Cantidad</p>
                                <p>Total</p>
                                <br />
                            </div>
                            {cart.map((product) =>
                                <div className="flex flex-row gap-4 w-full justify-around">
                                    <p>{product.item.name}</p>
                                    <p>{product.item.quantity}</p></div>)}
                        </div>
                    </div>
                </div>
                <button type="submit" className="col-span-2 lg:col-span-4 w-52 text-center border rounded-full px-2 bg-green-700 text-white">Confirmar compra</button>
            </form>

            {/* <a href={`https://wa.me/+5493516455611?text=sape`} >Continuar</a> */}
        </section>
    );
}