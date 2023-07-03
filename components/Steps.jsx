import React from 'react';
import Image from 'next/image'

const Steps = () => {
  return (
    <section className='mt-24'>
      <h1 className='text-6xl font-bold text-primaryText filter drop-shadow-lg flex justify-center '>
        How It Works
      </h1>
      <p className='capitalize mb-20 text-4xl text-primaryText text-center pt-4 mx-8'> Learn How Cardbalances Works in three easy steps </p>
      <article className='flex flex-col flex-wrap lg:flex-row items-center justify-center gap-20'>
        <div className='flex flex-col gap-8 lg:gap-0 items-center justify-center '>
          <div className='pl-12'>
            <Image 
              src='/assets/look_phone.png'
              width={400}
              height={900}
              alt='brand asset'
            />
          </div>
          <span className='flex text-center w-full  lg:w-96 text-3xl text-primaryText p-8 bg-white border-xl shadow-sm'>
            Start by selecting the card type and entering the relevant details, such as the 
            card number, issuer, and any additional information requested by our system.
          </span>
        </div>
        <div className='flex flex-col gap-8 lg:gap-0 items-center justify-center '>
          <Image 
            src='/assets/verification.png'
            width={340}
            height={240}
            alt='brand asset'
          />
          <span className='-mt-12 flex text-center w-full  lg:w-96 text-3xl text-primaryText p-8 bg-white border-xl shadow-sm'>
            Once you submit the card details, our cutting-edge algorithm will analyze the 
            provided information against our extensive card database. 
          </span>
        </div>
        <div className='flex flex-col gap-8 lg:gap-0 items-center justify-center '>
          <Image 
            src='/assets/man_happy.png'
            width={240}
            height={140}
            alt='brand asset'
          />
          <span className='flex text-center w-full  lg:w-96 text-3xl text-primaryText p-8 bg-white border-xl shadow-sm'>
            Within seconds, CardCheckr will generate a clear and concise result indicating
            the card's authenticity. You will receive a verdict of "Verified" for legitimate 
            cards or "Not Verified" for cards that raise suspicion
          </span>
        </div>
      </article>
  </section>
  )
}

export default Steps