import axios from 'axios'

export const registerUser = user => async dispatch => {
    try {
        dispatch({ type: 'registerRequest' })
        const { data } = await axios.post('/api/user/register', { user }, { headers: { 'Content-Type': 'application/json' } })
        dispatch({
            type: 'registerSuccess',
            payload: data.user
        })
    } catch (err) {
        console.log(err);
        dispatch({
            type: 'registerFailure',
            payload: err.response.data.msg
        })
    }
}