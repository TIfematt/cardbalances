import React from 'react';
import Image from 'next/image'
import { getFullYear } from '@/utils/utils';

const Footer = () => {
  return (
    <footer className='flex flex-col items-center justify-center gap-8 bg-primary bg-opacity-50' id='contact'>
      <div className='pt-8'>
        <Image
          src='/assets/logo.png'
          width={200}
          height={200}
          alt='logo'
        />
      </div>
      <h3 className='paragraph px-4 sm:px-52'>
        An efficient framework that provides robust verification through the use 
        of a smart algorithm that runs very quickly to provide adequate activation information
      </h3>
      <h3 className='paragraph'><a href='mailto:abdulsamadmoshood@gmail.com'>Contact</a></h3>
      <p className='paragraph pb-12'>&copy; 2019 - {getFullYear()} Cardbalances, All Rights Reserved</p>
  </footer>
  )
}

export default Footer