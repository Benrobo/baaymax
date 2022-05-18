import React, { useEffect, useState } from "react"

import Link from "next/link"
import { FaGithub, FaTwitter } from "react-icons/fa"
import { FiMail } from "react-icons/fi"
import usersInfo from "../../data/usersInfo.json"
import { socials } from "../../data/socials.json"
import avatar from "../../public/images/avatar/avatar.png"

function NavBar() {


    return (
        <React.Fragment>
            <div className={`navbar relative h-auto w-full flex align-center justify-between py-[20px]`}>
                <div className={`left w-auto flex align-start items-start justify-start px-[10px] `}>
                    <p className={`font-extrabold mr-[20px]`}>{usersInfo.github_username.charAt(0).toUpperCase() + usersInfo.github_username.slice(1)}</p>

                    <ul className={`relative ml-[10px] hidden md:flex`}>
                        <li className={`mt-[5px] mr-[10px] mb-[0px] ml-[10px] transition-all hover:text-green-100 hover:font-extrabold cursor-pointer text-[12px]`}>
                            <Link href="/">Home</Link>
                        </li>
                        <li className={`mt-[5px] mr-[10px] mb-[0px] ml-[10px] transition-all hover:text-green-100 hover:font-extrabold cursor-pointer text-[12px]`}>
                            <Link href="/about">About</Link>
                        </li>
                        <li className={`mt-[5px] mr-[10px] mb-[0px] ml-[10px] transition-all hover:text-green-100 hover:font-extrabold cursor-pointer text-[12px]`}>
                            <Link href="/projects">Projects</Link>
                        </li>
                        <li className={`mt-[5px] mr-[10px] mb-[0px] ml-[10px] transition-all hover:text-green-100 hover:font-extrabold cursor-pointer text-[12px]`}>
                            <Link href="#contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className={`relative right w-[50vmin] hidden md:flex `}>
                    <ul className={`flex flex-row align-center justify-between items-center`}>
                        {socials["twitter"] !== "" &&
                            <a href={socials["twitter"]} target="_blank" className={`w-[100px] text-[17px] flex flex-row align-center justify-center items-center decoration-none  hover:text-white `}>
                                <FaTwitter className={`mr-[10px] `} />
                                <small>Twitter</small>
                            </a>}

                        {socials["github"] !== "" &&
                            <a href={socials["github"]} target="_blank" className={`w-[100px] text-[17px] flex flex-row align-center justify-center items-center decoration-none  hover:text-white `}>
                                <FaGithub className={`mr-[10px] `} />
                                <small>Github</small>
                            </a>}

                        {socials["email"] !== "" &&
                            <a href={`mailto:${socials["email"]}`} className={`w-[100px] text-[17px] flex flex-row align-center justify-center items-center decoration-none  hover:text-white `}>
                                <FiMail className={`mr-[10px] icon mail`} />
                                <small>Email</small>
                            </a>}

                    </ul>
                </div>
                <div className={`absolute top-[15px] right-[25px] md:hidden `}>
                    <img src={avatar.src} className={` w-[40px] rounded-[50%] border-[2px] border-solid border-green-100 bg-dark-100 `} />
                </div>
            </div>
        </React.Fragment>
    )
}

export default NavBar

export function ResponsiveNavbar({ activePage, pageName = "" }) {

    const [active, setActive] = useState(activePage || "home")

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
                    <Link href="/">
                        <ion-icon name="home-outline" class={`icon`}></ion-icon>
                    </Link>
                    <label className={`label`}>Home</label>
                </li>
                <li className={active === "projects" ? `active` : `li`} data-name="projects" onClick={handleActive}>
                    <Link href="/projects">
                        <ion-icon name="cube-outline" class={`icon`}></ion-icon>
                    </Link>
                    <label className={`label`}>
                        Projects
                    </label>
                </li>
                <li className={active === "about" ? `active` : `li`} data-name="about" onClick={handleActive}>
                    <Link href="/about">
                        <ion-icon name="person-outline" class={`icon`}></ion-icon>
                    </Link>
                    <label className={`label`}>About</label>
                </li>
                <li className={active === "contact" ? `active mr-5` : `li mr-5`} data-name="contact" onClick={handleActive}>
                    <Link href={pageName === "" ? "#contact" : "/#contact"}>
                        <ion-icon name="mail-outline" class={`icon`}></ion-icon>
                    </Link>
                    <label className={`label`}>Contact</label>
                </li>
            </div>
        </div>
    )
}