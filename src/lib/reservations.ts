import { createClient } from "@/lib/supabase/client"
import type { Reservation, ReservationInput } from "@/types"

export const getAllReservations = async (): Promise<Reservation[]> => {
  try {
    const supabase = createClient()
    const { data, error } = await supabase
      .from("reservations")
      .select("*")
      .order("slot", { ascending: false })

    if (error) throw error
    return (data ?? []) as Reservation[]
  } catch (error) {
    console.error("Failed to fetch reservations:", error)
    return []
  }
}

export const createReservation = async (
  reservationData: ReservationInput
): Promise<Reservation> => {
  const supabase = createClient()
  const { data, error } = await supabase
    .from("reservations")
    .insert(reservationData)
    .select()
    .single()

  if (error) {
    console.error("Error creating reservation:", error)
    throw error
  }

  return data as Reservation
}

export const updateReservation = async (
  id: string,
  data: Reservation
): Promise<void> => {
  const { id: _id, created_at: _createdAt, updated_at: _updatedAt, ...safeData } =
    data

  const res = await fetch(`/api/reservations/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(safeData),
  })

  if (!res.ok) {
    throw new Error("Failed to update reservation")
  }
}

export const deleteReservation = async (id: string): Promise<void> => {
  const res = await fetch(`/api/reservations/${id}`, {
    method: "DELETE",
  })

  if (!res.ok) {
    throw new Error("Failed to delete reservation")
  }
}
