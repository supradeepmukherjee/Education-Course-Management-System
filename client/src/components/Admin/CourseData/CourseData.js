import './CourseData.css'

const CourseData = ({ data, setData, active, setActive }) => {
    const [collapsed, setCollapsed] = useState(Array(data.length).fill(false))
    const [section, setSection] = useState(1)
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
                                <div className="">
                                    {
                                        collapsed[i]
                                    }
                                </div>
                            </div>
                        </>
                    )
                })}
            </form>
        </div>
    )
}

export default CourseData