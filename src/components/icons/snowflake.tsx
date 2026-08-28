import { SVGProps } from "react"

export default function SnowflakeIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M12 2v20M4.5 6.5l15 11M19.5 6.5l-15 11" />
            <path d="M8 4l4 2 4-2M8 20l4-2 4 2M2.5 9l3 3-3 3M21.5 9l-3 3 3 3" />
        </svg>
    )
}
