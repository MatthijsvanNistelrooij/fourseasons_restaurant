export default function Hero() {
  return (
    <section className="bg-[#1a1a1a] text-gray-200">
      <div id="home" className="max-w-[1400px] mx-auto px-4 pt-8 md:pt-14">
        <h1
          className="text-[clamp(2.75rem,9vw,7.5rem)] leading-none tracking-tight"
          style={{ fontFamily: "var(--font-display)", color: "#f0f0f0" }}
        >
          FOUR SEASONS
        </h1>
      </div>

      <div
        className="max-w-[1400px] flex flex-col mt-6 md:mt-8 text-sm md:text-base sm:flex-row mx-auto px-4 py-5 md:py-8 justify-between"
        style={{ fontFamily: "var(--font-body)" }}
      >
        <div className="space-y-3">
          <div className="pb-2 border-b font-light border-gray-200 w-56 sm:w-52 md:w-60">
            <p>Enjoy with us</p>
            <p>Reitemakersrijge 3, Groningen</p>
          </div>
          <div className="pb-2 border-b font-light border-gray-200 w-56 sm:w-52 md:w-60">
            <p>+31 6 17 28 490</p>
          </div>
        </div>

        <div className="flex flex-col font-light space-y-1 mt-4 md:mt-0 md:text-right">
          <p>Ma - Zo</p>
          <p>12:00 - 20:00</p>
        </div>
      </div>
    </section>
  )
}
