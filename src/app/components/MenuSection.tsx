import Image from "next/image"
import logo from "/public/FS_logo_Vertical-Light.png"
import leaf from "/public/assets/four_seasons_leaf.png"
import MenuButton from "./MenuButton"

export default function MenuSection() {
  return (
    <section
      id="menu"
      className="relative text-[#f0f0f0] mb-10 md:mb-30 min-h-[10vh] flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <Image
          src={leaf}
          alt="background leaf"
          fill
          priority
          className="object-contain rotate-2 scale-120 md:translate-x-10 -translate-y-70 md:-translate-y-30"
        />
      </div>

      <div className="relative w-full max-w-4xl mx-auto px-4 md:py-24 flex flex-col md:flex-row justify-center md:gap-70">
        <div className="flex flex-col gap-5">
          <div
            className="text-2xl flex flex-col gap-4 mt-20 md:mt-64"
            style={{ fontFamily: "var(--font-display)" }}
          >
            MENU
          </div>
          <MenuButton />
        </div>

        <div className="bg-[#1a1a1a] border-[#cda36b] border p-12 py-32 mt-10 flex flex-col items-center gap-3">
          <Image
            src={logo}
            alt="logo"
            height={300}
            width={300}
            className="mt-20"
          />
          <div
            className="mt-20 border-t border-b border-gray-400 w-40 text-center px-4 py-2 inline-block"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Enjoy with us
          </div>
        </div>
      </div>
    </section>
  )
}
