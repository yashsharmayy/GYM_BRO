import React, { useEffect, useRef } from 'react'
import gymmen3 from '../assets/gymmen3.png'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Section4 = () => {


    const timeTableref = useRef()
    const gymmen3imgref = useRef()

    useEffect(() => {

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: timeTableref.current,
                // markers: true,
                start: "top 60%",
                scrub: false,
            }
        });

        tl.from(timeTableref.current.children, {
            y: -50,
            opacity: 0,
            stagger: 0.4,
            duration: 0.6,
            ease: "power3.out",
        })

        gsap.from(gymmen3imgref.current, {
            x: -500,
            y: -500,
            opacity: 0,
            ease: "power3.out",
            duration: 0.8,
            scrollTrigger: {
                trigger: gymmen3imgref.current,
                // markers: true,
                start: "top 20%",
                end: "top -100%",
                scrub: 3,
            }

        })

    }, []);
    return (
        <div className='relative w-full p-10 h-full  flex flex-col md:flex-row justify-evenly items-center text-white bg-transparent '>
            <div className='absolute w-full h-full   bg-[#1c1c1c9e]'></div>

            <div ref={timeTableref} className='relative md:text-left text-center  h-full flex flex-col items-center md:items-start'>

                <div className='flex w-120 justify-evenly my-4 relative after:content-[""] after:w-90 after:absolute after:left-15 after:h-0.5 after:bg-white after:-bottom-4'>
                    <div className='flex flex-col '>
                        <h1 className='font-bebasNeue text-2xl  md:text-3xl my-1'>CARDIO</h1>
                        <h2 className='text-md md:text-lg'>0-1 Hours</h2>
                        <h2 className='text-md md:text-lg'>Monday</h2>
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='font-bebasNeue text-2xl md:text-3xl my-1'>YOGA</h1>
                        <h2 className='text-md md:text-lg'>0-1 Hours</h2>
                        <h2 className='text-md md:text-lg'>Monday</h2>
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='font-bebasNeue text-2xl md:text-3xl my-1'>WEIGHTS</h1>
                        <h2 className='text-md md:text-lg'>0-1 Hours</h2>
                        <h2 className='text-md md:text-lg'>Monday</h2>
                    </div>
                </div>
                <div className='flex w-120 justify-evenly my-4 '>
                    <div className='flex flex-col '>
                        <h1 className='font-bebasNeue text-2xl md:text-3xl my-1'>ZUMBA</h1>
                        <h2 className='text-md md:text-lg'>0-1 Hours</h2>
                        <h2 className='text-md md:text-lg'>Monday</h2>
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='font-bebasNeue text-2xl md:text-3xl my-1'>AEROBICS</h1>
                        <h2 className='text-md md:text-lg'>0-1 Hours</h2>
                        <h2 className='text-md md:text-lg'>Monday</h2>
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='font-bebasNeue text-2xl md:text-3xl my-1'>MEDITATION</h1>
                        <h2 className='text-md md:text-lg'>0-1 Hours</h2>
                        <h2 className='text-md md:text-lg'>Monday</h2>
                    </div>
                </div>
                <div className='flex w-120 justify-evenly my-4 relative after:content-[""] after:w-90 after:absolute after:left-15 after:h-0.5 after:bg-white after:-bottom-4'>
                    <div className='flex flex-col '>
                        <h1 className='font-bebasNeue text-2xl md:text-3xl my-1'>FLEXIBILITY</h1>
                        <h2 className='text-md md:text-lg'>0-1 Hours</h2>
                        <h2 className='text-md md:text-lg'>Monday</h2>
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='font-bebasNeue text-2xl md:text-3xl my-1'>STRENGTH</h1>
                        <h2 className='text-md md:text-lg'>0-1 Hours</h2>
                        <h2 className='text-md md:text-lg'>Monday</h2>
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='font-bebasNeue text-2xl md:text-3xl my-1'>TONING</h1>
                        <h2 className='text-md md:text-lg'>0-1 Hours</h2>
                        <h2 className='text-md md:text-lg'>Monday</h2>
                    </div>
                </div>
            </div>
            <div ref={gymmen3imgref} className="relative min-w-100 max-w-140  h-fit m-1">
                <img className='w-full h-full shadow-2xl' src={gymmen3} alt="" />
            </div>
        </div>
    )
}

export default Section4