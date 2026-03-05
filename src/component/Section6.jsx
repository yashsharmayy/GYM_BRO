import React, { useEffect, useRef } from 'react'
import Swiper from 'swiper'
import Swiperslide from './Swiperslide'
import gsap from 'gsap'

const Section6 = () => {
    const galleryref = useRef()
    useEffect(() => {

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: galleryref.current,
                // markers: true,
                start: "top 65%",
                scrub: false,
            }
        });

        tl.from(galleryref.current.children, {
            x: -100,
            opacity: 0,
            stagger: 0.3,
            duration: 0.6,
            ease: "power3.out",
        })


    }, []);

    return (
        <div id='Gallery' className='w-full h-full md:min-h-screen p-10  md:p-20 flex flex-col items-center md:items-start text-white  bg-dark99'>
            <div ref={galleryref}>
                <h1 className='text-6xl font-semibold mb-10 relative 
               after:content-[""] after:absolute after:h-1 after:-bottom-5 after:w-50 after:left-0 after:bg-org69  font-bebasNeue'>TRAINING GALLERY</h1>
                <p className='text-gray-300 text-lg text-ellipsis'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste asperiores totam rerum deserunt maiores perferendis. Ipsum nesciunt excepturi beatae tempora?</p>

            </div>
            <div className='m-10 flex w-full justify-center items-center'>
                <Swiperslide />
            </div>
        </div>
    )
}

export default Section6