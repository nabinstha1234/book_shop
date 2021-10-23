import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

interface Props {
  isLoggedIn?: boolean;
}

const Header = ({ isLoggedIn = false }: Props) => {
  return (
    <nav className={styles['navbar']}>
      <div className={styles['container']}>
        <div className="navbar-header">
          <Link to="/">
            <h4>
              Awesome<span>logo</span>
            </h4>
          </Link>
        </div>

        <div className="navbar-menu" id="open-navbar1">
          <ul className="navbar-nav">
            <li className="active">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
            <li>
              <Link to="/">Signin</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
