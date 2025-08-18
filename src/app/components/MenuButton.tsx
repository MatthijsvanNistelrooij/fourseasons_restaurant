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
import { mockMenu } from "../constants"

const MenuButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className="bg-[#f0f0f0] text-2xl text-black px-4 py-2 w-44 font-bold hover:bg-gray-200 transition cursor-pointer"
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
        <div className="space-y-4 p-8" style={{ fontFamily: "var(--font-body)" }}>
          <ul>
            {mockMenu.map((item) => (
              <li
                key={item.id}
                className="flex justify-between border-b border-gray-200 pb-2 text-[#f0f0f0] font-lights"
              >
                <span>{item.name}</span>
                <span className="font-light">{item.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default MenuButton
