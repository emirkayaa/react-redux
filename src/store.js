import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './stores/counterSlice'
import siteReducer from './stores/site'
import authReducer from './stores/auth'

    export default configureStore({
        reducer: {
            counter: counterReducer,
            site: siteReducer,
            auth: authReducer
        }
    })