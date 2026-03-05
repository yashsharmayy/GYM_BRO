import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Section5 = () => {

    const ratesref = useRef()
    const cardref = useRef()

    useEffect(() => {

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ratesref.current,
                // markers: true,
                start: "top 70%",
                scrub: false,
            }
        });

        tl.from(ratesref.current.children, {
            x: 100,
            opacity: 0,
            stagger: 0.3,
            duration: 0.6,
            ease: "power3.out",
        })
            .from(".card", {   // 🔥 animate all cards
                x: 100,
                opacity: 0,
                stagger: 0.2,
                duration: 0.4,
                ease: "power3.out",
            })
            .from(".card-inner h1, .card-inner h2, .card-inner .cardcontent , .card a", {  // 🔥 animate content inside cards
                x: 50,
                opacity: 0,
                stagger: 0.2,
                duration: 0.4,
            });

    }, []);


    return (
        <div id='Rates' className='w-full h-full md:min-h-[120vh] p-10  md:p-20 flex flex-col items-center md:items-start   bg-lightorg29'>
            <div ref={ratesref}>
                <h1 className='text-6xl font-semibold mb-10 relative 
               after:content-[""] after:absolute after:h-1 after:-bottom-5 after:w-50 after:left-0 after:bg-org69  font-bebasNeue'>TRAINING RATES</h1>
                <p className='text-gray-700 text-lg text-ellipsis'>I am currently in Delhi and will be taking bookings from September 2020.</p>

            </div>
            <div ref={cardref} className='m-4 w-full flex text-white justify-evenly flex-wrap'>
                <div className=" relative card object-cover min-w-70 w-100 h-130 m-4">
                    <div className='absolute  w-full  h-full  bg-[#1c1c1c9e]'></div>
                    <img className='w-full h-full ' src="https://plus.unsplash.com/premium_photo-1664478096730-64026d07b5cb?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <div className="card-inner absolute left-6 top-6 w-full h-full">
                        <h1 className='text-4xl font-bebasNeue text-org69 my-4'>$275</h1>
                        <h2 className='font-bebasNeue text-2xl '>DIET OR FOTNESS REPORT</h2>
                        <div className='cardcontent  absolute py-2 w-50'>
                            <div className='flex font-sansflex  my-4 relative after:content-[""] after:w-50 after:absolute after:left-0 after:h-[0.5px] after:bg-white after:-bottom-2'>
                                Genetic sample test kit
                            </div>
                            <div className='flex  font-sansflex  my-4 relative after:content-[""] after:w-50 after:absolute after:left-0 after:h-[0.5px] after:bg-white after:-bottom-2'>
                                Your genetic diet or exercise report
                            </div>
                            <div className='flex font-sansflex  my-4 relative after:content-[""] after:w-50 after:absolute after:left-0 after:h-[0.5px] after:bg-white after:-bottom-2'>
                                Diet plan or Exercise suggestions
                            </div>

                        </div>
                    </div>
                    <a className='absolute left-5 bottom-5 flex items-center gap-2 text-2xl text-org69 font-bebasNeue' href="/Contact"> Registration Now <span className='text-org69 text-3xl font-semibold'>{'>'}</span></a>
                </div>
                <div className=" relative card object-cover w-100 min-w-70 h-130 m-4">
                    <div className='absolute  w-full  h-full  bg-[#1c1c1c9e]'></div>
                    <img className='w-full h-full ' src="https://images.unsplash.com/photo-1549476464-37392f717541?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGd5bSUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                    <div className="card-inner absolute left-6 top-6 w-full h-full">
                        <h1 className='text-4xl font-bebasNeue text-org69 my-4'>$425</h1>
                        <h2 className='font-bebasNeue text-2xl '>DIET OR FOTNESS REPORT</h2>
                        <div className='cardcontent absolute py-2 w-50'>
                            <div className='flex font-sansflex  my-4 relative after:content-[""] after:w-50 after:absolute after:left-0 after:h-[0.5px] after:bg-white after:-bottom-2'>
                                Genetic sample test kit
                            </div>
                            <div className='flex  font-sansflex  my-4 relative after:content-[""] after:w-50 after:absolute after:left-0 after:h-[0.5px] after:bg-white after:-bottom-2'>
                                Your genetic diet or exercise report
                            </div>
                            <div className='flex font-sansflex  my-4 relative after:content-[""] after:w-50 after:absolute after:left-0 after:h-[0.5px] after:bg-white after:-bottom-2'>
                                Diet & Exercise Summary Infographic
                            </div>
                            <div className='flex  font-sansflex  my-4 relative after:content-[""] after:w-50 after:absolute after:left-0 after:h-[0.5px] after:bg-white after:-bottom-2'>
                                Diet plan
                            </div>
                            <div className='flex  font-sansflex  my-4 relative after:content-[""] after:w-50 after:absolute after:left-0 after:h-[0.5px] after:bg-white after:-bottom-2'>
                                Exercise suggestions
                            </div>

                        </div>
                    </div>
                    <a className='absolute left-5 bottom-5 flex items-center gap-2 text-2xl text-org69 font-bebasNeue' href="/Contact"> Registration Now <span className='text-org69 text-3xl font-semibold'>{'>'}</span></a>
                </div>
                <div className=" relative card object-cover w-100 min-w-70 h-130 m-4">
                    <div className='absolute  w-full  h-full  bg-[#1c1c1c9e]'></div>
                    <img className='w-full h-full ' src="https://images.unsplash.com/photo-1669322779651-5ca89652492e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <div className="card-inner absolute left-6 top-6 w-full h-full">
                        <h1 className='text-4xl font-bebasNeue text-org69 my-4'>$550</h1>
                        <h2 className='font-bebasNeue text-2xl '>Diet & Fitness Max</h2>
                        <div className='cardcontent absolute py-2 w-50'>
                            <div className='flex font-sansflex  my-4 relative after:content-[""] after:w-50 after:absolute after:left-0 after:h-[0.5px] after:bg-white after:-bottom-2'>
                                Genetic sample test kit
                            </div>
                            <div className='flex  font-sansflex  my-4 relative after:content-[""] after:w-50 after:absolute after:left-0 after:h-[0.5px] after:bg-white after:-bottom-2'>
                                Your genetic diet or exercise report
                            </div>
                            <div className='flex font-sansflex  my-4 relative after:content-[""] after:w-50 after:absolute after:left-0 after:h-[0.5px] after:bg-white after:-bottom-2'>
                                Diet plan or Exercise suggestions
                            </div>
                            <div className='flex font-sansflex  my-4 relative after:content-[""] after:w-50 after:absolute after:left-0 after:h-[0.5px] after:bg-white after:-bottom-2'>
                                In-Body Analysis
                            </div>
                            <div className='flex font-sansflex  my-4 relative after:content-[""] after:w-50 after:absolute after:left-0 after:h-[0.5px] after:bg-white after:-bottom-2'>
                                Weekly Check ups
                            </div>

                        </div>
                    </div>
                    <a className='absolute left-5 bottom-5 flex items-center gap-2 text-2xl text-org69 font-bebasNeue' href="/Contact"> Registration Now <span className='text-org69 text-3xl font-semibold'>{'>'}</span></a>
                </div>


            </div>
        </div >
    )
}

export default Section5