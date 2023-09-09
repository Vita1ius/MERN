import React from "react";
import { Header } from "../header/Header";
import styles from '../login/Login.module.css'
export const Register = () => {
  return (
    <div>
      <Header />
      <div className={styles.pageContainer}>
        <div className={styles.loginContainer}>
          <h1>Register</h1>
          <form className={styles.form}>
            <input placeholder="Email"></input>
            <input placeholder="Username"></input>
            <input placeholder="Password"></input>
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register