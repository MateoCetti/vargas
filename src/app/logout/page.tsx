"use client"

import { useEffect } from "react";
import { logout } from "../../../auth";

export default async function Page(){
    
    useEffect(() => {
        (async() => await logout())();
    }, [])
    return <></>
}