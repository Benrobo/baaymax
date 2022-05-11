

import Link from "next/link"
import styles from "./intro.module.css"


export default function Intro() {

    return (
        <div className={`w-full h-auto p-0 relative top-[50px] mb-[50px]`}>
            <div className={`w-full flex items-start justify-between flex-row flex-wrap`}>
                <div className={`w-full h-auto p-[10px] relative container md:w-[50%]`}>
                    {/* boxes */}
                    <div className={`w-full h-[120px] p-[20px] rounded-[5px] bg-dark-200 m-[0px] relative transition-all hover:shadow-2xl `}>
                        <div className={`flex flex-col items-start justify-start`}>
                            <p className={`m-0 font-extrabold text-green-100 `}>
                                Design
                            </p>
                            <span className={`text-[10px] text-white-300 pt-[10px]  `}>
                                Create digital products with unique ideas
                            </span>
                        </div>
                        <div className={`absolute bottom-[10px]`}>
                            <a href="" className={` text-[14px] text-white-200 font-bold underline `}>
                                20 Projects
                            </a>
                        </div>
                        <ion-icon name="color-wand" class={`absolute top-[10px] right-[10px] text-green-400 p-[5px] `}></ion-icon>
                    </div>
                    <div className={`w-full h-[120px] p-[20px] rounded-[5px] bg-dark-200 m-[0px] relative transition-all mt-4 hover:shadow-2xl `}>
                        <div className={`flex flex-col items-start justify-start`}>
                            <p className={`m-0 font-extrabold text-green-100 `}>
                                Frontend Development
                            </p>
                            <span className={`text-[10px] text-white-300 pt-[10px]  `}>
                                Development of beautiful and unique user interfaces.
                            </span>
                        </div>
                        <div className={`absolute bottom-[10px]`}>
                            <a href="" className={` text-[14px] text-white-200 font-bold underline `}>
                                60 Projects
                            </a>
                        </div>
                        <ion-icon name="color-wand" class={`absolute top-[10px] right-[10px] text-green-400 p-[5px] `}></ion-icon>
                    </div>
                    <div className={`w-full h-[120px] p-[20px] rounded-[5px] bg-dark-200 m-[0px] relative transition-all mt-4 hover:shadow-2xl `}>
                        <div className={`flex flex-col items-start justify-start`}>
                            <p className={`m-0 font-extrabold text-green-100 `}>
                                Backend Development
                            </p>
                            <span className={`text-[10px] text-white-300 pt-[10px]  `}>
                                Development of complex and scalable backend architecture.
                            </span>
                        </div>
                        <div className={`absolute bottom-[10px]`}>
                            <a href="" className={` text-[14px] text-white-200 font-bold underline `}>
                                60 Projects
                            </a>
                        </div>
                        <ion-icon name="color-wand" class={`absolute top-[10px] right-[10px] text-green-400 p-[5px] `}></ion-icon>
                    </div>
                </div>
                <div className={`w-full h-auto relative top-[20px] p-[10px] md:w-[45%]`}>
                    <p className={styles.title}>Introduce</p>
                    <div className={styles.main}>
                        <h1 className={styles.intro}>
                            Hello! I'm Benaiah Alumona.
                        </h1>
                        <br />
                        <br />
                        <p className={styles.subtitle}>
                            Mission driven software engineer, with a passion for thoughtful UI design, collaboration, and teaching.
                        </p>
                        <br />
                        <p className={styles.briefIntro}>
                            As a software developer, I enjoy using my obsessive attention to detail, my unequivocal love for making things, and my mission-driven work ethic to literally change the world. That's why I’m excited to make a big impact at  a high growth company.
                        </p>

                        <Link href="">
                            <a className={styles.link}>Read More</a>
                        </Link>
                    </div>
                </div>
            </div>
            {/* <div className={styles.companies}>
                <img src="https://avatars.githubusercontent.com/u/104397777?s=200&v=4" className={styles.compImage} alt="" />
                <img src="" className={styles.compImage} alt="" />
            </div>
            <br /> */}
        </div>
    )
}
