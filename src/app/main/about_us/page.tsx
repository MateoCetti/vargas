import Image from "next/image"
import EyeIcon from "@/components/icons/eye"
import LocationIcon from "@/components/icons/location"
import MountainIcon from "@/components/icons/mountain"
import StarIcon from "@/components/icons/star"
import { chocoFont } from "@/lib/fonts"

const VALUES = [
    {
        icon: MountainIcon,
        title: "Misión",
        description:
            "Nuestra misión es proporcionar productos y servicios de alta calidad, basados en décadas de experiencia y conocimiento en la industria. Nos comprometemos a construir relaciones de confianza con nuestros clientes y socios, impulsando la innovación y la excelencia. Además, buscamos contribuir al bienestar de nuestra comunidad y al cuidado del medio ambiente a través de prácticas sostenibles y responsables.",
    },
    {
        icon: EyeIcon,
        title: "Visión",
        description:
            "Ser reconocidos como líderes en nuestra industria, aprovechando más de 60 años de experiencia para innovar y ofrecer soluciones de calidad que superen las expectativas de nuestros clientes. Nos comprometemos a mantener nuestra tradición de excelencia, adaptándonos a los cambios del mercado y promoviendo un futuro sostenible que beneficie a nuestra comunidad y al medio ambiente.",
    },
    {
        icon: StarIcon,
        title: "Valores",
        description:
            "Compromiso con la calidad, Innovación, Responsabilidad social, Orientación al cliente, Respeto, Adaptabilidad, Sostenibilidad.",
    },
]

const DIRECTORS = [
    { name: "Adrian Vargas", image: "/adrian.jpeg" },
    { name: "Diego Federico Vargas", image: "/fede.jpeg" },
    { name: "Lucas Vargas", image: "/fede.jpeg" },
]

const HISTORIA = [
    "Como toda empresa familiar, nuestra historia está entrelazada con un pasado lleno de alegrías y desafíos. Todo comienza a principios del siglo pasado con la llegada de nuestros antepasados, en particular Ramón Vargas, quien provenía de España. En su querido pueblo de Adra, en Andalucía, se dedicaban al comercio de frutas y verduras. Al llegar a América y establecerse en la provincia de San Juan, comenzaron a producir tomates y uvas, comercializando estos productos en ferias de la región.",
    "En la década de 1940, con la incorporación de Adrián y Antonio Vargas, hijos de Ramón, decidieron incursionar en la exportación de mercancías hacia las ciudades de Tucumán y Córdoba. En 1957, tomaron la importante decisión de adquirir dos locales comerciales en el antiguo Mercado de Abasto, ubicado a orillas del río Suquía en Córdoba.",
    "En 1982, Adrián Vargas, hijo de Adrián y sobrino de Antonio, se asocia a la firma familiar, introduciendo productos del querido litoral argentino, especialmente de Entre Ríos y Corrientes, manteniendo siempre un alto estándar de calidad en los cítricos. En 1988, se realizó el traslado al nuevo y actual Mercado de Abasto, situado en la Ruta 19, km 7 1/2.",
    "Con el paso del tiempo y la llegada de nuevas tecnologías, se empezaron a utilizar autoelevadores para agilizar la carga y descarga de mercancías, lo que permitió llegar a más clientes con mayor eficacia y eficiencia.",
    "En la última década, la participación de sus hijos Lucas y Federico han traído nuevas ideas y un renovado ritmo en la comercialización, haciendo crecer el negocio familiar e incorporando productos de diversas zonas de producción. Así, nos hemos convertido en una empresa que ofrece más productos, más servicios y una mayor calidad.",
    "A pesar de estos avances y logros, nunca olvidamos nuestras raíces y cómo comenzó esta historia de comercialización de frutas y verduras. Agradecemos infinitamente a Dios, a nuestros proveedores, a nuestros empleados, a nuestra creciente clientela y al consumidor final. Sin su confianza y apoyo, esta historia no podría ser contada.",
]

export default function AboutUsPage() {
    return (
        <>
            <section className="bg-green-600 px-6 pb-20 pt-28 lg:px-12">
                <div className="mx-auto max-w-6xl">
                    <span className="w-fit rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white">
                        Nuestra historia
                    </span>
                    <h1 className={`mt-4 text-4xl text-white lg:text-5xl ${chocoFont.className}`}>
                        Una empresa, un legado de familia.
                    </h1>
                    <p className="mt-4 max-w-xl text-green-50">
                        Tres generaciones dedicadas al comercio y cuidado de alimentos frescos, llevando productos
                        de primera calidad a la mesa de las familias cordobesas.
                    </p>
                </div>
            </section>

            <section className="bg-white px-6 py-16 lg:px-12">
                <div className="mx-auto flex max-w-3xl flex-col gap-5 text-neutral-700">
                    {HISTORIA.map((paragraph, i) => (
                        <p key={i} className="leading-relaxed">
                            {paragraph}
                        </p>
                    ))}
                </div>
            </section>

            <section className="bg-stone-50 px-6 py-16 lg:px-12">
                <div className="mx-auto max-w-6xl">
                    <span className="text-sm font-semibold uppercase tracking-wide text-green-600">
                        Nuestra empresa
                    </span>
                    <h2 className={`mt-3 text-4xl text-neutral-900 lg:text-5xl ${chocoFont.className}`}>
                        Lo que nos define
                    </h2>
                    <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
                        {VALUES.map(({ icon: Icon, title, description }) => (
                            <article key={title} className="rounded-xl border border-stone-200 bg-white p-6">
                                <div className="flex size-10 items-center justify-center rounded-full bg-green-100">
                                    <Icon fill="#16a34a" width={20} height={20} />
                                </div>
                                <h3 className="mt-4 font-bold text-neutral-900">{title}</h3>
                                <p className="mt-2 text-sm text-neutral-600">{description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-white px-6 py-16 lg:px-12">
                <div className="mx-auto max-w-6xl">
                    <span className="text-sm font-semibold uppercase tracking-wide text-orange-500">Equipo</span>
                    <h2 className={`mt-3 text-4xl text-neutral-900 lg:text-5xl ${chocoFont.className}`}>
                        Los directivos
                    </h2>
                    <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
                        {DIRECTORS.map(({ name, image }) => (
                            <article
                                key={name}
                                className="overflow-hidden rounded-2xl border border-stone-200 bg-stone-50"
                            >
                                <div className="relative aspect-square">
                                    <Image
                                        src={image}
                                        alt={name}
                                        fill
                                        sizes="(min-width: 640px) 33vw, 100vw"
                                        className="object-cover"
                                    />
                                </div>
                                <p className="bg-white p-4 text-center font-bold text-neutral-900">{name}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="ubicacion" className="bg-stone-50 px-6 py-16 lg:px-12">
                <div className="mx-auto max-w-6xl">
                    <span className="text-sm font-semibold uppercase tracking-wide text-green-600">Ubicación</span>
                    <h2 className={`mt-3 text-4xl text-neutral-900 lg:text-5xl ${chocoFont.className}`}>
                        ¿Dónde encontrarnos?
                    </h2>
                    <div className="mt-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
                        <div>
                            <p className="leading-relaxed text-neutral-600">
                                Estamos ubicados en el mercado de abasto de la provincia de Córdoba (Ruta 19, Km 7
                                1/2, Córdoba Argentina), más específicamente en la nave 3, puesto 322.
                            </p>
                            <a
                                href="https://maps.app.goo.gl/ZNHZ2aoDLKRewaLWA"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-6 inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 font-semibold text-white hover:bg-neutral-800"
                            >
                                <LocationIcon width={18} height={18} />
                                Ver en Google Maps
                            </a>
                        </div>
                        <div className="overflow-hidden rounded-2xl border border-stone-200">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27246.59763267547!2d-64.13171686523438!3d-31.39139669999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943297d6ff1e437d%3A0xc93a4dc6b8bb8848!2sMercado%20de%20Abasto!5e0!3m2!1ses-419!2sar!4v1721495073045!5m2!1ses-419!2sar"
                                className="aspect-square w-full lg:aspect-auto lg:h-96"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>

                    <h3 className={`mt-16 text-2xl text-neutral-900 ${chocoFont.className}`}>Conocé nuestro local</h3>
                    <div className="mt-6 aspect-video w-full max-w-4xl overflow-hidden rounded-2xl border border-stone-200">
                        <iframe
                            className="h-full w-full"
                            src="https://www.youtube.com/embed/peV6VhmQV0o"
                            allowFullScreen
                        />
                    </div>
                </div>
            </section>
        </>
    )
}
