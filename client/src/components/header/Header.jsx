import React from 'react';

import styles from '../header/Header.module.css';
import { Link } from 'react-router-dom';


export const Header = () => {
  const isAuth = false;

  const onClickLogout = () => {};

  return (
      <div className={styles.root}>
        <div className={styles.inner}>
          <Link className={styles.logo} to='/'>
            <div>MERN TEST</div>
          </Link>
          <div className={styles.buttons}>
            {isAuth ? (
              <>
                <Link to='/tests'>
                  <button>Tests</button>
                </Link>
                <button onClick={onClickLogout} color="error">
                  Выйти
                </button>
              </>
            ) : (
              <>
                <Link to='/login'>
                  <button>Login</button>
                </Link>
                <Link to='/register'>
                  <button>Sing Up</button>
                </Link>
              </>
            )}
          </div>
        </div>
    </div>
  );
};