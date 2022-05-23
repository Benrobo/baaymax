import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Container, DomHead, Footer, NavBar } from "../components"
import { FaArrowLeft } from 'react-icons/fa'
import { ResponsiveNavbar } from '../components/Navbar'
import { FaStar, FaArrowRight, FaQuoteRight } from "react-icons/fa"
import { AiFillGithub } from "react-icons/ai"

import { projects } from "../data/projects.json"
import userInfo from "../data/usersInfo.json"


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
                <br />
                <Container>
                    <div id="head" className="w-full py-2 mx-auto flex flex-row justify-start items-start ">
                        <h2 className="text-[20px] text-white-200 px-4 md:px-4 ">Personal Projects</h2>
                    </div>
                    <div className="w-full mt-2 mx-auto h-auto p-3  flex flex-col items-start justify-start flex-wrap mb-5 space-x-0 md:space-x-5 md:w-[100%] md:flex-row">
                        {/* <Categories /> */}
                        <ProjectsCard />
                    </div>
                    <div id="head" className="w-full py-5 mx-auto flex flex-row justify-start items-start ">
                        <h2 className=" text-[20px] text-white-200 p-4 md:p-0 ">Github Repos</h2>
                    </div>
                    <div id="head" className="w-full space-x-0 py-4 p-4 mx-auto flex flex-row justify-start items-start flex-wrap mb-[50px] gap-10 md:flex-row md:space-x-0 ">
                        <GithubRepo />
                    </div>
                </Container>
            </div>
            <Footer />
            {windowWidth <= 700 && <ResponsiveNavbar pageName={"projects"} />}
        </div>
    )
}

export default Projects

function ProjectsCard() {

    return (
        <>
            {
                projects.length > 0 ?
                    projects.map((list, i) => {
                        return (
                            <div key={i} className={`box w-full h-auto bg-dark-200 rounded-[5px] relative top-[50px] transition-all mb-[50px] mr-[5px] opacity-[.7] md:w-[250px] md:ml-0 hover:opacity-[1]`}>
                                <div className="imgCont"></div>
                                <style jsx>{`
                        .imgCont{
                            width: 100%;
                            height: 190px;
                            background-image: url(${list.imageUrl === "" || list.imageUrl === null ? "https://www.wallpapertip.com/wmimgs/136-1369543_laptop-coding.jpg" : list.imageUrl});
                            background-size: cover;
                            background-repeat: no-repeat;
                            background-position: center;
                            // box-shadow: 0px 0px 3px #000;
                            border-radius: 5px;
                        }
                    `}</style>
                                <div className={`w-full p-[10px] bottom-[5px]`}>
                                    <div className="w-full h-auto">
                                        <p className={`text-[15px] text-white-200`}>{list.title === "" ? "Project Title" : list.title}</p>
                                        <br />
                                        <small>{list.description === "" ? "some dummy description" : list.description.length > 150 ? list.description.slice(0, 100) + "..." : list.description}</small>
                                    </div>
                                    <br />
                                    <div className={` bottom-[5px] left-[5px] p-0 flex items-start justify-start`}>
                                        {
                                            list.tags.length > 0 ?
                                                list.tags.slice(0, 3).map((tag, i) => {
                                                    return (
                                                        <span key={i} className={`text-[10px] py-[3px] px-[9px] bg-dark-100 mr-[2px] rounded-[2px] text-white-100`}>{tag}</span>
                                                    )
                                                })
                                                :
                                                ""
                                        }
                                    </div>
                                    <span className={`absolute  my-[-20px] right-[10px] text-[12px] flex items-center justify-start`}>
                                        {
                                            list.project_url !== "" ?
                                                <>
                                                    <a href={list.project_url} className={`text-white-200 mr-[10px] hover:underline hover:text-white-100`}>
                                                        View
                                                    </a>
                                                    <ion-icon name="arrow-forward-outline" className={`ml-[10px] p-[10px]`}></ion-icon>
                                                </>
                                                :
                                                ""
                                        }
                                    </span>

                                </div>
                            </div>
                        )
                    })
                    :
                    ""
            }
        </>
    )
}


function GithubRepo() {
    const [repos, setRepo] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    async function fetchRepos() {
        let res;
        let url = `https://api.github.com/users/${userInfo.github_username}/repos`
        if (localStorage.getItem("user_repos") === null) {
            try {
                setLoading(true)
                res = await fetch(url)
                let data = await res.json()
                setLoading(false)

                if (data && data.length > 0) {
                    localStorage.setItem("user_repo", JSON.stringify(data))
                    setRepo(data)
                    return
                }
                setError("No github repo found")
                setLoading(false)
            } catch (err) {
                setError(`FAILED FETCHING REPO'S: ${err.message}`)
                setLoading(false)
            }
        }

        let userReopos = JSON.parse(localStorage.getItem("user_repos"))

        setRepo(userReopos)
    }

    useEffect(() => {

        (async () => {
            await fetchRepos()
        })()

    }, [])

    return (
        <>
            {
                loading ? "Loading..." : error !== null ? <p>{error}</p> : repos.length > 0 ?
                    repos.map((rep, i) => {
                        return (
                            <div key={i} className="relative w-full h-[180px] bg-dark-200 flex flex-col items-start justify-start px-4 py-3 mt-2 rounded-md md:w-[300px]">
                                <h2 className="w-full text-[20px] ">{rep.name}</h2>
                                <p className=" w-full text-[15px] text-white-300 ">{rep.description && rep.description.length > 50 ? rep.description.slice(0, 80) + "..." : rep.description}</p>
                                <br />
                                <div className="ratings absolute bottom-4 w-full flex flex-row items-start justify-start">
                                    <span className="mr-2 flex flex-row items-start justify-start">
                                        <StarRatings title="star" count={rep.stargazers_count} />
                                    </span>
                                    <span className="mr-2 flex flex-row items-start justify-start">
                                        <StarRatings title="fork" count={rep.forks} />
                                    </span>
                                </div>

                                <a href={rep.html_url} target={"_blank"} className="absolute right-3 top-2 flex flex-row items-center">
                                    <small className="underline">View</small>
                                    <FaArrowRight className="ml-2 text-[12px] " />
                                </a>
                            </div>
                        )
                    })
                    :
                    "Opps, No Github Repo was found."
            }
        </>
    )
}

function StarRatings({ count = 1, size = 3, title = "star" }) {

    return (
        <>
            {
                Array(1).fill(1).map((i) => {
                    return (
                        <>
                            {title === "star" ?
                                <FaStar key={i * Math.random()} className={`text-green-200 text-[${size}px] `} />
                                :
                                title === "fork" ?
                                    <AiFillGithub key={i * Math.random()} className={`text-green-200 text-[${size}px] `} />
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