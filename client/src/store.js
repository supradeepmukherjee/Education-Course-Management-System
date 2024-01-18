import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from './Reducers/User'

const store = configureStore({
    reducer: {
        user: userReducer
    },
    devTools: false
})

export default store