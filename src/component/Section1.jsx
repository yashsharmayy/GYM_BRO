import React, { useEffect, useRef } from 'react'
import gymimg from "../assets/gymmen-Photoroom.png";
import gsap from 'gsap';


const Section1 = () => {
    const headingref = useRef()
    const gymmen1ref = useRef()
    useEffect(() => {
        const tl = gsap.timeline()
        tl.from(headingref.current.children, {
            y: -50,
            opacity: 0,
            stagger: 0.5,
            duration: 0.5,
            delay: 0.8,
            ease: 'power3.out'

        })
        gsap.from(gymmen1ref.current, {
            x: 70,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
            delay: 0.3
        })
    }, [])


    return (
        <div id='hero' className='relative  hero w-full md:h-screen h-full  '>
            <div className='absolute w-full h-full min-h-screen z-10 bg-[#1c1c1c9e]'></div>
            <div className="w-full h-full p-20 flex flex-col md:flex-row justify-evenly items-center z-20 relative object-center object-cover">
                <div ref={headingref} className="text-white font-bold md:w-250 text-center items-center md:items-start md:text-left m-4 flex flex-col gap-4 lg:gap-6">
                    <h1 className='font-bebasNeue text-5xl md:text-7xl lg:text-8xl'>Welcome to Gym Bro</h1>
                    <p className='font-sansflex text-3xl  md:text-4xl lg:text-5xl'>Build strength. Build confidence.</p>
                    <a href="#Contact"><button className=" text-center flex w-50 items-center justify-center text-white bg-org69 border-0 py-2 px-6 focus:outline-none hover:bg-[#f75f24] rounded text-lg">
                        JOIN NOW
                    </button></a>
                </div>
                <div ref={gymmen1ref} className='w-full md:max-w-125 mx-4 h-fit m-20'>
                    <img className='w-full h-full scale-x-[-1]' src={gymimg} alt="gymmen" />
                </div>
            </div>

        </div>
    )
}

export default Section1