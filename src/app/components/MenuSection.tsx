import Image from "next/image"
import logo from "/public/FS_logo_Vertical-Light.png"
import ReservationButton from "./ReservationButton"

export default function MenuSection() {
  return (
    <section id="menu" className="bg-[#1a1a1a] text-white relative min-h-[30vh]">
      <div
        className="absolute inset-0 w-full h-full bg-no-repeat bg-container"
        style={{
          backgroundImage: "url('/assets/four_seasons_leaf.png')",
          backgroundSize: "100%",
          backgroundPosition: "center bottom",
        }}
      ></div>

      <div className="relative max-w-3xl mx-auto px-4 py-24 flex flex-col md:flex-row justify-between gap-8">
        <div
          className="flex flex-col gap-4 mt-20"
          style={{ fontFamily: "var(--font-display)" }}
        >
          MENU
          <ReservationButton />
        </div>

        <div className="bg-[#1a1a1a] border-[#cda36b] border p-10 py-20 flex flex-col items-center gap-3">
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
