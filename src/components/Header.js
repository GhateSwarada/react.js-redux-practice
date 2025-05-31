import style from './styles/Header.module.css';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import cart from '../assets/images/cart.png';

import React from 'react'

function Header() {
    const totalQuantity = useSelector(state => state.cart.totalQuantity);
  return (
    <div className={style.mainBar}>
        <p className={style.title}>FreshBreez☘️</p>
      <ul className={style.navbar}>
        <li className={style.navItem}><Link to="/" className={style.pageLink}>Home</Link></li>
        <li className={style.navItem}><Link to="/products" className={style.pageLink}>Products</Link></li>
        <li className={style.navItem}><Link to="/cart" className={style.cartLink}>
            <span className={style.cartIcon}>
                <img className={style.cart} src={cart}/>
                <p>Cart ({totalQuantity})</p>
            </span>
        </Link></li>
      </ul>
    </div>
  )
}

export default Header


