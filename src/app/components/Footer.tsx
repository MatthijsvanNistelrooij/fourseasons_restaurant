"use client"
import Image from "next/image"
import React, { useState } from "react"
import logo from "/public/assets/logo.png"
import ReservationButton from "./ReservationButton"
import matp from "/public/matp.png"
import Link from "next/link"

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
      <div className="flex-col md:flex-row max-w-[1400px] mx-auto px-4 gap-10 md:gap-16 md:py-14 mt-8 flex justify-between">
        <div className="flex flex-col gap-2">
          <div
            className="flex items-center cursor-pointer"
            onClick={handleClick}
          >
            <Image src={logo} alt="logo" className="h-7 w-6 md:h-9 md:w-8" />
            <span
              className="tracking-wide text-[#cda36b] text-xl md:text-3xl select-none"
              style={{ fontFamily: "var(--font-display)" }}
            >
              FOUR SEASONS
            </span>
          </div>

          <div
            className="font-light space-y-5 text-sm md:text-base mt-4"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <div className="space-y-5 md:space-y-8 md:mb-6">
              <div className="pb-2 border-b text-gray-300 border-[#f0f0f0] w-56 md:w-72 md:mt-4 space-y-1">
                <p className="font-light">Enjoy with us</p>
                <p className="font-light">Reitemakersrijge 3, Groningen</p>
              </div>
              <div className="pb-2 border-b border-[#f0f0f0] w-56 md:w-72">
                <p className="font-light">+31 6 17 28 490</p>
              </div>
            </div>
            <ReservationButton
              fontSize={"text-sm md:text-base py-2 md:py-2.5"}
            />
          </div>
        </div>

        <div className="w-full md:w-1/3">
          <h3 className="font-bold text-base md:text-lg mb-3 md:mb-5">
            Openingstijden
          </h3>
          <ul
            className="space-y-1 font-light text-sm md:text-base min-w-48 md:min-w-0"
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
      <div className="flex justify-center py-10 md:py-12">
        <p
          style={{ fontFamily: "var(--font-body)" }}
          className="text-xs md:text-sm text-[#f0f0f0] font-extralight flex justify-center text-center px-5 py-2"
        >
          Copyright © 2025 Restaurant Four Seasons. All rights reserved.
        </p>
      </div>
      <div className="flex w-full justify-end bg-#1a1a1a p-5">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={"https://www.matthijsvannistelrooij.nl"}
          className="flex text-xs text-[#1a1a1a] hover:text-gray-500"
        >
          Powered by
          <Image
            src={matp}
            width={18}
            height={18}
            alt="logo"
            className="ml-2"
          />
        </Link>
      </div>
    </footer>
  )
}

export default Footer
