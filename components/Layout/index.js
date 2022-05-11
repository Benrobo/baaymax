
import React, { useEffect, useState } from "react"


import { NavBar, Footer, Header, DomHead } from ".."
import { ResponsiveNavbar } from "../Navbar"


function Layout({ children }) {

  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    setWindowWidth(window.innerWidth)
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth)
    })
  }, [windowWidth])

  return (
    <div className={`w-screen h-screen`}>
      <DomHead />
      <Header>
        <NavBar />
      </Header>
      {children}
      {windowWidth <= 700 && <ResponsiveNavbar />}
      {/* <Footer /> */}
    </div>
  )
}

export default Layout

