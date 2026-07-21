import React from "react"

const InsideLook = () => {
  return (
    <div
      id="inside"
      className="px-4 py-12 md:py-16 max-w-5xl mx-auto text-center scroll-mt-20"
    >
      <div className="mx-auto text-center">
        <h2
          className="text-sm md:text-base tracking-[0.2em] uppercase text-gray-100"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Inside look
        </h2>
        <p
          className="text-xl font-light md:text-2xl lg:text-[1.75rem] text-gray-300 leading-relaxed md:leading-snug px-2 md:px-6 py-5 md:py-6"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Onze lunch- en dinercreaties worden met liefde bereid, geïnspireerd
          door wereldse culturen en geserveerd in een intieme, bijzondere
          setting.
          <br />
          Come enjoy with us.
        </p>
      </div>
    </div>
  )
}

export default InsideLook
