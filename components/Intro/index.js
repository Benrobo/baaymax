

import Link from "next/link"

import skills from "../../data/skills.json"
import usersInfo from "../../data/usersInfo.json"



export default function Intro() {

    return (
        <div className={`w-full h-auto p-0 relative top-[50px] mb-[100px]`}>
            <div className={`w-full flex items-start justify-between flex-row flex-wrap-reverse`}>
                <div className={`w-full h-auto p-[10px] relative container md:w-[50%]`}>
                    {/* boxes */}
                    <IntroCards data={skills.skill} />
                </div>
                <div className={`w-full h-auto relative top-[20px] p-[10px] mb-[30px] md:mb-0 md:w-[45%]`}>
                    <p className={`text-[12px] text-white-200 `}>Introduce</p>
                    <div className={`relative top-[20px]`}>
                        <h1 data-aos="zoom-in-up" className={`text-[35px] font-bold mb-[20px]`}>
                            {usersInfo.greeting_type}  I'm {usersInfo.full_name}.
                        </h1>
                        <br />
                        <br />
                        <p data-aos="zoom-in-right" className={`text-[15px] text-white-200 italic px-3 py-2 bg-dark-300 border-l-[3px] border-solid border-l-green-200 `}>
                            {usersInfo.intro_tagline}
                        </p>
                        <br />
                        <p data-aos="fade-up" className={`text-[14px] mb-5 text-white-200`}>
                            {usersInfo.bio_desc[0]}
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

function IntroCards({ data }) {

    return (
        <>
            {
                data.length > 0 ?
                    data.map((skill, i) => {
                        return (
                            <div data-aos="zoom-in-up" key={i} className={`w-full h-[120px] p-[20px] rounded-[5px] bg-dark-200 m-[0px] relative transition-all mt-4 hover:shadow-2xl `}>
                                <div className={`flex flex-col items-start justify-start`}>
                                    <p className={`m-0 font-extrabold text-green-100 `}>
                                        {skill.name}
                                    </p>
                                    <span className={`text-[12px] text-white-300 pt-[10px]  `}>
                                        {skill.description}
                                    </span>
                                </div>
                                <div className={`absolute bottom-[10px]`}>
                                    <a className={` text-[14px] text-white-200 font-bold underline `}>
                                        {skill.projects_completed} Projects
                                    </a>
                                </div>
                                <ion-icon name="color-wand" class={`absolute top-[10px] right-[10px] text-green-400 p-[5px] `}></ion-icon>
                            </div>
                        )
                    })
                    :
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
            }
        </>
    )
}