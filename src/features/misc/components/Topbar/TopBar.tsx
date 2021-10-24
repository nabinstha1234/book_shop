import React from 'react';
import { useAppSelector } from 'app/hooks';
import { getAllBooks, IBook } from '../../Slice/bookSlice';
import { Select } from 'components/Elements';

import styles from './TopBar.module.scss';

interface Props {
  setGenres: Function;
}

export const TopBar = ({ setGenres }: Props) => {
  const { books } = useAppSelector(getAllBooks);

  const getOptions = (): string[] => {
    const booksGenre: string[] = books.map((book: IBook) => book.genre);
    booksGenre.unshift('All');
    return Array.from(new Set(booksGenre));
  };

  const handleGenreChange = (genre: string) => {
    const bookGenres = genre.replaceAll(' ', '').split('/');
    setGenres(bookGenres);
  };
  return (
    <div className={`container mt-2 rounded d-flex ${styles['top-bar']}`}>
      <div className={styles['item-left']}>Filter</div>
      <div className={styles['item']}>
        <Select options={getOptions()} onChange={handleGenreChange} placeholder="Select Genre" />
      </div>
      <div className={styles['item-right']}></div>
    </div>
  );
};
