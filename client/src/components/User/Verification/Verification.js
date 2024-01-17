import Alert from '../../Layout/Alert/Alert'
import Loader from '../../Layout/Loader/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { useRef, useState } from 'react'
import Verify from '@mui/icons-material/VerifiedUser';
import './Verification.css'

const Verification = ({ setRoute }) => {
  const [alertVisibility, setAlertVisibility] = useState('hidden')
  const [alertMsg, setAlertMsg] = useState('')
  const [alertType, setAlertType] = useState('')
  const [valid, setValid] = useState(false)
  const [otp, setOtp] = useState({
    0: '',
    1: '',
    2: '',
    3: ''
  })
  // const dispatch = useDispatch()
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)]
  const inputHandler = (i, val) => {
    setOtp({ ...otp, [i]: val })
    if (val === '' && i > 0) inputRefs[i - 1].current.focus() ///
    else if (val.length === 1 && i < 3) inputRefs[i + 1].current.focus()
  }
  const handleVerification = async e => {

  }
  return (
    <>
      {/* {loading ? <Loader /> : <> */}
      <Alert alertVisibility={alertVisibility} alertMsg={alertMsg} alertType={alertType} />
      <div>
        <h1 className='heading'>
          Verify your Account
        </h1>
        <br />
        <div className="verifyIcon">
          <div className="">
            <Verify />
          </div>
        </div>
        <br />
        <br />
        <div className="verify">
          {Object.keys(otp).map((key, i) => <input type='number' key={key} ref={inputRefs[i]} className='verifyInput shake' value={otp[i]} maxLength={1} onChange={e => inputHandler(i, e.target.value)} />)}
          {/* 1:35:30 */}
        </div>
        <br />
        <br />
        <div className="verifyBtn">
          <button onClick={handleVerification} className='submit'>
            Verify OTP
          </button>
        </div>
        <br />
        <h5 className="signUp">
          Go back to Sign In? <span className='verifyBack' onClick={() => setRoute('Login')}>Sign In</span>
        </h5>
      </div>
      {/* </>} */}
    </>
  )
}

export default Verification