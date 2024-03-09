import { useState } from "react"
import Remove from '@mui/icons-material/RemoveCircleOutline'
import Add from '@mui/icons-material/AddCircleOutline'
import Delete from '@mui/icons-material/Delete'
import AddFaq from '@mui/icons-material/PlaylistAdd'
import './EditFaq.css'
import Sidebar from "../Sidebar/Sidebar"
import Header from "../Header/Header"

const EditFaq = () => {
    const [faqs, setFaqs] = useState([])
    const toggleFaq = id => {
        setFaqs(origFaq.map(q => {
            return (q._id === id ? { ...q, active: !q.active } : q)
            
        }))
    }
    const changeHandler = (id, val, qa) => {
        setFaqs(origFaq.map(q => {
            return (q._id === id ?
                (qa === 'q' ? { ...q, ques: val } : { ...q, ans: val })
                : q
            )
        }))
    }
    const newFaq = () => {
        if (faqs[faqs.length - 1].ques === '' || faqs[faqs.length - 1].ans === '') {
            //error
        }
        setFaqs([...faqs, {
            ques: '',
            ans: ''
        }])
    }
    const changed = (origFaq, faqs) => origFaq !== faqs
    const notEmpty = faqs => !(faqs.some(q => q.ques === '' || q.ans === ''))
    const submitHandler = () => {

    }
    return (
        <div className='dashboard'>
            <div className="dashboardSidebar">
                <Sidebar />
            </div>
            <div className="dashboardMain">
                <Header />
                <div className="editFaq">
                    <div>
                        <dl>
                            {origFaq.map(faq => {
                                return (
                                    <div key={faq._id} style={faq._id !== origFaq[0]._id && { borderTop: '2px solid aqua' }}>
                                        <dt>
                                            <button onClick={() => toggleFaq(faq._id)}>
                                                <input
                                                    type="text"
                                                    className="input"
                                                    value={faq.ques}
                                                    style={{ border: 'none' }}
                                                    placeholder='Question to be asked'
                                                    onChange={e => changeHandler(faq._id, e.target.value, 'q')}
                                                />
                                                <span>
                                                    {faq.active ?
                                                        <Remove className="faqBtn" />
                                                        :
                                                        <Add className="faqBtn" />
                                                    }
                                                </span>
                                            </button>
                                        </dt>
                                        {faq.active && (
                                            <dd>
                                                <input
                                                    type="text"
                                                    className="input"
                                                    style={{ border: 'none' }}
                                                    value={q.ans}
                                                    placeholder='Write an appropriate answer'
                                                    onChange={e => changeHandler(faq._id, e.target.value, 'a')}
                                                />
                                                <span>
                                                    <Delete onClick={
                                                        setFaqs(origFaq.filter(i => i._id !== q._id))
                                                    } />
                                                </span>
                                            </dd>
                                        )}
                                    </div>
                                )
                            })}
                        </dl>
                        <br /><br />
                        <AddFaq onClick={newFaq} />
                    </div>
                    <div
                        className={`submitBtn editFaqBtnDiv ${changed(origFaq, faqs) && notEmpty(faqs) ? 'change' : 'no-change'}`}
                        onClick={changed(origFaq, faqs) && notEmpty(faqs) ? submitHandler : () => null}
                    >
                        Save
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditFaq