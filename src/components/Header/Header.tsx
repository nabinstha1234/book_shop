import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { formatCurrency } from 'utils';

import { useAppSelector } from 'app/hooks';

import { getAllCartItem } from 'features/cart/Slice/cartSlice';

import routes from 'config/routes';

import styles from './Header.module.scss';

interface Props {
  isLoggedIn?: boolean;
}

const Header = ({ isLoggedIn = false }: Props) => {
  const cartItems = useAppSelector(getAllCartItem);
  const history = useHistory();

  const getTotalCartPrice = () => {
    return cartItems?.reduce((acc: any, item: any) => {
      return acc + item.price * item.quantity;
    }, 0);
  };

  const handleCartClick = () => {
    if (cartItems.length) {
      history.push(routes.cart.path);
    }
  };

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
              <span className={styles['nav-text']}>Rs.</span>
              {cartItems.length ? formatCurrency(getTotalCartPrice()) : 0} &nbsp;
              <div onClick={() => handleCartClick()} className={styles['cart-wrapper']}>
                <Icon className="icon-cart" icon="mdi:cart" />
              </div>
              {cartItems.length && <div className={styles['count']}>{cartItems.length || 0}</div>}
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
