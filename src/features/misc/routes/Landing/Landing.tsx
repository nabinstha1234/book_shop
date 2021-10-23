import React from 'react';

import styles from './Landing.module.scss';
interface Props {}

export const LandingPage = (props: Props) => {
  return <div className={styles['container']}>I am landing page</div>;
};
