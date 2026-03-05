import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'

const Section3 = () => {

    const trainingref = useRef()
    const trainingItemsRef = useRef()

    useEffect(() => {

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: trainingref.current,
                // markers: true,
                start: "top 60%",
                scrub: false,
            }
        });

        tl.from(trainingref.current.children, {
            x: -100,
            opacity: 0,
            stagger: 0.3,
            duration: 0.6,
            ease: "power3.out",
        })
            .from(trainingItemsRef.current.children, {
                x: 100,
                opacity: 0,
                stagger: 0.3,
                duration: 1,
                delay: 0.2,
                ease: "power3.out",
            })

    }, []);
    return (
        <div id='training' className='w-full h-full md:min-h-[85vh] px-20 flex flex-col md:flex-row justify-evenly items-center bg-lightorg29'>
            <div ref={trainingref}>
                <h1 className='text-6xl font-semibold mb-10 relative 
               after:content-[""] after:absolute after:h-1 after:-bottom-5 after:w-50 after:left-0 after:bg-org69  font-bebasNeue'>PERSONAL Training</h1>
                <p className='text-gray-700 text-lg text-ellipsis'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt accusantium harum quidem officiis eveniet error. Perferendis veniam itaque mollitia minus, dignissimos, ea magni iste vel eaque quia minima, id quis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, vitae?</p>

            </div>
            <div className="min-w-100 w-100 md:w-250 h-fit m-4">
                <ul ref={trainingItemsRef} className=''>
                    <li className='text-gray-600'> <span className='text-org69 text-2xl mx-10 font-bold'>{'>'}</span>  Weight Loss/ Management</li>
                    <li className='text-gray-600'> <span className='text-org69 text-2xl mx-10 font-bold'>{'>'}</span>  Toning & sculpting</li>
                    <li className='text-gray-600'> <span className='text-org69 text-2xl mx-10 font-bold'>{'>'}</span>  Resistance Training</li>
                    <li className='text-gray-600'> <span className='text-org69 text-2xl mx-10 font-bold'>{'>'}</span>  Muscle Building</li>
                    <li className='text-gray-600'> <span className='text-org69 text-2xl mx-10 font-bold'>{'>'}</span>  Mobility / flexibility</li>
                    <li className='text-gray-600'> <span className='text-org69 text-2xl mx-10 font-bold'>{'>'}</span>  Planning & Perioisation for Acting</li>
                    <li className='text-gray-600'> <span className='text-org69 text-2xl mx-10 font-bold'>{'>'}</span> Speed,Strength,Power Development</li>
                    <li className='text-gray-600'> <span className='text-org69 text-2xl mx-10 font-bold'>{'>'}</span> Nutritional Advice</li>
                </ul>
            </div>
        </div >
    )
}

export default Section3