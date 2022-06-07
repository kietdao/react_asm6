import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    productList: null,
    productId: null
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        getCocktailList: (state, actions) => {
            state.productList = actions.payload
        },
        getProductId: (state, actions) => {
            state.productId = actions.payload
        }
    }
}) 

export const { getCocktailList, getProductId } = productsSlice.actions

export default productsSlice.reducer