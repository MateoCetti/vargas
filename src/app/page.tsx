import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="bg-white mt-20 shadow-md mb-4">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col gap-4 justify-center items-center">
            <h1 className="text-xl">¡Bienvenidos!</h1>
            <p>Somos comercializadores de productos fruti-hortícolas.</p>
          </div>
          <div className="flex justify-end"><video src="video_2.mov" autoPlay loop muted playsInline /></div>
          <div>
            <Image
              src={"/naranjas.jpg"}
              width={1008}
              height={756}
              alt="Naranjas">
            </Image>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-xl mb-8">Productos</h1>
            <p className="my-4">Conocé acerca de nuestros productos de primera calidad.</p>
            <button className="mt-2 border border-black rounded rounded-full py-3 px-10">Ver todos</button>
          </div>
        </div>
      </section>
    </main>
  );
}
