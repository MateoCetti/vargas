import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type product = {
    name: string,
    quantity: number,
    picture: string
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