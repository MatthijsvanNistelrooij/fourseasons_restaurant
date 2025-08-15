export default function Hero() {
  return (
    <section className="bg-[#1a1a1a] text-white">
      <div className="max-w-6xl mx-auto px-4 pt-16">
        <h1
          className="text-[4rem] md:text-[8.5rem] leading-none"
          style={{ fontFamily: "var(--font-display)", color: "#f0f0f0" }}
        >
          FOUR SEASONS
        </h1>
      </div>

      <div
        className="flex flex-col md:flex-row max-w-6xl mx-auto px-4 py-12 justify-between"
        style={{ fontFamily: "var(--font-body)" }}
      >
        <div className="space-y-6">
          <div className="pb-2 border-b border-[#f0f0f0] w-64">
            <p className="font-extralight">Enjoy with us</p>
            <p className="font-extralight">Reitemakersrijge 3, Groningen</p>
          </div>
          <div className="pb-2 border-b border-[#f0f0f0] w-64">
            <p className="text font-extralight">+31 6 17 28 490</p>
          </div>
        </div>

        <div className="flex flex-col space-y-2 mt-6 md:mt-0 md:text-right">
          <p className="text font-extralight">Ma - Zo</p>
          <p className="text font-extralight">12:00 - 20:00</p>
        </div>
      </div>
    </section>
  )
}
