export interface Reservation {
  id: string
  name: string
  slot: string
  email: string
  phone: string
  size: number
  notes?: string | null
  status: string
  created_at: string
  updated_at: string
}

export type ReservationInput = Omit<
  Reservation,
  "id" | "created_at" | "updated_at"
>
