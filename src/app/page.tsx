import React from "react"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import InsideLook from "./components/InsideLook"

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <InsideLook />
    </div>
  )
}

export default page
