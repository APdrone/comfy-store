import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const defaultState = {
    cartItems: [],
    numItemsInCart: 0,
    cartTotal: 0,
    shipping: 500,
    tax: 0,
    orderTotal: 0,
};

const getCartFromLocalStorage = () => {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : defaultState;
    // return JSON.parse(localStorage.getItem('cart') || defaultState);
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: getCartFromLocalStorage(),
    reducers: {
        addItem: (state, action) => {
            const { product } = action.payload;
            console.log(action.payload);
            console.log("product", product);
            const item = state.cartItems.find(i => i.cartId == product.cartId);
            console.log('item--', item);
            if (item) {
                item.amount += product.amount
            } else {
                state.cartItems.push(product)
            }
            state.numItemsInCart += product.amount
            state.cartTotal += product.price * product.amount
            cartSlice.caseReducers.calculateTotals(state);

            toast.success('item added to cart');

        },
        clearCart: () => {
            localStorage.setItem('cart', JSON.stringify(defaultState));
            return defaultState;
        },

        removeItem: (state, action) => {
            const { cartId } = action.payload;
            const product = state.cartItems.find(i => i.cartId == cartId);
            state.cartItems = state.cartItems.filter(i => i.cartId !== cartId);

            state.numItemsInCart -= product.amount
            state.cartTotal -= product.price * product.amount
            cartSlice.caseReducers.calculateTotals(state);
            toast.error('item removed from cart');

        },
        editItem: (state, action) => {
            const { cartId, amount } = action.payload;
            const item = state.cartItems.find(i => i.cartId == cartId);
            state.numItemsInCart += amount - item.amount;
            state.cartTotal += item.price * (amount - item.amount);
            item.amount = amount;
            cartSlice.caseReducers.calculateTotals(state);
            toast.success('cart updated');
        },
        calculateTotals: (state, action) => {
            state.tax = 0.1 * state.cartTotal;
            state.orderTotal = state.cartTotal + state.shipping + state.tax;
            localStorage.setItem('cart', JSON.stringify(state));
        }
    },
})


export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions;

export default cartSlice.reducer;


