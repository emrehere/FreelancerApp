"use client"
import Navbar from "../../components/NavbarComp/navbar"
import Footer from "../../components/footer"
import Sidebar from '@/app/components/userPanel/sideBar'

export default function SignUpLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-10 sm:block hidden  ">
        <Navbar />
      </div>
      <div className="flex flex-col">
        <div>
          <Sidebar />
        </div>
        <div className="mt-[7rem] ml-[2rem]">
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