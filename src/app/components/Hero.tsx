export default function Hero() {
  return (
    <section className="bg-[#1a1a1a] text-white">
      <div id="home" className="max-w-7xl mx-auto px-6 pt-10 md:pt-20">
        <h1
          className="text-[4rem] sm:text-[5rem] md:text-[6rem] lg:text-[8rem] xl:text-[9.5rem] leading-none"
          style={{ fontFamily: "var(--font-display)", color: "#f0f0f0" }}
        >
          FOUR SEASONS
        </h1>
      </div>

      <div
        className="flex flex-col sm:flex-row max-w-7xl mx-auto px-6 py-6 md:py-12 justify-between"
        style={{ fontFamily: "var(--font-body)" }}
      >
        <div className="space-y-4">
          <div className="pb-2 border-b font-extralight border-[#f0f0f0] w-64 sm:w-56 md:w-64">
            <p>Enjoy with us</p>
            <p>Reitemakersrijge 3, Groningen</p>
          </div>
          <div className="pb-2 border-b font-extralight border-[#f0f0f0] w-64 sm:w-56 md:w-64">
            <p>+31 6 17 28 490</p>
          </div>
        </div>

        <div className="flex flex-col font-extralight space-y-1 mt-4 md:mt-5 md:text-right">
          <p>Ma - Zo</p>
          <p>12:00 - 20:00</p>
        </div>
      </div>
    </section>
  )
}
