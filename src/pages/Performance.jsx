import React, { useEffect, useState } from 'react'
// import { getBitcoin } from '../services/operations/trendCryptoApi';
import { IoMdInformationCircle } from "react-icons/io";
import { getBitcoins } from '../store/bitcoinSlice';
import { useDispatch, useSelector } from 'react-redux';

const Performance = () => {

    const dispatch = useDispatch();
    const {data:bitcoin} = useSelector(state => state.coin);
    console.log(bitcoin);

    // const [bitcoin, setBitcoin] = useState([]);
    // const [loading, setLoading] = useState(false);

    const [allTimeLowDate, setAllTimeLowDate] = useState(null);
    const [allTimeHighDate, setAllTimeHighDate] = useState(null);

    // const fetchBitcoin= async () => {
    //     setLoading(true);
    //     try {
    //         const res = await getBitcoin();
    //         setBitcoin(res.data[0]);
    //         console.log(res.data);
    //     } catch (error) {
    //         console.log("Could not fetch coins data.");
    //         setBitcoin([]);
    //     }
    //     setLoading(false);
    //   };

      const isoToString = () =>{
        const ath = new Date(bitcoin[0]?.ath_date);
        console.log(ath?.toUTCString());
        setAllTimeHighDate(ath);
        const atl = new Date(bitcoin[0]?.atl_date);
        console.log(ath?.toUTCString());
        setAllTimeLowDate(atl);
      }

      useEffect(() => {
        dispatch(getBitcoins());
        isoToString();
    }, []);

  return (
    <div className='p-5 bg-white w-[70%]'>
        <div className='flex flex-col  bg-white'>

            <div className='flex flex-col w-[80%] gap-6'>
                <p className='font-semibold text-2xl text-[#0F1629] mr-auto'>Performance</p>
                <div className='flex flex-row gap-6'>
                    <div>
                        <p className='font-normal text-sm text-[#44475B]'>Today's Low</p>
                        <p className='font-medium text-base text-[#44475B]'>{bitcoin[0]?.low_24h}</p>
                    </div>
                    <div className='gradient h-1 rounded-lg w-[80%] m-4'>
                        
                    </div>
                    <div>
                        <p className='font-normal text-sm text-[#44475B]'>Today's High</p>
                        <p className='font-medium text-base text-[#44475B]'>{bitcoin[0]?.high_24h}</p>
                    </div>
                </div>

                <div className='flex flex-row gap-6'>
                    <div>
                        <p className='font-normal text-sm text-[#44475B]'>All Time Low </p>
                        <p className='font-medium text-base text-[#44475B]'>{bitcoin[0]?.atl}</p>
                    </div>
                    <div className='gradient h-1 rounded-lg w-[80%] m-4'></div>
                    <div>
                        <p className='font-normal text-sm text-[#44475B]'>All Time High </p>
                        <p className='font-medium text-base text-[#44475B]'>{bitcoin[0]?.ath}</p>
                    </div>
                </div>
            </div>

            {/* Fundamentals */}
            <div className='w-full my-6'>
                <div className='flex flex-row items-center gap-2 mr-auto'>
                    <p className=' font-semibold text-[19px] text-[#7C7E8C] '>Fundamentals</p>
                    <div className='text-[#7C7E8C] w-6 p-0'>
                        <IoMdInformationCircle />
                    </div>
                </div>

                <div className='flex justify-between'>
                    <div className='flex flex-col  w-[45%]'>
                        <div className='flex flex-row justify-between border-b-2 pl-0 pr-3 pt-3 pb-3'>
                            <div>Bitcoin Price</div>
                            <div>${bitcoin[0]?.current_price}</div>
                        </div>

                        <div className='flex flex-row justify-between border-b-2 pl-0 pr-3 pt-3 pb-3'>
                            <div>24h Low / 24h High</div>
                            <div>${bitcoin[0]?.low_24h} / ${bitcoin[0]?.high_24h}</div>
                        </div>

                        <div className='flex flex-row justify-between border-b-2 pl-0 pr-3 pt-3 pb-3'>
                            <div>7d Low / 7d High</div>
                            <div>${bitcoin[0]?.low_24h} / ${bitcoin[0]?.high_24h}</div>
                        </div>

                        <div className='flex flex-row justify-between border-b-2 pl-0 pr-3 pt-3 pb-3'>
                            <div>Trading Volume</div>
                            <div>${bitcoin[0]?.total_supply}</div>
                        </div>

                        <div className='flex flex-row justify-between border-b-2 pl-0 pr-3 pt-3 pb-3'>
                            <div>Market Cap Rank</div>
                            <div>#{bitcoin[0]?.market_cap_rank}</div>
                        </div>
                        
                    </div>

                    <div className='flex flex-col w-[45%]'>
                        <div className='flex flex-row justify-between border-b-2 pl-0 pr-3 pt-3 pb-3'>
                            <div>Market Cap</div>
                            <div>${bitcoin[0]?.market_cap}</div>
                        </div>

                        <div className='flex flex-row justify-between border-b-2 pl-0 pr-3 pt-3 pb-3'>
                            <div>Market Cap Dominance</div>
                            <div>${bitcoin[0]?.low_24h} / ${bitcoin[0]?.high_24h}</div>
                        </div>

                        <div className='flex flex-row justify-between border-b-2 pl-0 pr-3 pt-3 pb-3'>
                            <div>Volume / Market Cap </div>
                            <div>${bitcoin[0]?.total_volume} / ${bitcoin[0]?.market_cap}</div>
                        </div>

                        <div className='flex flex-row justify-between border-b-2 pl-0 pr-3 pt-3 pb-2'>
                            <div>All-Time High </div>
                            <div>
                                ${bitcoin[0]?.ath}
                                <p className='font-normal text-xs'>{allTimeHighDate?.toUTCString()}</p>
                            </div>
                        </div>

                        <div className='flex flex-row justify-between border-b-2 pl-0 pr-3 pt-3 pb-2'>
                            <div>All-Time Low</div>
                            <div>
                                ${bitcoin[0]?.atl} 
                                <p className=' font-normal text-xs '>{allTimeLowDate?.toUTCString()}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Performance
