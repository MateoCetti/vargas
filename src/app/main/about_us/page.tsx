import EyeIcon from "@/components/icons/eye";
import MountainIcon from "@/components/icons/mountain";
import StarIcon from "@/components/icons/star";
import Image from "next/image";

export default function AboutUsPage() {
    return (
        <section className="mt-20 mb-6 bg-white shadow py-5">
            <div className="bg-green-900 text-center py-4 text-white text-xl">Una empresa - Un legado de familia.</div>
            <h1 className="text-center text-4xl font-bold my-10">Nuestra historia</h1>
            <p className="mb-24">{text}</p>

            <div className="bg-green-600 relative">
                <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" className="absolute -top-5 lg:-top-20">
                    <path
                        d="M0 43.9999C106.667 43.9999 213.333 7.99994 320 7.99994C426.667 7.99994 533.333 43.9999 640 43.9999C746.667 43.9999 853.333 7.99994 960 7.99994C1066.67 7.99994 1173.33 43.9999 1280 43.9999C1386.67 43.9999 1440 19.0266 1440 9.01329V100H0V43.9999Z"
                        className="fill-current text-green-600"></path>
                </svg>
            </div>
            <div className="relative rotate-180 -translate-y-1">
                <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0 43.9999C106.667 43.9999 213.333 7.99994 320 7.99994C426.667 7.99994 533.333 43.9999 640 43.9999C746.667 43.9999 853.333 7.99994 960 7.99994C1066.67 7.99994 1173.33 43.9999 1280 43.9999C1386.67 43.9999 1440 19.0266 1440 9.01329V100H0V43.9999Z"
                        className="fill-current text-green-600"></path>
                </svg>
            </div>

            <div>
                <h1 className="text-4xl text-center font-bold my-10">Nuestra empresa</h1>
                <div className="flex flex-col text-center lg:flex-row justify-center items-top gap-32 lg:gap-32 mb-20 self-start">
                    <div className="max-w-[400px] flex flex-col justify-center items-center">
                        <div className="border border-2 border-[#16a34a] rounded-full p-5 my-5">
                            <MountainIcon fill="#16a34a" width={50} height={50} />
                        </div>
                        <h1 className="text-xl font-bold m-5">misión</h1>
                        <p>Nuestra misión es proporcionar productos y servicios de alta calidad, basados en décadas de experiencia y conocimiento en la industria. Nos comprometemos a construir relaciones de confianza con nuestros clientes y socios, impulsando la innovación y la excelencia. Además, buscamos contribuir al bienestar de nuestra comunidad y al cuidado del medio ambiente a través de prácticas sostenibles y responsables.</p>
                    </div>
                    <div className="max-w-[400px] flex flex-col justify-center items-center self-start">
                        <div className="border border-2 border-[#16a34a] rounded-full p-5 my-5">
                            <EyeIcon fill="#16a34a" width={50} height={50} />
                        </div>
                        <h1 className="text-xl font-bold m-5">Visión</h1>
                        <p>Ser reconocidos como líderes en nuestra industria, aprovechando más de [número] años de experiencia para innovar y ofrecer soluciones de calidad que superen las expectativas de nuestros clientes. Nos comprometemos a mantener nuestra tradición de excelencia, adaptándonos a los cambios del mercado y promoviendo un futuro sostenible que beneficie a nuestra comunidad y al medio ambiente.</p>
                    </div>
                    <div className="max-w-[400px] flex flex-col justify-center items-center self-start">
                        <div className="border border-2 border-[#16a34a] rounded-full p-5 my-5">
                            <StarIcon fill="#16a34a" width={50} height={50} />
                        </div>
                        <h1 className="text-xl font-bold m-5">Valores</h1>
                        <p>Compromiso con la calidad, Innovacion, Responsabilidad social, Orientacion al cliente, Respeto, Adaptabilidad, Sostenibilidad.</p>
                    </div>
                </div>
            </div>

            <div className="bg-green-600 relative">
                <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" className="absolute -top-5 lg:-top-20">
                    <path
                        d="M0 43.9999C106.667 43.9999 213.333 7.99994 320 7.99994C426.667 7.99994 533.333 43.9999 640 43.9999C746.667 43.9999 853.333 7.99994 960 7.99994C1066.67 7.99994 1173.33 43.9999 1280 43.9999C1386.67 43.9999 1440 19.0266 1440 9.01329V100H0V43.9999Z"
                        className="fill-current text-green-600"></path>
                </svg>
            </div>
            <div className="relative rotate-180 -translate-y-1">
                <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0 43.9999C106.667 43.9999 213.333 7.99994 320 7.99994C426.667 7.99994 533.333 43.9999 640 43.9999C746.667 43.9999 853.333 7.99994 960 7.99994C1066.67 7.99994 1173.33 43.9999 1280 43.9999C1386.67 43.9999 1440 19.0266 1440 9.01329V100H0V43.9999Z"
                        className="fill-current text-green-600"></path>
                </svg>
            </div>

            <h1 className="text-4xl font-bold mt-10 text-center my-5">Los directivos</h1>
            <div className="flex flex-col lg:flex-row gap-10 justify-center items-center mb-10">
                <div className="relative">
                    <Image alt="" src={"/adrian.jpeg"} width={250} height={100}></Image>
                    <span className="bg-white absolute w-[200px] h-16 m-auto -bottom-4 left-0 right-0 text-center shadow flex flex-col justify-center hover:text-white hover:bg-green-600">
                        <p className="font-bold">Adrian Vargas</p>
                    </span>
                </div>
                <div className="relative">
                    <Image alt="" src={"/adrian.jpeg"} width={250} height={100}></Image>
                    <span className="bg-white absolute w-[200px] h-16 m-auto -bottom-4 left-0 right-0 text-center shadow flex flex-col justify-center hover:text-white hover:bg-green-600">
                        <p className="font-bold">Adrian Vargas</p>
                    </span>
                </div>
                <div className="relative">
                    <Image alt="" src={"/adrian.jpeg"} width={250} height={100}></Image>
                    <span className="bg-white absolute w-[200px] h-16 m-auto -bottom-4 left-0 right-0 text-center shadow flex flex-col justify-center hover:text-white hover:bg-green-600">
                        <p className="font-bold">Adrian Vargas</p>
                    </span>
                </div>
            </div>


        </section>
    );
}

const text = <>
    <p className="text-center p-4">
        Como toda empresa familiar, nuestra historia está entrelazada con un pasado lleno de alegrías y desafíos. Todo comienza a principios del siglo pasado con la llegada de nuestros antepasados, en particular Ramón Vargas, quien provenía de España. En su querido pueblo de Adra, en Andalucía, se dedicaban al comercio de frutas y verduras. Al llegar a América y establecerse en la provincia de San Juan, comenzaron a producir tomates y uvas, comercializando estos productos en ferias de la región.
    </p>
    <p className="text-center p-4">
        En la década de 1940, con la incorporación de Adrián y Antonio Vargas, hijos de Ramón, decidieron incursionar en la exportación de mercancías hacia las ciudades de Tucumán y Córdoba. En 1957, tomaron la importante decisión de adquirir dos locales comerciales en el antiguo Mercado de Abasto, ubicado a orillas del río Suquía en Córdoba.
    </p>
    <p className="text-center p-4">
        En 1982, Adrián Vargas, hijo de Adrián y sobrino de Antonio, se asocia a la firma familiar, introduciendo productos del querido litoral argentino, especialmente de Entre Ríos y Corrientes, manteniendo siempre un alto estándar de calidad en los cítricos. En 1988, se realizó el traslado al nuevo y actual Mercado de Abasto, situado en la Ruta 19, km 7 1/2.
    </p>
    <p className="text-center p-4">
        Con el paso del tiempo y la llegada de nuevas tecnologías, se empezaron a utilizar autoelevadores para agilizar la carga y descarga de mercancías, lo que permitió llegar a más clientes con mayor eficacia y eficiencia.
    </p>
    <p className="text-center p-4">
        En la última década, la participación de sus hijos Lucas y Federico han traído nuevas ideas y un renovado ritmo en la comercialización, haciendo crecer el negocio familiar e incorporando productos de diversas zonas de producción. Así, nos hemos convertido en una empresa que ofrece más productos, más servicios y una mayor calidad.
    </p>
    <p className="text-center p-4">
        A pesar de estos avances y logros, nunca olvidamos nuestras raíces y cómo comenzó esta historia de comercialización de frutas y verduras. Agradecemos infinitamente a Dios, a nuestros proveedores, a nuestros empleados, a nuestra creciente clientela y al consumidor final. Sin su confianza y apoyo, esta historia no podría ser contada.
    </p>
</>