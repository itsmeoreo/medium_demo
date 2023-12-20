import React, {useState} from 'react'

function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <div className='login-form-title'>
        <h1>Sign in</h1>
      </div>
      <div className='login-form-mainform'>
        <form>
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