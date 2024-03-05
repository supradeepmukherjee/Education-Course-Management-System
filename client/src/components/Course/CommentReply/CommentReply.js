import { } from 'react'
import CommentItem from '../CommentItem/CommentItem.js'
import './CommentReply.css'

const CommentReply = ({ data, activeVid, ans, setAns, ansHandler, user, setAnsId }) => {
    return (
        <div className='commentReply'>
            {data[activeVid].ques.map(q => <CommentItem key={q._id} data={data} activeVid={activeVid} ques={q} ans={ans} setAns={setAns} ansHandler={ansHandler} />)}
        </div>
    )
}

export default CommentReply