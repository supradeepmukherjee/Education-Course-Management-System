import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div>
                    <div className="footerGrid">
                        <div className="footerContainer">
                            <h3>
                                About
                            </h3>
                            <ul>
                                <li>
                                    <Link to={'/about'}>
                                        Our Story
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/privacy-policy'}>
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/faq'}>
                                        FAQ
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="footerContainer">
                            <h3>
                                Quick Links
                            </h3>
                            <ul>
                                <li>
                                    <Link to={'/courses'}>
                                        Courses
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/profile'}>
                                        My Account
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/course-dashboard'}>
                                        Course Dashboard
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="footerContainer">
                            <h3>
                                Social Links
                            </h3>
                            <ul>
                                <li>
                                    <Link to={'https://youtube.com'}>
                                        Youtube
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'https://github.com/supradeepmukherjee'}>
                                        Github
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'https://www.linkedin.com/in/supradeep-mukherjee/'}>
                                        Linkedin
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className='footerContact'>
                            <h3>
                                Contact Info
                            </h3>
                            <p>
                                Call us: +91-1234567890
                            </p>
                            <p>
                                Address: 1, Main Street, Hyderabad, 500001
                            </p>
                            <p>
                                Mail us: supradeep2004@gmail.com
                            </p>
                        </div>
                    </div>
                    <p>
                        Copyright &copy; 2024 ECMS | Supradeep Mukherjee
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer