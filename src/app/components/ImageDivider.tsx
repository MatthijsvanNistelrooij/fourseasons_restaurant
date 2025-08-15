import Image, { StaticImageData } from "next/image"
import React from "react"

type ImageDividerProps = {
  image: StaticImageData
  alt?: string
}

const ImageDivider = ({ image, alt = "hero" }: ImageDividerProps) => {
  return (
    <div className="relative w-full h-[500px] mx-auto">
      <Image
        src={image}
        alt={alt}
        fill
        sizes="w-full"
        className="object-cover"
        priority
      />
    </div>
  )
}

export default ImageDivider
