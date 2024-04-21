"use client"
import Footer from "../../components/footer"
import { useEffect, useState } from "react"
import { useRouter } from 'next/navigation'
import UserNavbar from "@/app/components/LoggedInNavbar/UserNavbar"
import  DashboardSidebar  from '@/app/components/dashboardComp/DashboardSidebar'
import RightBar from "@/app/components/dashboardComp/RightBar"

export default function DashboardLayout({
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
    <div className="bg-blue-50 ">
      <div className="fixed top-0 left-0 w-full z-10 sm:block hidden  ">
       
           <UserNavbar /> 
      
      </div>
      <div className="flex flex-col mt-[7rem]">
        <div className=" fixed ">
          <DashboardSidebar />
        </div>
        <div className=" ml-[20rem] mt-8 ">
          {children}
        </div>
        <div>
          <RightBar />
        </div>
        <div className="flex flex-grow">

        </div>
        <div className="flex-grow"></div>
        <div className=" ml-56">
        <Footer />
        </div>
      </div>
    </div>
  )
}