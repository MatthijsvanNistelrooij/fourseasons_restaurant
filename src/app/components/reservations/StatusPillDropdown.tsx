import { useState } from "react"
import { Reservation } from "@/types"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type StatusPillDropdownProps = {
  reservation: Reservation
  onUpdate: (updated: Reservation) => void
}

export const StatusPillDropdown = ({
  reservation,
  onUpdate,
}: StatusPillDropdownProps) => {
  const [status, setStatus] = useState(reservation.status)

  const getColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-orange-200 text-orange-800"
      case "confirmed":
        return "bg-green-200 text-green-800"
      case "cancelled":
        return "bg-red-200 text-red-800"
      default:
        return "bg-gray-200 text-gray-800"
    }
  }

  const handleSelect = (newStatus: Reservation["status"]) => {
    setStatus(newStatus)
    onUpdate({ ...reservation, status: newStatus })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <span
          className={`px-2 py-1 rounded-full text-xs font-semibold cursor-pointer ${getColor(
            status
          )}`}
        >
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {["pending", "confirmed", "cancelled"].map((s) => (
          <DropdownMenuItem
            key={s}
            onClick={() => handleSelect(s as Reservation["status"])}
            className="cursor-pointer hover:bg-gray-200"
          >
            {s.charAt(0).toUpperCase() + s.slice(1)}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
