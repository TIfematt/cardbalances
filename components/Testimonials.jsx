import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from 'react-icons/bi';


const Testimonials = () => {
  const cards = (props) => {
    return(
      <div className="p-8 w-96 h-96 bg-white bg-opacity-50 filter drop-shadow-lg rounded-2xl  ">
        <BiSolidQuoteAltLeft className=''/>
        <h3 className='capitalize py-4 text-primaryText text-4xl text-center font-bold leading-snug md:leading-none lg:leading-snug tracking-wider font-satoshi'>
          {props.comment}
        </h3>
        <BiSolidQuoteAltRight className='relative left-72 md:left-48 lg:left-72'/>
        <div className='rounded-fill py-3 px-6 mt-8'>
          <h3>{props.name}</h3>
          <h3>{props.date}</h3>
        </div>
      </div>
    )
  }
  return (
    <div className='mx-4 sm:m-32 pt-32 md:pt-20 lg:pt-32 pb-20'> 
      <div className='flex flex-col items-center justify-center'>
        <h1 className='heading'>Testimonials</h1>
        <h3 className='paragraph py-4'>What People Are Saying</h3>
      </div>
      {/* <div className='flex flex-col items-center justify-center sm:flex-row gap-16 sm:20 mt-20 md:mt-12 lg:mt-20 '>
        {cards ({
          comment: 'Effectively fast and Just as was said, powerful',
          name: 'Mike Featers',
          date:'15-Jan-21'
        })}
        {cards ({
          comment: 'extremely reliable, and very helpful',
          name: 'Salisbury County',
          date:'21-May-21'
        })}
        {cards ({
          comment: 'I was very impressed with the speed',
          name: 'Parachute Greeley Shell',
          date:'4-June-22'
        })}
      </div>
      <div className='flex flex-col items-center justify-center sm:flex-row gap-16 sm:20 mt-20 mb-12'>
        {cards ({
            comment: 'Best Platform, Amazing checker',
            name: 'Jaime Crux',
            date:'30-Oct-22'
        })}
        {cards ({
          comment: 'No doubt! Accuracy and fast speed',
          name: 'Tood Burnley',
          date:'11-Dec-22'
        })}
        {cards ({
          comment: 'Effectively fast and Just as was said, powerful',
          name: 'Jose Cruekic',
          date:'19-Feb-23'
        })}
      </div> */}

      <div className=''>
        <BiSolidQuoteAltLeft className='w-16 h-16 sm:w-24 sm:h-24  text-primaryText'/>
        <h3 className='p-8 text-xl sm:px-52 sm:text-3xl text-center text-white '>
          We have partnered with CardCheckers for several years and have found them 
          to be extremely reliable, responsive, and helpful. Their service provides a 
          robust framework that provides rapid verification through the use of a smart 
          algorithm that runs very quickly to provide adequate information.
        </h3>
        <BiSolidQuoteAltRight className='w-16 h-16 sm:w-24 sm:h-24  text-primaryText relative left-80'/>
        <div className='text-primaryText text-xl font-bold -mt-16 ml-12'>
          <h3>Tohd Burnley </h3>
          <h3>11-Dec-22</h3>
        </div>
      </div>
      <div className=' line '/>
      <div className='mt-20'>
        <BiSolidQuoteAltLeft className='w-16 h-16 sm:w-24 sm:h-24  text-primaryText'/>
        <h3 className='p-8 text-xl sm:px-52 sm:text-3xl text-center text-white '>
          Your service is extremely fast and efficient - both in terms of the speed of processing, and communication. 
          I was very impressed with how quickly you were able to verify our information, especially since we were new 
          customers. We will definitely be using your services again!
        </h3>
        <BiSolidQuoteAltRight className='w-16 h-16 sm:w-24 sm:h-24  text-primaryText relative left-80'/>
        <div className='text-primaryText text-xl font-bold -mt-16 ml-12'>
          <h3>Jese Leos </h3>
          <h3>2-March-23</h3>
        </div>
      </div>
    </div>
  )
}


export default Testimonials