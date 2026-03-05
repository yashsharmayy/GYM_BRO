import React, { useEffect, useState } from 'react'
import logo from "../assets/logo.png";
import { useRef } from 'react';
import gsap from "gsap";

const Navbar = () => {

    const tl = useRef()
    const menubarref = useRef()
    const menunavref = useRef()
    const navref = useRef()
    const logoref = useRef()
    const menubar = useRef()


    const [open, setopen] = useState(false)


    useEffect(() => {
        const tl = gsap.timeline()
        tl.from(logoref.current, {
            y: -50,
            opacity: 0,
            duration: 0.8,
            delay: 0.3,
        })
            .from(menubar.current, {
                y: -50,
                opacity: 0,
                duration: 0.6
            })
            .from(navref.current.children, {
                y: -50,
                opacity: 0,
                stagger: 0.2,
                duration: 0.6
            })

    }, [])



    useEffect(() => {
        tl.current = gsap.timeline({ paused: true })
        tl.current
            .to(menubarref.current, {
                width: '60%',
                duration: 0.4,
                delay: 0.1,
                opacity: 1,
                ease: "power3.out"

            })
            .from(menunavref.current.children, {
                y: -50,
                opacity: 0,
                stagger: 0.2,
                duration: 0.4
            })


    }, [])

    useEffect(() => {
        if (open) {
            tl.current.play()
        } else {
            tl.current.reverse()
        }
    }, [open])



    return (
        <div>
            <header className='flex relative overflow-x-hidden w-full h-20 px-10 lg:px-20 items-center justify-evenly   text-white bg-transparent  '>
                <div className='absolute w-full h-full   bg-[#1c1c1c9e]'></div>
                <div className='flex w-full justify-between  md:justify-evenly items-center'>
                    <div ref={logoref} className="logo relative md:items-center items-start flex w-20 ">
                        <a href="/"><img className='text-white cursor-pointer' src={logo} alt="" /></a>
                    </div>
                    <nav className='relative hidden  md:block ' >
                        <ul ref={navref} className='flex  px-2 gap-1 md:gap-4 lg:gap-6'>

                            <li className='hover:underline'><a href="#hero">Home</a></li>
                            <li className='hover:underline'><a href="#About">About</a></li>
                            <li className='hover:underline'><a href="#training">Training</a></li>
                            <li className='hover:underline'><a href="#Rates">Rates</a></li>
                            <li className='hover:underline'><a href="#Gallery">Gallery</a></li>
                            <li className='hover:underline'><a href="#Clients">Clients</a></li>
                            <li className='hover:underline'><a href="#Contact">Contact</a></li>
                        </ul>
                    </nav>
                    <div ref={menubar} className='bg-org69 rounded-sm p-1 md:hidden cursor-pointer  text-2xl  relative'>
                        <i onClick={() => setopen(true)} className="fa-solid fa-bars-staggered "></i>

                    </div>
                </div>
            </header>
            <div ref={menubarref} className="menubar  z-100 absolute  right-0 top-0 w-[-60%] overflow-x-hidden md:hidden block  h-full bottom-0">
                <ul ref={menunavref} className='text-white flex flex-col gap-7  absolute top-25 left-15 '>
                    <li onClick={() => setopen(false)} ><a className=' text-3xl font-bebasNeue' href="#hero">Home</a></li>
                    <li onClick={() => setopen(false)} ><a className=' text-3xl font-bebasNeue' href="#About">About</a></li>
                    <li onClick={() => setopen(false)} ><a className=' text-3xl font-bebasNeue' href="#training">Training</a></li>
                    <li onClick={() => setopen(false)} ><a className=' text-3xl font-bebasNeue' href="#Rates">Rates</a></li>
                    <li onClick={() => setopen(false)} ><a className=' text-3xl font-bebasNeue' href="#Gallery">Gallery</a></li>
                    <li onClick={() => setopen(false)} ><a className=' text-3xl font-bebasNeue' href="#Clients">Clients</a></li>
                    <li onClick={() => setopen(false)} ><a className=' text-3xl font-bebasNeue' href="#Contact">Contact</a></li>
                </ul>
                <div className='absolute cursor-pointer text-white top-12 right-12 text-2xl'>
                    <i onClick={() => setopen(false)} className="fa-solid fa-xmark  "></i>
                </div>

            </div>

        </div>
    )
}

export default Navbar