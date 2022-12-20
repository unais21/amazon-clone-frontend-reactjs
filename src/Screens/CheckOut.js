
import React, { useState } from 'react'
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { Stripe, loadStripe, } from '@stripe/stripe-js'
import { useLocation } from 'react-router-dom'
import '../css/CheckOut.css'
import { CircularProgress, Snackbar, Alert } from '@mui/material'

const stripePromise = loadStripe('pk_test_51K1RFYSFF9tufBscx6JJluLpsjsB64WjQJPL4wV61cc7Fk5m59dVuJlncJ3xGx8jFJ3rrwCJ2WOXsBZMo7zqh3un00xjOhWuUv');

function CheckOut() {



  const location = useLocation();


  const clientSecret = location.state.clientSecret;


  return (

    <Elements options={{ clientSecret: clientSecret }} stripe={stripePromise}>
      <Payment clientSecret={clientSecret} />
    </Elements>

  )
}


function Payment({ clientSecret }) {
  const [isProcessing, setIsProcessing] = useState(false)
  const [showSnck, setShowSnck] = useState(false)
  const [SnckMsg, setSnckMsg] = useState();


  const stripe = useStripe();
  const elements = useElements();

  const handleClose = ()=>{
    setShowSnck(false);
  
  }


  const handlePayment = async (e) => {

    setIsProcessing(true);

    e.preventDefault()


    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: 'https://amazon-clone32.vercel.app/payment_status',


      }

    })

    if (error) {
      setShowSnck(true);
      setSnckMsg(error.message)
      setIsProcessing(false);
    }
    setIsProcessing(false);




  }


  return (
    <form onSubmit={handlePayment}>
      <h1>Procced Payment</h1>

      {
        showSnck ?
        <Snackbar  open={showSnck} sx={{width:'50%'}} autoHideDuration={6000} onClose={handleClose} >
        <Alert severity="error" onClose={handleClose} sx={{ width: '100%',backgroundColor:'error.main',color:'white',fill:'white'}}>
          {SnckMsg}
        </Alert>
      </Snackbar> 
      :
      ''

      }
     
      <div className='paymentContainer'>
        {stripe != null ?
          <>
            <PaymentElement />
            <button disabled={isProcessing || !stripe} type='submit' >
              {isProcessing || !stripe ?
                 <CircularProgress sx={{color:'white'}} size={20} />
        
                :
                'Procced'

              }</button>

          </>

          :
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <CircularProgress />
          </div>


        }


      </div>
    </form>
  )


}

export default CheckOut;