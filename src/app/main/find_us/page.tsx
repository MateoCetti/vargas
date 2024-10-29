"use client"

import localFont from "next/font/local";

const myFont = localFont({
    src: '../../../../public/fonts/choco.woff2',
    display: 'swap',
    variable: '--font-choco',
})

export default function FindUsPage() {
    return (
        <section className="bg-white mt-20 mb-5">
            <div className={`bg-green-900 text-center py-4 text-white text-xl w-full ${myFont.className}`}>¿Donde encontrarnos?</div>
            <div className="flex grid grid-cols-1 lg:grid-cols-2">
                <div className="text-justify lg:text-center p-5 self-center">
                    <p>Estamos ubicados en el mercado de abasto de la provincia de Córdoba
                        (Ruta 19, Km 7 1/2, Córdoba Argentina), mas esepcificamente hablando
                        en la nave 3, puesto 322.
                    </p>
                </div>
                <div className=" p-10 flex justify-center">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27246.59763267547!2d-64.13171686523438!3d-31.39139669999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943297d6ff1e437d%3A0xc93a4dc6b8bb8848!2sMercado%20de%20Abasto!5e0!3m2!1ses-419!2sar!4v1721495073045!5m2!1ses-419!2sar"
                        width={"100%"}
                        height="450"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade" />
                </div>
                <div className="lg:col-span-2 lg:px-5">
                    <iframe className="w-full h-[400px] lg:h-[720px]" src="https://www.youtube.com/embed/peV6VhmQV0o" ></iframe>
                </div>
            </div>
        </section>
    );
}