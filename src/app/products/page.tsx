import Image from "next/image";

export default function productsPage() {
    return (
        <section className="mt-20 mb-10 lg:mx-2 bg-white grid grid-cols-1 lg:grid-cols-4 justify-items-center items-center gap-6">
            <div className="col-span-full bg-green-700 w-full text-center p-2 text-white text-2xl">Nuestros productos</div>

            {
                [0, 1].map(() =>
                    <>
                        <div className="group 
                        border border-gray bg-white 
                        lg:mx-2 lg:my-2
                        w-screen lg:w-full 
                        hover:bg-green-700
                        flex flex-col items-center">
                            <Image width={300} height={200} src={"/naranja.png"} alt="naranjas" className="transition duration-300 ease-in-out group-hover:scale-110" />
                            <p className="text-center pt-2 pb-1 group-hover:text-white">Naranjas</p>
                            <p className="text-center text-green-500 pb-2 group-hover:text-white">$500</p>
                        </div>
                        <div className="group 
                        border border-gray bg-white 
                        mx-2 lg:mx-2 lg:my-2 lg:mx-0 
                        w-screen lg:w-full 
                        hover:bg-green-700
                        flex flex-col items-center">
                            <Image width={300} height={200} src={"/manzana.png"} alt="naranjas" className="p-5 transition duration-300 ease-in-out group-hover:scale-110" />
                            <p className="text-center pt-2 pb-1 group-hover:text-white">Manzanas</p>
                            <p className="text-center text-green-500 pb-2 group-hover:text-white">$500</p>
                        </div>
                        <div className="group 
                        border border-gray bg-white 
                        mx-2 lg:mx-2 lg:my-2 lg:mx-0 
                        w-screen lg:w-full 
                        hover:bg-green-700
                        flex flex-col items-center">
                            <Image width={300} height={200} src={"/pera.png"} alt="naranjas" className="p-5 transition duration-300 ease-in-out group-hover:scale-110" />
                            <p className="text-center pt-2 pb-1 group-hover:text-white">Peras</p>
                            <p className="text-center text-green-500 pb-2 group-hover:text-white">$500</p>
                        </div>
                        <div className="group 
                        border border-gray bg-white 
                        mx-2 lg:mx-2 lg:my-2 lg:mx-0 
                        w-screen lg:w-full 
                        hover:bg-green-700
                        flex flex-col items-center">
                            <Image width={300} height={200} src={"/mandarina.png"} alt="naranjas" className="p-5 transition duration-300 ease-in-out group-hover:scale-110" />
                            <p className="text-center pt-2 pb-1 group-hover:text-white">Mandarinas</p>
                            <p className="text-center text-green-500 pb-2 group-hover:text-white">$500</p>
                        </div>
                    </>)
            }
        </section>
    );
}