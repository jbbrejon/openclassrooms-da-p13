import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    firstName: null,
    lastName: null,
}

/**
 * Profile Redux slice
 * 
 * @returns {object} - Redux slice
 */
export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        update: (draft, action) => {
            const firstName = action.payload.firstName;
            draft.firstName = firstName;
            const lastName = action.payload.lastName;
            draft.lastName = lastName;
            return
        },
        reset: () => {
            return initialState
        },

    },
})

export const { update, reset } = profileSlice.actions

export default profileSlice.reducer