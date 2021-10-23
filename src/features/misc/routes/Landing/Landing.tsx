import React from 'react';
import TopBar from '../../components/Topbar/TopBar';

import styles from './Landing.module.scss';

interface Props {}

export const LandingPage = (props: Props) => {
  return (
    <div className="container">
      <TopBar />
    </div>
  );
};
