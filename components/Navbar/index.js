
import React, { useEffect, useState } from "react"

import Link from "next/link"
import { FaGithub, FaMailBulk, FaMailchimp, FaTwitter } from "react-icons/fa"
import { FiMail } from "react-icons/fi"


import styles from "./nav.module.css"


function NavBar() {


    return (
        <React.Fragment>
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
        </React.Fragment>
    )
}

export default NavBar

export function ResponsiveNavbar() {

    const [active, setActive] = useState("home")

    function handleActive(e) {
        let tgt = e.target.dataset;
        let parent = e.target.parentElement.dataset;

        if (Object.entries(tgt).length === 0) {
            if (Object.entries(parent).length > 0) {
                let { name } = parent
                setActive(name)
            }
            return
        }
        let { name } = tgt;
        setActive(name)
    }

    return (
        <div className={styles.mobileNav}>
            <div className={styles.main}>
                <li className={active === "home" ? styles.active : styles.li} data-name="home" onClick={handleActive}>
                    <ion-icon name="home-outline" class={styles.icon}></ion-icon>
                    <label className={styles.label}>Home</label>
                </li>
                <li className={active === "services" ? styles.active : styles.li} data-name="services" onClick={handleActive}>
                    <ion-icon name="briefcase-outline" class={styles.icon}></ion-icon>
                    <label className={styles.label}>Services</label>
                </li>
                <li className={active === "projects" ? styles.active : styles.li} data-name="projects" onClick={handleActive}>
                    <ion-icon name="cube-outline" class={styles.icon}></ion-icon>
                    <label className={styles.label}>Projects</label>
                </li>
                <li className={active === "about" ? styles.active : styles.li} data-name="about" onClick={handleActive}>
                    <ion-icon name="person-outline" class={styles.icon}></ion-icon>
                    <label className={styles.label}>About</label>
                </li>
                <li className={active === "contact" ? styles.active : styles.li} data-name="contact" onClick={handleActive}>
                    <ion-icon name="mail-outline" class={styles.icon}></ion-icon>
                    <label className={styles.label}>Contact</label>
                </li>
            </div>
        </div>
    )
}