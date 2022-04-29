
import { NavBar, Footer, Header, DomHead } from ".."

import styles from "./layout.module.css"



function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <DomHead/>
      <Header>
        <NavBar />
      </Header>
      {children}
      {/* <Footer /> */}
    </div>
  )
}

export default Layout

