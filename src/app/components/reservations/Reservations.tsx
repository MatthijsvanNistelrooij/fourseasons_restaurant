"use client"

import React, { useEffect, useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Button } from "@/components/ui/button"
import { Edit, Trash } from "lucide-react"

import Pagination from "./Pagination"
import { Reservation } from "@/types"
import {
  deleteReservation,
  getAllReservations,
  updateReservation,
} from "@/appwrite"
import SignOutButton from "../SignOutButton"
import { EditReservationDialog } from "./EditReservationDialog"
import { DeleteReservationDialog } from "./DeleteReservationDialog"
import { StatusPillDropdown } from "./StatusPillDropdown"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const Reservations = () => {
  const [reservations, setReservations] = useState<Reservation[]>([])
  const [filter, setFilter] = useState<string | null>(null)

  const [editingReservation, setEditingReservation] =
    useState<Reservation | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [deletingReservation, setDeletingReservation] =
    useState<Reservation | null>(null)

  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc")

  useEffect(() => {
    async function fetchReservations() {
      try {
        const allReservationsRaw = await getAllReservations()
        const allReservations: Reservation[] = allReservationsRaw.map(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (item: any) => ({
            $id: item.$id,
            $createdAt: item.$createdAt,
            $updatedAt: item.$updatedAt,
            name: item.name,
            slot: item.slot,
            email: item.email,
            phone: item.phone,
            size: item.size,
            notes: item.notes,
            status: item.status,
          })
        )
        setReservations(allReservations)
      } catch (err) {
        console.error(err)
      }
    }
    fetchReservations()
  }, [])

  const filteredReservations = filter
    ? reservations.filter((r) => r.status === filter)
    : reservations

  const handleDelete = async () => {
    if (!deletingReservation) return
    try {
      await deleteReservation(deletingReservation.$id)
      setReservations((prev) =>
        prev.filter((r) => r.$id !== deletingReservation.$id)
      )
      setDeletingReservation(null)
      setIsDeleteDialogOpen(false)
    } catch (err) {
      console.error("Failed to delete", err)
    }
  }

  const itemsPerPage = 10
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(filteredReservations.length / itemsPerPage)

  const sortedReservations = [...filteredReservations].sort((a, b) => {
    const aDate = new Date(a.slot).getTime()
    const bDate = new Date(b.slot).getTime()
    return sortDirection === "asc" ? aDate - bDate : bDate - aDate
  })

  const paginatedReservations = sortedReservations.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const handleEditReservation = async (updatedReservation: Reservation) => {
    try {
      await updateReservation(updatedReservation.$id, updatedReservation)
      setReservations((prev) =>
        prev.map((r) =>
          r.$id === updatedReservation.$id ? updatedReservation : r
        )
      )
      setIsDialogOpen(false)
    } catch (err) {
      console.error("Failed to update", err)
    }
  }


  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <aside className="w-full lg:w-48 bg-[#1a1a1a] p-4 border-b lg:border-b-0 lg:border-r sticky top-0 z-10">
        <div className="flex items-center gap-4 ml-2 justify-end lg:justify-start">
          <SignOutButton />
        </div>
      </aside>

      <main className="flex-1 p-6 overflow-x-auto bg-gray-100">
        <h2 className="text-xl font-semibold mb-4">Reserveringen</h2>

        <div className="flex gap-2 mb-4 flex-wrap">
          <Button
            className={`cursor-pointer bg-transparent hover:bg-gray-200 ${
              filter === null ? "text-gray-800" : "text-gray-500"
            }`}
            size="sm"
            variant={filter === null ? "outline" : "default"}
            onClick={() => setFilter(null)}
          >
            Alle
          </Button>
          {["pending", "confirmed", "cancelled"].map((status) => (
            <Button
              className={`cursor-pointer bg-transparent hover:bg-gray-200 ${
                filter === status ? "text-gray-800" : "text-gray-500"
              }`}
              key={status}
              size="sm"
              variant={filter === status ? "outline" : "default"}
              onClick={() => setFilter(status)}
            >
              {status}
            </Button>
          ))}
        </div>

        <div className="border rounded overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Naam</TableHead>
                <TableHead
                  onClick={() =>
                    setSortDirection(sortDirection === "asc" ? "desc" : "asc")
                  }
                  className="cursor-pointer"
                >
                  Datum / Tijd {sortDirection === "asc" ? "↑" : "↓"}
                </TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Telefoon</TableHead>
                <TableHead>Grootte</TableHead>
                <TableHead>Opmerkingen</TableHead>
                <TableHead />
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedReservations.map((res) => (
                <TableRow key={res.$id}>
                  <TableCell>{res.name}</TableCell>

                  <TableCell>
                    {new Date(res.slot).toLocaleString("nl-NL", {
                      dateStyle: "short",
                      timeStyle: "short",
                    })}
                  </TableCell>
                  <TableCell>
                    <StatusPillDropdown
                      reservation={res}
                      onUpdate={handleEditReservation}
                    />
                  </TableCell>
                  <TableCell>{res.email}</TableCell>
                  <TableCell>{res.phone}</TableCell>
                  <TableCell>{res.size}</TableCell>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <TableCell className="max-w-[200px] truncate cursor-pointer">
                          {res.notes || "-"}
                        </TableCell>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-sm whitespace-pre-line">
                        {res.notes}
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <TableCell className="flex justify-end gap-2">
                    <Button
                      onClick={() => {
                        setEditingReservation(res)
                        setIsDialogOpen(true)
                      }}
                      size="sm"
                      className="p-0 bg-transparent text-gray-800 hover:bg-white cursor-pointer m-0"
                    >
                      <Edit size={12} />
                    </Button>
                    <Button
                      size="sm"
                      className="p-0 bg-transparent text-red-500 hover:bg-white cursor-pointer m-0"
                      onClick={() => {
                        setDeletingReservation(res)
                        setIsDeleteDialogOpen(true)
                      }}
                    >
                      <Trash size={12} />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {filteredReservations.length > itemsPerPage && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPrev={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            onNext={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={filteredReservations.length <= itemsPerPage}
          />
        )}
      </main>

      <EditReservationDialog
        reservation={editingReservation}
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onSave={handleEditReservation}
      />
      <DeleteReservationDialog
        reservation={deletingReservation}
        isOpen={isDeleteDialogOpen}
        onClose={() => setIsDeleteDialogOpen(false)}
        onDelete={handleDelete}
      />
    </div>
  )
}

export default Reservations
