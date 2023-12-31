"use client"
import { HiMenuAlt4, HiX, HiArrowRight } from 'react-icons/hi';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { motion } from 'framer-motion';

const Nav = () => {

  const [toggle, setToggle] = useState(false)
  const [activeItem, setActiveItem] = useState(null);


  return (
      <nav className='flex items-center md:mx-32 ml-4 mt-4 lg:mx-56'>
        <div className=''>
          <Image
            src='/assets/logo_bg.png'
            width={200}
            height={200}
            alt='logo'
          />
        </div>
        {/* Laptop nav */}
        <ul className="hidden lg:flex gap-8 uppercase font-bold relative left-1/4">
          {['home', 'testimonials', 'contact'].map((item) => (
            <li key={`link-${item}`}>
              <div />
              <Link href={`/#${item}`} className='text-primaryText'>{item}</Link>
            </li>
          ))}
        </ul>
            {/* Mobile Navigation */}
        <div className='lg:hidden h-full flex items-center'>
          <HiMenuAlt4  className="absolute right-0 mr-4  w-8 h-8 " onClick={() => setToggle(true) } />
          { toggle && (
            <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.85, ease: 'easeOut' }}
              className='nav-mobile filter drop-shadow-lg'
            >
            <HiX onClick={() => setToggle(false)} className="nav-close md:relative md:right-96"/>
            <ul className='flex flex-col gap-y-7 -ml-1'>
              {['home', 'testimonials', 'contact'].map((item) => (
                <li key={item} className='uppercase'>
                  <a className='text-primaryText' href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <a className="btn w-24 h-12 rounded-lg  font-bold flex items-center justify-center"
              href='#verify'
              >
                Verify Now <HiArrowRight className='relative left-4 btn__arrow'/>
            </a>
            </motion.div>
          ) }
        </div>
      </nav>

  )
}

export default Nav