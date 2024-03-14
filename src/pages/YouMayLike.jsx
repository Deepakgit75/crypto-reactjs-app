import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getTrendcoins } from '../store/trendcoinSlice';


import {Swiper, SwiperSlide} from "swiper/react"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import { Autoplay,FreeMode,Navigation, Pagination}  from 'swiper/modules'
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

const YouMayLike = () => {

  const dispatch = useDispatch();

  const {data, status} = useSelector(state => state.trendcoin);
  console.log(data.coins);
  const [slidesPerView, setSlidesPerView] = useState('auto');

  const handleResize = () => {
    window.innerWidth >= 1000 && setSlidesPerView(5);
    window.innerWidth < 1000 && window.innerWidth >= 650 && setSlidesPerView(4);
    window.innerWidth < 650  && window.innerWidth >= 520 && setSlidesPerView(3);
    window.innerWidth < 520 && setSlidesPerView(2);
  }

  useEffect(() =>{
    dispatch(getTrendcoins());
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if(status === 'loading'){
    return(
      <p>Loading...</p>
    )
  }

  if(status === 'error'){
    return( <h1>Error 404</h1>)
  }

  return (
    <div className='text-justify flex flex-col md:w-[70%] p-6 bg-white gap-6'> 
      <div>
        <p className=' font-semibold text-2xl text-[#202020] '>You May Also Like </p>
      </div>

      <div>
        <Swiper
          slidesPerView={slidesPerView}
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
            data?.coins?.map((coin, index) => (
              <SwiperSlide 
              className='flex flex-row p-4 rounded-xl gap-6 border border-[#E3E3E3]'
              key={index} >
                <div className='flex flex-col gap-2'>
                  <div className='flex gap-2'>
                    <img src={coin?.item.small} className=' w-[26px] h-[26px]  ' alt='coin' />
                    <p className='text-[#202020] font-normal text-base '>{coin?.item.symbol}</p>
                    <p className='bg-bgred1 p-1  rounded-sm text-[#E96975] font-normal text-xs'>{coin?.item.data.price_change_percentage_24h.usd.toFixed(2)}% </p>
                  </div>
                  <div>
                    <p className='text-justify text-[#171717] font-medium text-xl '>{coin?.item.data.price}</p>
                  </div>
                  <div>
                    <img src={coin?.item.data?.sparkline} alt='coin'
                    className=' px-4 ' />
                  </div>
                </div>
              </SwiperSlide>
              )
            )
          }
        </Swiper>
      </div>
      <div>
        <p className=' font-semibold text-2xl text-[#202020] '>
          Trending Coins
        </p>
      </div>
      <div>
        <Swiper
          slidesPerView={slidesPerView}
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
            data?.coins?.map((coin, index) => (
              <SwiperSlide 
              className='flex flex-row p-4 rounded-xl gap-6 border border-[#E3E3E3]'
              key={index} >
                <div className='flex flex-col gap-2'>
                  <div className='flex gap-2'>
                    <img src={coin?.item.small} className=' w-7 h-7  ' alt='coin' />
                    <p>{coin?.item.symbol}</p>
                    <p>{coin?.item.data.price_change_percentage_24h.usd.toFixed(2)}% </p>
                  </div>
                  <div>
                    <p className='text-justify'>{coin?.item.data.price}</p>
                  </div>
                  <div>
                    <img src={coin?.item.data?.sparkline} alt='coin' />
                  </div>
                </div>
              </SwiperSlide>
              )
            )
          }
        </Swiper>
      </div>
    </div>
  )
}

export default YouMayLike
