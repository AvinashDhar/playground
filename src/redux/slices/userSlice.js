import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        name: '',
        email: ''
    },
    reducers: {
        updateUser: (state,action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
        },
        deleteUser: (state) => {
            state.name = null;
            state.email = null;
        }
    }
})

export const {updateUser, deleteUser} = userSlice.actions;
export default userSlice.reducer

