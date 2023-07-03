import React from 'react';
import { 
  IoShieldHalfOutline, 
  IoPerson
} from 'react-icons/io5';
import { GiBullseye, GiDisintegrate } from 'react-icons/gi';
import { SiFastapi } from 'react-icons/si'
import { GrUpdate } from 'react-icons/gr'


const Offer = () => {
  return (
    <section> 
          <article className='mt-16 lg:mt-24'>
            <div className='flex items-center justify-center '>
              <span className='text-6xl font-bold text-primaryText filter drop-shadow-lg'>What We Offer</span>
            </div>
            {/* card section */}
            <section className='mt-16 flex flex-col gap-12 sm:flex  sm:gap-12 sm:flex-col items-center justify-center'>
              {/* row one */}
              <div className='flex flex-col sm:flex-row gap-12 sm:flex sm:gap-8'>
                  <div className='px-4 w-64 h-60 bg-white border-lg shadow-sm'>
                      <div className='mt-8 relative  bg-gray-400 bg-opacity-25 filter drop-shadow-lg rounded-full w-12 h-12 flex items-center justify-center'>
                          <GiBullseye className='w-full h-full text-primaryText'/>
                      </div>
                      <h3 className='pt-6 text-lg font-bold font-inter text-primaryText'>Accuracy</h3>
                      <p className='pt-2 max-w-xm text-primary font-satoshi filter drop-shadow-lg'>
                        Our state-of-the-art technology employs advanced algorithms to determine card authenticity
                      </p>
                  </div>
                  <div className='px-4 w-64 h-60 bg-white border-lg shadow-sm'>
                      <div className='mt-8 relative bg-gray-400 bg-opacity-25 filter drop-shadow-lg rounded-full w-12 h-12 flex items-center justify-center'>
                        <IoShieldHalfOutline className='w-full h-full text-primaryText'/>
                      </div>
                      <h3 className='pt-6 text-lg font-bold font-inter text-primaryText'>Security First</h3>
                      <p className='pt-2 max-w-xm text-primary font-satoshi filter drop-shadow-lg'>
                        Your privacy and data security are our utmost priorities                    
                      </p>
                  </div>
                  <div className='px-4 w-64 h-60 bg-white border-lg shadow-sm'>
                      <div className='mt-8 relative  bg-gray-400 bg-opacity-25 filter drop-shadow-lg rounded-full w-12 h-12 flex items-center justify-center'>
                        <SiFastapi className='w-full h-full text-primaryText'/>
                      </div>
                      <h3 className='pt-6 text-lg font-bold font-inter text-primaryText'>Swift Process</h3>
                      <p className='pt-2 max-w-xm text-primary font-satoshi filter drop-shadow-lg'>
                        Time is of the essence, and we value your precious minutes.                  
                      </p>
                  </div>
              </div>
              {/* row two */}
              <div className='flex flex-col sm:flex-row gap-12 sm:flex sm:gap-8'>
                  <div className='px-4 w-64 h-60 bg-white border-lg shadow-sm'>
                      <div className='mt-8 relative bg-gray-400 bg-opacity-25 filter drop-shadow-lg rounded-full w-12 h-12 flex items-center justify-center'>
                        <IoPerson className='w-full h-full text-primaryText'/> 
                      </div>
                      <h3 className='pt-6 text-lg font-bold font-inter text-primaryText'>User-Friendly Interface</h3>
                      <p className='pt-2 max-w-xm text-primary font-satoshi filter drop-shadow-lg'>
                        Our user-friendly interface allows you to effortlessly navigate through the website
                      </p>
                  </div>
                  <div className='px-4 w-64 h-60 bg-white border-lg shadow-sm'>
                      <div className='mt-8 relative bg-gray-400 bg-opacity-25 filter drop-shadow-lg rounded-full w-12 h-12 flex items-center justify-center'>
                        <GiDisintegrate className='w-full h-full text-primaryText'/>
                      </div>
                      <h3 className='pt-6 text-lg font-bold font-inter text-primaryText'>Fully Integrated</h3>
                      <p className='pt-2 max-w-xm text-primary font-satoshi filter drop-shadow-lg'>
                          Skip the follow-ups and back-and -forth. Easily standardize how you collect 
                      </p>
                  </div>
                  <div className='px-4 w-64 h-60 bg-white border-lg shadow-sm'>
                      <div className='mt-8 relative bg-gray-400 bg-opacity-25 filter drop-shadow-lg rounded-full w-12 h-12 flex items-center justify-center'>
                        <GrUpdate className='w-full h-full text-primaryText'/>
                      </div>
                      <h3 className='pt-6 text-lg font-bold font-inter text-primaryText'>Regular Update</h3>
                      <p className='pt-2 max-w-xm text-primary font-satoshi filter drop-shadow-lg'>
                          Our systems are updated Regularly to ensure accurate data representation
                      </p>
                  </div>
              </div>
            </section>
          </article>
      </section>
  )
}

export default Offer