import { useEffect, useState } from 'react'
import Remove from '@mui/icons-material/RemoveCircleOutline'
import Add from '@mui/icons-material/AddCircleOutline'

const Faq = () => {
    const [active, setActive] = useState(null)
    const [ques, setQues] = useState([])
    const toggleQues = id => setActive(active === id ? null : id)
    useEffect(() => {
        //   setQues()
    }, [])
    return (
        <div className="editFaq">
            <h1 className='heading'>
                Frequently Asked Questions
            </h1>
            <div>
                <dl>
                    {origFaq.map(faq => {
                        return (
                            <div key={faq._id} style={faq._id !== origFaq[0]._id && { borderTop: '2px solid aqua' }}>
                                <dt>
                                    <button onClick={() => toggleQues(faq._id)}>
                                        <span>
                                            {faq.ques}
                                        </span>
                                        <span>
                                            {faq.active ?
                                                <Remove className="faqBtn" />
                                                :
                                                <Add className="faqBtn" />
                                            }
                                        </span>
                                    </button>
                                </dt>
                                {active === faq._id && (
                                    <dd>
                                        <p>
                                            {faq.ans}
                                        </p>
                                    </dd>
                                )}
                            </div>
                        )
                    })}
                </dl>
            </div>
        </div>
    )
}

export default Faq