import Image, { StaticImageData } from "next/image"
import React from "react"

type ImageDividerProps = {
  image: StaticImageData
  alt?: string
}

const ImageDivider = ({ image }: ImageDividerProps) => {
  return (
    <div className="mx-auto px-4 mt-8">
      <Image
        src={image}
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
