import { useState } from 'react'
import './CourseContentList.css'

const CourseContentList = ({ data, active, setActive, isDemo }) => {
    const [visibleSections, setVisibleSections] = useState(new Set())
    const videoSections = [...new Set(data.map(vid => vid.vidSection))] // select unique video sections
    let totalCount = 0 // total videos from prev sections
    const toggleSection = section => {
        const newVisibleSections = new Set(visibleSections)
        if (newVisibleSections.has(section)) newVisibleSections.delete(section)
        else newVisibleSections.add(section)
        setVisibleSections(newVisibleSections)
    }
    return (
        <div className={`courseContentList ${isDemo && 'courseContentListDemo'}`}>
            {videoSections.map(section => {
                const isVisible = visibleSections.has(section)
                const sectionVideos = data.filter(vid => vid.vidSection === section)
                const sectionVideoCount = sectionVideos.length
                
            })}
        </div>
    )
}

export default CourseContentList