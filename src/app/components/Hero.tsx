export default function Hero() {
  return (
    <section className="bg-[#1a1a1a] text-white">
      <div id="home" className="max-w-7xl mx-auto px-6 pt-10 md:pt-20">
        <h1
          className="text-[3rem] sm:text-[6rem] lg:text-[8rem] xl:text-[9rem] leading-none"
          style={{ fontFamily: "var(--font-display)", color: "#f0f0f0" }}
        >
          FOUR SEASONS
        </h1>
      </div>

      <div
        className="flex flex-col md:flex-row max-w-7xl mx-auto px-6 py-6 md:py-16 justify-between"
        style={{ fontFamily: "var(--font-body)" }}
      >
        <div className="space-y-4">
          <div className="pb-2 border-b border-[#f0f0f0] w-48 sm:w-56 md:w-64">
            <p className="font-extralight">Enjoy with us</p>
            <p className="font-extralight">Reitemakersrijge 3, Groningen</p>
          </div>
          <div className="pb-2 border-b border-[#f0f0f0] w-48 sm:w-56 md:w-64">
            <p className="font-extralight">+31 6 17 28 490</p>
          </div>
        </div>

        <div className="flex flex-col space-y-1 mt-6 md:mt-5 md:text-right">
          <p className="font-extralight">Ma - Zo</p>
          <p className="font-extralight">12:00 - 20:00</p>
        </div>
      </div>
    </section>
  )
}
