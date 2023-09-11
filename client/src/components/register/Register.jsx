import React from "react";
import { Header } from "../header/Header";
import styles from '../login/Login.module.css'
import {useForm} from 'react-hook-form'
import { useMutation } from "@tanstack/react-query";
import { UserService } from "../../services/user.service";
import { useNavigate } from 'react-router-dom';

export const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: {errors}
  } = useForm({
    mode: 'onChange'
  })

  const {mutate} = useMutation(['register'],
  (data) => UserService.register(data),{
    onSuccess: (data) => {
      navigate('/login');
    },
    onError: (error) => {
      reset();
    },
  })
  const registerUser = data => {
    mutate(data)
  }

  return (
    <div>
      <Header />
      <div className={styles.pageContainer}>
        <div className={styles.loginContainer}>
          <h1>Register</h1>
          <form className={styles.form} onSubmit={handleSubmit(registerUser)}>
            <input {...register('email',{required: 'Email is required'})} placeholder="Email" type="email"/>
            {errors?.email?.message && (<p>Email is required</p>)}
            <input {...register('name',{required: 'Username is required'})} placeholder="Username"/>
            {errors?.name?.message && (<p>Username is required</p>)}
            <input {...register('password',{required: 'Email is required'})} placeholder="Password" type="password"/>
            {errors?.password?.message && (<p>Password is required</p>)}
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register