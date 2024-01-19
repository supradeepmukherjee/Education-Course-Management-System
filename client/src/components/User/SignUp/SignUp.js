import { GitHub, Google, Visibility, VisibilityOff } from '@mui/icons-material'
import { useState } from 'react'
import Alert from '../../Layout/Alert/Alert'
import Loader from '../../Layout/Loader/Loader'
import { useDispatch, useSelector } from 'react-redux'
import alert from '../../Layout/Alert/alertFn'
import './SignUp.css'
import { registerUser } from '../../../Actions/User'

const SignUp = ({ setRoute }) => {
    const { loading } = useSelector(state => state.user)
    const [alertVisibility, setAlertVisibility] = useState('hidden')
    const [alertMsg, setAlertMsg] = useState('')
    const [alertType, setAlertType] = useState('')
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        chavi: 'https://res.cloudinary.com/dsjluiazl/image/upload/v1697892418/EcomChavi/profile_i8jybt.png'
    })
    const [visible, setVisible] = useState(false)
    const dispatch = useDispatch()
    const registerInputHandler = e => {
        if (e.target.name === 'chavi') {
            const reader = new FileReader()
            reader.readAsDataURL(e.target.files[0])
            reader.onload = () => {
                if (reader.readyState === 2) setUser({ ...user, [e.target.name]: reader.result })
            }
        }
        else setUser({ ...user, [e.target.name]: e.target.value })
    }
    const handleSubmit = async e => {
        e.preventDefault()
        if (user.name.length < 5) {
            return alert('error', setAlertType, 'Name must be of minimum 5 characters', setAlertMsg, setAlertVisibility, dispatch)
        }
        if (user.password.length < 8) {
            return alert('error', setAlertType, 'Password must be of minimum 8 characters', setAlertMsg, setAlertVisibility, dispatch)
        }
        dispatch(registerUser(user))
        alert('info', setAlertType, 'Please Wait', setAlertMsg, setAlertVisibility, dispatch)
        setRoute('Verification') // if success 
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
                    <input type="text" placeholder='Enter your Full Name' name='name' required value={user.name} onChange={registerInputHandler} className='input' />
                    <input type="email" placeholder='Enter your email' name='email' required value={user.email} onChange={registerInputHandler} className='input' />
                    <div className="password">
                        <input type={visible ? 'text' : "password"} name='password' placeholder='Enter your password' required value={user.password} onChange={registerInputHandler} className='input' />
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