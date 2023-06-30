import Image from 'next/image'
import Nav from '@/components/Nav';
import { IoShieldCheckmarkOutline, IoCloud, IoShieldHalfOutline, IoStarSharp, IoPerson} from 'react-icons/io5';
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
        <section className='mt-32'>
          <div> 
            <form> </form>
          </div>
        </section>
    </main>
  </>
  )
}
