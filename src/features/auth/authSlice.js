// Import modules
import { createSlice } from '@reduxjs/toolkit'

// Set initial state
const initialState = {
    connected: false,
    token: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signin: (draft, action) => {
            const token = action.payload;
            draft.connected = true;
            draft.token = token;
            return
        },
        signout: () => {
            return initialState
        },
    },
})

export const { signin, discosignoutnnect } = authSlice.actions

export default authSlice.reducer