import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import io from 'socket.io-client'
import { LinkAuthenticationElement, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import './CheckoutForm.css'

const socket = io('/')
const CheckoutForm = ({ setOpen, course, user }) => {
  const stripe = useStripe()
  const elements = useElements()
  const [msg, setMsg] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
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
    if ('order has been created') {
      socket.emit('notification', {
        title: 'New Order',
        msg: `${user.name} has bought course: ${course.name}`,
        user: user._id
      })
      navigate(`/access-course/${course._id}`)
    }
  }, [course._id, course.name, navigate, user._id, user.name])
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