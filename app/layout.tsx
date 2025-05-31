
import Navbar from "@/components/navbar"
import { Metadata } from "next"
import {Bricolage_Grotesque} from "next/font/google"
import "./globals.css"

const bricolage = Bricolage_Grotesque({
  variable : "--font-bricolage",
  subsets : ["latin"],
})

export const metadata:Metadata = {
  title : "Dwicode AI",
  description : "Realtime AI Teaching Platform",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${bricolage.variable} antialiased`}>
      <body className="bg-white text-gray-900 antialiased">
        <Navbar/>
        {children}
      </body>
    </html>
  )
}