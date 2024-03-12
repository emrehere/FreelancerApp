"use client"
import Navbar from "../../components/NavbarComp/navbar"
import Footer from "../../components/footer"

export default function SignUpLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
         <div className="fixed top-0 left-0 w-full z-10 sm:block hidden ">
        <Navbar/>
        </div>
        {children}
        <Footer />
      </>
    )
}