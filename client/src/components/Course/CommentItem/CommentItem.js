import { useState } from 'react'
import { format } from 'timeago.js'
import Comment from '@mui/icons-material/Comment'
import './CommentItem.css'

const CommentItem = ({ data, activeVid, ques, ans, setAns, ansHandler }) => {
    const [replyActive, setReplyActive] = useState(false)
    return (
        <div className='commentItem'>
            <div>
                <div>
                    <img src={ques.user.chavi} alt="" />
                </div>
                <div className="commentItemContainer">
                    <h5>
                        {ques.user.name}
                    </h5>
                    <p>
                        {ques.comment}
                    </p>
                    <small>
                        {format(ques.createdAt)}
                    </small>
                </div>
            </div>
            <div className="commentItemContainer2">
                <span onClick={() => setReplyActive(!replyActive)}>
                    {replyActive ? 'Hide Replies' : (ques.commentReplies.length === 0 ? 'Add Reply' : 'All Replies')}
                </span>
                <Comment />
                <span>
                    {ques.commentReplies.length}
                </span>
            </div>
            {replyActive && ques.commentReplies.map(reply => {
                <div className="commentItemReplies">
                    <div>
                        <img src={ques.user.chavi} alt="" />
                    </div>
                </div>
            })}
        </div>
    )
}

export default CommentItem