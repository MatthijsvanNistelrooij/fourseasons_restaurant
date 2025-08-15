import Image from "next/image"
import React from "react"
import logo from "/public/assets/logo.png"
const activePage = "Home"

const links = [
  { label: "Home", href: "#home" },
  { label: "Inside look", href: "#inside" },
  { label: "Menu", href: "#menu" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  return (
    <header className="bg-[#1a1a1a] text-white border-b border-b-[#f0f0f0]">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-3">
        <div className="flex items-center gap-3">
          <Image src={logo} alt="logo" height={20} width={20} />
          <span
            className="-ml-3 tracking-wide text-[#cda36b]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            FOUR SEASONS
          </span>
        </div>

        <nav
          className="flex items-center gap-10"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
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
          >
            Reserveren
          </a>
        </nav>
      </div>
    </header>
  )
}
