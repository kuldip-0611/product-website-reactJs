import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../reducers/Set_Product';

const store = configureStore({
    reducer: {
        product: productReducer
    }
})

export default store