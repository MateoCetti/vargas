import Image from "next/image";
import Link from "next/link";
import photo from "@/assets/photo.jpg"
import naranjas from "@/assets/naranjas.jpg"
import Footer from "@/components/footer";
import FacebookIcon from "@/components/icons/facebook";
import InstagramIcon from "@/components/icons/instagram";

export default function Home() {
  return (
    <main className="scroll-smooth font-serif">
      <section className="h-[800px] flex flex-col justify-between items-center bg-auto bg-no-repeat bg-center" style={{ backgroundImage: `URL(${photo.src}` }}>
        <Image src={"/logo_3.png"} width={100} height={100} alt={""}></Image>
        <div className="">
          <h1 className="text-white text-6xl text-center">Vargas Productos frescos</h1>
          <p className="text-white text-center text-xl">Somos comerciantes de productos frutihorticolas</p>
          <div className="flex justify-center gap-4 mt-2">
            <Link href={`/main/products`} className="p-2 bg-green-600 text-white rounded rounded-l hover:bg-white hover:text-black">Productos</Link>
            <Link href={`#about-us`} className="p-2 border border-2 text-white rounded rounded-l hover:bg-white hover:text-black">Sobre nosotros</Link>
          </div>
        </div>
        <div></div>
      </section>
      <div className="bg-green-600 relative">
        <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" className="absolute -top-4">
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
          <h1 className="text-6xl mt-[200px] font-bold">Una empresa, un legado de familia.</h1>
          <p className="mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nisl massa,
            bibendum ut augue non, luctus luctus lorem. Nam at tincidunt velit.
            Nulla facilisis metus risus, id sagittis lorem dictum sit amet.
            Morbi tempor mauris quis purus scelerisque, bibendum pulvinar est ornare.
          </p>
          <Link href={`/main/about_us`} className="p-3 text-xl self-start border border-black border-2 rounded rounded-l mt-6 hover:bg-black hover:text-white"> Lea nuestra historia de origen</Link>
        </div>
      </section>
      <div className="bg-white relative rotate-180">
        <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 43.9999C106.667 43.9999 213.333 7.99994 320 7.99994C426.667 7.99994 533.333 43.9999 640 43.9999C746.667 43.9999 853.333 7.99994 960 7.99994C1066.67 7.99994 1173.33 43.9999 1280 43.9999C1386.67 43.9999 1440 19.0266 1440 9.01329V100H0V43.9999Z"
            className="fill-current text-green-600"></path>
        </svg>
      </div>
      <section className="flex flex-col bg-white py-10 gap-5 justify-center items-center">
        <div className=" size-[350px] bg-auto bg-no-repeat rounded-xl shadow bg-center justify-self-center" style={{ backgroundImage: `URL(${naranjas.src}` }}></div>
        <div className="flex flex-col mx-5 items-center justify-center">
          <h1 className="text-6xl font-bold">Productos frescos y seleccionados</h1>
          <p className="mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nisl massa,
            bibendum ut augue non, luctus luctus lorem. Nam at tincidunt velit.
            Nulla facilisis metus risus, id sagittis lorem dictum sit amet.
            Morbi tempor mauris quis purus scelerisque, bibendum pulvinar est ornare.
          </p>
          <Link href={`/main/products`} className="p-3 border border-3 border-green-500 self-start rounded-xl font-bold mt-5">Ver nuestros productos</Link>
        </div>
      </section>
      <div className="bg-white relative">
        <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 43.9999C106.667 43.9999 213.333 7.99994 320 7.99994C426.667 7.99994 533.333 43.9999 640 43.9999C746.667 43.9999 853.333 7.99994 960 7.99994C1066.67 7.99994 1173.33 43.9999 1280 43.9999C1386.67 43.9999 1440 19.0266 1440 9.01329V100H0V43.9999Z"
            className="fill-current text-black"></path>
        </svg>
      </div>
      <section className="text-white flex flex-col bg-black py-10 gap-5 justify-center items-center">
        <h1 className="text-6xl text-center">¡Seguinos en nuestras redes!</h1>
        <div className="grid grid-cols-2 gap-10">
          <FacebookIcon fill="#fff" />
          <InstagramIcon fill="#fff" />
        </div>
      </section>
      <div className="bg-white relative rotate-180">
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
