const WAVE_PATH =
  "M0 43.9999C106.667 43.9999 213.333 7.99994 320 7.99994C426.667 7.99994 533.333 43.9999 640 43.9999C746.667 43.9999 853.333 7.99994 960 7.99994C1066.67 7.99994 1173.33 43.9999 1280 43.9999C1386.67 43.9999 1440 19.0266 1440 9.01329V100H0V43.9999Z"

type Props = {
  fillClass: string
  flipped?: boolean
  /** Provide the section's bg class (e.g. "bg-green-600") to create the overlapping top-entry variant. */
  bgClass?: string
}

export default function WaveDivider({ fillClass, flipped, bgClass }: Props) {
  if (bgClass) {
    return (
      <div className={`${bgClass} relative`}>
        <svg
          viewBox="0 0 1440 100"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -top-5 lg:-top-20"
        >
          <path d={WAVE_PATH} className={`fill-current ${fillClass}`} />
        </svg>
      </div>
    )
  }

  return (
    <div className={`relative${flipped ? " rotate-180 -translate-y-1" : ""}`}>
      <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg">
        <path d={WAVE_PATH} className={`fill-current ${fillClass}`} />
      </svg>
    </div>
  )
}
