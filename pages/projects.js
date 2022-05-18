import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Container, DomHead, Footer, NavBar } from "../components"
import { FaArrowLeft } from 'react-icons/fa'
import { ResponsiveNavbar } from '../components/Navbar'
import { FaStar, FaArrowRight, FaQuoteRight } from "react-icons/fa"
import { AiFillGithub } from "react-icons/ai"



function Projects() {


    const [windowWidth, setWindowWidth] = useState(0)

    useEffect(() => {
        setWindowWidth(window.innerWidth)
        window.addEventListener("resize", () => {
            setWindowWidth(window.innerWidth)
        })
    }, [windowWidth])

    return (
        <div>
            <DomHead pageName='Projects' />
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
                        Projects
                    </h1>
                    <p className="text-[15px] text-white-300 ">
                        Here are my completed projects.
                    </p>
                </Container>
            </div>
            <div className="w-screen h-auto ">
                <div className="w-full px-4 mt-5 mx-auto h-auto  flex flex-col items-center justify-around flex-wrap mb-5 md:w-[90%] md:flex-row">
                    <Categories />
                    <ProjectsCard />
                    <GithubRepo />
                </div>
            </div>
            <Footer />
            {windowWidth <= 700 && <ResponsiveNavbar />}
        </div>
    )
}

export default Projects

function Categories() {

    return (
        <div className="w-full flex flex-row items-start justify-start flex-wrap md:w-[90%]">
            {
                Array(5).fill(1).map((_) => {
                    return (
                        <span key={_} className="px-4 py-2 mt-2 rounded-md cursor-pointer text-white-200 transition-all bg-dark-300 mr-4 hover:bg-dark-400">
                            Design
                        </span>
                    )
                })
            }
        </div>
    )
}

function ProjectsCard() {

    return (
        <>
            {
                [2, 3, 4, 45].slice(0, 3).map((list) => {
                    return (
                        <div className={`box w-full h-[300px] bg-dark-200 rounded-[5px] relative top-[50px] transition-all mb-[50px] mr-[20px] opacity-[.7] md:w-[250px] hover:opacity-[1]`} key={list}>
                            <div className="imgCont"></div>
                            <style jsx>{`
                                .imgCont{
                                    width: 100%;
                                    height: 190px;
                                    background-image: url("https://www.wallpapertip.com/wmimgs/136-1369543_laptop-coding.jpg");
                                    background-size: cover;
                                    background-repeat: no-repeat;
                                    background-position: center;
                                    // box-shadow: 0px 0px 3px #000;
                                    border-radius: 5px;
                                }
                            `}</style>
                            <div className={`w-full p-[10px] absolute bottom-[5px]`}>
                                <p className={`text-[15px] text-white-200`}>E-Workflow System</p>
                                <br />
                                <div className={`absolute bottom-[5px] left-[5px] p-0 flex items-start justify-start`}>
                                    <span className={`text-[10px] py-[3px] px-[9px] bg-dark-100 mr-[2px] rounded-[2px] text-white-100`}>Html</span>
                                </div>
                                <span className={`absolute  my-[-20px] right-[10px] text-[12px] flex items-center justify-start`}>
                                    <a href="" className={`text-white-200 mr-[10px] hover:underline hover:text-white-100`}>
                                        View
                                    </a>
                                    <ion-icon name="arrow-forward-outline" className={`ml-[10px] p-[10px]`}></ion-icon>
                                </span>

                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}


function GithubRepo() {

    return (
        <div className="relative mt-5 mr-5 w-full h-auto bg-dark-200 flex flex-col items-start justify-start px-4 py-3 rounded-md md:w-[300px] md:mr-2">
            <h2 className="w-full text-[20px] ">Github Workflow</h2>
            <p className=" w-full text-[15px] text-white-300 ">Project description. Lorem ipsum dolor sit amet consectetur.</p>
            <br />
            <div className="ratings w-full flex flex-row items-start justify-start">
                <span className="mr-2 flex flex-row items-start justify-start">
                    <StarRatings title="star" />
                </span>
                <span className="mr-2 flex flex-row items-start justify-start">
                    <StarRatings title="fork" />
                </span>
            </div>

            <a href="#" target={"_blank"} className="absolute right-3 top-2 flex flex-row items-center">
                <small className="underline">View</small>
                <FaArrowRight className="ml-2 text-[12px] " />
            </a>
        </div>
    )
}

function StarRatings({ count = 1, size = 3, title = "star" }) {

    return (
        <>
            {
                Array(count).fill(count).map((i) => {
                    return (
                        <>
                            {title === "star" ?
                                <FaStar key={i} className={`text-green-200 text-[${size}px] `} key={i} />
                                :
                                title === "fork" ?
                                    <AiFillGithub key={i} className={`text-green-200 text-[${size}px] `} key={i} />
                                    :
                                    ""
                            }
                        </>
                    )
                })

            }
            <small className="ml-2 text-white-200 font-extrabold">{count}</small>
            <small className="ml-2 text-white-200">{title}</small>
        </>
    )
}