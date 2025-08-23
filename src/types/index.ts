export interface Reservation {
  $id: string
  name: string
  slot: string
  email: string
  phone: string
  size: number
  notes?: string
  status: string
  $createdAt: string
  $updatedAt: string
}
