import Image from "next/image"
import React from "react"
import leaf from "/public/assets/four_seasons_leaf.png"

const Menu = () => {
  return (
    <div className="w-full flex justify-center items-start">
      <Image
        src={leaf}
        alt="hero"
        className="h-auto object-contain"
        width={1920}
        height={500}
        priority
      />
    </div>
  )
}

export default Menu
