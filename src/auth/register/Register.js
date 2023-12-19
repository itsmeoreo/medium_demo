import React,{useState} from 'react'
import { VerifyEmailAddress } from '../../utilities/EmailVerification';
import'./Register.css'

function Register() {

  const [Name, setName] = useState('');
  const [PhNum, setPhNum] = useState('');
  const [Email, setEmail] = useState('');
  const [Age, setAge] = useState('');
  const [Pass, setPass] = useState('');
  const [RePass, setRePass] = useState();

  return (
    <div className='register-form'>
      <div className='register-form-title'>
        <h1>Register from</h1>
      </div>
      <div className='register-form-mainform'>
        <form>
          <ul className='register-form-ul'>
            <li>
              <input
                className='register-form-name'
                type="text"
                placeholder="Name"
                value={Name}
                onChange={(e) => setName(e.target.value)}
                style={{}}
              />
            </li>
            <li>
              <input disabled className="register-form-phcode" value="+91" />
              <input
                className='register-form-phnum'
                type="text"
                placeholder="Phone number"
                value={PhNum}
                onChange={(e) => setPhNum(e.target.value)}
                style={{}}
              />
            </li>
            <li>
              <input
                className='register-form-email'
                type="Email"
                placeholder="Email Address"
                value={Email}
                style={VerifyEmailAddress(Email) ?{ backgroundColor:'rgb(235, 255, 235)'}:{}}
                onChange={(e) => setEmail(e.target.value)}
              /> <br />
              { Email.length >5 ? (
                VerifyEmailAddress(Email) ? ('') : (
                  <small style={{ color: "red" }}>Email Not Valid</small>
                )
              ):("")
              }
            </li>
            <li>
              <input
                  className='register-form-age'
                  type="number"
                  placeholder="Age"
                  value={Age}
                  onChange={(e) => setAge(e.target.value)}
                  style={{}}
                />
              </li>
              <li>
              <input
                  className='register-form-pass'
                  type="password"
                  placeholder="Create your password"
                  minLength='8'
                  maxLength='16'
                  alphabet='A-Za-z0-9+_%@!$*~-'
                  requiredClasses='[A-Z][a-z][0-9][+_%@!$*~-]'
                  requiredClassCount='3'
                  value={Pass}
                  onChange={(e) => setPass(e.target.value)}
                  style={{}}
                />
                <ul className='register-form-passconstrains'>
                    <li style={{}} className="register-form-pass-con-1">Your password must have atleast 8 and atmost 16 characters</li>
                    <li className="register-form-pass-con-2">Your password must have atleast one
                      <ul className="register-form-pass-constrains-sub">
                        <li className="register-form-pass-con-2.1">Number *</li>
                        <li className="register-form-pass-con-2.2">Uppercase alphabet *</li>
                        <li className="register-form-pass-con-2.3">Lowercase alphabet *</li>
                        <li className="register-form-pass-con-2.4">Special characters *</li>
                    </ul>
                  </li>
                </ul>
              </li>
          </ul>
        </form>
      </div>
    </div>
  )
}

export default Register