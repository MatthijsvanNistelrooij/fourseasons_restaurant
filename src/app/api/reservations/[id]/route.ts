import { NextRequest, NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const data = await request.json()

    if (!id || !data) {
      return NextResponse.json(
        { error: "Missing 'id' or 'data'" },
        { status: 400 }
      )
    }

    const supabase = await createClient()

    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { error } = await supabase
      .from("reservations")
      .update({ ...data, updated_at: new Date().toISOString() })
      .eq("id", id)

    if (error) throw error

    return NextResponse.json(
      { message: "Reservation updated" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Failed to update reservation:", error)
    return NextResponse.json(
      { error: "Failed to update reservation" },
      { status: 500 }
    )
  }
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params

    if (!id) {
      return NextResponse.json(
        { error: "Missing reservation ID" },
        { status: 400 }
      )
    }

    const supabase = await createClient()

    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { error } = await supabase.from("reservations").delete().eq("id", id)

    if (error) throw error

    return NextResponse.json(
      { message: "Reservation deleted" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Failed to delete reservation:", error)
    return NextResponse.json(
      { error: "Failed to delete reservation" },
      { status: 500 }
    )
  }
}
