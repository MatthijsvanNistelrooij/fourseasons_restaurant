import React from "react"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import InsideLook from "./components/InsideLook"
import MenuSection from "./components/MenuSection"
import Footer from "./components/Footer"
import ImageDivider from "./components/ImageDivider"

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <InsideLook />
      <MenuSection />
      <ImageDivider />
      <Footer />
    </div>
  )
}

export default page
