import * as React from "react"
import { SVGProps } from "react"
export default function BackIcon(props: SVGProps<SVGSVGElement>) {
    return <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 -960 960 960"
        {...props}
    >
        <path d="M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z" />
    </svg>
}

