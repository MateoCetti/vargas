import Image from "next/image";
import Link from "next/link";
import photo from "@/assets/photo.jpg"
import naranjas from "@/assets/naranjas.jpg"
import Footer from "@/components/footer";
import FacebookIcon from "@/components/icons/facebook";
import InstagramIcon from "@/components/icons/instagram";

import localFont from 'next/font/local'

const myFont = localFont({
  src: '../../public/fonts/choco.woff2',
  display: 'swap',
  variable: '--font-choco',
})

export default function Home() {
  return (
    <main>
      <section className="h-[800px] flex flex-col justify-between items-center bg-auto bg-no-repeat bg-center" style={{ backgroundImage: `URL(${photo.src}` }}>
        <Image src={"/logo_3.png"} width={100} height={100} alt={""}></Image>
        <div className="">
          <h1 className={`text-white text-6xl text-center ${myFont.className}`}>Vargas Productos frescos</h1>
          <div className="flex justify-center gap-4 mt-10">
            <Link href={`/main/products`} className="p-2 bg-green-600 text-white rounded rounded-l hover:bg-white hover:text-black">Productos</Link>
            <Link href={`#about-us`} className="p-2 border border-2 text-white rounded rounded-l hover:bg-white hover:text-black">Sobre nosotros</Link>
          </div>
        </div>
        <div></div>
      </section>

      <div className="bg-green-600 relative">
        <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" className="absolute -top-5 lg:-top-20">
          <path
            d="M0 43.9999C106.667 43.9999 213.333 7.99994 320 7.99994C426.667 7.99994 533.333 43.9999 640 43.9999C746.667 43.9999 853.333 7.99994 960 7.99994C1066.67 7.99994 1173.33 43.9999 1280 43.9999C1386.67 43.9999 1440 19.0266 1440 9.01329V100H0V43.9999Z"
            className="fill-current text-green-600"></path>
        </svg>
      </div>
      <section id="about-us" className="bg-green-600 h-500 pb-5 relative">
        <div className="flex justify-center h-500 bg-white">
          <Image src={"/naranja.png"} className="absolute -top-40" width={400} height={100} alt="sape"></Image>
        </div>
        <div className="flex flex-col items-center h-full mx-5">
          <h1 className={`text-5xl mt-[200px] font-bold ${myFont.className}`}>Una empresa, un legado de familia.</h1>
          <p className="mt-5">
            Conozca más acerca de lo que fue, y es Vargas una empresa dedicada al comercio y cuidado de alimentos frescos que llegan a nuestros hogares para sacar una sonrisa en la mesa de las familias pudiendo así con cada producto de primera calidad acercar a los lugares en donde se elaboran los mismos en cada rincon de nuestro país.
          </p>
          <Link href={`/main/about_us`} className="p-3 text-xl self-start lg:self-center border border-black border-2 rounded rounded-l mt-6 hover:bg-black hover:text-white"> Ver mas</Link>
        </div>
      </section>
      <div className="relative rotate-180 -translate-y-1">
        <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 43.9999C106.667 43.9999 213.333 7.99994 320 7.99994C426.667 7.99994 533.333 43.9999 640 43.9999C746.667 43.9999 853.333 7.99994 960 7.99994C1066.67 7.99994 1173.33 43.9999 1280 43.9999C1386.67 43.9999 1440 19.0266 1440 9.01329V100H0V43.9999Z"
            className="fill-current text-green-600"></path>
        </svg>
      </div>
      <section className="bg-white py-10 gap-5 justify-center items-center">
        <div className="flex justify-center mb-10">
          <div className="size-[350px] bg-auto bg-no-repeat rounded-xl shadow bg-center" style={{ backgroundImage: `URL(${naranjas.src}` }}></div>
        </div>
        <div className="flex flex-col px-4 items-center justify-center">
          <h1 className={`text-5xl font-bold ${myFont.className}`}>Productos frescos y seleccionados</h1>
          <p className="mt-5">
            Conozca acerca de los productos que comercializamos buscando siempre cuidar su economía sin dejar de lado la calidad donde hacemos mucha hincapié para que puedan sentir el amor que transmitimos a través de los mismos.
          </p>
          <Link href={`/main/products`} className="p-3 border border-3 border-green-500 self-start lg:self-center rounded-xl font-bold mt-5 hover:bg-green-600 hover:text-white">Ver nuestros productos</Link>
        </div>
      </section>
      <div className="relative">
        <svg viewBox="0 -3 1440 99" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 43.9999C106.667 43.9999 213.333 7.99994 320 7.99994C426.667 7.99994 533.333 43.9999 640 43.9999C746.667 43.9999 853.333 7.99994 960 7.99994C1066.67 7.99994 1173.33 43.9999 1280 43.9999C1386.67 43.9999 1440 19.0266 1440 9.01329V100H0V43.9999Z"
            className="fill-current text-black"></path>
        </svg>
      </div>
      <section className="text-white flex flex-col bg-black py-10 gap-5 justify-center items-center">
        <h1 className={`text-3 text-center ${myFont.className}`}>¡Seguinos en nuestras redes!</h1>
        <div className="grid grid-cols-2 gap-10">
          <a target="_blank" href="https://www.facebook.com/vargas.cba" >
            <FacebookIcon fill="#fff" />
          </a>
          <a target="_blank" href="https://www.instagram.com/vargas.productosfrescos/">
            <InstagramIcon fill="#fff" />
          </a>
        </div>
      </section>
      <div className="relative rotate-180 -translate-y-1 border-0">
        <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 43.9999C106.667 43.9999 213.333 7.99994 320 7.99994C426.667 7.99994 533.333 43.9999 640 43.9999C746.667 43.9999 853.333 7.99994 960 7.99994C1066.67 7.99994 1173.33 43.9999 1280 43.9999C1386.67 43.9999 1440 19.0266 1440 9.01329V100H0V43.9999Z"
            className="fill-current text-black"></path>
        </svg>
      </div>
      <Footer></Footer>
    </main>
  );
}
