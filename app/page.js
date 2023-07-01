import Image from 'next/image'

import Nav from '@/components/Nav';
import VerifyCard from '@/components/VerifyCard';
import Testimonials from '@/components/Testimonials';
import { getFullYear } from '@/utils/utils';

import { IoShieldCheckmarkOutline, IoCloud, 
        IoShieldHalfOutline, IoStarSharp, 
        IoPerson
      } from 'react-icons/io5';
import {  BsBullseye } from 'react-icons/bs';
import { GiBullseye, GiDisintegrate } from 'react-icons/gi';
import { SiFastapi } from 'react-icons/si'
import { GrUpdate } from 'react-icons/gr'


export default function Home() {
  return (
    <>
    <header> 
      <Nav />
      <section className='mt-8 mx-8 lg:mx-32'>
        <div className='md:flex md:flex-col md:items-center md:justify-center lg:flex lg:flex-row lg:justify-center lg:gap-24'>
          <h1 className='text-primaryText text-6xl sm:font-extrabold flex flex-col capitalize text-center sm:max-w-4xl lg:max-w-max lg:-mt-48 sm:ml-16 '>
            Welcome to Cardbalances <span className='text-4xl pt-8 max-w-2xl  lg:max-w-max text-center'> Your Trusted Card Authenticity Verification Tool </span>
          </h1>
          <Image 
            src='/assets/card_brands.png'
            width={450}
            height={600}
            className='mt-8 rounded-xl lg:w-1/2  md:w-full'
          />
        </div>
        <ul className='flex flex-col gap-8 justify-center items-center lg:items-start mt-8 lg:relative lg:-mt-60  lg:ml-32 lg:text-xl'>
          <li className='flex items-center gap-4 text-primaryText filter drop-shadow-lg capitalize'><IoShieldHalfOutline />Verify card authenticity instantly.</li>
          <li className='flex items-center gap-4 text-primaryText filter drop-shadow-lg capitalize'><IoStarSharp />Extensive database for comprehensive verification. </li>
          <li className='flex items-center gap-4 text-primaryText filter drop-shadow-lg capitalize'><IoPerson />User-friendly interface for easy usage.</li>
          <li className='flex items-center gap-4 text-primaryText filter drop-shadow-lg capitalize'><IoShieldCheckmarkOutline />Secure data protection for confidentiality.</li>
        </ul>
      </section>
    </header>
    <main>
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
                      <div className='mt-8 relative z-20 bg-gray-400 bg-opacity-25 filter drop-shadow-lg rounded-full w-12 h-12 flex items-center justify-center'>
                          <GiBullseye className='w-full h-full text-primaryText'/>
                      </div>
                      <h3 className='pt-6 text-lg font-bold font-inter text-primaryText'>Accuracy</h3>
                      <p className='pt-2 max-w-xm text-primary font-satoshi filter drop-shadow-lg'>
                        Our state-of-the-art technology employs advanced algorithms to determine card authenticity
                      </p>
                  </div>
                  <div className='px-4 w-64 h-60 bg-white border-lg shadow-sm'>
                      <div className='mt-8 relative z-20 bg-gray-400 bg-opacity-25 filter drop-shadow-lg rounded-full w-12 h-12 flex items-center justify-center'>
                        <IoShieldHalfOutline className='w-full h-full text-primaryText'/>
                      </div>
                      <h3 className='pt-6 text-lg font-bold font-inter text-primaryText'>Security First</h3>
                      <p className='pt-2 max-w-xm text-primary font-satoshi filter drop-shadow-lg'>
                        Your privacy and data security are our utmost priorities                    
                      </p>
                  </div>
                  <div className='px-4 w-64 h-60 bg-white border-lg shadow-sm'>
                      <div className='mt-8 relative z-20 bg-gray-400 bg-opacity-25 filter drop-shadow-lg rounded-full w-12 h-12 flex items-center justify-center'>
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
                      <div className='mt-8 relative z-20 bg-gray-400 bg-opacity-25 filter drop-shadow-lg rounded-full w-12 h-12 flex items-center justify-center'>
                        <IoPerson className='w-full h-full text-primaryText'/> 
                      </div>
                      <h3 className='pt-6 text-lg font-bold font-inter text-primaryText'>User-Friendly Interface</h3>
                      <p className='pt-2 max-w-xm text-primary font-satoshi filter drop-shadow-lg'>
                        Our user-friendly interface allows you to effortlessly navigate through the website
                      </p>
                  </div>
                  <div className='px-4 w-64 h-60 bg-white border-lg shadow-sm'>
                      <div className='mt-8 relative z-20 bg-gray-400 bg-opacity-25 filter drop-shadow-lg rounded-full w-12 h-12 flex items-center justify-center'>
                        <GiDisintegrate className='w-full h-full text-primaryText'/>
                      </div>
                      <h3 className='pt-6 text-lg font-bold font-inter text-primaryText'>Fully Integrated</h3>
                      <p className='pt-2 max-w-xm text-primary font-satoshi filter drop-shadow-lg'>
                          Skip the follow-ups and back-and -forth. Easily standardize how you collect 
                      </p>
                  </div>
                  <div className='px-4 w-64 h-60 bg-white border-lg shadow-sm'>
                      <div className='mt-8 relative z-20 bg-gray-400 bg-opacity-25 filter drop-shadow-lg rounded-full w-12 h-12 flex items-center justify-center'>
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
          {/* Verify card section */}
      <section className='mt-32 w-screen h-screen bg-primary flex items-center justify-center'>
        <VerifyCard />
      </section>
        {/* How it works */}
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
            />
            <span className='flex text-center w-full  lg:w-96 text-3xl text-primaryText p-8 bg-white border-xl shadow-sm'>
              Within seconds, CardCheckr will generate a clear and concise result indicating
              the card's authenticity. You will receive a verdict of "Verified" for legitimate 
              cards or "Not Verified" for cards that raise suspicion
            </span>
          </div>
        </article>
      </section>
        {/* Testimonial section */}
      <section className='bg-primary w-screen' id='testimonial'>
        <Testimonials />
      </section>
      {/* privacy protection section */}
      <section className='m-20 sm:m-32 flex flex-col items-center justify-center sm:flex-row gap-20'>
        <div className='lg:flex lg:flex-col lg:items-center lg:justify-center'>
          <h1 className='text-primaryText text-6xl sm:font-extrabold capitalize text-center max-w-max filter drop-shadow-lg'>Your Privacy Is Our Priority</h1>
          <p className='flex text-center w-full text-primaryText text-3xl mt-8'>We ensure that your data is well protected against malicious attacks. Our comprehensive security ensures that
            our systems are always up-to date and 100% secured.
          </p>
        </div>
        <div>
          <Image 
            src='/assets/padlock.png'
            width={700}
            height={700}
          />
        </div>
      </section>
    </main>
    <footer className='flex flex-col items-center justify-center gap-8 bg-primary bg-opacity-50'>
      <div className='pt-8'>
        <Image
          src='/assets/logo.png'
          width={200}
          height={200}
        />
      </div>
      <h3 className='paragraph px-4 sm:px-52'>
        An efficient framework that provides robust verification through the use 
        of a smart algorithm that runs very quickly to provide adequate activation information
      </h3>
      <h3 className='paragraph'><a href=''>Contact</a></h3>
      <p className='paragraph pb-12'>&copy; 2019 - {getFullYear()} Cardbalances, All Rights Reserved</p>
    </footer>
  </>
  )
}
