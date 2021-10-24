import { createSlice } from '@reduxjs/toolkit';
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
    filterBooksByGenre: (state, action) => {
      action.payload.forEach((genre: string) => {
        state.books = state.books.filter((book: IBook) => book.genre.includes(genre));
      });
    },
    removeStokFromBook: (state, action) => {
      state.books = state.books.map((book: IBook) => {
        if (book.id === action.payload) {
          book.stock = book.stock - 1;
        }
        return book;
      });
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

export const { filterBooksByGenre, removeStokFromBook } = bookSlice.actions;
export const getAllBooks = (state: any) => state.book;
export default bookSlice.reducer;
