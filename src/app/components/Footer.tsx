"use client"
import Image from "next/image"
import React, { useState } from "react"
import logo from "/public/assets/logo.png"
import ReservationButton from "./ReservationButton"

const Footer = () => {
  const [, setIsOpen] = useState(false)

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
    setIsOpen(false)
  }

  return (
    <footer
      id="contact"
      className="bg-[#1a1a1a] text-white border-[#f0f0f0] font-body scroll-mt-20"
    >
      <div className="flex-col md:flex-row max-w-[1500px] mx-auto px-4 gap-12 md:py-20 mt-10 flex justify-between">
        <div className="flex flex-col gap-2">
          <div
            className="flex items-center cursor-pointer"
            onClick={handleClick}
          >
            <Image src={logo} alt="logo" className="h-8 w-7 md:h-15 md:w-12" />
            <span
              className="tracking-wide text-[#cda36b] text-2xl md:text-5xl select-none"
              style={{ fontFamily: "var(--font-display)" }}
            >
              FOUR SEASONS
            </span>
          </div>

          <div
            className="font-light space-y-6 text-md md:text-3xl mt-5"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <div className="space-y-6 md:space-y-12 md:mb-8">
              <div className="pb-2 border-b text-gray-300 border-[#f0f0f0] w-60 md:w-110 md:mt-8 space-y-2">
                <p className="font-light">Enjoy with us</p>
                <p className="font-light">Reitemakersrijge 3, Groningen</p>
              </div>
              <div className="pb-2 border-b border-[#f0f0f0] w-60 md:w-110">
                <p className="font-light">+31 6 17 28 490</p>
              </div>
            </div>
            <ReservationButton fontSize={"text-[1rem] md:text-[1.6rem] py-2 md:py-3"} />
          </div>
        </div>

        <div className="w-1/3">
          <h3 className="font-bold text-2xl md:text-3xl mb-4 md:mb-9">
            Openingstijden
          </h3>
          <ul
            className="space-y-1 md:space-y-2 font-light text-lg md:text-3xl min-w-48 md:min-w-0"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <li className="flex justify-left">
              <span>Ma:&nbsp;</span>
              <span>12:00 – 18:00</span>
            </li>
            <li className="flex justify-left">
              <span>Di:&nbsp;</span>
              <span>10:00 – 19:00</span>
            </li>
            <li className="flex justify-left">
              <span>Wo:&nbsp;</span>
              <span>10:00 – 19:00</span>
            </li>
            <li className="flex justify-left">
              <span>Do:&nbsp;</span>
              <span>10:00 – 19:00</span>
            </li>
            <li className="flex justify-left">
              <span>Vr:&nbsp;</span>
              <span>10:00 – 22:00</span>
            </li>
            <li className="flex justify-left">
              <span>Za:&nbsp;</span>
              <span>12:00 – 22:00</span>
            </li>
            <li className="flex justify-left">
              <span>Zo:&nbsp;</span>
              <span>Gesloten</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center py-20">
        <p
          style={{ fontFamily: "var(--font-body)" }}
          className="text-sm md:text-lg text-[#f0f0f0] font-extralight flex justify-center text-center p-5"
        >
          Copyright © 2025 Restaurant Four Seasons. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
