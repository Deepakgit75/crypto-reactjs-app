import React, { useEffect, useState } from 'react'
import {Swiper, SwiperSlide} from "swiper/react"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { cards } from '../assets/data';


const Slider = () => {

    const [slidesPerView, setSlidesPerView] = useState('auto');

    const handleResize = () => {
      window.innerWidth >= 1000 && setSlidesPerView(2);
      window.innerWidth < 1000  && setSlidesPerView(1);
    }
  
    useEffect(() =>{
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

  return (
    <div className=''>
        <div className='flex text-[10px] text-justify gap-4 '>
            <Swiper
                slidesPerView={slidesPerView}
                spaceBetween={10}
                cssMode={true}
                navigation={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className={"w-[99%] h-50"} 
            >
                {
                    cards.map((card, index) => (
                        <SwiperSlide key={index}
                            className={`w-[500px] pt-4 flex flex-row rounded-xl ${index % 2 === 0 ? " bg-[#E8F4FD] ":" bg-[#EBF9F4] " }`}
                        >
                            <div className='flex flex-row m-4'>
                                <img
                                src={card?.image} alt='icon'
                                className='h-9 w-9 m-2 rounded-full '
                                />
                                <div className='overflow-none h-60 text-justify'>
                                    <p className='text-black mx-4 font-medium text-sm mb-2'>
                                    {card.content?.slice(0, 89)}
                                    </p>
                                    <p className='text-black mx-4 font-normal text-sm overflow-hidden'>
                                    {card.content?.slice(90, -1)}
                                    </p>
                                </div>

                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </div>
  )
}

export default Slider
