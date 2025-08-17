"use client"
import Image from "next/image"
import React, { useState } from "react"
import logo from "/public/assets/logo.png"
import Link from "next/link"

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

  const handleLinkClick = (label: string) => {
    setActivePage(label)
    setIsOpen(false)
  }

  return (
    <header className="bg-[#1a1a1a] text-white border-b border-b-[#f0f0f0] sticky top-0 z-30">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={handleClickLogo}
        >
          <Image src={logo} alt="logo" height={20} width={20} />
          <span
            className="-ml-3 text-xl tracking-wide text-[#cda36b]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            FOUR SEASONS
          </span>
        </div>

        <nav
          className="hidden md:flex items-center gap-10"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => handleLinkClick(link.label)}
              className={`hover:text-[#f0f0f0] transition ${
                activePage === link.label ? "font-extrabold" : "font-normal"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="#reserve"
            className="bg-white text-black px-4 py-2 font-bold hover:bg-gray-200 transition"
          >
            Reserveren
          </a>
        </nav>

        <button
          className="md:hidden flex flex-col gap-[3px] focus:outline-none"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="block w-6 h-[2px] bg-white"></span>
          <span className="block w-6 h-[2px] bg-white"></span>
          <span className="block w-6 h-[2px] bg-white"></span>
        </button>
      </div>

      {isOpen && (
        <div
          className="md:hidden absolute top-full left-0 w-full bg-[#1a1a1a] border-t border-[#f0f0f0] flex flex-col items-start p-4 gap-3"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => handleLinkClick(link.label)}
              className={`hover:text-[#f0f0f0] transition ${
                activePage === link.label ? "font-bold" : "font-normal"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#reserve"
            className="bg-white text-black px-4 py-2 rounded font-medium hover:bg-gray-200 transition"
            onClick={() => setIsOpen(false)}
          >
            Reserveren
          </a>
        </div>
      )}
    </header>
  )
}
