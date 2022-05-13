import React from 'react'
import { Container } from '..'

import { FaStar, FaQuoteLeft, FaQuoteRight } from "react-icons/fa"

function Quote() {
    return (
        <div className="w-full h-auto bg-dark-200 py-[50px]">
            <Container>
                <div className="head mx-auto flex flex-col items-center justify-center text-center md:items-center md:justify-start md:flex-row md:px-0">
                    <h1 data-aos="fade-right" className="text-[35px] font-bold md:mr-[50px]">Favorite Quote</h1>
                    <p data-aos="fade-left" className="text-[12px] text-white-200 ">My favorite motivational quote.</p>
                </div>
                <div id="quote-cont" className='w-full h-auto mt-[100px] relative p-2 md:p-0'>

                    <QuoteCard />
                </div>
            </Container>
        </div>
    )
}

export default Quote

function QuoteCard() {

    return (
        <div id="t-box" className='relative w-full h-auto space-2 bg-dark-300 px-[30px] py-[20px] md:px-[80px] md:py-[50px] rounded-lg overflow-hidden'>
            <FaQuoteRight data-aos="fade-left" className='absolute top-[20px] right-[25px] text-[35px] text-white-300 opacity-[.3]' />
            <div id="ratings" className="w-full flex flex-row items-center justify-start">
                <StarRatings count={10} size={10} />
                <small className='ml-2 text-white-300 font-bold'>Benaiah</small>
            </div>
            <br />
            <div id="body" className="w-full flex flex-row items-start justify-start mt-4">
                <p data-aos="zoom-in-up">
                    Willingness to take intelligient risks in the pursuit of your clearly defined goals, put you on a greater side of life. Enabling you to archive the same level of success in 1 or 2 years, which may take other people10 or 20 years to archieve, if lessed focused.
                </p>
            </div>
        </div>
    )
}

function StarRatings({ count = 1, size = 3 }) {

    return (
        <>
            {
                Array(count).fill(count).map((i) => {
                    return (
                        <FaStar key={i} className={`text-green-200 text-[${size}px] `} key={i} />
                    )
                })

            }
            <small className="ml-2 text-white-200">{count}.0</small>
        </>
    )
}