import { chocoFont } from "@/lib/fonts"

export default function RepartosSection() {
  return (
    <section className="bg-white py-10 px-4 flex flex-col items-center">
      <h2 className={`text-4xl font-bold text-center ${chocoFont.className}`}>Repartos</h2>
      <p className="mt-5 max-w-2xl text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
    </section>
  )
}
