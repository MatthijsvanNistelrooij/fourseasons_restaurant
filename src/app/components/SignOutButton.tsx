"use client"
import { useAuth } from "@/context/AuthContext"

import { useRouter } from "next/navigation"
import { LogOutIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { account } from "@/appwrite"

export default function SignOutButton() {
  const { setUser } = useAuth()
  const router = useRouter()

  const handleSignOut = async () => {
    try {
      await account.deleteSession("current")
      setUser(null)
      router.push("/sign-in")
    } catch (error) {
      console.error("Sign out failed:", error)
    }
  }

  return (
    <>
      <Button
        onClick={handleSignOut}
        className="px-4 py-2 bg-[#efefef] text-[#1a1a1a] cursor-pointer rounded hover:bg-gray-200 w-32"
      >
        Sign Out
        <LogOutIcon className="rotate-180" />
      </Button>
    </>
  )
}
