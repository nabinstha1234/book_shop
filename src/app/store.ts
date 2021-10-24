import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import bookSlice from 'features/misc/Slice/bookSlice';
import cartSlice from 'features/cart/Slice/cartSlice';

export const store = configureStore({
  reducer: {
    book: bookSlice,
    cart: cartSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
