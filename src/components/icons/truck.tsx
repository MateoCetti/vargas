import { SVGProps } from "react"

export default function TruckIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M2 8h11v8H2z" />
            <path d="M13 11h4l4 4v1h-8z" />
            <circle cx="6.5" cy="18" r="1.5" />
            <circle cx="17.5" cy="18" r="1.5" />
        </svg>
    )
}
