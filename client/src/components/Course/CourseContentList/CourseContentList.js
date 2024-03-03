import { useState } from 'react'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import OndemandVideo from '@mui/icons-material/OndemandVideo'
import './CourseContentList.css'

const CourseContentList = ({ data, activeVid, setActiveVid, isDemo }) => {
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
                const sectionTotalLength = sectionVideos.reduce((total, video) => total + video.vidDuration)
                const sectionStartIndex = totalCount // start of videos in current section
                totalCount += sectionVideoCount // update total count of videos
                const sectionHours = sectionTotalLength / 60
                return (
                    <div className={isDemo ? '' : 'courseContentListVidSection'} key={section}>
                        <div className="courseContentListContainer">
                            <h2>
                                {section}
                            </h2>
                            <button onClick={() => toggleSection(section)}>
                                {isVisible ?
                                    <ExpandLess />
                                    :
                                    <ExpandMore />
                                }
                            </button>
                        </div>
                        <h5>
                            {sectionVideoCount} Lessons
                            {sectionTotalLength < 60 ?
                                sectionTotalLength
                                :
                                sectionHours.toFixed(2)
                            }
                            {sectionTotalLength > 60 ? 'Hours' : 'Minutes'}
                        </h5>
                        <br />
                        {isVisible &&
                            <div className='courseContentListVideos'>
                                {sectionVideos.map((video, i) => {
                                    const vidIndex = sectionStartIndex + i
                                    const contentLength = video.vidDuration / 60
                                    return (
                                        <div className="courseContentListVideo" style={vidIndex === activeVid && { backgroundColor: '#1e293b' }} key={video._id} onClick={() => isDemo ? null : setActiveVid(vidIndex)}>
                                            <div>
                                                <OndemandVideo />
                                                <h1>
                                                    {video.title}
                                                </h1>
                                            </div>
                                            <h5>
                                                {video.vidDuration > 60 ? contentLength.toFixed(2) : video.vidDuration}
                                                {video.vidDuration > 60 ? 'Hours' : 'Minutes'}
                                            </h5>
                                        </div>
                                    )
                                })}
                            </div>
                        }
                    </div>
                )
            })}
        </div>
    )
}

export default CourseContentList