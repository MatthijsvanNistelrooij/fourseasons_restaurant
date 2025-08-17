"use client"
import Image from "next/image"
import React, { useState } from "react"
import logo from "/public/assets/logo.png"

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
      className="bg-[#1a1a1a] text-white border-[#f0f0f0] font-body"
    >
      <div className="flex-col md:flex-row max-w-7xl mx-auto px-4 gap-12 py-20 mt-10 flex justify-between">
        <div className="flex flex-col gap-6">
          <div
            className="flex items-center cursor-pointer"
            onClick={handleClick}
          >
            <Image src={logo} alt="logo" height={40} width={40} />
            <span
              className="tracking-wide text-[#cda36b] text-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              FOUR SEASONS
            </span>
          </div>

          <div
            className="font-light space-y-8 text-sm md:text-2xl mt-5"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <div className="space-y-6">
              <div className="pb-2 border-b text-gray-300 border-[#f0f0f0] w-80 sm:w-72 md:w-96 mt-2 space-y-2">
                <p className="font-light">Enjoy with us</p>
                <p className="font-light">Reitemakersrijge 3, Groningen</p>
              </div>
              <div className="pb-2 border-b border-[#f0f0f0] w-80 sm:w-72 md:w-96">
                <p className="font-light">+31 6 17 28 490</p>
              </div>
            </div>
            <a
              href="#reserve"
              className="bg-[#f0f0f0] text-black text-md px-4 py-2 font-bold hover:bg-gray-200 transition"
            >
              Reserveren
            </a>
          </div>
        </div>

        <div className="w-1/3">
          <h3 className="font-bold text-2xl mb-4">Openingstijden</h3>
          <ul
            className="space-y-2 font-light text-sm md:text-2xl"
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
      <div className="flex justify-center">
        <p
          style={{ fontFamily: "var(--font-body)" }}
          className="text-xs text-[#f0f0f0] font-extralight flex justify-center w-64 md:w-full text-center mt-10 mb-10"
        >
          Copyright © 2025 Restaurant Four Seasons. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
