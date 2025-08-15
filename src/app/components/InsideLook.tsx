import Image from "next/image"
import React from "react"
import img1 from "/public/assets/img_1.jpg"
import img2 from "/public/assets/img_2.jpg"
import img3 from "/public/assets/img_3.jpg"
import img4 from "/public/assets/img_4.jpg"
import img5 from "/public/assets/img_5.jpg"

const InsideLook = () => {
  const images = [img1, img2, img3, img4, img5]
  return (
    <div className="mt-10 x-4 py-16 max-w-7xl mx-auto text-center">
      <div className="mx-auto text-center max-w-5xl">
        <h1
          className="text-2xl -tracking-tight mb-4"
          style={{ fontFamily: "Mayfair Display, serif" }}
        >
          INSIDE LOOK
        </h1>
        <p
          className="text-2xl font-light md:text-5xl text-gray-300 leading-15 mb-12"
          style={{ fontFamily: "Lato, sans-serif" }}
        >
          Onze lunch- en dinercreaties worden met liefde bereid, geïnspireerd
          door wereldse culturen en geserveerd in een intieme, bijzondere
          setting.
          <br />
          Come enjoy with us.
        </p>
      </div>

      <div className="w-full flex justify-center items-start gap-20">
        {images.map((img, index) => (
          <div key={index} className="" style={{ marginTop: `${index * 5}%` }}>
            <Image
              src={img}
              alt={`hero-${index}`}
              className="w-96 h-auto object-contain"
              width={600}
              height={100}
              priority
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default InsideLook
