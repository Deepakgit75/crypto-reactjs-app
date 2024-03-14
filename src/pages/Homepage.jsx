// import React, { useEffect, useState } from 'react'
import icon from '../assets/getstarticon.png'
import { LiaAngleDoubleRightSolid } from "react-icons/lia";
import TradingViewWidget from './TradingViewWidget';
import TrendingCoins from '../components/TrendingCoins';
import Performance from './Performance';
import Sentiment from './Sentiment';
import About from './About';
import Tockenomics from './Tockenomics';
import YouMayLike from './YouMayLike';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getBitcoins } from '../store/bitcoinSlice';
import { FaCaretUp } from 'react-icons/fa';

const Homepage = () => {

  const dispatch = useDispatch();
  const { data: bitcoin } = useSelector(state => state.coin);

  useEffect(() => {
    dispatch(getBitcoins());
  }, []);

  return (
    <div className='bg-slate-100 w-full'>

      <div className='h-full'>
        <div className='flex flex-row p-4'>
          <div className='font-normal text-sm'>cryptocurrencies</div>
          <div className='font-normal text-sm mt-1'><LiaAngleDoubleRightSolid /></div>
          <div className=' font-medium text-sm '>Bitcoin</div>
        </div>

        <div className='flex flex-col md:flex-row'>
          <div className=' w-full md:w-[70%] p-4 bg-white'>
            <div className='flex flex-col mb-4 justify-start items-start gap-6'>
              <div className='flex flex-row gap-4 items-center justify-center'>
                <img src={bitcoin[0]?.image} alt='logo'
                  className='h-9 w-9' />
                <p className='font-semibold text-2xl text-[#0B1426] '>{bitcoin[0]?.name} </p>
                <p className='font-semibold uppercase text-base text-[#5D667B] '>{bitcoin[0]?.symbol} </p>
                <div className='ml-5 p-3 bg-[#768396] font-medium text-base text-[#FFFFFF] rounded-lg  '>Rank #{bitcoin[0]?.market_cap_rank}</div>
              </div>
              <div className='flex flex-row gap-5 text-justify'>
                <div className='flex flex-col'>
                  <p className='font-semibold text-[28px] text-[#0B1426] '>${bitcoin[0]?.current_price}</p>
                  <p className=' font-medium text-base text-[#0B1426] '>₹{bitcoin[0]?.current_price*82.86}</p>
                </div>
                <div className='flex flex-row  gap-2 '>
                  <div className='bg-[#EBF9F4] p-2 h-fit rounded-[4px] font-medium text-base text-[#14B079] gap-2 flex flex-row'>
                    <span className='mt-1'><FaCaretUp /></span>
                    {bitcoin[0]?.price_change_24h.toFixed(2)}% </div>
                  <div className='text-[#768396] font-medium mt-2 text-sm '>(24H)</div>
                </div>
              </div>
            </div>
            <div className='h-[520px]'>
              <TradingViewWidget />
            </div>
          </div>
          <div className='flex-col mx-4 hidden lg:flex'>
            <div className='flex flex-col h-[445px] w-[387px] bg-[#0052FE] rounded-lg gap-5 px-5 py-[31px] justify-center items-center'>
              <div className='flex flex-col gap-4 mx-4'>
                <p className=' font-bold text-2xl align-middle text-white mx-8'>Get Started with KoinX for FREE</p>
                <p className=' font-medium text-sm text-white'>With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports.</p>
              </div>
              <img className=' h-40 w-40 ' src={icon} alt='icon'></img>
              <button className='bg-white mx-auto px-6 py-2 rounded-lg font-semibold text-base text-[#0F1629]'>Get Started For FREE <span className=' w-5 font-bold text-lg'>→</span></button>
            </div>

            <div className='flex flex-col gap-5 rounded-lg mt-3 mb-0 text-black'>
              <TrendingCoins />
            </div>

          </div>
        </div>

        <br />
        <div className='flex flex-row gap-6 overflow-x-scroll overflow-y-hidden  text-base font-semibold bg-white md:w-[70%] px-6 py-6 text-[#3E424A] text-nowrap'>
          <p className='font-semibold text-blue-800 underline'>Overview</p>
          <p>Fundamentals</p>
          <p>News Insights</p>
          <p>Sentiments</p>
          <p>Teams</p>
          <p>Technicals</p>
          <p>Tockenomics</p>
        </div>

        <div>
          <Performance />
        </div>
        <br />
        <div>
          <Sentiment />
        </div>
        <br />
        <div>
          <About />
        </div>
        <br />
        <div>
          <Tockenomics />
        </div>
        <br />
        <div>
          <YouMayLike />
        </div>
        <br />
      </div>

      <div>
        <div className='md:hidden flex flex-col mx-2'>

          <div className='flex flex-col h-[445px] w-[347px] bg-[#0052FE] rounded-lg gap-5 px-4 py-[31px] justify-center items-center'>
            <div className='flex flex-col gap-4 mx-2'>
              <p className=' font-bold text-2xl align-middle text-white mx-8'>Get Started with KoinX for FREE</p>
              <p className=' font-medium text-sm text-white'>With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports.</p>
            </div>
            <img className=' h-40 w-40 ' src={icon} alt='icon'></img>
            <button className='bg-white mx-auto px-6 py-2 rounded-lg font-semibold text-base text-[#0F1629]'>Get Started For FREE <span className=' w-5 font-bold text-lg'>→</span></button>
          </div>

          <div className='flex flex-col gap-5 rounded-lg mt-3 mb-0 text-black'>
            <TrendingCoins />
          </div>

        </div>
      </div>

    </div>
  )
}

export default Homepage
