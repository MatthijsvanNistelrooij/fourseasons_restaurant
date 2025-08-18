"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useAuth } from "@/context/AuthContext"
import Image from "next/image"
import logo from "/public/logo.png"

import { account } from "@/appwrite"
import { ID, Models } from "node-appwrite"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function SignUpForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()
  const { user, setUser } = useAuth()

  useEffect(() => {
    if (user) router.push("/")
  }, [user, router])

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      await account.create(ID.unique(), email, password, name)

      await account.createEmailPasswordSession(email, password)

      const appwriteUser: Models.User<Models.Preferences> = await account.get()
      setUser(appwriteUser)

      router.push("/")
    } catch (error) {
      console.error("Signup error:", error)
      alert("Failed to register: " + (error as Error).message)
    }
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:flex-1 bg-[#1a1a1a] flex items-center justify-center p-12">
        <div className="max-w-xs text-center text-white">
          <div className="mb-8">
            <Image
              width={800}
              height={800}
              src={logo}
              alt="Logo"
              className="mx-auto w-full h-full object-contain"
            />
          </div>
          <h1 className="text-4xl font-bold">Join Us</h1>
          <p className="mt-4 text-[#f0f0f0]">
            Create an account to manage appointments and more.
          </p>
        </div>
      </div>

      <div className="md:flex-1 flex items-center justify-center p-8 bg-white">
        <form
          onSubmit={handleSignUp}
          className="w-full max-w-md space-y-6 bg-white p-8 rounded-lg shadow-md"
        >
          <h2 className="text-2xl text-center font-semibold text-gray-900">
            Register
          </h2>

          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <Input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2
                         placeholder-gray-400 shadow-sm focus:border-[#1a1a1a] focus:ring
                         focus:ring-blue-200 focus:ring-opacity-50"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <Input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2
                         placeholder-gray-400 shadow-sm focus:border-[#1a1a1a] focus:ring
                         focus:ring-blue-200 focus:ring-opacity-50"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <Input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2
                         placeholder-gray-400 shadow-sm focus:border-[#1a1a1a] focus:ring
                         focus:ring-blue-200 focus:ring-opacity-50"
              placeholder="••••••••"
            />
          </div>

          <Button
            type="submit"
            className="w-full rounded-md bg-[#1a1a1a] py-2 text-white font-semibold
                       hover:bg-[#000000] transition-colors cursor-pointer"
          >
            Register
          </Button>

          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              href="/sign-in"
              className="text-[#cda36b] hover:underline font-medium"
            >
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}
