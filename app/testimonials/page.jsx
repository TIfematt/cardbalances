import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from 'react-icons/bi';


const Testimonials = () => {
  return (
    <section className='bg-primary w-screen'>
      <div className='mx-4 sm:m-32 pt-20 md:pt-20 lg:pt-32 pb-20'> 
        <div className='flex flex-col items-center justify-center'>
          <h1 className='heading'>Testimonials</h1>
          <h3 className='paragraph py-4'>What People Are Saying</h3>
        </div>
        <div className=''>
          <BiSolidQuoteAltLeft className='w-16 h-16 sm:w-24 sm:h-24  text-primaryText lg:relative lg:left-32 lg:top-8'/>
          <h3 className='p-8 text-xl sm:px-52 sm:text-3xl text-center text-white '>
            We have partnered with CardCheckers for several years and have found them 
            to be extremely reliable, responsive, and helpful. Their service provides a 
            robust framework that provides rapid verification through the use of a smart 
            algorithm that runs very quickly to provide adequate information.
          </h3>
          <BiSolidQuoteAltRight className='w-16 h-16 sm:w-24 sm:h-24  text-primaryText relative left-80 md:left-120 lg:left-125'/>
          <div className='text-primaryText text-xl font-bold -mt-16 ml-12'>
            <h3>Tohd Burnley </h3>
            <h3>11-Dec-22</h3>
          </div>
        </div>
        <div className=' line '/>
        <div className='mt-20'>
          <BiSolidQuoteAltLeft className='w-16 h-16 sm:w-24 sm:h-24  text-primaryText lg:relative lg:left-32 lg:top-8'/>
          <h3 className='p-8 text-xl sm:px-52 sm:text-3xl text-center text-white '>
            Your service is extremely fast and efficient - both in terms of the speed of processing, and communication. 
            I was very impressed with how quickly you were able to verify our information, especially since we were new 
            customers. We will definitely be using your services again!
          </h3>
          <BiSolidQuoteAltRight className='w-16 h-16 sm:w-24 sm:h-24  text-primaryText relative left-80 md:left-120 lg:left-125'/>
          <div className='text-primaryText text-xl font-bold -mt-16 ml-12'>
            <h3>Jese Leos </h3>
            <h3>2-March-23</h3>
          </div>
        </div>
      </div>
    </section>
  )
}


export default Testimonials