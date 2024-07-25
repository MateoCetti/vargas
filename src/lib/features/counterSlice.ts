import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type product = {
    name: string,
    quantity: number
}

const products: product[] = []

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    products: products
  },
  reducers: {
    setProducts: (state, action: PayloadAction<product[]>) => {
        state.products = action.payload;
    },
  }
})

export const {setProducts} = counterSlice.actions

export default counterSlice.reducer