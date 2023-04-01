// Import modules
import { configureStore } from '@reduxjs/toolkit'

// Import Redux slices
import authReducer from '../features/auth/authSlice'


export default configureStore({
    reducer: {
        auth: authReducer,
    },
})