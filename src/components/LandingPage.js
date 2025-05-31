import React from 'react'
import styles from './styles/LandingPage.module.css';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div>
      <div className={styles.nav}>< Header/></div>
      <div className={styles.main}>
        <div className={styles.content}>
            <h1 className={styles.header}>FreshBreez</h1>
            <p className={styles.para}>Welcome to FreshBreez, your sanctuary for vibrant houseplants! We bring the freshness of nature right to your doorstep.</p>
            <button className={styles.btn}><Link to="/products" className={styles.link}>Get Started</Link></button>
        </div>
      </div>
    </div>
  )
}

export default LandingPage

