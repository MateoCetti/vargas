import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="bg-white mt-20 shadow-md mb-4 text-center">
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
            <button className="mt-2 border border-black rounded rounded-full py-3 px-10"><Link href={"/products"}>Ver todos</Link></button>
          </div>
        </div>
      </section>
    </main>
  );
}
