import React from "react";
import { Header } from "../header/Header";
import styles from '../login/Login.module.css'
import {useForm} from 'react-hook-form'
import { useMutation } from "@tanstack/react-query";
import { UserService } from "../../services/user.service";

export const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: {errors}
  } = useForm({
    mode: 'onChange'
  })
  const {mutate} = useMutation(['login'],
  (data) => UserService.login(data), {
    onSuccess: (data) => {
      console.log("token:   " + data.token);
      reset();
    }
  })
  const loginUser = data => {
    mutate(data)
  }
  return (
    <div>
      <Header />
      <div className={styles.pageContainer}>
        <div className={styles.loginContainer}>
          <h1>Login</h1>
          <form className={styles.form} onSubmit={handleSubmit(loginUser)}>
            <input {...register('email',{required: 'Email is required'})} type="email" placeholder="Email"/>
            {errors?.email?.message && (<p>Email is required</p>)}
            <input {...register('password',{required: 'Password is required'})} type="password" placeholder="Password"/>
            {errors?.password?.message && (<p>Password is required</p>)}
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login