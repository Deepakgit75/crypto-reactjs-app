// import React, { useEffect, useState } from 'react'
import icon  from '../assets/getstarticon.png'
import { LiaAngleDoubleRightSolid } from "react-icons/lia";
import TradingViewWidget from './TradingViewWidget';
import TrendingCoins from '../components/TrendingCoins';
import Performance from './Performance';
import Sentiment from './Sentiment';
import About from './About';
import Tockenomics from './Tockenomics';
import YouMayLike from './YouMayLike';

const Homepage = () => {


  return (
    <div className='max-w-screen-2xl'>

        <div className='bg-[#D3E0E6] h-full max-w-screen-2xl'>
          <div className='flex flex-row mt-0 px-4'>
            <div className='font-normal text-sm'>cryptocurrencies</div>
            <div className='font-normal text-sm mt-1'><LiaAngleDoubleRightSolid/></div>
            <div className=' font-medium text-sm '>Bitcoin</div>
          </div>

          <div className='flex flex-row'>
            <TradingViewWidget/>
          <div className='flex flex-col mx-4'>

              <div className='flex flex-col h-[515px] w-[427px] bg-[#0052FE] rounded-lg gap-5 px-5 py-[31px] justify-center items-center'>
                  <div className='flex flex-col gap-4 mx-4'>
                    <p className=' font-bold text-2xl align-middle text-white mx-8'>Get Started with KoinX for FREE</p>
                    <p className=' font-medium text-sm text-white'>With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports.</p>
                  </div>
                  <img className=' h-40 w-40 ' src={icon} alt='icon'></img>
                  <button className='bg-white mx-auto px-6 py-2 rounded-lg font-semibold text-base text-[#0F1629]'>Get Started For FREE <span className=' w-5 font-bold text-lg'>→</span></button>
              </div>

              <div className='flex flex-col gap-5 rounded-lg mt-5 mb-6 text-black'>
                  <TrendingCoins/>
              </div>

          </div>
          </div>


        <div className='flex flex-row gap-6 text-base font-semibold bg-white w-[70%] -mt-16 pl-4 py-6 text-[#3E424A]'>
          <p className='font-semibold text-blue-800 underline '>Overview</p>
          <p>Fundamentals</p>
          <p>News Insights</p>
          <p>Sentiments</p>
          <p>Teams</p>
          <p>Technicals</p>
          <p>Tockenomics</p>
        </div>

        <div className='h-[632px]'>
          <Performance/>
        </div>
        <div className='h-[556px]'>
          <Sentiment/>
        </div>
        <div  className='h-[557px]'>
          <About/>
        </div>
        <div className='h-[800px] mt-20'>
          <Tockenomics/>
        </div>

        <div>
          <YouMayLike/>
        </div>

            {/* <div className='flex flex-col h-[515px] w-[427px] bg-[#0052FE] rounded-lg gap-5 px-5 py-[31px] justify-center items-center'>
                <div className='flex flex-col gap-4 mx-4'>
                  <p className=' font-bold text-2xl align-middle text-white mx-8'>Get Started with KoinX for FREE</p>
                  <p className=' font-medium text-sm text-white'>With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports.</p>
                </div>
                <img className=' h-40 w-40 ' src={icon} alt='icon'></img>
                <button className='bg-white mx-auto px-6 py-2 rounded-lg font-semibold text-base text-[#0F1629]'>Get Started For FREE <span className=' w-5 font-bold text-lg'>→</span></button>
              </div>

            <div className='flex flex-col gap-5 mt-7 mb-6 text-black'>
              <TrendingCoins/>
            </div> */}
        </div>

        <div>

        </div>

    </div>
  )
}

export default Homepage
