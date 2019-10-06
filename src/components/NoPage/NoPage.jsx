import React from 'react';
import noPageImg from 'assets/404.png';
import styles from './NoPage.module.scss';

const NoPage = () => (
    <div className={styles.noPage}>
        <img alt="404" src={noPageImg} />
    </div>
);
  
  
  export default NoPage;