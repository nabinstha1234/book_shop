import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import { TopBar, Product } from '../../components';
import { getAllBooks, IBook, BookState } from '../../Slice/bookSlice';
import { fetchBooks } from '../../api/Book';

import styles from './Landing.module.scss';

interface Props {}

export const LandingPage = (props: Props) => {
  const books: BookState = useAppSelector(getAllBooks);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const controller = new AbortController();
    dispatch(fetchBooks());
    return () => controller.abort();
  }, [dispatch]);

  const renderBooks = (books: IBook[]) => {
    return books.map((book: IBook) => {
      return (
        <React.Fragment key={book.id}>
          <Product book={book} />
        </React.Fragment>
      );
    });
  };
  return (
    <div className="container">
      <TopBar />
      <div className="row mt-3">{!books.loading && renderBooks(books.books)}</div>
    </div>
  );
};
