import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Page(){
    async function sape(){
        "use server"
        cookies().delete("Authorization")
    }
    await sape()
    redirect("/admin")
    return <></>
}