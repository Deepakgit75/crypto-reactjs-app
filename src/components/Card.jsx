import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";

const Card = (props) => {
    const className = props.className;
    const title = props.title;
    const image = props.image;
    // const button = props.button;

  return (
    <div >
      <div className={className}>
        <img
        className=' h-32 w-32 rounded-lg m-3 '
         src={image} alt='icon'/>
        <div className='flex flex-col items-start justify-center gap-5 mr-10 '>
            <div className='font-bold text-xl text-wrap'>
                {title}
            </div>
            <button className='bg-white rounded-lg flex flex-row justify-center p-2 items-center gap-2 font-semibold text-sm m-2'>
                Check Now <FaArrowRightLong/>
            </button>
        </div>
      </div>
    </div>
  )
}

export default Card
