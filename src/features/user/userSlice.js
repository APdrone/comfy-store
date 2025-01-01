import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const themes = {
    winter: 'winter',
    dracula: 'dracula'
}

const getUserFromLocalStorage = () => {
    const localStorageUser = localStorage.getItem('user');
    const user = localStorageUser ? localStorageUser : null;
    return user;

}

const getThemeFromLocalStorage = () => {
    const localStorageTheme = localStorage.getItem('theme');
    const theme = localStorageTheme ? localStorageTheme : themes.winter;
    document.documentElement.setAttribute('data-theme', theme);
    return theme;
}

const initialState = {
    user: getUserFromLocalStorage(),
    theme: getThemeFromLocalStorage()
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            const user = { ...action.payload.user, token: action.payload.jwt };
            state.user = user;
            localStorage.setItem('user', JSON.stringify(user));
        },
        logoutUser: (state, action) => {
            state.user = null;
            localStorage.removeItem('user');
            toast.success('logged out successfully')

        },
        toggleTheme: (state) => {
            const { dracula, winter } = themes;
            state.theme = state.theme === dracula ? winter : dracula;
            document.documentElement.setAttribute('data-theme', state.theme);
            localStorage.setItem('theme', state.theme);
        }

    }
})

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;

export default userSlice.reducer;