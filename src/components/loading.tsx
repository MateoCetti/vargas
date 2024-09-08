import Image from "next/image";

export default function Reloading(){
    return (
    <div className="h-screen flex justify-center items-center">
        <Image alt="Vargas logo" className="animate-bounce" width={500} height={100} src={"/logo_1.png"} />
    </div>
    );
}