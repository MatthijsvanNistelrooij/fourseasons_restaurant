import Image from "next/image"
import React from "react"
import img1 from "/public/assets/img_1.jpg"
import img2 from "/public/assets/img_2.jpg"
import img3 from "/public/assets/img_3.jpg"
import img4 from "/public/assets/img_4.jpg"
import img5 from "/public/assets/img_1.jpg"

const ImageCarousel = () => {
  const images = [img1, img2, img3, img4, img5]

  return (
    <div className="w-full flex justify-center items-start">
      <div className="flex space-x-4 md:space-x-20">
        {images.map((img, index) => (
          <div key={index} style={{ marginTop: `${index * 4}%` }}>
            <Image
              src={img}
              alt={`hero-${index}`}
              className="h-auto object-contain"
              width={400}
              height={100}
              priority
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageCarousel
