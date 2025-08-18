"use client"
import Image from "next/image"
import React, { useState } from "react"
import logo from "/public/assets/logo.png"
import ReservationButton from "./ReservationButton"

const links = [
  { label: "Home", href: "/" },
  { label: "Inside look", href: "#inside" },
  { label: "Menu", href: "#menu" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activePage, setActivePage] = useState("Home")

  const handleClickLogo = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setIsOpen(false)
    setActivePage("Home")
  }

  const handleLinkClick = (label: string, href: string) => {
    setActivePage(label)
    setIsOpen(false)

    if (href.startsWith("#")) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else if (href === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <header className="bg-[#1a1a1a] text-white border-b border-b-[#f0f0f0] sticky top-0 z-30">
      <div className="max-w-[1500px] mx-auto flex items-center justify-between px-4 py-5">
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={handleClickLogo}
        >
          <Image src={logo} alt="logo" height={20} width={20} />
          <span
            className="-ml-3 text-xl tracking-wide text-[#cda36b] select-none"
            style={{ fontFamily: "var(--font-display)" }}
          >
            FOUR SEASONS
          </span>
        </div>

        <nav
          className="hidden lg:flex items-center gap-14"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleLinkClick(link.label, link.href)}
              className={`hover:text-[#f0f0f0] transition cursor-pointer ${
                activePage === link.label ? "font-extrabold" : "font-normal"
              }`}
            >
              {link.label}
            </button>
          ))}

          <ReservationButton fontSize={"text-[1rem] md:text-[1rem] py-2"} />
        </nav>

        <button
          className="lg:hidden flex flex-col gap-[3px] focus:outline-none cursor-pointer"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="block w-6 h-[2px] bg-white"></span>
          <span className="block w-6 h-[2px] bg-white"></span>
          <span className="block w-6 h-[2px] bg-white"></span>
        </button>
      </div>

      {isOpen && (
        <div
          className="lg:hidden absolute top-full left-0 w-full bg-[#1a1a1a] border-b border-t border-[#f0f0f0] flex flex-col items-start p-4 gap-5"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleLinkClick(link.label, link.href)}
              className={`hover:text-[#f0f0f0] transition cursor-pointer ${
                activePage === link.label ? "font-extrabold" : "font-normal"
              }`}
            >
              {link.label}
            </button>
          ))}

          <ReservationButton fontSize={"text-md"} />
        </div>
      )}
    </header>
  )
}
