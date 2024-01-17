import { GitHub, Google, Visibility, VisibilityOff } from '@mui/icons-material'
import { useState } from 'react'
import Alert from '../../Layout/Alert/Alert'
import Loader from '../../Layout/Loader/Loader'
import { useDispatch, useSelector } from 'react-redux'
import './SignUp.css'

const SignUp = ({ setRoute }) => {
    // 12033
    // const { loading } = useSelector(state => state.user)
    const [alertVisibility, setAlertVisibility] = useState('hidden')
    const [alertMsg, setAlertMsg] = useState('')
    const [alertType, setAlertType] = useState('')
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [visible, setVisible] = useState(false)
    // const dispatch = useDispatch()
    const handleSubmit = async e => {
        e.preventDefault()
        setRoute('Verification')
    }
    return (
        <>
            {/* {loading ? <Loader /> : <> */}
            <Alert alertVisibility={alertVisibility} alertMsg={alertMsg} alertType={alertType} />
            <div className="login">
                <h1 className='heading'>
                    Sign Up
                </h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Enter your Full Name' required value={name} onChange={e => setName(e.target.value)} className='input' />
                    <input type="email" placeholder='Enter your email' required value={email} onChange={e => setEmail(e.target.value)} className='input' />
                    <div className="password">
                        <input type={visible ? 'text' : "password"} placeholder='Enter your password' required value={password} onChange={e => setPassword(e.target.value)} className='input' />
                        {visible ?
                            <Visibility className='passwordIcon' onClick={() => setVisible(false)} />
                            :
                            <VisibilityOff className='passwordIcon' onClick={() => setVisible(true)} />}
                    </div>
                    <div className="submitBtn">
                        <input type="submit" className='submit' value='Register' />
                    </div>
                    <br />
                    <h5 className="loginAlt">
                        Login with
                    </h5>
                    <div className="loginUsing">
                        <Google />
                        <GitHub />
                    </div>
                    <h5 className="signUp">
                        Already have an account?
                        <span onClick={() => setRoute('Signup')}>
                            Sign In
                        </span>
                    </h5>
                </form>
                <br />

            </div>
            {/* </>} */}
        </>
    )
}

export default SignUp