"use client"

import { useEffect } from "react";
import { logout } from "../../../auth";

export default function Page(){
    
    useEffect(() => {
        (async() => await logout())();
    }, [])
    return <></>
}