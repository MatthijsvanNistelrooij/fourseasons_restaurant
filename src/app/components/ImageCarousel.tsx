import Image from "next/image"
import React from "react"
import img1 from "/public/assets/img_1.jpg"
import img2 from "/public/assets/img_2.jpg"
import img3 from "/public/assets/img_3.jpg"
import img4 from "/public/assets/img_4.jpg"
import img5 from "/public/assets/img_5.jpg"

const ImageCarousel = () => {
  const images = [img1, img2, img3, img4, img5]

  return (
    <div className="w-full overflow-x-auto">
      <div className="flex justify-center gap-4 md:gap-8 lg:gap-12 px-4 min-w-max md:min-w-0 mx-auto max-w-[1400px]">
        {images.map((img, index) => (
          <div
            key={index}
            className="shrink-0"
            style={{ marginTop: `${index * 2.5}%` }}
          >
            <Image
              src={img}
              alt={`gallery-${index + 1}`}
              className="h-auto w-40 sm:w-48 md:w-52 lg:w-56 object-contain"
              width={240}
              height={320}
              priority
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageCarousel
