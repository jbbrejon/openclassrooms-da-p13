// Import modules
import { createSlice } from '@reduxjs/toolkit'

// Set initial state
const initialState = {
    signed: false,
    token: null,
}

/**
 * Auth Redux slice
 * 
 * @returns {object} - Redux slice
 */
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signin: (draft, action) => {
            const token = action.payload;
            draft.signed = true;
            draft.token = token;
            return
        },
        signout: () => {
            return initialState
        },
    },
})

export const { signin, signout } = authSlice.actions

export default authSlice.reducer