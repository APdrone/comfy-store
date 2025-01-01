import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./features/cart/CartSlice";
import UserReducer from "./features/user/UserSlice";


export const store = configureStore({
    reducer: {
        cartState: CartReducer,
        userState: UserReducer
    }
})