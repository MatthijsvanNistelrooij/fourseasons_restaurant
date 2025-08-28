"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Reservation } from "@/types"
import { useEffect, useState } from "react"

export const EditReservationDialog = ({
  reservation,
  isOpen,
  onClose,
  onSave,
}: {
  reservation: Reservation | null
  isOpen: boolean
  onClose: () => void
  onSave: (updated: Reservation) => void
}) => {
  const [formData, setFormData] = useState<Reservation | null>(reservation)

  useEffect(() => {
    if (reservation) {
      // Format datum uit slot voor date input
      const formattedDate = reservation.slot.split("T")[0]
      setFormData({ ...reservation, slot: formattedDate })
    }
  }, [reservation])

  if (!formData) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Reservering bewerken</DialogTitle>
        </DialogHeader>

        <form
          onSubmit={(e) => {
            e.preventDefault()
            onSave(formData)
            onClose()
          }}
          className="flex flex-col gap-4 mt-2"
        >
          <input
            className="border p-2 rounded"
            value={formData.name}
            placeholder="Naam"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />

          <input
            className="border p-2 rounded"
            value={formData.email}
            placeholder="Email"
            type="email"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />

          <input
            className="border p-2 rounded"
            value={formData.phone}
            placeholder="Telefoonnummer"
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            required
          />

          <input
            className="border p-2 rounded"
            type="number"
            value={formData.size}
            min={1}
            placeholder="Aantal personen"
            onChange={(e) =>
              setFormData({ ...formData, size: parseInt(e.target.value) })
            }
            required
          />

          <textarea
            className="border p-2 rounded"
            value={formData.notes || ""}
            placeholder="Opmerkingen"
            rows={5}
            onChange={(e) =>
              setFormData({ ...formData, notes: e.target.value })
            }
          />

          <input
            className="border p-2 rounded"
            type="date"
            value={formData.slot}
            onChange={(e) => setFormData({ ...formData, slot: e.target.value })}
            required
          />
          <Select
            value={formData.status}
            onValueChange={(value) =>
              setFormData({
                ...formData,
                status: value as Reservation["status"],
              })
            }
          >
            <SelectTrigger className="border p-2 rounded w-full">
              <SelectValue placeholder="Kies status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pending">In afwachting</SelectItem>
              <SelectItem value="confirmed">Bevestigd</SelectItem>
              <SelectItem value="cancelled">Geannuleerd</SelectItem>
            </SelectContent>
          </Select>

          <Button
            type="submit"
            className="cursor-pointer bg-[#1a1a1a] hover:bg-gray-500"
          >
            Opslaan
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
