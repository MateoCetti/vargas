import { SVGProps } from "react"

export default function RouteIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
            <circle cx="6" cy="19" r="2" />
            <circle cx="18" cy="5" r="2" />
            <path d="M6 17V13a4 4 0 0 1 4-4h4a4 4 0 0 0 4-4" />
        </svg>
    )
}
