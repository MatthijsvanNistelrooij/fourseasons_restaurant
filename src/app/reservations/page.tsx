import { redirect } from "next/navigation"
import Reservations from "../components/reservations/Reservations"
import { createClient } from "@/lib/supabase/server"

const ReservationsPage = async () => {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user || user.app_metadata.role !== "staff") {
    redirect("/sign-in")
  }

  return <Reservations />
}

export default ReservationsPage