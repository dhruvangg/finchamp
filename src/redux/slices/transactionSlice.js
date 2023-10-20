const { createSlice } = require("@reduxjs/toolkit");

export const transactionSlice = createSlice({
    name: 'transaction',
    initialState: [],
    reducers: {
        addTransaction: (state, action) => {
            return [...state, { ...action.payload, time: Date.now() }]
        }
    }
})

export const { addTransaction } = transactionSlice.actions
export default transactionSlice.reducer