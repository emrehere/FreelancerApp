"use client"
import Navbar from "../../components/NavbarComp/navbar"
import Footer from "../../components/footer"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function SignUpLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const myToken = localStorage.getItem("token")
    if (myToken) {
      router.push("/")
    } else {
      setLoading(false)
    }
  }, [router])

  return (
    <>
      {
        loading ? <p>Loading...</p> : (
          <div>
            <div className="fixed top-0 left-0 w-full z-10 sm:block hidden ">
              <Navbar />
            </div>
            {children}
            <Footer />
          </div>
        )
      }
    </>
  )
}