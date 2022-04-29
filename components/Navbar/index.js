
import Link from "next/link"
import { FaGithub, FaMailBulk, FaMailchimp, FaTwitter } from "react-icons/fa"
import { FiMail } from "react-icons/fi"


import styles from "./nav.module.css"


function NavBar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.left}>
                <p className={styles.brand}>Benrobo</p>

                <ul className={styles.ul}>
                    <li className={styles.li, styles.active}>Home</li>
                    <li className={styles.li}>Services</li>
                    <li className={styles.li}>Projects</li>
                    <li className={styles.li}>About</li>
                    <li className={styles.li}>Contacts</li>
                </ul>
            </div>
            <div className={styles.right}>
                <ul className={styles.ul}>
                    <a href="" className={styles.a}>
                        <FaTwitter className={styles.icon} />
                        <small>Twitter</small>
                    </a>
                    <a href="" className={styles.a}>
                        <FaGithub className={styles.icon} />
                        <small>Github</small>
                    </a>
                    <a href="" className={styles.a}>
                        <FiMail className={styles.icon, styles.mail} />
                        <small>Email</small>
                    </a>
                </ul>
            </div>
        </div>
    )
}

export default NavBar

