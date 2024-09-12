import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Variety = {
  name: string,
  quantity: number,
  picture: string,
  price: number
}

export type Item = {
  id: number,
  item: Variety
}

const items: Item[] = []

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: items
  },
  reducers: {
    addItem: (state, action: PayloadAction<Item>) => {
      state.cart.push(action.payload);
    },
    updateItem: (state, action: PayloadAction<Item>) => {

      const itemIndex = state.cart.findIndex((v) => v.id === action.payload.id);
      const itemExists = itemIndex !== -1;
      
      if(!itemExists){
        state.cart.push(action.payload);
        return;
      }
      
      state.cart.splice(itemIndex);
      
      if (action.payload.item.quantity !== 0) {
        state.cart.push(action.payload);
        return;
      }
    },
    removeItem: (state, action: PayloadAction<Item>) => {
      const itemIndex = state.cart.findIndex((v) => v.id === action.payload.id);
      const itemExists = itemIndex !== -1;
      console.log(itemIndex)

      if(!itemExists) return;

      state.cart.splice(itemIndex)
    }

  }
})

export function isInCart(cart: Item[], id: number) {
  return cart.find((v, i) => v.id === id);
};

export const { addItem, updateItem, removeItem } = cartSlice.actions

export default cartSlice.reducer