import React from 'react'
// import { DonutChart } from '../components/DonutChart';
import profile1 from '../assets/profile-1.png'
import profile2 from '../assets/profile-2.png'
import profile3 from '../assets/profile-3.png'

const Tockenomics = () => {
  return (
    <div>
        <div className='bg-white md:w-[70%]'>
            <div className='m-4 flex flex-col gap-6'>
                <div>
                    <p className='mt-4 text-justify font-semibold text-2xl text-[#0F1629]'>
                        Tokenomics
                    </p>
                </div>
                <div className='flex flex-col gap-6 '>
                    <div>
                        <p className='text-justify font-semibold text-xl text-[#1D1D1D] '>
                            Initial Distribution 
                        </p>
                    </div>
                    <div className='flex gap-6 items-center md:flex-row flex-col'>
                        <div className='h-[176px] w-[176px] border-[36px] border-l-[#FAA002] border-r-[#0082FF] border-t-[#0082FF] border-b-[#0082FF] rounded-full transition-all rotate-45'>

                        </div>
                        <div>
                            <div className='flex gap-2'>
                                <div className='h-4 w-4 mt-1 rounded-full bg-[#0082FF]'></div>
                                <p>Crowdsale investors: 80%</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <div className='h-4 w-4 mt-1 rounded-full bg-[#FAA002]'></div>
                                <p>Foundation: 20%</p>
                            </div>
                        </div>
                    </div>
                    <div className='text-[#3E424A] font-medium text-base text-justify mb-6'>
                        Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna felis augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus.
                    </div>
                </div>
            </div>
        </div>

        <div className='md:w-[70%] bg-white text-justify'>
            <div className=' p-6  '>
                <div>
                    <p className=' font-semibold text-2xl text-[#0F1629] mb-8'>
                        Team
                    </p>
                </div>
                <div>
                    <p className=' font-medium text-base text-[#3E424A]'>Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.</p>
                </div>
                <div className='flex flex-col gap-6 mt-3 '>
                    <div className='flex md:flex-row flex-col gap-4 p-6 items-center bg-[#E8F4FD] rounded-xl'>
                        <div className='flex flex-col '>
                            <div className='rounded-md w-[95px] h-[105px]'>
                                <img src={profile1}
                                className='w-fit rounded-md '
                                alt='profile'/>

                            </div>
                            <p className=' font-semibold text-[15px] text-[#0F1629] '>Jhon Smith</p>
                            <p className=' font-medium text-xs text-[#788F9B] '>Designation here</p>
                        </div>
                        <p className='font-normal text-sm text-[#0F1629] pb-4'>Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu</p>
                    </div>
                    <div className='flex md:flex-row flex-col  gap-4 p-6 items-center justify-center bg-[#E8F4FD] rounded-xl '>
                        <div className='flex flex-col'>
                            <div className='rounded-md w-[95px] h-[105px]'>
                                <img src={profile2}
                                className='w-fit rounded-md '
                                alt='profile'/>

                            </div>
                            <p className=' font-semibold text-[15px] text-[#0F1629] '>Jhon Smith</p>
                            <p className=' font-medium text-xs text-[#788F9B] '>Designation here</p>
                        </div>
                        <p className='font-normal text-sm text-[#0F1629] pb-4'>Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu</p>
                    </div>
                    <div className='flex md:flex-row flex-col gap-4 p-6 justify-center items-center bg-[#E8F4FD] rounded-xl'>
                        <div className='flex flex-col '>
                            <div className='rounded-md w-[95px] h-[105px]'>
                                <img src={profile3}
                                className='w-fit rounded-md '
                                alt='profile'/>

                            </div>
                            <p className=' font-semibold text-[15px] text-[#0F1629] '>Jhon Smith</p>
                            <p className=' font-medium text-xs text-[#788F9B] '>Designation here</p>
                        </div>
                        <p className='font-normal text-sm text-[#0F1629] pb-4'>Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu</p>
                    </div>
                    
                </div>
            </div>
        </div>

    </div>
  )
}

export default Tockenomics
