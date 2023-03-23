import React from 'react'
import css from './Login.module.css'
export default function Login() {
  return (
    <div className={css.loginBox}>
      <h1>Login Here</h1>
      <form>
        <p>UserName</p>
        <input className={css.input1} type="text" placeholder='username' />
        <p>Password</p>
        <input className={css.input1} type="password" placeholder='Password' />
        <input className={css.input2} type="submit" value="Login"/>
        <a href="#"className={css.link}>Forgot Your Password</a><br></br>
        <a href="#" className={css.link}>New User?</a>
      </form>
    </div>
  )
}
