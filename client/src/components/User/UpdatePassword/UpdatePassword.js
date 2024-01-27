import './UpdatePassword.css'

const UpdatePassword = () => {
    const [data, setData] = useState({
        oldP: '',
        newP: '',
        confirmP: '',
    })
    const submitHandler = async e => {

    }
    const changeHandler = async e => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    return (
        <div className='updatePassword'>
            <h1>
                Update Password
            </h1>
            <div>
                <form onSubmit={submitHandler}>
                    <div className="updatePasswordContainer">
                        <label htmlFor="oldP">
                            Enter Old Password
                        </label>
                        <input type="password" className='input updatePasswordInput' required value={data.oldP} onChange={changeHandler} name='oldP' />
                    </div>
                    <div className="updatePasswordContainer">
                        <label htmlFor="newP">
                            Enter New Password
                        </label>
                        <input type="password" className='input updatePasswordInput' required value={data.newP} onChange={changeHandler} name='newP' />
                    </div>
                    <div className="updatePasswordContainer">
                        <label htmlFor="confirmP">
                            Confirm New Password
                        </label>
                        <input type="password" className='input updatePasswordInput' required value={data.confirmP} onChange={changeHandler} name='newP' />
                        <input type="submit" value="Update Password" required className='updatePasswordBtn' />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdatePassword