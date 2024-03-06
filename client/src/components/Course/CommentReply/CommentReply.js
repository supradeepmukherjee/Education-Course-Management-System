import { } from 'react'
import CommentItem from '../CommentItem/CommentItem.js'
import './CommentReply.css'

const CommentReply = ({ ans, setAns, ansHandler, setQuesId }) => {
    return (
        <div className='commentReply'>
            {data[activeVid].ques.map(q => <CommentItem key={q._id} setQuesId={setQuesId} ques={q} ans={ans} setAns={setAns} ansHandler={ansHandler} />)}
        </div>
    )
}

export default CommentReply