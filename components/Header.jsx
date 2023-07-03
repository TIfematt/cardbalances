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
    <header className='mt-8 mx-8 lg:mx-32'>
      <div className='md:flex md:flex-col md:items-center md:justify-center lg:flex lg:flex-row lg:justify-center lg:gap-24'>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-primaryText text-6xl sm:font-extrabold flex flex-col capitalize text-center sm:max-w-4xl lg:max-w-max lg:-mt-48 sm:ml-16 '>
            Welcome to Cardbalances <span className='text-4xl pt-8 max-w-2xl  lg:max-w-max text-center'> Your Trusted Card Authenticity Verification Tool </span>
          </h1>
          <a className="btn w-24 h-12 rounded-lg  font-bold flex items-center justify-center mt-8 lg:ml-8"
            href='#verify'
              >
                Verify Now <HiArrowRight className='relative left-4 btn__arrow'/>
          </a>
        </div>

        <Image 
          src='/assets/card_brands.png'
          width={450}
          height={600}
          alt='card brands'
          className='mt-8 rounded-xl lg:w-1/2  md:w-full'
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