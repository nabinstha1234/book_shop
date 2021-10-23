import React from 'react';

import styles from './TopBar.module.scss';

interface Props {}

const TopBar = (props: Props) => {
  return (
    <div className={`container mt-2 rounded d-flex ${styles['top-bar']}`}>
      <div className={styles['item-left']}>Filter</div>
      <div className={styles['item']}></div>
      <div className={styles['item-right']}></div>
    </div>
  );
};

export default TopBar;
