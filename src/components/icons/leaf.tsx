import { SVGProps } from "react"

export default function LeafIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M20 4c0 9-6 15-15 15H4v-1C4 10 10 4 19 4h1z" />
            <path d="M5 19c4-4 7-7 12-12" />
        </svg>
    )
}
