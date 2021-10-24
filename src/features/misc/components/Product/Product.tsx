import { IBook } from 'features/misc/Slice/bookSlice';
import React from 'react';

import { formatCurrency, formatDate } from 'utils';
import styles from './Product.module.scss';

interface Props {
  book: IBook;
}

export const Product = ({ book }: Props) => {
  return (
    <div className="col-xs-12 col-sm-6 col-md-4">
      <article className={styles['card-wrapper']}>
        <div className={styles['image-holder']}>
          <div
            className={`${styles['image-liquid']} ${styles['image-holder--original']}`}
            style={{
              backgroundImage: `url(${book.image})`,
            }}
          ></div>
        </div>
        <div className={styles['product-description']}>
          <h1 className={styles['product-description__title']}>{book.name}</h1>

          <div className="row">
            <div
              className={`col-xs-12 col-sm-8 ${styles['product-description__category']} ${styles['secondary-text']}`}
            >
              Available stock: {book.stock}
            </div>
            <div className={`col-xs-12 col-sm-4 ${styles['product-description__price']}`}>
              Rs. {formatCurrency(+book.price.replace('$', ''))}
            </div>
          </div>
          <hr />
          <div className={styles['sizes-wrapper']}>
            <b>Author:</b>
            <br />
            <span className={`${styles['secondary-text']} ${styles['text-uppercase']}}`}>
              <ul className={styles['list-inline']}>
                <li>{book.author}</li>
              </ul>
            </span>
          </div>
          <div className={styles['color-wrapper']}>
            <b>Created At:</b>
            <br />
            <ul className={`${styles['list-inline']}`}>
              <li>{formatDate(book.published_date)}</li>
            </ul>
          </div>
        </div>
      </article>
    </div>
  );
};
