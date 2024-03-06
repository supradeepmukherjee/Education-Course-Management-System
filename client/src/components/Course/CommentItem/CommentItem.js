import { useState } from 'react'
import { format } from 'timeago.js'
import Comment from '@mui/icons-material/Comment'
import './CommentItem.css'

const CommentItem = ({ setQuesId, ques, ans, setAns, ansHandler }) => {
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
                <span onClick={() => setReplyActive(!replyActive) || setQuesId(ques._id)}>
                    {replyActive ? 'Hide Replies' : (ques.commentReplies.length === 0 ? 'Add Reply' : 'All Replies')}
                </span>
                <Comment />
                <span>
                    {ques.commentReplies.length}
                </span>
            </div>
            {replyActive &&
                <>
                    {ques.commentReplies.map(reply => {
                        <div className="commentItemReplies">
                            <div>
                                <img src={reply.user.chavi} alt="" />
                            </div>
                            <div>
                                <h5>
                                    {reply.user.name}
                                    {/* also put a verified badge if the user is admin using flex */}
                                </h5>
                                <p>
                                    {reply.answer}
                                </p>
                                <small>
                                    {format(reply.createdAt)}
                                </small>
                            </div>
                        </div>
                    })}
                    <>
                        <div className='commentItemAns'>
                            <input type="text" placeholder='Enter your Answer' value={ans} onChange={e => setAns(e.target.value)} />
                            <button type='submit' onClick={ansHandler}>
                                Submit
                            </button>
                        </div>
                        <br />
                    </>
                </>
            }

        </div>
    )
}

export default CommentItem