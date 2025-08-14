import type { Metadata } from "next"
import { Playfair_Display, Lato } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

const lato = Lato({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700"],
})

export const metadata: Metadata = {
  title: "Four Seasons Restaurant",
  description: "Four Seasons Restaurant",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${lato.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
