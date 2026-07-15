import React from "react"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import InsideLook from "./components/InsideLook"
import MenuSection from "./components/MenuSection"
import Footer from "./components/Footer"
import ImageSection from "./components/ImageSection"
import welcome from "/public/four_seasons_welcome.png"
import about from "/public/assets/about.jpg"
import ImageCarousel from "./components/ImageCarousel"
import Maintenance from "./components/Maintenance"

const page = () => {
  const maintenanceMode = true

  if (maintenanceMode) {
    return <Maintenance />
  }

  return (
    <div className="bg-[#1a1a1a]">
      <Navbar />
      <Hero />
      <ImageSection image={about} />
      <InsideLook />
      <ImageCarousel />
      <MenuSection />
      <ImageSection image={welcome} />
      <Footer />
    </div>
  )
}

export default page
