import React from 'react'
import Card from '../components/Card'
import image1 from '../assets/image-1.jpg'
import image2 from '../assets/image-2.jpg'

const About = () => {
  return (
    <div className='bg-white p-4  md:w-[70%]'>
      <div className='text-justify '>
        <div className='w-[100%]  '>
            <p className=' flex mr-auto font-semibold text-2xl text-[#0B1426]'>
                About Bitcoin
            </p>
        </div>
        <div className='gap-[10px] flex flex-col items-start  '>
            <div >
                <p className='text-[#0B1426] font-bold text-lg'>
                    What is Bitcoin
                </p>
            </div>
            <div className='border-b-[#C9CFDD99] border-t-transparent border-s-transparent border-e-transparent border pb-4'>
                <p className='text-[#3E424A] font-medium text-base'>
                    Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.
                </p>
            </div>
        </div>
        <div className='flex flex-col items-start gap-3 mt-4 border-b-[#C9CFDD99] border-t-transparent border-s-transparent border-e-transparent border pb-4'>
            <div>
                <p className='text-[#0B1426] font-bold text-lg '>
                    Lorem ipsum dolor sit amet
                </p>
            </div>
            <div className='text-[#3E424A] font-medium text-base flex flex-col gap-3'>
                <p className=''>
                    Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.  
                </p>
                <p>
                    Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio cursus phasellus velit in senectus enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent massa turpis a. Integer dignissim augue viverra nulla et quis lobortis phasellus. Integer pellentesque enim convallis ultricies at.
                </p>
                <p>
                    Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui
                </p>
            </div>
        </div>

        <div>
            <div >
                <p className='font-semibold text-2xl text-[#0B1426] my-1'>
                    Already Holding Bitcoin
                </p>
            </div>
            <div className='flex flex-row border-t-transparent border-s-transparent border-e-transparent border pb-1 mb-1 max-md:flex-col '>
                <div>
                    <Card className="flex m-4 flex-row rounded-lg bg-gradient-to-r from-[#79F1A4] to-[#0E5CAD]" title={"Calculate your Profits"} image={image1}/>
                </div>
                <div>
                    <Card className="flex m-4 flex-row rounded-lg bg-gradient-to-r from-[#FF9865] to-[#EF3031]" title={"Calculate your tax liability"} image={image2}/>
                </div>
            </div>
            <div className='text-[#3E424A] font-medium text-base'>
                Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
