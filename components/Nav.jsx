"use client"
import { HiMenuAlt4, HiX, HiArrowRight } from 'react-icons/hi';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Nav = () => {

  const [toggle, setToggle] = useState(false)

  return (

      <nav className='flex items-center md:mx-32 ml-4 mt-4'>
        <div className=''>
          <Image
            src='/assets/logo.png'
            width={200}
            height={200}
          />
        </div>
        {/* Laptop nav */}
        <ul className="hidden md:flex gap-8 uppercase font-bold relative left-1/4">
          {['home', 'Testimonials', 'contact'].map((item) => (
            <li key={`link-${item}`}>
              <div />
              <a href={`#${item}`} className='text-primaryText'>{item}</a>
            </li>
          ))}
        </ul>
            {/* Mobile Navigation */}
        <div className='sm:hidden h-full flex items-center'>
          <HiMenuAlt4  className="absolute right-0  w-8 h-8" onClick={() => setToggle(true) } />
          { toggle && (
            <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.85, ease: 'easeOut' }}
              className='nav-mobile filter drop-shadow-lg'
            >
            <HiX onClick={() => setToggle(false)} className="nav-close"/>
            <ul className='flex flex-col gap-y-7 -ml-1'>
              {['home', 'Testimonials', 'contact'].map((item) => (
                <li key={item} className='uppercase'>
                  <a className='text-primaryText' href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <button className="btn w-24 h-12 rounded-lg  font-bold flex items-center justify-center"
              >
                Verify Now <HiArrowRight className='relative left-4 btn__arrow'/>
            </button>
            </motion.div>
          ) }
        </div>
      </nav>

  )
}

export default Nav