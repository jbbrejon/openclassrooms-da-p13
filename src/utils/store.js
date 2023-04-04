// Import modules
import { configureStore } from '@reduxjs/toolkit'

// Import Redux slices
import authReducer from '../features/auth/authSlice'
import profileReducer from '../features/profile/profileSlice'

/**
 * Redux store.
 *
 * @returns {Object} - Redux store
 */
export default configureStore({
    reducer: {
        auth: authReducer,
        profile: profileReducer,
    },
})