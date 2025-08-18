import React from "react"

const InsideLook = () => {
  return (
    <div id="inside" className="px-4 pt-10 md:py-24 max-w-7xl mx-auto text-center">
      <div className="mx-auto text-center">
        <h1
          className="md:text-2xl lg:text-3xl -tracking-tight mt-10"
          style={{
            fontFamily: "Mayfair Display, serif",
            transform: "scaleY(1.2)",
            display: "inline-block",
          }}
        >
          INSIDE LOOK
        </h1>
        <p
          className="text-2xl font-light md:text-4xl lg:text-5xl text-gray-300 leading-12 md:leading-17 px-4 py-6"
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
