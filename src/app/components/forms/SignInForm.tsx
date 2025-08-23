"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { account } from "@/appwrite"
import Image from "next/image"
import logo from "/public/logo.png"

import { Models } from "node-appwrite"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/context/AuthContext"

export default function SignInForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()
  const { user, setUser } = useAuth()

  useEffect(() => {
    if (user) router.push("/reservations")
  }, [user, router])

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      await account.createEmailPasswordSession(email, password)

      const sessionUser: Models.User<Models.Preferences> = await account.get()
      setUser(sessionUser)

      router.push("/reservations")
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      alert("Sign-in failed: " + err.message)
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
          <h1 className="text-4xl font-bold">Welcome Back</h1>
          <p className="mt-4 text-[#f0f0f0]">
            Sign in to manage reservations and more.
          </p>
        </div>
      </div>

      <div className="md:flex-1 flex items-center justify-center p-8 bg-white">
        <form
          onSubmit={handleSignIn}
          className="w-full max-w-md space-y-6 bg-white p-8 rounded-lg shadow-md"
        >
          <h2 className="text-2xl text-center font-semibold text-gray-900">
            Sign In
          </h2>

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
              placeholder="you@example.com"
              className="text-gray-800"
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
              className="text-gray-800"
              placeholder="••••••••"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-[#1a1a1a] text-white hover:bg-[#000000] transition-colors cursor-pointer"
          >
            Sign In
          </Button>

          <p className="text-center text-sm text-gray-600">
            Dont have an account?{" "}
            <Link
              href="/sign-up"
              className="text-[#cda36b] hover:underline font-medium"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}
