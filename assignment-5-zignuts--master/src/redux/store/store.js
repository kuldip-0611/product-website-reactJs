import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import { composeWithDevTools } from 'redux-devtools-extension';
import productReducer from '../reducers/Set_Product';

const store = configureStore({
    reducer: {
        product: productReducer,
        devTools: true,
    }
}, composeWithDevTools(
    applyMiddleware(),
))

export default store




