import { useState } from 'react'
import { Link } from 'react-router-dom'
import NavItems from '../NavItems/NavItems'
import './Header.css'

const Header = ({ open, setOpen, active, setActive }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) setActive(true)
        else setActive(false)
    })
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
                            <div className="phone">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header