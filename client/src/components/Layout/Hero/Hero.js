import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import heroImg from '../../../img/hero.png'
import './Hero.css'

const Hero = () => {
    // show hero img,banner dynamically
    const [search, setSearch] = useState('')
    const navigate = useNavigate()
    const searchHandler = async e => {
        if (search === '') return
        navigate(`/courses?name=${search}`)
    }
    return (
        <div className='hero'>
            <div></div>
            <div>
                <img src={heroImg} className='heroImg' alt="" />
            </div>
            <div className="">
                <h2>
                    {/* banner title */}
                    Secure your Career by Upskilling from our Courses
                </h2>
                <br />
                <p>
                    {/* banner subtitle */}
                    With 6,00,000+ registered students and 6,000+ courses, we will help you in excelling in your career
                </p>
                <br />
                <br />
                <div className="">
                    <input type="text" className='heroInput'
                        value={search} onChange={e => setSearch(e.target.value)} />
                    <div className="heroInputIcon" onClick={searchHandler}>
                        {/* search icon */}
                    </div>
                </div>
                <br />
                <br />
                <div className="belowHeroInput">
                    <p>
                        6,00,000+ students already trusted us
                        <Link to={'/view-courses'} style={{ color: '#dc143c' }}>
                            View Courses
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Hero