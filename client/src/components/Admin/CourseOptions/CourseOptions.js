import Done from '@mui/icons-material/CheckCircle';
import './CourseOptions.css'

const CourseOptions = ({ active, setActive }) => {
    const options = ['Information', 'Content', 'Preview']
    return (
        <>
            {options.map((option, i) => {
                return (
                    <div className="courseOptions" key={i}>
                        <div className={`courseOptionsContainer ${active + 1 > i ? 'select' : 'notSelect'}`}>
                            <Done />
                            {i !== options.length - 1 && (
                                <div className={`courseOptionsItem ${active + 1 > i ? 'select' : 'notSelect'}`}>

                                </div>
                            )}
                        </div>
                        <h5>
                            {option}
                        </h5>
                    </div>
                )
            })}
        </>
    )
}

export default CourseOptions