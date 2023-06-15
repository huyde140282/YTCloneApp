import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
    isLoggedIn: boolean;
    user: User | null;
};

type User = {
    email: string;
    password: string;
};

const initialState: AuthState = {
    isLoggedIn: false,
    user: null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<User>) => {
            state.isLoggedIn = true;
            state.user = action.payload;
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.user = null;
        },
        register: (state, action: PayloadAction<User>) => {
            state.isLoggedIn = true;
            state.user = action.payload;
        },
    },
});

export const { login, logout, register } = authSlice.actions;
export default authSlice.reducer;
