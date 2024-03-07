import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className=' bg-white flex h-[80px] w-full border-1 border-[#DEDFE2] justify-between shadow-md shadow-[#1026490F]  items-center max-md:w-[350px]'>
        <div className='ml-[60px]'>
            <Link to='/'>
                <img src={logo} alt='Koinx'
                width={94.97}
                height={20.09}
                ></img>
            </Link> 
        </div>
        <div className='flex flex-row gap-8'>
            <div  className='font-semibold text-base mt-1'>
                Crypto Taxes
            </div>
            <div className='font-semibold text-base mt-1'>
                Free Tools
            </div>
            <div className='font-semibold text-base mt-1'>
                Resource Center
            </div>
            <div className='p-2 bg-gradient-to-r from-[#2870EA] to-[#1B4AEF] rounded-lg gap-2 font-semibold text-base'>
                Get Started
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
