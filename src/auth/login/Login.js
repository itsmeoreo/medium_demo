import React, {useState} from 'react'
import { LoginAppBar } from '../../components/navbar/Navbar';
import './Login.css'
import bcrypt from 'bcryptjs';

function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  function HandleLoginFormSubmit(event) {
    event.preventDefault();
    const users = JSON.parse(localStorage.getItem("users"));
    if (!users) {
      alert("No User Found");
    } else {
      const user = users.find((user) => user.userName === userName);
      if (!user) {
        alert(userName + " is not a valid user");
      } else {
        if (bcrypt.compareSync(password, user.password)) {
          alert("Signed in successfully!");
        } else {
          alert("Signed in failed due to invalid password");
        }
      }
    }

  }

  return (
    <div className='login-form'>
      <LoginAppBar />
      <div className='login-form-title'>
        <h1>Sign in</h1>
      </div>
      <div className='login-form-mainform'>
        <form onSubmit={HandleLoginFormSubmit}>
          <ul className='login-form-ul'>
            <li>
            <input
                className='login-form-username'
                type="text"
                placeholder="userName"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                style={{}}
              />
            </li>
            <li>
            <input
              className='login-form-pass'
              type="password"
              placeholder="Enter your password"
              minLength='8'
              maxLength='16'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{}}
              />
            </li>
          </ul>
          <input className='login-form-submitbtn' type="submit" />
        </form>
      </div>
    </div>
  )
}

export default Login