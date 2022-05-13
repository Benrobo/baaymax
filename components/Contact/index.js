
import React, { useState } from 'react'
import { Container } from '..'
import { FaPhone, FaFacebookMessenger } from 'react-icons/fa'
import { AiFillMessage, AiOutlineClose } from 'react-icons/ai'

function Contact() {

    const [contactActive, setContactActive] = useState(false)

    function openContactForm() {
        setContactActive(true)
    }

    function closeContactForm() {
        setContactActive(false)
    }

    return (
        <div className="w-screen bg-dark-300 h-auto p-2 md:p-5 ">
            <Container>
                <div className="w-full h-auto flex flex-col items-start justify-start py-[50px] mb-[20px] md:py-5 ">
                    <h1 className="text-[30px] font-thin ">
                        Let Make The Impossible <span className="text-green-200 font-extrabold">Possible.</span>
                    </h1>
                    <br />
                    <p className=" text-[20px] ">
                        Start by <span className=" text-green-200 underline cursor-pointer ">saying hi</span>
                    </p>
                </div>
            </Container>


            {/* contact form */}
            <ContactForm closeContactForm={closeContactForm} contactActive={contactActive} />

            <div id="floating-btn" className="fixed bottom-20 right-5 z-[100] flex flex-col items-center justify-center md:bottom-10 ">
                <span className={`flex flex-col items-center justify-center p-[12px] bg-dark-400 rounded-[50%] border-green-2003 transition-all scale-[.80] hover:scale-[.95] cursor-pointer `}>
                    <AiFillMessage className='text-[30px] text-green-200 ' onClick={openContactForm} />
                </span>
            </div>

        </div>
    )
}

export default Contact

function ContactForm({ contactActive, closeContactForm }) {

    return (
        <div className="w-screen ">
            <div className={`w-[400px] ${contactActive ? "h-[100vh]" : "h-0 overflow-hidden"} max-h-[450px] bg-dark-300 shadow-xl z-[999] fixed bottom-[90px] right-4 px-3 rounded-md transition-all md:right-5 md:bottom-[20px] md:w-[350px]`} id="form">
                <div id="head" className='w-full flex flex-row items-start justify-start'>
                    <h1 className="text-[20px] py-4 ">
                        Contact Me
                    </h1>
                    <AiOutlineClose className={`p-2 text-[35px] absolute top-[-16px] right-[-5px] text-red-200 bg-red-900 rounded-[50%] cursor-pointer ${contactActive ? "flex" : "hidden"} `} onClick={closeContactForm} />
                </div>
                <div id="inputs" className="w-full flex flex-col items-start justify-start">
                    <input type="text" className="w-full px-2 py-[12px] mb-4 rounded-md bg-dark-100 border-[2px] border-none outline-none " placeholder='Full Name' />

                    <input type="mail" className="w-full px-2 py-[12px] mb-4 rounded-md bg-dark-100 border-[2px] border-none outline-none " placeholder='johndoe@mail.com' />

                    <textarea cols="30" rows="5" className="w-full h-full bg-dark-100 resize-none rounded-md outline-none px-2 py-2 mb-3" placeholder='Message'></textarea>
                    <button className="w-full px-2 py-3 text-center transition-all bg-dark-200 rounded-md hover:bg-dark-400">
                        Send Message
                    </button>
                </div>
            </div>
        </div>
    )
}
