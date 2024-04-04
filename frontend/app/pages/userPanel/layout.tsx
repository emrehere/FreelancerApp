"use client"
import Navbar from "../../components/NavbarComp/navbar"
import Footer from "../../components/footer"
import Sidebar from '@/app/components/userPanel/sideBar'
import { useEffect, useState } from "react"
import UserNavbar from "@/app/components/LoggedInNavbar/UserNavbar"

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
      <div className="fixed top-0 left-0 w-full z-10 sm:block hidden  ">
        {
            token ? <UserNavbar /> : <Navbar />
        }
      </div>
      <div className="flex flex-col mt-[7rem]">
        <div>
          <Sidebar />
        </div>
        <div className=" ml-[2rem]">
          {children}
        </div>
        <div className="flex flex-grow">

        </div>
        <div>
        <Footer />
        </div>
      </div>
    </>
  )
}