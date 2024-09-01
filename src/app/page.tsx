import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="bg-white shadow-md text-center">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col gap-4 justify-center items-center my-20">
            <h1 className="text-xl">¡Bienvenidos!</h1>
            <p >Somos comercializadores de productos fruti-hortícolas.</p>
          </div>
          <div className="flex justify-end hidden lg:block"><video src="video_2.mov" autoPlay loop muted playsInline /></div>
          <div>
            <Image
              src={"/naranjas.jpg"}
              width={1008}
              height={756}
              alt="Naranjas">
            </Image>
          </div>
          <div className="flex flex-col justify-center items-center my-20">
            <h1 className="text-xl mb-8">Productos</h1>
            <p className="my-4">Conocé acerca de nuestros productos de primera calidad.</p>
            <button className="mt-2 border border-black rounded rounded-full py-3 px-10 hover:bg-green-900 transition duration-300 hover:text-white ease-in-out hover:scale-110 delay-100"><Link href={"/main/products"}>Ver todos</Link></button>
          </div>
        </div>
      </section>
    </main>
  );
}
