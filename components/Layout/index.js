
import { NavBar, Footer, Header } from ".."

import styles from "./layout.module.css"



function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Header>
        <NavBar />
      </Header>
      {children}
      <Footer />
    </div>
  )
}

export default Layout

