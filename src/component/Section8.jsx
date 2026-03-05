import React, { useEffect, useRef } from 'react'
import gymmen4 from '../assets/gymmen4.png';
import gsap from 'gsap';

const Section8 = () => {

    const aboutmeref = useRef()
    const gymmen4imgref = useRef()

    useEffect(() => {

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: aboutmeref.current,
                // markers: true,
                start: "top 65%",
                scrub: false,
            }
        });

        tl.from(aboutmeref.current.children, {
            y: -50,
            opacity: 0,
            stagger: 0.4,
            duration: 0.6,
            ease: "power3.out",
        })

        gsap.from(gymmen4imgref.current, {
            x: -500,
            y: -500,
            opacity: 0,
            ease: "power3.out",
            duration: 0.8,
            scrollTrigger: {
                trigger: gymmen4imgref.current,
                // markers: true,
                start: "top 80%",
                end: "top -100%",
                scrub: 3,
            }
        })

    }, []);

    return (
        <div className='text-white bg-dark99 h-full lg:h-screen flex-col md:flex-row items-center md:items-start  p-20 flex'>
            <div ref={aboutmeref} className='flex flex-col gap-5'>
                <h1 className='text-5xl my-4 font-bebasNeue '>WHAT PEOPLE SAY ABOUT ME </h1>
                <h1 className='text-4xl text-org69'><i className="fa-sharp fa-solid fa-quote-right scale-x-[-1]"></i></h1>
                <p className='font-sansflex'>Sed Fringilla Mauris Sit Amet Nibh. Donec Sodales Sagittis Magna. Sed Consequat, Leo Eget Bibendum Sodales, Augue Velit Cursus Nunc, Quis Gravida Magna Mi A Libero.</p>
                <h2 className='font-bebasNeue tracking-wide text-2xl'>Britteny Simmons</h2>
                <h3 className='text-lg'>Model</h3>

            </div>
            <div ref={gymmen4imgref} className=' w-100 md:w-200 h-full'>
                <img className='w-full  scale-x-[-1] h-full object-cover ' src={gymmen4} alt="" />
            </div>
        </div>
    )
}

export default Section8