import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss'
import logo from 'assets/logo.jpg';

const Header = () => (
    <div className={styles.header}>
        <Link to="/"> <img alt="Logo" src={logo} className={styles.logo} /></Link>
        <div className={styles.navbar}>
            <div className={styles.link}> <Link to="/">Home</Link> </div>
            <div className={styles.link}>  <Link to="/about">About</Link> </div>
        </div>
    </div>
);


export default Header;