"use client"
import Navbar from "../../components/NavbarComp/navbar"
import Footer from "../../components/footer"
import Sidebar from '@/app/components/userPanel/sideBar'
import { useEffect, useState } from "react"
import { useRouter } from 'next/navigation'
import UserNavbar from "@/app/components/LoggedInNavbar/UserNavbar"

export default function SignUpLayout({
  children,
}: {
  children: React.ReactNode
}) {

    const router = useRouter()

    useEffect(() => {
        const myToken = localStorage.getItem("token")   
        if (!myToken) {
          router.push("/pages/signin")
        }       
    }, [])

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-10 sm:block hidden  ">
       
           <UserNavbar /> 
      
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
        <div className=" ml-56">
        <Footer />
        </div>
      </div>
    </>
  )
}