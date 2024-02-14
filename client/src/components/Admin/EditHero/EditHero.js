import { useState } from 'react'
import Photo from '@mui/icons-material/InsertPhoto';
import './EditHero.css'

const EditHero = () => {
    const [banner, setBanner] = useState('')
    const [title, setTitle] = useState('')
    const [subtitle, setSubtitle] = useState('')
    const imgHandler = () => {

    }
    return (
        <div className='dashboard'>
            <div className="dashboardSidebar">
                <Sidebar />
            </div>
            <div className="dashboardMain">
                <Header />
                <div className="hero">
                    <div></div>
                    <div>
                        <img src={""} alt="" className="heroImg" />
                        <input id='banner' type="file" accept='image/*' style={{ display: 'none' }} onChange={imgHandler} />
                        <label htmlFor="banner" className='editHeroLabel'>
                            <Photo />
                        </label>
                    </div>
                    <div className="editHeroContainer">
                        <textarea rows='4' value={title} onChange={e => setTitle(e.target.value)} placeholder='Title' className='editHeroTitle'></textarea>
                        <br />
                        <textarea  value={subtitle} onChange={e => setSubtitle(e.target.value)} placeholder='Subtitle' className='editHeroSubtitle'></textarea>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditHero