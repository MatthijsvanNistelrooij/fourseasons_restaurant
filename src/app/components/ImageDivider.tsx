import Image, { StaticImageData } from "next/image"
import React from "react"

type ImageDividerProps = {
  image: StaticImageData
  alt?: string
}

const ImageDivider = ({ image }: ImageDividerProps) => {
  return (
    <div className="w-full flex justify-center items-start">
      <Image
        src={image}
        alt="hero"
        className="h-auto object-contain"
        width={1920}
        height={500}
        priority
      />
    </div>
  )
}

export default ImageDivider
