import React from "react"

const InsideLook = () => {
  return (
    <div id="inside" className="x-4 py-12 md:py-24 max-w-5xl mx-auto text-center">
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
          className="text-2xl font-light md:text-5xl text-gray-300 leading-14 mb-12 p-5"
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
