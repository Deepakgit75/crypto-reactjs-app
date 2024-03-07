import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { cards } from '../assets/data';


const Slider = () => {
  return (
    <div className='m-2'>
        <div className='m-4 text-justify '>
            <Swiper
                slidesPerView={2}
                spaceBetween={10}
                cssMode={true}
                navigation={true}
                // pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className='w-full h-full'
            >

                {
                    cards.map((card, index) => (
                        <SwiperSlide key={index}
                            className={`my-4 flex flex-row rounded-xl ${index % 2 === 0 ? " bg-[#E8F4FD] ":" bg-[#EBF9F4] " }`}
                        >
                            <div className='flex flex-row m-4'>
                                <img
                                src={card?.image} alt='icon'
                                className='h-9 w-9 m-2 rounded-full'
                                />
                                <div>
                                    <p className='text-black mx-4 font-medium text-sm mb-2'>
                                    {card.content?.slice(0, 89)}
                                    </p>
                                    <p className='text-black mx-4 font-normal text-sm '>
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
