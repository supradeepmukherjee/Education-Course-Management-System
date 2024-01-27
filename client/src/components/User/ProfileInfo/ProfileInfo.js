import { useState } from 'react'
import Photo from '@mui/icons-material/AddAPhoto';
import './ProfileInfo.css'

const ProfileInfo = ({ user, chavi }) => {
    const [name, setName] = useState(user?.name)
    const chaviHandler = async e => {

    }
    const submitHandler = async e => {

    }
    const inputHandler = async e => {

    }
    return (
        <>
            <div className='profileInfo1'>
                <div className="profileInfo1Container">
                    <img src={chavi} alt="" className='profileInfoImg' />
                    <input type="file" name="chavi" id="chavi" onChange={chaviHandler} accept='image/*' />
                    <label htmlFor="chavi">
                        <div className="profileInfoIcon">
                            <Photo />
                        </div>
                    </label>
                </div>
            </div>
            <br />
            <br />
            <div className="profileInfo2">
                <form onSubmit={submitHandler}>
                    <div className="profileInfo2Container">
                        <div className="">
                            <label>
                                Full Name
                            </label>
                            <input type="text" name="name" id="name" className='input' required value={name} onChange={inputHandler} />
                        </div>
                        <div className="">
                            <label>
                                Email Address
                            </label>
                            <input type="text" className='input' readOnly value={user.email} />
                        </div>
                        <input type="submit" value="Update Name" className='updateNameBtn' />
                    </div>
                </form>
            </div>
        </>
    )
}

export default ProfileInfo