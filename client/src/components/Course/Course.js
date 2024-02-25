import { } from 'react'
import { useParams } from 'react-router-dom'

const Course = () => {
    const [route, setRoute] = useState('Login')
    const [open, setOpen] = useState(false)
    const { id } = useParams()
    // for seo put title 'coursename - ECMS'; in tags, use the tags of the courses(so change it from array to string) and description of your choice(using ai) 
    return (
        <div>

        </div>
    )
}

export default Course