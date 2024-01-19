import { useState } from 'react'
import { Link } from 'react-router-dom'
import NavItems from '../../Layout/NavItems/NavItems'
import Modal from '../../Modal'
import Login from '../../User/Login/Login'
import SignUp from '../../User/SignUp/SignUp'
import Verification from '../../User/Verification/Verification'
import './Header.css'

const Header = ({ open, setOpen, active, setActive, route, setRoute }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) setActive(true)
        else setActive(false)
    })
    const closeHandler = e => {
        if (e.target.id) setSidebarOpen(false)
    }
    return (
        <div className='header'>
            <div className={active ? '' : ''}>
                <div className="">
                    <div className="">
                        <div className="">
                            <Link to={'/'}>
                                {/* logo */}
                                Skill Mastery
                            </Link>
                        </div>
                        <div className="">
                            <NavItems active={active} isPhone={false} />
                            <div className="phoneSidebarToggle">
                                {/* hamburger only when <800px to setSidebarOpen(!sidebarOpen) 4200 */}
                            </div>
                            {/* user photo only when logged in else icon to setOpen(true) hidden initially but block if>=800px. and href='/profile'*/}
                        </div>
                    </div>
                </div>
                {/* sidebar for phone */}
                {
                    sidebarOpen && (
                        <div onClick={closeHandler} className="phoneSidebar" id='screen'>
                            <div className="">
                                <NavItems active={active} isPhone={true} />
                                {/* user icon to setOpen(true) */}
                                <br />
                                <br />
                                <p>
                                    Copyright &copy; 2023 ECMS
                                </p>
                            </div>
                        </div>
                    )
                }
            </div>
            {
                open &&
                <>
                    {route === 'Login' && <Modal open={open} setOpen={setOpen} active={active} setRoute={setRoute} component={Login} />}
                    {route === 'Signup' && <Modal open={open} setOpen={setOpen} active={active} setRoute={setRoute} component={SignUp} />}
                    {route === 'Verification' && <Modal open={open} setOpen={setOpen} active={active} setRoute={setRoute} component={Verification} />}
                </>
            }
        </div>
    )
}

export default Header