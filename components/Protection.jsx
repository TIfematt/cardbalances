import React from 'react'
import Image from 'next/image'
import {HiArrowRight} from 'react-icons/hi'
import Link from 'next/link'

const Protection = () => {
  return (
    <section className='m-20 sm:m-32 flex flex-col items-center justify-center sm:flex-row gap-20'>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-primaryText text-6xl sm:font-extrabold capitalize text-center max-w-max filter drop-shadow-lg'>Your Privacy Is Our Priority</h1>
          <p className='flex text-center w-full text-primaryText text-3xl mt-8'>We ensure that your data is well protected against malicious attacks. Our comprehensive security ensures that
            our systems are always up-to date and 100% secured.
          </p>
          <a className="btn w-24 h-12 rounded-lg  font-bold flex items-center justify-center mt-8"
            href='#verify'
              >
                Verify Now <HiArrowRight className='relative left-4 btn__arrow'/>
          </a>
        </div>
        <div>
          <Image 
            src='/assets/padlock.png'
            width={700}
            height={700}
            alt='brand asset'
          />
        </div>
      </section>
  )
}

export default Protection