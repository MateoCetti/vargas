"use client"
import { useState } from "react";

import MenuIcon from "../icons/menu";
import { menuItems } from "./navbar";
import Link from "next/link";

type sape = typeof menuItems;

export default function Drawer({ items }: { items: sape }) {
    const [visible, setVisible] = useState<boolean>(false);

    function changeVisibleState(state: boolean) {
        console.log(state)
        const newVisible: boolean = state;
        setVisible(newVisible);
    }
    return (
        <>
            <MenuIcon className="col-span-1 lg:hidden self-center" width={25} height={25} onClick={() => { changeVisibleState(true) }} />
            <div className={`transition ${visible ? "translate-x-0" : "-translate-x-full"} duration-1000 bg-white fixed w-7/12 h-screen z-10`} >
                <div className="flex flex-col gap-10 text-center">
                    <p className="text-xl mt-5 border-b-4">Menu</p>
                    {
                        items.map((element, index) =>
                            <Link
                                key={index}
                                onClick={() => { changeVisibleState(false) }}
                                href={element.href}>{element.name}
                            </Link>)
                    }
                </div>
            </div>
            <div
                className={`transition ${visible ? "opacity-60" : "hidden"} duration-1000 bg-black fixed w-screen h-screen end-0`}
                onClick={() => { changeVisibleState(false) }}>
            </div>
        </>
    );
}