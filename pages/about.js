import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Container, DomHead, Footer, NavBar } from "../components"
import { FaArrowLeft } from 'react-icons/fa'
import { ResponsiveNavbar } from '../components/Navbar'

function About() {
    const [windowWidth, setWindowWidth] = useState(0)

    useEffect(() => {
        setWindowWidth(window.innerWidth)
        window.addEventListener("resize", () => {
            setWindowWidth(window.innerWidth)
        })
    }, [windowWidth])

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
                                backgroundImage: `url(${"https://avatars.githubusercontent.com/u/65370456?v=4"})`
                            }}></div>
                        </div>
                        <div className="w-full md:w-[50%] ">
                            <div className={`w-full h-auto relative top-[20px] p-[10px] mb-[30px] md:mb-0 md:top-0`}>
                                <p className={`text-[12px] text-white-200 `}>Introduce</p>
                                <div className={`relative top-[20px]`}>
                                    <h1 className={`text-[35px] font-bold mb-[20px]`}>
                                        Hello! 🖐  I'm Benaiah Alumona.
                                    </h1>
                                    <br />
                                    <br />
                                    <p className={`text-[15px] text-white-100`}>
                                        Mission driven software engineer, with a passion for thoughtful UI design, collaboration, and teaching.
                                    </p>
                                    <br />
                                    <p className={`text-[14px] mb-5 text-white-200`}>
                                        As a software developer, I enjoy using my obsessive attention to detail, my unequivocal love for making things, and my mission-driven work ethic to literally change the world. That's why I’m excited to make a big impact at  a high growth company.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <br />
            <Footer />
            {windowWidth <= 700 && <ResponsiveNavbar />}
        </div>
    )
}

export default About
