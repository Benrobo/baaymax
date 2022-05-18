import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Container, DomHead, Footer, NavBar } from "../components"
import { FaArrowLeft } from 'react-icons/fa'
import { ResponsiveNavbar } from '../components/Navbar'

import userInfo from "../data/usersInfo.json"

function About() {
    const [windowWidth, setWindowWidth] = useState(0)
    const [avatar, setAvatar] = useState("")

    useEffect(() => {
        setWindowWidth(window.innerWidth)
        window.addEventListener("resize", () => {
            setWindowWidth(window.innerWidth)
        })
    }, [windowWidth])

    useEffect(() => {
        let useravatar = JSON.parse(localStorage.getItem("github_avatar"))
        setAvatar(useravatar)
    }, [])

    return (
        <div>
            <DomHead pageName='About' />
            <Container>
                <NavBar />
            </Container>
            <div id="top-head" className="relative w-full h-[35vh] bg-dark-400 p-3 flex flex-col items-start justify-start ">
                <Container className="relative">
                    <Link href={"/"}>
                        <FaArrowLeft className='px-3 py-1 text-white-200 text-[35px] bg-dark-100 rounded-[4px] cursor-pointer' />
                    </Link>
                    <br />
                    <h1 className="text-[50px] font-bold ">
                        About
                    </h1>
                    <p className="text-[15px] text-white-300 ">
                        About Me.
                    </p>
                </Container>
            </div>

            <div className="w-screen h-auto ">
                <Container>
                    <div className="w-full  h-auto flex flex-col items-center justify-between p-5 md:flex-row">
                        <div className="w-full md:w-[50%] ">
                            <div className="w-full h-[450px] bg-cover bg-center bg-no-repeat md:w-[350px] rounded-md" style={{
                                backgroundImage: `url(${avatar})`
                            }}></div>
                        </div>
                        <div className="w-full md:w-[50%] ">
                            <div className={`w-full h-auto relative top-[20px] p-[10px] mb-[30px] md:mb-0 md:top-0`}>
                                <p className={`text-[12px] text-white-200 `}>Introduce</p>
                                <div className={`relative top-[20px]`}>
                                    <h1 className={`text-[35px] font-bold mb-[20px]`}>
                                        {userInfo.greeting_type}  I'm {userInfo.full_name}
                                    </h1>
                                    <br />
                                    <br />
                                    <p className={`text-[15px] text-white-200 p-2 px-5 bg-dark-400 border-l-[5px] border-solid border-l-green-200 italic`}>
                                        {userInfo.intro_tagline}
                                    </p>
                                    <br />
                                    {
                                        userInfo.bio_desc.length > 0 ?
                                            userInfo.bio_desc.map((bio, i) => {
                                                return (
                                                    <p className={`text-[14px] mb-5 text-white-200`}>{bio}</p>
                                                )
                                            })
                                            :
                                            "Opps, 😬 looks like I dont have a bio."
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <br />
            <Footer />
            {windowWidth <= 700 && <ResponsiveNavbar pageName={"projects"} />}
        </div>
    )
}

export default About
