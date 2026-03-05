import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';


const Swiperslide = () => {
    return (
        <Swiper className='myswiper m-4 w-full h-full md:w-200  md:h-100 lg:w-270 lg:h-170 object-cover overflow-hidden border-white border-2'
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            autoplay={{
                delay: 3500,
                disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
        >
            <SwiperSlide className=' bg-red-200 object-cover'>
                <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1604480133080-602261a680df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGd5bSUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
            </SwiperSlide>
            <SwiperSlide className=' bg-pink-200 '>
                <img className='w-full h-full object-cover' src="https://plus.unsplash.com/premium_photo-1664304112354-aef5059bae8a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGd5bSUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
            </SwiperSlide>
            <SwiperSlide className=' bg-green-200'>
                <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1581009137042-c552e485697a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGd5bSUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
            </SwiperSlide>
            <SwiperSlide className=' bg-blue-200'>
                <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGd5bSUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
            </SwiperSlide>

        </Swiper>
    )
}

export default Swiperslide