"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/context/AuthContext"

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth()
  const router = useRouter()

  console.log(user)
  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.replace("/sign-in")
      } else if (user.emailVerification === false) {
        router.replace("/pending-approval")
      }
    }
  }, [loading, user, router])

  if (loading || !user || user.emailVerification === false) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        Loading...
      </div>
    )
  }

  return <>{children}</>
}

export default ProtectedLayout
