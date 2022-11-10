import React, { useState, useRef, useEffect, useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import '../css/PaymentStatus.css'
import succedImg from '../Images/accept.png'
import errorImg from '../Images/cross.png'
import { useStripe, Elements, useElements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { CircularProgress } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const stripePromise = loadStripe('pk_test_51K1RFYSFF9tufBscx6JJluLpsjsB64WjQJPL4wV61cc7Fk5m59dVuJlncJ3xGx8jFJ3rrwCJ2WOXsBZMo7zqh3un00xjOhWuUv');

function PaymentStatus() {

  const navigate = useNavigate();
  const location = useLocation();

  const clientSecret = new URLSearchParams(location.search).get("payment_intent_client_secret")


  useEffect(() => {


    if (clientSecret == null) {
      navigate('/');
    }


  })



  return (
    <Elements options={{ clientSecret: clientSecret }} stripe={stripePromise}>
      <StatusRender clientSecret={clientSecret} />
    </Elements>
  )

}


const StatusRender = ({ clientSecret }) => {
  const stripe = useStripe();


  const [PaymentStatusImg, setPaymentStatusImg] = useState();
  const [PaymentStatusMsg, setPaymentStatusMsg] = useState();
  const BtnRef = useRef();
  const PaymentStatusTitleRef = useRef();


  useEffect(() => {

    if (!stripe) {
      PaymentStatusTitleRef.current.style = "color:grey"
      return;


    }




  }, [])


  if (stripe != null) {
    stripe
      .retrievePaymentIntent(clientSecret)
      .then(({ paymentIntent }) => {
        switch (paymentIntent.status) {
          case 'succeeded':
            PaymentStatusTitleRef.current.style = "color: rgb(75,174,79)"
            BtnRef.current.style = "background-color:rgb(75,174,79)"
            setPaymentStatusMsg("Payment Recived. Thank You")
            setPaymentStatusImg(succedImg)

            break;

          case 'processing':
            alert("Payment processing. We'll update you when payment is received.");
            break;

          case 'requires_payment_method':
            setPaymentStatusImg(errorImg)
            PaymentStatusTitleRef.current.style = "color:rgb(234,45,63)"
            PaymentStatusMsg("Payment failed. Please try another payment method.")
            break;

          default:
            PaymentStatusTitleRef.current.style = "color:rgb(234,45,63)"
            PaymentStatusMsg("Something went wrong.")
            BtnRef.current.style = "backgroundColor:rgb(234,45,63)"
            setPaymentStatusImg(errorImg)
            break;
        }

      }).catch(err => console.log(err))




  }


  return (
    { PaymentStatusMsg } ?
      <div className='PaymentStatusContainer'>
        <h2 ref={PaymentStatusTitleRef}>Payment Status</h2>
        <div className='PaymentStatusCard'>
          {
            stripe == null ? <CircularProgress /> :
              <>
                <img src={PaymentStatusImg} alt="" srcset="" />
                <h3>{PaymentStatusMsg}</h3>
                <Link style={{ width: '30%' }} to='/'>
                  <button ref={BtnRef}>Back</button>
                </Link>

              </>
          }


        </div>

      </div>
      :
      <div className='PaymentStatusContainer'>
        <h2 ref={PaymentStatusTitleRef}>Payment Status</h2>
        <div className='PaymentStatusCard'>

          <CircularProgress />


        </div>

      </div>

  )
}

export default PaymentStatus