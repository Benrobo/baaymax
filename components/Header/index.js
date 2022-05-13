
import { Container } from ".."
import avatar from "../../public/images/avatar/avatar.png"

export default function Header({ children }) {

    return (
        <header className={`header w-full h-[100vh] relative bg-dark-200 md:h-auto`}>
            <Container>
                {children}

                {/* only show when on mobile */}
                <div className={`absolute top-[15px] right-[25px] md:hidden `}>
                    <img src={avatar.src} className={` w-[40px] rounded-[50%] border-[2px] border-solid border-green-100 bg-dark-100 `} />
                </div>

                {/* shows on desktop */}
                <div className={`w-full h-[70vmin] flex align-center items-center justify-center flex-row p-[20px] flex-wrap mt-[50px]`}>

                    <div className={`w-full h-full mb-[50px] relative md:w-[50%]`}>
                        <div className={``}>
                            <span className={`py-[2px] px-[8px] bg-green-600 text-green-100 rounded-[3px] text-[12px] `}>
                                Software Engineer
                            </span>
                            <br />
                            <br />
                            <h1 className={` text-[9vmin] md:text-[5vmin] `}>
                                Making The Impossible Possible. Using 1's and 0's.
                            </h1>
                            <br />
                            <span className={` text-[20px] md:text-[2vmin] `}>
                                Problem solving is what makes me unique.
                            </span>
                            <br />
                        </div>
                        <div className={`relative top-[50px] flex align-start items-start justify-start w-full`}>
                            <div className={`w-[50%] mr-[20px] flex flex-row items-center justify-start`}>
                                <h1 className={` text-[35px] pt-[10px] pr-[10px] pb-0 pl-0 `}>
                                    12
                                </h1>
                                <span className={` w-[50px] text-white-300 text-[10px] `}>
                                    Years of Experience
                                </span>
                            </div>
                            <div className={`w-[50%] mr-[20px] flex flex-row items-center justify-start`}>
                                <h1 className={` text-[35px] pt-[10px] pr-[10px] pb-0 pl-0 `}>
                                    120
                                </h1>
                                <span className={` w-[50px] text-white-300 text-[10px] `}>
                                    Project Completed
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={`main w-full h-auto hidden md:block md:w-[50%] relative `}>
                        <div className={`mainArea`}>
                            <img src={avatar.src} className={`avatar`} />
                        </div>
                        <div className={`circleA`}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className={`langImgA`} />
                        </div>
                        <div className={`circleB`}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className={`langImgB`} />
                        </div>
                        <div className={`circleC`}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg" className={`langImgC`} />
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    )
}


