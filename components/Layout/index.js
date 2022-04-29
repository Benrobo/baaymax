
import React, { useEffect, useState } from "react"


import { NavBar, Footer, Header, DomHead } from ".."
import { ResponsiveNavbar } from "../Navbar"

import styles from "./layout.module.css"



function Layout({ children }) {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth)
    })
  }, [windowWidth])

  return (
    <div className={styles.layout}>
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

