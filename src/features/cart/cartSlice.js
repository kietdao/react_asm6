import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {
    cart: [],
    numberItems: null
}

let cartItems = []

export const cartSlice = createSlice({
    name: 'carts',
    initialState,
    reducers: {
        addToCart: (state, actions) => {
            cartItems.push(actions.payload)
            state.numberItems = cartItems.length
            state.cart = [...cartItems]
        }
    }
})

export const { addToCart } = cartSlice.actions

export default cartSlice.reducer