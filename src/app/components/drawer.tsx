"use client"
import { useState } from "react";

import MenuIcon from "../icons/menu";

export default function Drawer() {
    const [visible, setVisible] = useState<boolean>(false);

    function changeVisibleState() {
        const newVisible = !visible;
        setVisible(newVisible)
    }
    return (
        <>
            <MenuIcon className="col-span-1 lg:hidden self-center" width={25} height={25} onClick={() => { changeVisibleState() }} />
            <div className={`transition ${visible ? "translate-x-0" : "-translate-x-80"} duration-1000 bg-white fixed w-7/12 h-screen z-10`} ></div>
            <div className={`transition ${visible ? "opacity-80" : "opacity-0"} duration-1000 bg-black fixed w-screen h-screen end-0 z-0`} onClick={() => { changeVisibleState() }}></div>
        </>
    );
}