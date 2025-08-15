import React from "react"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import InsideLook from "./components/InsideLook"
import MenuSection from "./components/MenuSection"
import Footer from "./components/Footer"
import ImageDivider from "./components/ImageDivider"
import welcome from "/public/four_seasons_welcome.png"
import about from "/public/assets/about.jpg"
import ContactInfo from "./components/ContactInfo"

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ImageDivider image={about} />
      <InsideLook />
      <MenuSection />
      <ImageDivider image={welcome} />
      <ContactInfo />
      <Footer />
    </div>
  )
}

export default page
