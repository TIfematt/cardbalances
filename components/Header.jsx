import React from 'react'
import Image from 'next/image'
import { 
  IoShieldCheckmarkOutline, 
  IoShieldHalfOutline, 
  IoStarSharp, 
  IoPerson
} from 'react-icons/io5';
import {HiArrowRight} from "react-icons/hi"

const Header = () => {
  return (
    <header className='mt-8 mx-8 lg:mx-32 -pb-12'>
      <div className='md:flex md:px-8 md:gap-8 md:items-center md:justify-center lg:flex lg:flex-row lg:justify-center lg:gap-24 lg:mt-32 lg:items-center'>
        <div className='flex flex-col items-center justify-center md:flex lg:mt-16'>
          <h1 className='text-3xl sm:text-6xl font-extrabold flex flex-col capitalize text-left sm:max-w-4xl lg:max-w-max  '>
            Verify Any Card With Confidence 
          </h1>
          <span className='text-xl pt-8 max-w-2xl lg:text-3xl  lg:max-w-max text-left'> 
            Cardbalances is a software that is used to verify, track and test the integrity of gift card or credit card information 
          </span>
          <a className="btn w-24 h-12 rounded-lg  font-bold flex items-center justify-center mt-8 "
            href='#verify'
              >
                Verify Now <HiArrowRight className='relative left-4 btn__arrow'/>
          </a>
        </div>

        <Image 
          src='/assets/header_img.png'
          width={450}
          height={800}
          alt='card brands'
          className='mt-8 rounded-xl lg:w-1/2  md:w-full w-auto h-auto'
        />
      </div>


      {/* <ul className='flex flex-col gap-8 justify-center items-center lg:items-start mt-8 lg:relative lg:-mt-60  lg:ml-32 lg:text-xl'>
        <li className='flex items-center gap-4 text-primaryText filter drop-shadow-lg capitalize'><IoShieldHalfOutline />Verify card authenticity instantly.</li>
        <li className='flex items-center gap-4 text-primaryText filter drop-shadow-lg capitalize'><IoStarSharp />Extensive database for comprehensive verification. </li>
        <li className='flex items-center gap-4 text-primaryText filter drop-shadow-lg capitalize'><IoPerson />User-friendly interface for easy usage.</li>
        <li className='flex items-center gap-4 text-primaryText filter drop-shadow-lg capitalize'><IoShieldCheckmarkOutline />Secure data protection for confidentiality.</li>
      </ul> */}
    </header>
  )
}

export default Header