import Image from "next/image"
import React from "react"
import welcome from "/public/four_seasons_welcome.png"

const ImageDivider = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 mt-8">
      <Image
        src={welcome}
        alt="hero"
        className="w-full h-auto object-contain"
        width={1920}
        height={500}
        priority
      />
    </div>
  )
}

export default ImageDivider
