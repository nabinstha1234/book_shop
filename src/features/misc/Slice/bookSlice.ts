import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchBooks } from '../api/Book';

export interface IBook {
  id: number;
  name: string;
  image: string;
  stock: number;
  price: string;
  author: string;
  genre: string;
  published_date: string;
}

export interface BookState {
  books: IBook[];
  loading: boolean;
  error: string | null | undefined;
}

const initialState: BookState = {
  books: [],
  loading: false,
  error: null,
};

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    filterBooksByGenre: (state, action: PayloadAction<string>) => {
      state.books = state.books.filter((book) => book.genre === action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.books = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchBooks.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
  },
});

export const { filterBooksByGenre } = bookSlice.actions;
export const getAllBooks = (state: any) => state.book;
export default bookSlice.reducer;
