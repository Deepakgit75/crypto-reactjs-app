import React from 'react';
import { IoMdInformationCircle } from "react-icons/io";
import Slider from '../components/Slider';


const Sentiment = () => {
  return (
    <div className='p-4 mt-2 bg-white md:w-[70%] '>
        <div className=''>
            <div className=''>
                <div className='w-full mr-auto'>
                    <p className=' text-justify my-2 font-semibold text-2xl text-[#0F1629] mr-auto'>Sentiment</p>
                </div>
                {/* KEY EVENTS */}
                <div>
                    <div className='flex flex-row items-center gap-2 mr-auto'>
                        <p className=' font-semibold text-[19px] text-[#7C7E8C] '>Key Events</p>
                        <div className='text-[#7C7E8C] w-6 p-0'>
                            <IoMdInformationCircle/>
                        </div>
                    </div>
                    <div>
                        <Slider/>
                    </div>
                </div>

                {/* ANALYST ESTIMETS */}
                <div className='text-black mt-4 p-2'>
                    <div className='flex flex-row items-center gap-2 mr-auto'>
                        <p className=' font-semibold text-[19px] text-[#7C7E8C]'>Analyst Estimates</p>
                        <div className='text-[#7C7E8C] w-6 p-0'>
                            <IoMdInformationCircle/>
                        </div>
                    </div>
                    <div className='flex flex-row gap-10 mt-2 w-full'>
                        <div className='flex rounded-full bg-[#EBF9F4] w-[120px] h-[120px] items-center justify-center'>
                           <p className=' md:text-4xl text-2xl  font-medium text-[#0FBA83] '>76%</p> 
                        </div>
                        <div className='flex flex-col w-[70%] gap-6 font-medium text-sm text-[#7C7E8C] '>
                            <div className='flex flex-row gap-4  items-center'>
                                <p >Buy</p>
                                <div className='h-2 bg-[#00B386] rounded-sm w-[80%]'></div>
                                <p>76%</p>
                            </div>
                            <div className='flex flex-row gap-4  items-center'>
                                <p>Hold</p>
                                <div className='h-2 bg-[#C7C8CE] rounded-sm w-[8%]'></div>
                                <p>8%</p>
                            </div>
                            <div className='flex flex-row gap-4  items-center'>
                                <p>Sell</p>
                                <div className='h-2 bg-[#F7324C] rounded-sm  w-[16%]'> </div>
                                <p>66%</p>
                            </div>
                            
                        </div>
                    </div>
                </div>

            </div>   
        </div>

    </div>
  )
}

export default Sentiment
