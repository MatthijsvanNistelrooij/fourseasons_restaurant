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
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 px-4 gap-12 py-20 mt-10">
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
            className="font-light space-y-6 text-2xl mt-5"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <div className="space-y-4">
              <div className="pb-2 border-b border-[#f0f0f0] w-48 sm:w-72 md:w-96">
                <p className="font-light">Enjoy with us</p>
                <p className="font-light">Reitemakersrijge 3, Groningen</p>
              </div>
              <div className="pb-2 border-b border-[#f0f0f0] w-48 sm:w-72 md:w-96">
                <p className="font-light">+31 6 17 28 490</p>
              </div>
            </div>
            <button className="bg-white text-[#1a1a1a] px-4 py-2 font-bold">
              Reserveren
            </button>
          </div>
        </div>

        <div className="md:ml-56">
          <h3 className="font-bold text-lg mb-4">Openingstijden</h3>
          <ul
            className="space-y-2 font-light text-xl"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <li className="flex justify-left">
              <span>Ma: </span>
              <span>12:00 – 18:00</span>
            </li>
            <li className="flex justify-left">
              <span>Di: </span>
              <span>10:00 – 19:00</span>
            </li>
            <li className="flex justify-left">
              <span>Wo: </span>
              <span>10:00 – 19:00</span>
            </li>
            <li className="flex justify-left">
              <span>Do:</span>
              <span>10:00 – 19:00</span>
            </li>
            <li className="flex justify-left">
              <span>Vr:</span>
              <span>10:00 – 22:00</span>
            </li>
            <li className="flex justify-left">
              <span>Za:</span>
              <span>12:00 – 22:00</span>
            </li>
            <li className="flex justify-left">
              <span>Zo:</span>
              <span>12:00 – 18:00</span>
            </li>
          </ul>
        </div>
      </div>
      <p
        style={{ fontFamily: "var(--font-body)" }}
        className="text-xl font-light flex justify-center text-center mt-10 mb-40"
      >
        Copyright © 2025 Restaurant Four Seasons All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
