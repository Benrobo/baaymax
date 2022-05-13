

import Link from "next/link"


export default function Intro() {

    return (
        <div className={`w-full h-auto p-0 relative top-[50px] mb-[100px]`}>
            <div className={`w-full flex items-start justify-between flex-row flex-wrap-reverse`}>
                <div className={`w-full h-auto p-[10px] relative container md:w-[50%]`}>
                    {/* boxes */}
                    <div data-aos="zoom-in-left" className={`w-full h-[120px] p-[20px] rounded-[5px] bg-dark-200 m-[0px] relative transition-all hover:shadow-2xl `}>
                        <div className={`flex flex-col items-start justify-start`}>
                            <p className={`m-0 font-extrabold text-green-100 `}>
                                Design
                            </p>
                            <span className={`text-[12px] text-white-300 pt-[10px]  `}>
                                Create digital products with unique ideas
                            </span>
                        </div>
                        <div className={`absolute bottom-[10px]`}>
                            <a className={` text-[14px] text-white-200 font-bold underline `}>
                                20 Projects
                            </a>
                        </div>
                        <ion-icon name="color-wand" class={`absolute top-[10px] right-[10px] text-green-400 p-[5px] `}></ion-icon>
                    </div>
                    <div data-aos="zoom-in-up" className={`w-full h-[120px] p-[20px] rounded-[5px] bg-dark-200 m-[0px] relative transition-all mt-4 hover:shadow-2xl `}>
                        <div className={`flex flex-col items-start justify-start`}>
                            <p className={`m-0 font-extrabold text-green-100 `}>
                                Frontend Development
                            </p>
                            <span className={`text-[12px] text-white-300 pt-[10px]  `}>
                                Development of beautiful and unique user interfaces.
                            </span>
                        </div>
                        <div className={`absolute bottom-[10px]`}>
                            <a className={` text-[14px] text-white-200 font-bold underline `}>
                                60 Projects
                            </a>
                        </div>
                        <ion-icon name="color-wand" class={`absolute top-[10px] right-[10px] text-green-400 p-[5px] `}></ion-icon>
                    </div>
                    <div data-aos="zoom-in-right" className={`w-full h-[120px] p-[20px] rounded-[5px] bg-dark-200 m-[0px] relative transition-all mt-4 hover:shadow-2xl `}>
                        <div className={`flex flex-col items-start justify-start`}>
                            <p className={`m-0 font-extrabold text-green-100 `}>
                                Backend Development
                            </p>
                            <span className={`text-[12px] text-white-300 pt-[10px]  `}>
                                Development of complex and scalable backend architecture.
                            </span>
                        </div>
                        <div className={`absolute bottom-[10px]`}>
                            <a className={` text-[14px] text-white-200 font-bold underline `}>
                                60 Projects
                            </a>
                        </div>
                        <ion-icon name="color-wand" class={`absolute top-[10px] right-[10px] text-green-400 p-[5px] `}></ion-icon>
                    </div>
                </div>
                <div className={`w-full h-auto relative top-[20px] p-[10px] mb-[30px] md:mb-0 md:w-[45%]`}>
                    <p className={`text-[12px] text-white-200 `}>Introduce</p>
                    <div className={`relative top-[20px]`}>
                        <h1 data-aos="zoom-in-up" className={`text-[35px] font-bold mb-[20px]`}>
                            Hello! 🖐  I'm Benaiah Alumona.
                        </h1>
                        <br />
                        <br />
                        <p data-aos="zoom-in-right" className={`text-[15px] text-white-100`}>
                            Mission driven software engineer, with a passion for thoughtful UI design, collaboration, and teaching.
                        </p>
                        <br />
                        <p data-aos="fade-up" className={`text-[14px] mb-5 text-white-200`}>
                            As a software developer, I enjoy using my obsessive attention to detail, my unequivocal love for making things, and my mission-driven work ethic to literally change the world. That's why I’m excited to make a big impact at  a high growth company.
                        </p>

                        <Link href="/about">
                            <a data-aos="zoom-in-up" className={`text-[14px] font-bold text-green-200 underline`}>Read More</a>
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
