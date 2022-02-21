import React from 'react';
import "./Login.css"
import{Link} from "react-router-dom"
const Login = () => {
  return (
    <div className='login'>
        <div className="logintitle">Login</div>
        <form className="loginform">
            <lable >Email</lable>
            <input type="text" className='logininput' placeholder='Enter your Email' />
            <lable >Password</lable>
            <input type="password" className='logininput' placeholder='Enter your Password' />
            <button className="loginbutton">Login</button>
        </form>
        <button className="loginregister">
          <Link className="link"  to="/register">Register</Link> </button>
    </div>
  )
}

export default Login