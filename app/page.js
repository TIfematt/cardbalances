import Image from 'next/image'
import Nav from '@/components/Nav';
import {IoShieldCheckmarkOutline, IoCloud, IoShieldHalfOutline, IoStarSharp, IoPerson} from 'react-icons/io5'


export default function Home() {
  return (
    <>
    <header> 
      <Nav />
      <section className='mt-8 mx-8 '>
        <div className='sm:flex sm:justify-center  sm:gap-32'>
          <h1 className='text-6xl sm:text-6xl sm:font-extrabold flex flex-col capitalize text-center sm:max-w-4xl sm:mt-32 sm:ml-16'>
            Welcome to Cardbalances <span className='text-4xl pt-8 max-w-2xl text-center text-primaryText'> Your Trusted Card Authenticity Verification Tool </span>
          </h1>
          <Image 
            src='/assets/couples_card.jpg'
            width={450}
            height={600}
            className='mt-8 rounded-xl sm:w-1/2'
          />
        </div>
        {/* <p className='sm:absolute sm:text-6xl top-3/4 max-w-6xl text-center'>
          Are you concerned about the authenticity of a card? Look no further! Cardbalances
          is your go-to website for verifying the legitimacy of various types of cards. 
          Whether you are a business owner, a card collector, or simply someone who wants 
          to ensure the genuineness of a card, our advanced verification system is here to help you.
        </p> */}
        <ul className='flex flex-col gap-8 mx-8 mt-8 sm:relative sm:-top-72 sm:ml-16'>
          <li className='flex items-center gap-4 text-primaryText filter drop-shadow-lg capitalize'><IoShieldHalfOutline />Authenticity verification: Determine if cards are genuine or counterfeit using advanced algorithms.</li>
          <li className='flex items-center gap-4 text-primaryText filter drop-shadow-lg capitalize'><IoCloud />Comprehensive database: Compare provided details against an extensive collection of legitimate cards.</li>
          <li className='flex items-center gap-4 text-primaryText filter drop-shadow-lg capitalize'><IoStarSharp />Instant results: Receive a clear verdict within seconds of card submission. </li>
          <li className='flex items-center gap-4 text-primaryText filter drop-shadow-lg capitalize'><IoPerson />User-friendly interface: Easy input and navigation for a seamless verification process.</li>
          <li className='flex items-center gap-4 text-primaryText filter drop-shadow-lg capitalize'><IoShieldCheckmarkOutline />Data security: Protect user information with industry-standard encryption protocols.</li>
        </ul>
      </section>

    </header>
    <main>

    </main>
  </>
  )
}
