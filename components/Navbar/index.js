import React, { useEffect, useState } from "react"

import Link from "next/link"
import { FaGithub, FaMailBulk, FaMailchimp, FaTwitter } from "react-icons/fa"
import { FiMail } from "react-icons/fi"


function NavBar() {


    return (
        <React.Fragment>
            <div className={`navbar relative h-auto w-full flex align-center justify-between py-[20px]`}>
                <div className={`left w-auto flex align-start items-start justify-start px-[10px] `}>
                    <p className={`font-extrabold mr-[20px]`}>Benrobo</p>

                    <ul className={`relative ml-[10px] hidden md:flex`}>
                        <li className={`mt-[5px] mr-[10px] mb-[0px] ml-[10px] transition-all hover:text-green-100 hover:font-extrabold cursor-pointer text-[12px]`}>Home</li>
                        <li className={`mt-[5px] mr-[10px] mb-[0px] ml-[10px] transition-all hover:text-green-100 hover:font-extrabold cursor-pointer text-[12px]`}>About</li>
                        <li className={`mt-[5px] mr-[10px] mb-[0px] ml-[10px] transition-all hover:text-green-100 hover:font-extrabold cursor-pointer text-[12px]`}>Portfolio</li>
                        <li className={`mt-[5px] mr-[10px] mb-[0px] ml-[10px] transition-all hover:text-green-100 hover:font-extrabold cursor-pointer text-[12px]`}>Contact</li>
                    </ul>
                </div>
                <div className={`relative right w-[50vmin] hidden md:flex `}>
                    <ul className={`flex flex-row align-center justify-between items-center`}>
                        <a href="" className={`w-[100px] text-[17px] flex flex-row align-center justify-center items-center decoration-none  hover:text-white `}>
                            <FaTwitter className={`mr-[10px] `} />
                            <small>Twitter</small>
                        </a>
                        <a href="" className={`w-[100px] text-[17px] flex flex-row align-center justify-center items-center decoration-none  hover:text-white `}>
                            <FaGithub className={`mr-[10px] `} />
                            <small>Github</small>
                        </a>
                        <a href="" className={`w-[100px] text-[17px] flex flex-row align-center justify-center items-center decoration-none  hover:text-white `}>
                            <FiMail className={`mr-[10px] icon mail`} />
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
        <div className={`mobileNav`}>
            <div className={`main`}>
                <li className={active === "home" ? `active` : `li`} data-name="home" onClick={handleActive}>
                    <ion-icon name="home-outline" class={`icon`}></ion-icon>
                    <label className={`label`}>Home</label>
                </li>
                <li className={active === "services" ? `active` : `li`} data-name="services" onClick={handleActive}>
                    <ion-icon name="briefcase-outline" class={`icon`}></ion-icon>
                    <label className={`label`}>Services</label>
                </li>
                <li className={active === "projects" ? `active` : `li`} data-name="projects" onClick={handleActive}>
                    <ion-icon name="cube-outline" class={`icon`}></ion-icon>
                    <label className={`label`}>Projects</label>
                </li>
                <li className={active === "about" ? `active` : `li`} data-name="about" onClick={handleActive}>
                    <ion-icon name="person-outline" class={`icon`}></ion-icon>
                    <label className={`label`}>About</label>
                </li>
                <li className={active === "contact" ? `active mr-5` : `li mr-5`} data-name="contact" onClick={handleActive}>
                    <ion-icon name="mail-outline" class={`icon`}></ion-icon>
                    <label className={`label`}>Contact</label>
                </li>
            </div>
        </div>
    )
}