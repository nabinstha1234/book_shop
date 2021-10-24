import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import { TopBar, Product } from '../../components';
import { getAllBooks, IBook, BookState } from '../../Slice/bookSlice';
import { fetchBooks } from '../../api/Book';

import styles from './Landing.module.scss';

interface Props {}

export const LandingPage = (props: Props) => {
  const [genres, setGenres] = useState<string[]>([]);

  let bookState: BookState = useAppSelector(getAllBooks);

  const [books, setBooks] = useState<IBook[]>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (bookState.books.length) {
      setBooks(bookState.books);
    }
  }, [bookState]);

  useEffect(() => {
    const controller = new AbortController();
    dispatch(fetchBooks());
    return () => controller.abort();
  }, [dispatch]);

  useEffect(() => {
    if (genres.includes('All')) {
      setBooks(bookState.books);
    } else {
      if (bookState.books?.length) {
        let bookObjects: IBook[] = bookState.books;
        genres.forEach((genre: string) => {
          bookObjects = bookObjects.filter((book: IBook) => book.genre.includes(genre));
        });
        setBooks(bookObjects);
      }
    }
  }, [genres, bookState.books]);

  const renderBooks = (books: IBook[] | undefined) => {
    return books?.map((book: IBook) => {
      return (
        <React.Fragment key={book.id}>
          <Product book={book} />
        </React.Fragment>
      );
    });
  };
  return (
    <div className="container">
      <TopBar setGenres={setGenres} />
      <div className="row mt-3">{!bookState.loading && renderBooks(books)}</div>
    </div>
  );
};
