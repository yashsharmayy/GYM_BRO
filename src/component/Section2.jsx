import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Section2 = () => {

    const aboutref = useRef()
    const gymmen2ref = useRef()
    const iconref = useRef()

    useEffect(() => {
        gsap.from(aboutref.current.children, {
            x: -100,
            opacity: 0,
            stagger: 0.4,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: aboutref.current,
                // markers: true,
                start: "top 60%",
                scrub: false,
            }
        })
        gsap.from(iconref.current.children, {
            y: -50,
            opacity: 0,
            stagger: 0.4,
            duration: 0.6,
            delay: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: aboutref.current,
                // markers: true,
                start: "top 70%",
                scrub: false,
            }
        })

        gsap.from(gymmen2ref.current.children, {
            x: 100,
            opacity: 0,
            stagger: 0.4,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: aboutref.current,
                // markers: true,
                start: "top 60%",
                scrub: false,
            }
        })
    }, [])

    //  useEffect(() => {

    //     const tl = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: aboutref.current,
    //             markers: true,
    //             start: "top 60%",
    //             scrub: false,
    //         }
    //     });

    //     tl.from(aboutref.current.children, {
    //         x: -100,
    //         opacity: 0,
    //         stagger: 0.3,
    //         duration: 0.6,
    //         ease: "power3.out",
    //     })
    //         .from(iconref.current.children, {
    //             y: -50,
    //             opacity: 0,
    //             stagger: 0.2,
    //             duration: 0.5,
    //         }, "-=0.3")  // overlap
    //         .from(gymmen2ref.current.children, {
    //             x: 100,
    //             opacity: 0,
    //             stagger: 0.3,
    //             duration: 0.8,
    //             ease: "power3.out",
    //         }, "-=0.5");

    // }, []);
    return (
        <div id='About' className='w-full overflow-hidden h-full p-20 flex flex-col  md:flex-row justify-evenly items-center bg-lightorg29'>
            <div ref={aboutref} className='md:text-left text-center  flex flex-col items-center md:items-start'>
                <h1 className='text-6xl font-semibold mb-10 relative 
               after:content-[""] after:absolute after:h-1 after:-bottom-5 after:w-50 after:left-0 after:bg-org69  font-bebasNeue'>ABOUT ME</h1>
                <p className='text-gray-700 text-lg  text-ellipsis'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt accusantium harum quidem officiis eveniet error. Perferendis veniam itaque mollitia minus, dignissimos, ea magni iste vel eaque quia minima, id quis!</p>
                <div ref={iconref} className='flex gap-2 my-2 '>
                    <a href=""><i className="fa-brands fa-instagram"></i></a>
                    <a href=""><i className="fa-brands fa-youtube"></i></a>
                    <a href=""><i className="fa-brands fa-facebook"></i></a>
                </div>
            </div>
            <div ref={gymmen2ref} className="w-full  md:w-125 lg:w-200 h-fit m-4">
                <img className='w-full h-full mb-4  shadow-2xl' src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <p className='font-bold text-2xl font-bebasNeue tracking-wider'>[trainer Name] is a Qualified Level 3 Personal Trainer.</p>
            </div>
        </div >
    )
}

export default Section2