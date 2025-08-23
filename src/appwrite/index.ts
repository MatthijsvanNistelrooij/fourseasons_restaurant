import { Client, Account, Databases } from "appwrite"
import { appwriteConfig } from "../appwrite/config"
import { Reservation } from "@/types"
import { ID } from "node-appwrite"

if (!appwriteConfig.endpointUrl || !appwriteConfig.projectId) {
  throw new Error(
    "Appwrite config is missing. Check your environment variables."
  )
}

const client = new Client()
  .setEndpoint(appwriteConfig.endpointUrl)
  .setProject(appwriteConfig.projectId)

const account = new Account(client)
const databases = new Databases(client)

export { client, databases, account }

export const getAllReservations = async () => {
  try {
    const response = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.reservationsCollectionId
    )
    return response.documents
  } catch (error) {
    console.error("Failed to fetch reservations:", error)
    return []
  }
}

export const updateReservation = async (id: string, data: Reservation) => {
  const res = await fetch(`/api/reservations/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })

  if (!res.ok) {
    throw new Error("Failed to update reservation")
  }

  return res.json()
}

export const deleteReservation = async (id: string) => {
  const res = await fetch(`/api/reservations/${id}`, {
    method: "DELETE",
  })

  if (!res.ok) {
    throw new Error("Failed to delete reservation")
  }
}

export const createReservation = async (
  reservationData: Omit<Reservation, "$id" | "$createdAt" | "$updatedAt">
) => {
  try {
    const response = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.reservationsCollectionId,
      ID.unique(),
      reservationData
    )
    return response as unknown as Reservation
  } catch (error) {
    console.error("Error creating reservation:", error)
    throw error
  }
}
