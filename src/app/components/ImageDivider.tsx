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
        sizes="100vw"
        className="object-contain"
        priority
      />
    </div>
  )
}

export default ImageDivider
