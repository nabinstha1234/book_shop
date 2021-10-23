import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

import styles from './Header.module.scss';

interface Props {
  isLoggedIn?: boolean;
}

const Header = ({ isLoggedIn = false }: Props) => {
  return (
    <nav className={styles['navbar']}>
      <div className={styles['container']}>
        <div className={styles['navbar-header']}>
          <Link to="/">
            <h4>
              Awesome <span>logo</span>
            </h4>
          </Link>
        </div>
        <div className={styles['search']}>
          <input type="text" />
          <Icon className={styles['search-icon']} icon="mdi:magnify" />
        </div>
        <div className={styles['navbar-menu']} id="open-navbar1">
          <ul className={styles['navbar-nav']}>
            <li className={styles['nav-item']}>
              <span className={styles['nav-text']}>Rs.</span> 4567.78 &nbsp;
              <div className={styles['cart-wrapper']}>
                <Icon className="icon-cart" icon="mdi:cart" />
              </div>
              <div className={styles['count']}>10</div>
            </li>
            <li className={styles['nav-item']}>
              <span className={styles['nav-text']}>Hello,</span> Nabin &nbsp;
              <Icon className={styles['user-icon']} icon="mdi:account-circle" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
