import * as React from "react"
import { SVGProps } from "react"
export default function AddIcon(props: SVGProps<SVGSVGElement>) {
    return <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 -960 960 960"
        {...props}
    >
        <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
    </svg>
}