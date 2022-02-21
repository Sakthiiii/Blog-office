import React from 'react';
import "./Register.css"
import{Link} from "react-router-dom"
const Login = () => {
  return (
    <div className='Register'>
        <div className="Registertitle">Register</div>
        <form className="Registerform">
            <lable >UserName</lable>
            <input type="text" className='Registerinput' placeholder='Enter your Username...' />
            <lable >Email</lable>
            <input type="text" className='Registerinput' placeholder='Enter your Email' />
            <lable >Password</lable>
            <input type="password" className='Registerinput' placeholder='Enter your Password' />
            <button className="Registerbutton">Register</button>
        </form>
        <button className="Registerlogin">
          <Link className="link"  to="/login">Login</Link> </button>
    </div>
  )
}

export default Login