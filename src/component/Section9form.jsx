import React, { useEffect, useRef } from 'react'
import logo from '../assets/logo.png'
import gsap from 'gsap'

const Section9form = () => {

    const logoiconref = useRef()
    const addressref = useRef()
    const messageref = useRef()
    const formref = useRef()
    useEffect(() => {

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: logoiconref.current,
                // markers: true,
                start: "top 60%",
                scrub: false,
            }
        });

        tl.from(logoiconref.current.children, {
            x: 100,
            opacity: 0,
            stagger: 0.3,
            duration: 0.6,
            ease: "power3.out",
        })
        tl.from(addressref.current.children, {
            x: 100,
            opacity: 0,
            stagger: 0.2,
            duration: 0.5,
            ease: "power3.out",
        })
        tl.from(messageref.current.children, {
            x: 100,
            opacity: 0,
            stagger: 0.2,
            duration: 0.5,
            ease: "power3.out",
        })
        tl.from(formref.current.children, {
            x: 100,
            opacity: 0,
            stagger: 0.2,
            duration: 0.5,
            ease: "power3.out",
        })

    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const URL = "https://script.google.com/macros/s/AKfycbz1FYKCVgmte7cjHJrDGr6ukGnZvXUEUoLLz_Rb6QS3C34T0u2MfiUsuI7P1DNGjOI5Og/exec"

        const res = await fetch(URL, {
            method: "POST",
            body: new FormData(e.target)
        });

        alert(await res.text());
        e.target.reset();
    };

    return (
        <div id='Contact' className='w-full h-full lg:h-[90vh] items-center text-center md:text-left md:items-start  text-white bg-transparent '>
            <div className='absolute w-full h-[110vh]    bg-[#1c1c1cb1]'></div>
            <div className='relative pt-10 px-10 flex flex-col md:flex-row justify-evenly items-center md:items-start'>
                <div ref={logoiconref} className=' flex flex-col items-center  w-full max-w-100 my-4 '>
                    <div className="logo  relative items-center  flex w-30">
                        <a href="/"><img className='text-white mb-4 cursor-pointer ' src={logo} alt="" /></a>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa soluta optio dignissimos sint quam doloribus, ducimus delectus cupiditate quae aperiam illum assumenda nisi officiis ipsum provident odit. Repellat, aspernatur sint.</p>
                </div>
                <div ref={addressref} className='my-4'>
                    <h1 className='font-bebasNeue text-4xl'>CONTACT ME</h1>
                    <p className='font-sansflex'>1015 K St, Prem-Nagar,
                        Delhi 110086, India. <br />
                        GYMBRO6969@gmail.com <br />
                        +91 9988776655</p>
                </div>
                <div ref={messageref} className='mt-4'>
                    <h1 className='font-bebasNeue text-3xl mb-5'>SEND ME A MESSAGE</h1>
                    <form
                        onSubmit={handleSubmit}
                        className="w-80  bg-transparent rounded-lg shadow"
                        aria-label="signup-form"
                    >
                        <div ref={formref} className="flex flex-col items-start  gap-y-3">

                            <input
                                id="Name"
                                type="text"
                                name="name"
                                className="w-full p-4 bg-transparent border border-gray-200 rounded-sm outline-none"
                                placeholder="Enter your Name"
                            />
                            <input
                                id="phone"
                                type="tel"
                                pattern="[0-9]{10}"
                                name="phone"
                                className="w-full p-4 bg-transparent border border-gray-200 rounded-sm outline-none"
                                placeholder="Enter your phone number..."
                            />
                            <textarea
                                id="content"
                                name='message'
                                className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none resize-none min-h-38"
                                placeholder="Enter Massage"
                            />
                            <button type='submit' className=" text-center  font-bebasNeue tracking-wider  flex w-50 items-center justify-center text-white bg-org69 border-0 py-2 px-6 focus:outline-none hover:bg-[#f75f24] rounded text-2xl cursor-pointer">
                                Submit
                            </button>

                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Section9form