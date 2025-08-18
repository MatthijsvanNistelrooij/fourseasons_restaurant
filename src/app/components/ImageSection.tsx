import Image, { StaticImageData } from "next/image"
import React from "react"

type ImageDividerProps = {
  image: StaticImageData
  alt?: string
}

const ImageSection = ({ image }: ImageDividerProps) => {
  return (
    <div className="w-full flex justify-center items-start">
      <Image
        src={image}
        alt="hero"
        className="h-auto object-contain xl:px-20"
        width={1920}
        height={800}
        priority
      />
    </div>
  )
}

export default ImageSection
