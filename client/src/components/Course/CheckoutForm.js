import { useState } from 'react'
import { LinkAuthenticationElement, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import './CheckoutForm.css'

const CheckoutForm = ({ setOpen, course }) => {
  const stripe = useStripe()
  const elements = useElements()
  const [msg, setMsg] = useState('')
  const [loading, setLoading] = useState(false)
  // use create order action and loadUser action 
  const submitHandler = async e => {
    e.preventDefault()
    if (!stripe || !elements) return
    setLoading(true)
    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      redirect: 'if_required'
    })
    if (error) {
      setMsg(error.message)
      setLoading(false)
    } else if (paymentIntent.status === 'succeeded') {
      setLoading(false)
      // create order action here and send the payment intent as payment info
    }
  }
  useEffect(() => {

  }, [])
  return (
    <form id='payment-form' onSubmit={submitHandler}>
      <LinkAuthenticationElement id='link-authentication-element' />
      <PaymentElement id='payment-element' />
      <button disabled={!stripe || !elements || loading} id='submit'>
        <span id='button-text' className='submit'>
          {loading ? 'Please Wait' : 'Pay Now'}
        </span>
      </button>
      {msg &&
        <div id="payment-message">
          {msg}
        </div>
      }
    </form>
  )
}

export default CheckoutForm