import Delete from '@mui/icons-material/Delete'
import Add from '@mui/icons-material/AddCircleOutline'
import './EditCategories.css'

const EditCategories = () => {
    const [categories, setCategories] = useState([])
    const categoryHandler = (id, val) => {
        setCategories(categories.map(c => c._id === id ? [...c, val] : c))
    }
    const newCategoryHandler = () => {
        if (categories[categories.length] - 1 === '') {
            // error
        }
        setCategories([...categories, ''])
    }
    const changed = (origCtg, categories) => origCtg !== categories
    const notEmpty = categories => !(categories.some(faq => faq === ''))
    const submitHandler = async () => {

    }
    return (
        <div className='dashboard'>
            <div className="dashboardSidebar">
                <Sidebar />
            </div>
            <div className="dashboardMain">
                <Header />
                <div className="editCategories">
                    <h1 className="heading">
                        All Categories
                    </h1>
                    {categories?.map(category => {
                        return (
                            <div style={{ padding: '.75rem' }}>
                                <div className="editCategoriesContainer">
                                    <input type="text" className="input" value={category} placeholder='Enter Category Title' onChange={e => categoryHandler(category._id, e.target.value)} />
                                    <Delete onClick={() => setCategories(categories.filter(c => c._id !== category._id))} />
                                </div>
                            </div>
                        )
                    })}
                    <div className="editCategoriesContainer2">
                        <Add onClick={newCategoryHandler} />
                    </div>
                    <div
                        className={`submitBtn editFaqBtnDiv ${changed(origCategories, categories) && notEmpty(categories) ? 'change' : 'no-change'}`}
                        onClick={changed(origCategories, categories) && notEmpty(categories) ? submitHandler : () => null}
                    >

                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditCategories