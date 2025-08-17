import React from "react"

const InsideLook = () => {
  return (
    <div id="inside" className="mt-10 x-4 py-16 max-w-4xl mx-auto text-center">
      <div className="mx-auto text-center">
        <h1
          className="text-2xl -tracking-tight mb-4 mt-10"
          style={{
            fontFamily: "Mayfair Display, serif",
            transform: "scaleY(1.3)",
            display: "inline-block",
          }}
        >
          INSIDE LOOK
        </h1>
        <p
          className="text-2xl font-light md:text-4xl text-[#f0f0f0] leading-15 mb-12 p-5"
          style={{ fontFamily: "Lato, sans-serif" }}
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
