import { useState } from 'react'
import { Link } from 'react-router-dom'
import heroImg from '../../../img/hero.png'
import './Hero.css'

const Hero = () => {
    const [input, setInput] = useState('')
    return (
        <div className='hero'>
            <div className=""></div>
            <div className="">
                <img src={heroImg} className='heroImg' alt="" />
            </div>
            <div className="">
                <h2>
                    Secure your Career by Upskilling from our Courses
                </h2>
                <br />
                <p>
                    With 6,00,000+ registered students and 6,000+ courses, we will help you in excelling in your career
                </p>
                <br />
                <br />
                <div className="">
                    <input type="text" className='heroInput'
                        value={input} onChange={e => setInput(e.target.value)} />
                    <div className="heroInputIcon">
                        {/* search icon */}
                    </div>
                </div>
                <br />
                <br />
                <div className="belowHeroInput">
                    <p>
                        6,00,000+ students already trusted us
                        <Link to={'/courses'} style={{ color: '#dc143c' }}>
                            View Courses
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Hero