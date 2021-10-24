import { createSlice } from '@reduxjs/toolkit';

export interface ICartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

export interface CartState {
  cartItem: ICartItem[];
}

const initialState: CartState = {
  cartItem: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addBook: (state, action) => {
      const item = state.cartItem.find((item) => item.id === action.payload.id);
      if (item?.id) {
        item.quantity += 1;
        item.price += action.payload.price;
        state.cartItem = state.cartItem.map((item) => {
          if (item.id === action.payload.id) {
            return item;
          }
          return item;
        });
      } else {
        state.cartItem.push(action.payload);
      }
    },
    removeBook: (state, action) => {
      state.cartItem = state.cartItem.filter((item) => item.id !== action.payload.id);
    },
    addQuantity: (state, action) => {
      const item = state.cartItem.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = item.quantity + action.payload.quantity;
        item.price = item.price + action.payload.price;
      }
    },
    removeQuantity: (state, action) => {
      const item = state.cartItem.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = item.quantity - action.payload.quantity;
        item.price = item.price - action.payload.price;
      }
    },
  },
  extraReducers: (builder) => {},
});

export const { addBook, removeBook } = cartSlice.actions;
export const getAllCartItem = (state: any) => state.cart.cartItem;
export default cartSlice.reducer;
