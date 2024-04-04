"use client"
import Navbar from "../../components/NavbarComp/navbar"
import Footer from "../../components/footer"
import { useEffect, useState } from "react"


export default function SignUpLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [token, setToken] = useState("")

    useEffect(() => {
        const myToken = localStorage.getItem("token")
        setToken(myToken as string)
    }, [])

  return (
    <>
      
        <div className="fixed top-0 left-0 w-full z-10 sm:block hidden ">
        {
            token ? null : <Navbar />
        }
        </div>
        {children}
        <Footer />
      
    </>
  )
}