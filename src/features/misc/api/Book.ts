import { createAsyncThunk } from '@reduxjs/toolkit';
import BookService from './BookService';

export const fetchBooks = createAsyncThunk('books/fetchAsyncBooks', async () => {
  const response = await BookService.getBooks();
  return response;
});
