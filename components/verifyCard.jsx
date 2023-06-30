import React from 'react'

const VerifyCard = () => {
  return (
    <div className='flex flex-col items-center justify-center w-1/2 h-1/2 bg-yellow-600'>
      <form className='flex flex-col gap-8'> 
            <span className='text-xl text-primaryText font-bold'>Verify Card Information</span>
            <select name="cardType" id="card-dropdown" className='w-96 h-16 p-4 rounded-xl'>
              <option value="" disabled selected>Select type of Card</option>
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
            <div>
              <select name="currency" id="card-dropdown">
                <option value="USD">USD</option>
                <option value="AUD">AUD</option>
                <option value="CAD">CAD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
              </select>
              <input type='text' placeholder='Card Amount' required/>
            </div>
            <input type='text' placeholder='Redemption Code' required/>
            <button>Continue</button>
      </form>
      <span>Please Make Sure You Input The Correct Details  </span>
    </div>
  )
}

export default VerifyCard