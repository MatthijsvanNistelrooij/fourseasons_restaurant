"use client"
import React from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image"
import logo from "/public/assets/logo.png"
import { mockMenu } from "../../constants"

const MenuButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className="bg-[#f0f0f0] text-[#1a1a1a] text-[1.2rem] flex text-center justify-center max-w-36 md:max-w-56 md:text-[1.6rem] px-2 md:px-10 py-3 hover:bg-gray-200 transition cursor-pointer"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Bekijk Menu
        </button>
      </DialogTrigger>
      <DialogContent className="border border-[#cda36b]">
        <DialogHeader>
          <DialogTitle>
            <div className="flex items-center gap-3">
              <Image src={logo} alt="logo" height={20} width={20} />
              <span
                className="-ml-3 text-xl tracking-wide text-[#cda36b]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                FOUR SEASONS
              </span>
              Menu
            </div>
          </DialogTitle>
        </DialogHeader>
        <div
          className="space-y-4 p-5"
          style={{ fontFamily: "var(--font-body)" }}
        >
          <ul>
            {mockMenu.map((item) => (
              <li
                key={item.id}
                className="flex justify-between border-b 
                    border-gray-500 pt-2 text-[#f0f0f0] tracking-wider"
              >
                <span>{item.name}</span>
                <span className="font-extralight text-xl">{item.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default MenuButton
