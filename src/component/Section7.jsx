import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'

const Section7 = () => {


    const galleryheadref = useRef()
    useEffect(() => {

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: galleryheadref.current,
                // markers: true,
                start: "top 60%",
                scrub: false,
            }
        });

        tl.from(galleryheadref.current.children, {
            x: -100,
            opacity: 0,
            stagger: 0.3,
            duration: 0.6,
            ease: "power3.out",
        })
        tl.from('.profile img , .profile h1 , .profile h2', {
            x: 100,
            opacity: 0,
            stagger: 0.2,
            duration: 0.5,
            ease: "power3.out",
        })


    }, []);


    return (
        <div id='Clients' className='w-full h-full  p-10  md:p-20 flex flex-col md:flex-row text-center md:text-left  items-center    bg-lightorg29'>
            <div ref={galleryheadref} className='flex flex-col items-center md:items-start'>
                <h1 className='text-6xl font-semibold mt-2 mb-10 relative 
               after:content-[""] after:absolute after:h-1 after:-bottom-5 after:w-50 after:left-0 after:bg-org69  font-bebasNeue'>MY CLIENTS</h1>
                <p className='text-gray-700 text-lg text-ellipsis'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Donec Sodales Sagittis Magna. Sed Consequat, Leo Eget Bibendum Sodales, Augue Velit Cursus Nunc, Quis Gravida Magna Mi A Libero. Nam at congue diam. </p>

            </div>
            <div className='flex md:flex-row flex-col justify-evenly lg:w-700'>
                <div className='m-4 w-60 md:-mt-20 flex flex-col justify-center items-center border-org69'>

                    <div className=' profile my-4 md:my-5 flex flex-col justify-center items-center border-amber-300'>
                        <img className='w-60 h-60 object-cover object-top' src="https://images.unsplash.com/photo-1762236096997-6e579f675140?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWR2ZW50dXJlJTIwZ2lybCUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" alt="" />
                        <h1 className='font-semibold mt-2'>FRIDA JAMES</h1>
                        <h2 className='text-gray-500 text-sm font-sansflex'>ADVENTURER</h2>
                    </div>
                    <div className=' profile my-4 md:my-5 flex flex-col justify-center items-center border-amber-300'>
                        <img className='w-60 h-60 object-cover object-top' src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                        <h1 className='font-semibold mt-2'>RAYEN NEASON</h1>
                        <h2 className='text-gray-500 text-sm font-sansflex'>ENTREPRENEUR</h2>
                    </div>


                </div>
                <div className=' m-4 md:-mt-50 w-60 flex flex-col justify-start items-center border-org69'>

                    <div className=' profile my-4 flex flex-col justify-evenly items-center border-amber-300'>
                        <img className='w-60 h-60 object-cover object-top' src="https://images.unsplash.com/photo-1639564166502-e6b287fbb0ec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3BvcnQlMjBnaXJsfGVufDB8fDB8fHww" alt="" />
                        <h1 className='font-semibold mt-2'>NATALIE FOSTER</h1>
                        <h2 className='text-gray-500 text-sm font-sansflex'>TENNIS PLAYER</h2>
                    </div>
                    <div className='profile my-4  md:my-6  flex flex-col justify-center items-center border-amber-300'>
                        <img className='w-60 h-60 object-cover object-top' src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                        <h1 className='font-semibold mt-2'>ANGELLICA GERY</h1>
                        <h2 className='text-gray-500 text-sm font-sansflex'>Model</h2>
                    </div>
                    <div className='profile  my-4 flex flex-col justify-center items-center border-amber-300'>
                        <img className='w-60 h-60 object-cover object-top' src="https://images.unsplash.com/photo-1656769539039-9bed78f00463?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJvZHlidWlsZGVyJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                        <h1 className='font-semibold mt-2'>BRANDON PARKER</h1>
                        <h2 className='text-gray-500 text-sm font-sansflex'>BODY BUILDER</h2>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default Section7