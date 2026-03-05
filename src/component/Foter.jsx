import React, { useEffect, useRef } from 'react'
import logo from '../assets/logo.png'
import gsap from 'gsap'

const Foter = () => {

    const logoiconref = useRef()
    const navref = useRef()
    const rightref = useRef()

    useEffect(() => {

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: logoiconref.current,
                // markers: true,
                start: "bottom 90%",
                scrub: false,
            }
        });

        tl.from(logoiconref.current, {
            x: 100,
            opacity: 0,
            stagger: 0.3,
            duration: 0.6,
            ease: "power3.out",
        })
        tl.from(navref.current.children, {
            y: 50,
            opacity: 0,
            stagger: 0.2,
            duration: 0.6,
            ease: "power3.out",
        })
        tl.from(rightref.current, {
            y: 50,
            opacity: 0,
            stagger: 0.2,
            duration: 0.6,
            ease: "power3.out",
        })


    }, [])



    return (

        <div className=' relative bg-dark99 text-white mt-3 md:m-0'>

            <footer className="bg-neutral-primary-soft rounded-base  shadow-xs ">
                <div className="w-full max-w-7-xl mx-auto p-4  md:py-8 ">
                    <div className="sm:flex sm:items-center sm:justify-evenly">
                        <a ref={logoiconref} href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <img src={logo} className="h-10 " alt="Flowbite Logo" />
                        </a>
                        <ul ref={navref} className="flex flex-wrap items-center mb-6 text-sm font-medium text-body sm:mb-0">
                            <li>
                                <a href="#About" className="hover:underline me-4 md:me-6">About</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                            </li>
                            <li>
                                <a href="#Contact" className="hover:underline">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-default sm:mx-auto lg:my-8" />
                    <span ref={rightref} className="block text-sm text-body sm:text-center">© 2026 <a href="/" className="hover:underline">GYM BRO™</a>. All Rights Reserved.</span>
                </div>
            </footer>



        </div>
    )
}

export default Foter