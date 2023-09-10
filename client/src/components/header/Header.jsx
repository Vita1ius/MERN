import React, { useContext } from 'react';

import styles from '../header/Header.module.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';


export const Header = () => {
  const {user,setUser} = useContext(AuthContext)
  const isAuth = user ? true : false;

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
                  <button>All Tests</button>
                </Link>
                <Link to='/myTests'>
                  <button>My Tests</button>
                </Link>
                <Link to='/createTest'>
                  <button>Create Test</button>
                </Link>
                <Link to='/'>
                  <button onClick={() => setUser(null)}>Logout</button>
                </Link>
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