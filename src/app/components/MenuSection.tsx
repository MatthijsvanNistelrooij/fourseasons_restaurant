import Image from "next/image"
import logo from "/public/FS_logo_Vertical-Light.png"
import ReservationButton from "./ReservationButton"

export default function MenuSection() {
  return (
    <section className="bg-[#1a1a1a] text-white">
      <div
        className="max-w-3xl mx-auto px-4 py-24 flex justify-between bg-no-repeat bg-cover bg-[position:center_100%]"
        style={{
          fontFamily: "var(--font-body)",
          backgroundImage: "url('/assets/four_seasons_leaf.png')",
        }}
      >
        <div
          className="flex flex-col gap-4 mt-20"
          style={{ fontFamily: "var(--font-display)" }}
        >
          MENU
          <ReservationButton />
        </div>
        <div className="bg-[#1a1a1a] border-[#cda36b] border-r border-b p-10 flex flex-col items-center gap-3">
          <Image src={logo} alt="logo" height={200} width={200} />
          <div
            className="mt-20 border-t-[0.5px] border-b-[0.5px] border-[#f0f0f0] px-6 py-3 inline-block font-light"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Enjoy with us
          </div>
        </div>
      </div>
    </section>
  )
}
