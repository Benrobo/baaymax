

import Link from "next/link"

function Projects() {
    return (
        <div className={`projectCont w-full h-auto relative top-[50px] p-10px flex flex-col items-center justify-center mb-[50px]`}>
            <div className={`w-full flex flex-row items-center justify-center`}>
                <span data-aos="zoom-in" className={`w-[100px] h-[2px] rounded-[30px] m-[20px] bg-green-200 md:w-[120px]`}></span>
                <p data-aos="fade-up" className={`text-white-200 text-[15px]`}>Latest Works</p>
                <span data-aos="zoom-in" className={`w-[100px] h-[2px] rounded-[30px] m-[20px] bg-green-200 md:w-[120px]`}></span>


                <Link href="/projects">
                    <a data-aos="zoom-in-up" className={`text-center text-green-200 underline absolute top-[50px] text-[14px]`}>All Projects</a>
                </Link>
            </div>

            <div className={`projects w-full h-auto p-3 flex flex-row flex-wrap items-center justify-between mb-[50px]`}>
                {
                    [2, 3, 4, 45].slice(0, 3).map((list) => {
                        return (
                            <div data-aos="zoom-in" className={`box w-full h-[300px] bg-dark-200 rounded-[5px] relative top-[50px] transition-all mb-[50px] mr-[5px] opacity-[.7] md:w-[250px] hover:opacity-[1]`} key={list}>
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
            </div>
        </div>
    )
}

export default Projects