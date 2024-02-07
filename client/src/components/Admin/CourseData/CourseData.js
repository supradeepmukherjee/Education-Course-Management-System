import Delete from '@mui/icons-material/Delete'
import Down from '@mui/icons-material/ArrowDropDown'
import Edit from '@mui/icons-material/Edit';
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
                                <div className="">
                                    {
                                        collapsed[i] ? (
                                            <>
                                                {item.title ? (
                                                    <p>
                                                        {i + 1}, {item.title}
                                                    </p>
                                                ) : <></>}
                                            </>
                                        ) : <></>
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
                                                <br /><br /><br />
                                            </div>
                                            {
                                                item.links.map((link, i) => {
                                                    return (
                                                        <div className='links'>
                                                            <div>
                                                                <label htmlFor="">
                                                                    Link {i + 1}
                                                                </label>
                                                                <Delete
                                                                    className='delIcon'
                                                                    style={{ cursor: i === 0 ? 'no-drop' : 'pointer' }}
                                                                    onClick={}
                                                                />
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </>
                                    )
                                }
                            </div>
                        </>
                    )
                })}
            </form>
        </div>
    )
}

export default CourseData