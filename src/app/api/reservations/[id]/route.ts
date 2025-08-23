import { NextRequest, NextResponse } from "next/server"
import { databases } from "@/appwrite"
import { appwriteConfig } from "@/appwrite/config"

const databaseId = appwriteConfig.databaseId
const collectionId = appwriteConfig.reservationsCollectionId
export async function PUT(request: NextRequest) {
  try {
    const id = request.nextUrl.pathname.split("/").pop()
    const data = await request.json()

    if (!id || !data) {
      return NextResponse.json(
        { error: "Missing 'id' or 'data'" },
        { status: 400 }
      )
    }

    await databases.updateDocument(databaseId, collectionId, id, data)

    return NextResponse.json(
      { message: "Appointment updated" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Failed to update appointment:", error)
    return NextResponse.json(
      { error: "Failed to update appointment" },
      { status: 500 }
    )
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const id = request.nextUrl.pathname.split("/").pop()

    if (!id) {
      return NextResponse.json(
        { error: "Missing appointment ID" },
        { status: 400 }
      )
    }

    await databases.deleteDocument(databaseId, collectionId, id)

    return NextResponse.json(
      { message: "Appointment deleted" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Failed to delete appointment:", error)
    return NextResponse.json(
      { error: "Failed to delete appointment" },
      { status: 500 }
    )
  }
}
