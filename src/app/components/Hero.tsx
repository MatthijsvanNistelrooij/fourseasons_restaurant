import Image from "next/image"
import hero from "/public/assets/about.jpg"

export default function Hero() {
  return (
    <section className="bg-[#1a1a1a] text-white">

      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1
          className="text-[4rem] md:text-[8.5rem] leading-none"
          style={{ fontFamily: "var(--font-display)", color: "#f0f0f0" }}
        >
          FOUR SEASONS
        </h1>
      </div>

      <div
        className="max-w-6xl mx-auto px-4 py-8 flex justify-between"
        style={{ fontFamily: "var(--font-body)" }}
      >
        <div className="space-y-6">
          <div className="pb-2 border-b border-[#f0f0f0]">
            <p className="text-lg font-light">Enjoy with us</p>
            <p className="text-lg font-light">Reitemakersrijge 3, Groningen</p>
          </div>
          <div className="pb-2 border-b border-[#f0f0f0]">
            <p className="text-lg font-light">+31 6 17 28 490</p>
          </div>
        </div>

        <div className="flex flex-col space-y-2 text-right">
          <p className="text-lg font-light">Ma - Zo</p>
          <p className="text-lg font-light">12:00 - 20:00</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-8">
        <Image
          src={hero}
          alt="hero"
          className="w-full h-auto object-contain"
          width={1920}
          height={500}
          priority
        />
      </div>
    </section>
  )
}
