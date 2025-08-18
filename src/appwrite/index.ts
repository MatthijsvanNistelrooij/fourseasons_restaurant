import { Client, Account, Databases, ID } from "appwrite"
import { appwriteConfig } from "../appwrite/config"

const client = new Client()
  .setEndpoint(appwriteConfig.endpointUrl)
  .setProject(appwriteConfig.projectId)

const account = new Account(client)
const databases = new Databases(client)

export { client, databases, account }

export const getAllAppointments = async () => {
  try {
    const response = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.appointmentsCollectionId
    )
    return response.documents
  } catch (error) {
    console.error("Failed to fetch appointments:", error)
    return []
  }
}
