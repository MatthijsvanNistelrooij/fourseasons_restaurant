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

type BtnProps = {
  fontSize: string
}

const ReservationButton = ({ fontSize }: BtnProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className={`bg-[#f0f0f0] text-[#1a1a1a] ${fontSize} text-sm md:text-[1rem] px-6 py-2 font-bold hover:bg-gray-200 transition cursor-pointer`}
          style={{ fontFamily: "var(--font-body)" }}
        >
          Reserveren
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
              Reserveren
            </div>
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
            <ul>
              <li>.1</li>
              <li>.2</li>
              <li>.3</li>
              <li>.4</li>
              <li>.5</li>
              <li>.6</li>
              <li>.7</li>
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ReservationButton
