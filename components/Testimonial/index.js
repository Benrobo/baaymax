import React from 'react'
import { Container } from '..'

import { FaStar, FaQuoteLeft, FaQuoteRight } from "react-icons/fa"

function Testimonials() {
    return (
        <div className="w-full h-auto bg-dark-200 py-[50px]">
            <Container>
                <div className="head mx-auto flex flex-col items-center justify-center text-center md:items-center md:justify-start md:flex-row md:px-0">
                    <h1 className="text-[35px] font-bold md:mr-[50px]">Testimonials</h1>
                    <p className="text-[12px] text-white-200 ">What client says about me</p>
                </div>
                <div id="testimonial-cont" className='w-full h-auto mt-[100px] relative flex flex-col flex-wrap items-center justify-start space-y-4 md:space-y-0 md:flex-row md:space-x-0'>

                    <TestimonialCard />
                </div>
            </Container>
        </div>
    )
}

export default Testimonials

function TestimonialCard() {

    return (
        <>
            {Array(5).fill(1).slice(0, 3).map((data) => {
                return (
                    <div key={data} id="t-box" className='relative w-[350px] h-auto mt-2 ml-2 bg-dark-400 p-4 rounded-lg overflow-hidden max-h-[300px]'>
                        <FaQuoteRight className='absolute top-[20px] right-[25px] text-[35px] text-white-300' />
                        <div id="ratings" className="w-full flex flex-row items-center justify-start">
                            <StarRatings count={10} size={10} />
                            <small className='ml-2 text-white-300 font-bold'>Rating</small>
                        </div>
                        <div id="body" className="w-full flex flex-row items-start justify-start mt-4">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, eligendi natus quibusdam ut laudantium ipsam? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, ratione quis illum consequatur dolorem ducimus? </p>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

function StarRatings({ count = 1, size = 3 }) {

    return (
        <>
            {
                Array(count).fill(count).map((i) => {
                    return (
                        <FaStar className={`text-green-200 text-[${size}px] `} key={i} />
                    )
                })

            }
            <small className="ml-2 text-white-200">{count}.0</small>
        </>
    )
}