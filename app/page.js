import Image from 'next/image'
import Nav from '@/components/Nav'

export default function Home() {
  return (
    <>
    <header> 
      <Nav />
      <section className='mt-8 mx-8'>
        <h1 className='text-6xl flex flex-col capitalize text-center'>
          Welcome to Cardbalances <span className='text-4xl pt-4 text-center text-primaryText'> Your Trusted Card Authenticity Verification Tool </span>
        </h1>
        <p>
          Are you concerned about the authenticity of a card? Look no further! Cardbalances
          is your go-to website for verifying the legitimacy of various types of cards. 
          Whether you are a business owner, a card collector, or simply someone who wants 
          to ensure the genuineness of a card, our advanced verification system is here to help you.
        </p>
      </section>

    </header>
    <main>

    </main>
  </>
  )
}
