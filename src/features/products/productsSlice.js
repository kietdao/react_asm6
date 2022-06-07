import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    productList: null,
    productId: null,
    isProductLoaded: false,
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        getCocktailList: (state, actions) => {
            state.productList = actions.payload
            if(actions.payload !== null){
                state.isProductLoaded = true
            } else {
                state.isProductLoaded = false
            }
        },
        getProductId: (state, actions) => {
            state.productId = actions.payload
        }
    }
}) 

export const { getCocktailList, getProductId } = productsSlice.actions

export default productsSlice.reducer