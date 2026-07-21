import Image from "next/image"
import logo from "/public/FS_logo_Vertical-Light.png"
import leaf from "/public/assets/four_seasons_leaf.png"
import MenuButton from "./MenuButton"

export default function MenuSection() {
  return (
    <section
      id="menu"
      className="relative text-[#f0f0f0] mb-14 md:mb-20 flex items-center justify-center overflow-hidden scroll-mt-20"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src={leaf}
          alt="background leaf"
          fill
          priority
          className="object-contain rotate-2 scale-100 md:scale-110 md:translate-x-8 -translate-y-32 md:-translate-y-20 opacity-90"
        />
      </div>

      <div className="relative w-full max-w-5xl mx-auto px-4 py-12 md:py-20 flex flex-col md:flex-row justify-between md:gap-16">
        <div className="flex flex-col gap-5 md:gap-6">
          <div
            className="text-sm md:text-base tracking-[0.2em] uppercase flex flex-col gap-3 mt-10 md:mt-24"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Menu
          </div>
          <MenuButton />
        </div>

        <div className="bg-[#1a1a1a] border-[#cda36b] border px-10 py-14 md:px-14 md:py-16 mt-8 md:mt-10 flex flex-col items-center gap-3">
          <Image
            src={logo}
            alt="logo"
            height={220}
            width={220}
            className="mt-6 w-40 md:w-52 h-auto"
          />
          <div
            className="mt-8 border-t border-b border-gray-400 w-36 text-center text-sm px-3 py-1.5 inline-block"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Enjoy with us
          </div>
        </div>
      </div>
    </section>
  )
}
