import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from 'axios'

const initialState = {
  loading: false,
  products: [],
  error: '',
  total: 100
}

export const fetchData = createAsyncThunk('product/fetchData', (skip) => {
  console.log(skip)
  return axios.get(`https://dummyjson.com/products?limit=8&skip=${skip}`)
    .then(res => res.data)

})

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {

  },
  extraReducers: (biulder) => {
    biulder.addCase(fetchData.pending, (state) => {
      state.loading = true;
    });
    biulder.addCase(fetchData.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.error = "";
    });
    biulder.addCase(fetchData.rejected, (state, action) => {
      state.loading = false;
      state.products = [];
      state.error = action.error.message;
    });
  }
})

export default productSlice.reducer;
