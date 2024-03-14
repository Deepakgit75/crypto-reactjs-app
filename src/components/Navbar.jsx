import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";

const Navbars = () => {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center font-semibold text-base">
        Crypto Taxes 
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center font-semibold text-base">
        Free Tools  
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center font-semibold text-base">
        Resource Center  
        </a>
      </Typography>
    </ul>
  );
  return (
    <div className="m-0 max-h-[768px] w-[calc(100%)] ">
      <Navbar className="sticky text-black top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            <img src={logo} alt='logo'
              width={94.97}
              height={20.09} />
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center">
              <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block bg-gradient-to-r from-[#2870EA] to-[#1B4AEF] font-semibold text-base"
              >
                <span>Getting Started</span>
              </Button>
            </div>
            <IconButton
              variant="text"
              className="ml-auto -mt-5 h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="h-6 w-6 my-auto"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
              ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 my-auto"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <div className="flex items-start justify-start gap-x-1 ">
            <Button fullWidth variant="gradient" size="sm" className="bg-gradient-to-r from-[#2870EA] to-[#1B4AEF] font-semibold text-base">
              <span>Getting Started</span>
            </Button>
          </div>
        </MobileNav>
      </Navbar>
    </div>
  )
}

export default Navbars

// import React from "react";

 
// export function StickyNavbar() {
  
 
//   return (
    
//   );
// }

// import React from 'react'
// import logo from '../assets/logo.png'
// import { Link } from 'react-router-dom'

// const Navbar = () => {
//   return (
//     <div>
//       <div className=' bg-white flex h-[80px] w-full border-1 border-[#DEDFE2] justify-between shadow-md shadow-[#1026490F]  items-center zy'>
//         <div className='ml-[60px]'>
//             <Link to='/'>
//                 <img src={logo} alt='Koinx'
//                 width={94.97}
                // height={20.09}
//                 ></img>
//             </Link> 
//         </div>
//         <div className='flex flex-row gap-8'>
//             <div  className='font-semibold text-base mt-1'> 
//                 
//             </div>
//             <div className='font-semibold text-base mt-1'>
//                 
//             </div>
//             <div className='font-semibold text-base mt-1'>
//                 Resource Center
//             </div>
//             <div className='p-2 bg-gradient-to-r from-[#2870EA] to-[#1B4AEF] rounded-lg gap-2 font-semibold text-base'>
//                 Get Started
//             </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Navbar
