import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    productList: null,
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        getCocktailList: (state, actions) => {
            state.productList = actions.payload
        }
    }
}) 

export const { getCocktailList } = productsSlice.actions

export default productsSlice.reducer