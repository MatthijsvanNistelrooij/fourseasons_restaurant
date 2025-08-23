"use client"
import React, { useState } from "react"
import { createReservation } from "@/appwrite"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image"
import logo from "/public/assets/logo.png"
import { toast } from "sonner"

type BtnProps = {
  fontSize: string
}

const ReservationButton = ({ fontSize }: BtnProps) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    slot: "",
    size: 1,
    notes: "",
    status: "pending",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: name === "size" ? parseInt(value) : value })
  }

  const handleSubmit = async (e: React.FormEvent, onClose: () => void) => {
    e.preventDefault()
    try {
      const isoSlot = new Date(form.slot).toISOString()
      await createReservation({
        ...form,
        slot: isoSlot,
      })

      toast.success("Reservering geplaatst!") // ✅ Sonner melding
      setIsOpen(false)
    } catch (err) {
      toast.error("Er ging iets mis, probeer het opnieuw")
      console.error(err)
    }
  }

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <button
            className={`bg-[#f0f0f0] text-[#1a1a1a] ${fontSize} px-6 font-bold hover:bg-gray-200 transition cursor-pointer`}
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

          <form
            onSubmit={(e) =>
              handleSubmit(e, () =>
                setForm({
                  name: "",
                  email: "",
                  phone: "",
                  slot: "",
                  size: 1,
                  notes: "",
                  status: "pending",
                })
              )
            }
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Naam"
              value={form.name}
              onChange={handleChange}
              className="w-full border px-3 py-2"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full border px-3 py-2"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Telefoon"
              value={form.phone}
              onChange={handleChange}
              className="w-full border px-3 py-2"
              required
            />
            <input
              type="datetime-local"
              name="slot"
              value={form.slot}
              onChange={handleChange}
              className="w-full border px-3 py-2"
              required
            />
            <input
              type="number"
              name="size"
              placeholder="Aantal personen"
              value={form.size}
              onChange={handleChange}
              className="w-full border px-3 py-2"
              min={1}
              required
            />
            <textarea
              name="notes"
              placeholder="Opmerkingen"
              value={form.notes}
              onChange={handleChange}
              className="w-full border px-3 py-2"
            />

            <button
              type="submit"
              className="w-full bg-[#cda36b] cursor-pointer text-white py-2 hover:opacity-90"
            >
              Bevestigen
            </button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default ReservationButton
