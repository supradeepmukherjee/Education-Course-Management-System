import Delete from '@mui/icons-material/Delete'
import Down from '@mui/icons-material/ArrowDropDown'
import Edit from '@mui/icons-material/Edit'
import AddLink from '@mui/icons-material/AddLink'
import Add from '@mui/icons-material/AddCircle'
import './CourseData.css'

const CourseData = ({ data, setData, active, setActive }) => {
    const [collapsed, setCollapsed] = useState(Array(data.length).fill(false))
    const [section, setSection] = useState(1)
    const toggleCollapse = i => {
        const updatedCollapsed = [...collapsed]
        updatedCollapsed[i] = !updatedCollapsed[i]
        setCollapsed(updatedCollapsed)
    }
    const inputHandler = (name, val) => {
        const updatedData = [...data]
        if (name === 'sec') updatedData[i].vidSection = val
        if (name === 'title') updatedData[i].title = val
        if (name === 'url') updatedData[i].vidUrl = val
        if (name === 'desc') updatedData[i].desc = val
        setData(updatedData)
    }
    const removeLinkHandler = (i, linkIndex) => {
        const updatedData = [...data]
        updatedData[i].links.splice(linkIndex, 1)
        setData(updatedData)
    }
    const linkTitleInputHandler = (i, linkIndex) => {
        const updatedData = [...data]
        updatedData[i].links[linkIndex].url = e.target.value
        setData(updatedData)
    }
    const linkUrlInputHandler = (i, linkIndex) => {
        const updatedData = [...data]
        updatedData[i].links[linkIndex].url = e.target.value
        setData(updatedData)
    }
    const addLinkHandler = i => {
        const updatedData = [...data]
        updatedData[i].links.push({ title: '', url: '' })
        setData(updatedData)
    }
    const addContentHandler = item => {
        if (item.title === '' || item.desc === '' || item.vidUrl === '' || item.links[0].title === '' || item.links[0].url == '') { /* show error */ }
        let newVidSection = ''
        if (data.length > 0) {
            const lastVidSection = data[data.length - 1].vidSection
            if (lastVidSection) newVidSection = lastVidSection
        }
        const newContent = {
            title: '',
            desc: '',
            vidUrl: '',
            vidSection: newVidSection,
            links: [{
                title: '',
                url: ''
            }]
        }
        setData([...data, newContent])
    }
    const addSection = () => {
        if (data[data.length - 1].title === '' || data[data.length - 1].desc === '' || data[data.length - 1].vidUrl === '' || data[data.length - 1].links[0].title === '' || data[data.length - 1].links[0].url === '') { /* show error */ }
        else {
            setSection(section + 1)
            const newContent = {
                title: '',
                desc: '',
                vidUrl: '',
                vidSection: `Section ${section}`,
                links: [{
                    title: '',
                    url: ''
                }]
            }
            setData([...data, newContent])
        }
    }
    const handleOptions = () => {
        if (data[data.length - 1].title === '' || data[data.length - 1].desc === '' || data[data.length - 1].vidUrl === '' || data[data.length - 1].links[0].title === '' || data[data.length - 1].links[0].url === '') { /* show error */ }
        else {
            setActive(active + 1)
            submitHandler()
        }
    }
    const submitHandler = async e => {
        e.preventDefault()
    }
    return (
        <div className='courseData'>
            <form onSubmit={submitHandler}>
                {data.map((item, i) => {
                    const showInput = i === 0 || item.vidSection !== data[i - 1].vidSection
                    return (
                        <>
                            <div className="courseDataContainer" style={showInput ? { marginTop: '2.5rem' } : { marginBottom: '0' }}>
                                {
                                    showInput && (
                                        <>
                                            <div className='sectionInput'>
                                                <input
                                                    type="text"
                                                    className='courseDataInput'
                                                    style={{ width: item.vidSection === '' ? '170px' : 'min-content' }}
                                                    value={item.vidSection}
                                                    onChange={() => inputHandler('sec', e.target.value)}
                                                />
                                                <Edit style={{ cursor: 'pointer' }} />
                                            </div>
                                            <br />
                                        </>
                                    )
                                }
                                <div className="itemTitle">
                                    {
                                        collapsed[i] && item.title && (
                                            <p>
                                                {i + 1}, {item.title}
                                            </p>
                                        )
                                    }
                                    {/* button for collapsed video content */}
                                    <div className="">
                                        <Delete
                                            className='delIcon'
                                            style={{ cursor: i > 0 ? 'pointer' : 'no-drop' }} onClick={() => {
                                                if (i > 0) {
                                                    const updatedData = [...data]
                                                    updatedData.splice(i, 1)
                                                    setData(updatedData)
                                                }
                                            }}
                                        />
                                        <Down style={{ transform: collapsed[i] ? 'rotate(180deg)' : 'rotate(0deg)' }} onClick={() => toggleCollapse(i)} />
                                    </div>
                                </div>
                                {
                                    !collapsed[i] && (
                                        <>
                                            <div style={{ margin: '.75rem 0' }}>
                                                <label>
                                                    Video Title
                                                </label>
                                                <input type="text" className='input' value={item.title} onChange={() => inputHandler('title', e.target.value)} placeholder='Video Title' />
                                            </div>
                                            <div style={{ marginBottom: '.75rem' }}>
                                                <label>
                                                    Video URL
                                                </label>
                                                <input type="text" className='input' value={item.vidUrl} onChange={() => inputHandler('url', e.target.value)} placeholder='Video URL' />
                                            </div>
                                            <div style={{ marginBottom: '.75rem' }}>
                                                <label>
                                                    Video Description
                                                </label>
                                                <textarea rows={8} cols={30} className='input videoDesc' value={item.vidUrl} onChange={() => inputHandler('desc', e.target.value)} placeholder='Video Description' />
                                                <br />
                                            </div>
                                            {
                                                item.links.map((link, index) => {
                                                    return (
                                                        <div className='links'>
                                                            <div>
                                                                <label htmlFor="">
                                                                    Link {index + 1}
                                                                </label>
                                                                <Delete
                                                                    className='delIcon'
                                                                    style={{ cursor: index === 0 ? 'no-drop' : 'pointer' }}
                                                                    onClick={() => index === 0 ? null : removeLinkHandler(i, index)}
                                                                />
                                                            </div>
                                                            <input type="text" className='input' value={link.title} onChange={() => linkTitleInputHandler(i, index)} placeholder='Relevant Link' />
                                                            <input type="url" className='input' style={{ marginTop: '1.5 rem' }} value={link.url} onChange={() => linkUrlInputHandler(i, index)} placeholder='http://linkurl.xyz' />
                                                        </div>
                                                    )
                                                })
                                            }
                                            <br />
                                            <div className="addLink">
                                                <p onClick={() => addLinkHandler(i)}>
                                                    <AddLink style={{ marginRight: '.5rem' }} /> Add Link
                                                </p>
                                            </div>
                                        </>
                                    )
                                }
                                <br />
                                {i === data.length - 1 && (
                                    <p className='addContent' onClick={() => addContentHandler(item)}>
                                        <Add /> Add new Content
                                    </p>
                                )}
                            </div>
                        </>
                    )
                })}
                <br />
                <div className="addSection" onClick={addSection}>
                    <Add /> Add new Section
                </div>
            </form>
            <br />
            <div className="courseDataBtnContainer">
                <div className="courseDataBtn" onClick={() => setActive(active - 1)}>
                    Prev
                </div>
                <div className="courseDataBtn" onClick={handleOptions}>
                    Next
                </div>
            </div>
            <br /><br /><br />
        </div>
    )
}

export default CourseData