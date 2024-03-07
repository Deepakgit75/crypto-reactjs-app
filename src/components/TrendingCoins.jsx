import React, { useEffect } from 'react';
import { FaCaretUp } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { getTrendcoins } from '../store/trendcoinSlice';

const TrendingCoins = () => {

    const dispatch = useDispatch();

    const {data:trends, status} = useSelector(state => state.trendcoin);
    const loading = status;
    console.log(trends?.coins);
  
    useEffect(() =>{
        dispatch(getTrendcoins());
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
    <div className='w-[427px] h-[225px] p-4 gap-5 rounded-lg bg-white'>
        <p className=' font-semibold text-2xl text-justify pb-4 -mt-2 '>Trending Coins (24h)</p>
      {
        loading === 'loading'
        ? 
        (
            <div className='spinner'></div>
        )
        :

        (
            <div className='flex flex-col gap-5'>
                {trends?.coins?.filter(coins => coins?.item?.score < 3).map((coin, index) => (
                    <div key={index} className='flex justify-between'>
                        <div className='gap-2 flex font-medium text-base'>
                            <img  className='h-6 w-6' src={coin.item.small} alt="thumbnail" />  
                            {coin?.item?.name}
                        </div>
                        <div className='flex flex-row font-medium text-base text-[#14B079] bg-[#EBF9F4] rounded-[4px] p-2 gap-2 justify-center'> 
                                <FaCaretUp/>
                            {coin?.item?.data?.price_change_percentage_24h.usd?.toFixed(2)}%
                        </div>
                    </div>
                ))}
            </div>
        )

      }
    </div>
  )
}

export default TrendingCoins
