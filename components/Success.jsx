'use client'

import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Success = () => {

  const router = useRouter()
  return (
    <div className='flex items-center justify-center bg-primary w-screen h-screen bg-opacity-50'>
      <div className='bg-white rounded-lg w-96 h-96'>
        <div className='flex flex-col mt-12 items-center justify-center'>
          <h2 className='text-red-600 text-3xl'>ERROR !</h2>
          <h2 className=' text-3xl'>VERIFICATION ERROR !</h2>
          <div className='border-solid border-2 w-full  '/>
        </div>
        <h2 className='mt-4 text-xl sm:text-3xl flex items-center justify-center'>INVALID GIFT CARD PROVIDED.</h2>
        <div className='flex gap-4 mt-20 mx-4'>
          <Link className='w-full h-full bg-gray-600 text-white p-4 flex items-center justify-center' href='/'>Cancell</Link>
          <button className='w-full h-full bg-blue-600 text-white p-4 flex items-center justify-center' type='button' onClick={() => router.push('#verify')}>Try Again</button>
        </div>
      </div>
    </div>
  )
}

export default Success