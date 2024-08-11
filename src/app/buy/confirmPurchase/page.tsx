"use client"

export default function Page() {
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
                <button type="submit" className="col-span-2 lg:col-span-4 w-52 text-center border rounded-full px-2 bg-green-700 text-white">Confirmar compra</button>
            </form>
            {/* <a href={`https://wa.me/+5493516455611?text=sape`} >Continuar</a> */}
        </section>
    );
}