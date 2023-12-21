import React from 'react'
import { Link } from 'react-router-dom'
import './NavItems.css'
// dark ----- flex justify-center item-center mx-4
const NavItems = ({ active, isPhone }) => {
    const items = [
        {
            name: 'Home',
            url: '/'
        },
        {
            name: 'Courses',
            url: '/courses'
        },
        {
            name: 'About',
            url: '/about'
        },
        {
            name: 'Policy',
            url: '/policy'
        },
        {
            name: 'FAQ',
            url: '/faq'
        },
    ]
    return (
        <>
            <div className="navItems">
                {items.map((item, i) => {
                    return (
                        <Link to={item.url} key={i}>
                            <span className={
                                active === i
                                    ?
                                    'active'// dark 37a39a
                                    :
                                    'inactive'// dark fff
                            }>
                                {item.name}
                            </span>
                        </Link>
                    )
                })}
            </div>
            {
                isPhone && (
                    <div className="phone">
                        {items.map((item, i) => {
                            return (
                                <Link to={'/'}>
                                    <span className={
                                        active === i
                                            ?
                                            'active phoneItem'// dark 37a39a
                                            :
                                            'inactive phoneItem'// dark fff
                                    }>
                                        {item.name}
                                    </span>
                                </Link>
                            )
                        })}
                    </div>
                )
            }
        </>
    )
}

export default NavItems