import { useState } from 'react'
import Left from '@mui/icons-material/ChevronLeft'
import Right from '@mui/icons-material/ChevronRight'
import './CourseMedia.css'

const CourseMedia = ({ data, id, activeVid, setActiveVid }) => {
    const [activeBar, setActiveBar] = useState(0)
    return (
        <div className='courseMedia'>
            {/* play the video here */}
            <div className='courseMediaContainer1'>
                <div
                    className={`submit ${activeVid === 0 && 'courseMediaActive'}`}
                    onClick={() => setActiveVid(activeVid === 0 ? 0 : activeVid - 1)}
                >
                    <Left /> Previous Topic
                </div>
                <div
                    className={`submit ${activeVid === data.length - 1 && 'courseMediaActive'}`}
                    onClick={() => setActiveVid(
                        activeVid === data.length - 1 ? activeVid : activeVid + 1
                    )}
                >
                    Next Topic <Right />
                </div>
            </div>
            <h1 className='courseMediah1'>
                {data[activeVid].title}
            </h1>
            <br />
            <div className="courseMediaContainer2">
                {['Overview', 'Resources', 'Q&A', 'Reviews'].map((text, i) => {
                    <h5 key={i} className={`courseMediah5 ${activeBar === index ? 'courseMediah5Active' : ''}`} onClick={() => setActiveBar(i)}>
                        {text}
                    </h5>
                })}
            </div>
            <br />
            {activeBar === 0 &&
                <p className='courseMediap'>
                    {data[activeVid].desc}
                </p>}
            {activeBar === 1 &&
                data[activeVid].links.map((link, i) => {
                    <div className='courseMediaLinks'>
                        <h2>
                            {link.title}:
                        </h2>
                        <a href={link.url}>
                            {link.url}
                        </a>
                    </div>
                })}
        </div>
    )
}

export default CourseMedia