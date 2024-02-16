import { createSlice } from "@reduxjs/toolkit";

export const AdminSlice = createSlice({
    name: "admin",
    initialState: {
        user: null
    },
    reducers: {
        login: (state, action) => {
            state.admin = action.payload;
            
        },
        logout: (state) => {
            state.admin = null;
        }
    }
});

export const { login, logout } = AdminSlice.actions;
export const selectUser = (state) => state.admin.admin;
export default AdminSlice;
