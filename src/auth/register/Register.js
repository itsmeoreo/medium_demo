import React,{useState} from 'react'
import { VerifyPhoneNumber ,VerifyEmailAddress, VerifyCon1, VerifyRePass, VerifyCon2, VerifyCon2_1, VerifyCon2_2, VerifyCon2_3, VerifyCon2_4 } from '../../utilities/EmailVerification';
import'./Register.css'
import bcrypt from 'bcryptjs';
import {RegisterAppBar} from '../../components/navbar/Navbar'

function Register() {

  const [name, setName] = useState('');
  const [userName, setUserName]= useState('');
  const [phNum, setPhNum] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(0);
  const [pass, setPass] = useState('');
  const [rePass, setRePass] = useState('');


  function HandleRegisterFormSubmit(event){
    event.preventDefault();
    const hashPass= bcrypt.hashSync(pass,10)
    const user= { name, userName, phNum, email, age, hashPass };
    const users= JSON.parse(localStorage.getItem("users")) || [] ;
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Sign up Successfull")
    setName(''); setUserName(''); setPhNum(''); setEmail(''); setAge(0); setPass(''); setRePass('');
  }

  return (
    <div  className='register-form'>
      <RegisterAppBar />
      <div className='register-form-title'>
        <h1>Register from</h1>
      </div>
      <div className='register-form-mainform'>
        <form onSubmit={HandleRegisterFormSubmit}>
          <ul className='register-form-ul'>
            <li>
              <input
                className='register-form-name'
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{}}
              />
            </li>
            <li>
              <input
                className='register-form-username'
                type="text"
                placeholder="userName"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                style={{}}
              />
            </li>
            <li>
              <input disabled className="register-form-phcode" value="+91" />
              <input
                className='register-form-phnum'
                type="text"
                placeholder="Phone number"
                value={phNum}
                onChange={(e) => setPhNum(e.target.value)}
                style={{}}
              /> <br />
              { phNum > 0 ? (
                phNum.length === 10 ? (
                  VerifyPhoneNumber(phNum) ? ('') : (<small style={{color:'rgb(255, 124, 124)'}}>Enter Valid Phone number</small>)
                ):(
                  <small style={{color:'rgb(255, 124, 124)'}}>Enter a 10 digit phoneNumber</small>
                )
              ): null}
            </li>
            <li>
              <input
                className='register-form-email'
                type="Email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              /> <br />
              { email.length >5 ? (
                VerifyEmailAddress(email) ? ('') : (
                  <small style={{ color: 'rgb(255, 124, 124)' }}>Email Not Valid</small>
                )
              ):("")
              }
            </li>
            <li>
              <input
                  className='register-form-age'
                  type="number"
                  placeholder="Age"
                  min={0}
                  max={120}
                  value={age}
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
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    style={{}}
                />
                <ul className='register-form-passconstrains'>
                  <li style={pass.length>0 ? (VerifyCon1(pass)? {color:'rgb(124, 255, 124)'} : {color:'rgb(255, 124, 124)'}): {color:'white'}} className="register-form-pass-con-1">Your password must have atleast 8 and atmost 16 characters</li>
                  <li style={pass.length>0 ? (VerifyCon2(pass)? {color:'rgb(124, 255, 124)'} : {color:'rgb(255, 124, 124)'}): {color:'white'}} className="register-form-pass-con-2">Your password must have atleast one
                    <ul className="register-form-pass-constrains-sub">
                      <li style={pass.length>0 ? (VerifyCon2_1(pass)? {color:'rgb(124, 255, 124)'} : {color:'rgb(255, 124, 124)'}): {color:'white'}} className="register-form-pass-con-2-1">Number *</li>
                      <li style={pass.length>0 ? (VerifyCon2_2(pass)? {color:'rgb(124, 255, 124)'} : {color:'rgb(255, 124, 124)'}): {color:'white'}} className="register-form-pass-con-2-2">Uppercase alphabet *</li>
                      <li style={pass.length>0 ? (VerifyCon2_3(pass)? {color:'rgb(124, 255, 124)'} : {color:'rgb(255, 124, 124)'}): {color:'white'}} className="register-form-pass-con-2-3">Lowercase alphabet *</li>
                      <li style={pass.length>0 ? (VerifyCon2_4(pass)? {color:'rgb(124, 255, 124)'} : {color:'rgb(255, 124, 124)'}): {color:'white'}} className="register-form-pass-con-2-4">Special characters *</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <input
                  className='register-form-repass'
                  type="password"
                  placeholder="Re Enter your password"
                  minLength='8'
                  maxLength='16'
                  alphabet='A-Za-z0-9+_%@!$*~-'
                  requiredClasses='[A-Z][a-z][0-9][+_%@!$*~-]'
                  requiredClassCount='3'
                  value={rePass}
                  onChange={(e) => setRePass(e.target.value)}
                  style={rePass.length>0 ? (VerifyRePass(pass, rePass) ? {backgroundColor:'rgb(235, 255, 235)'} : {backgroundColor:'rgb(255, 235, 235)'}) : null}
                />
              </li>
          </ul>
          <input className='register-form-submitbtn' type="submit" />
        </form>
      </div>
    </div>
  )
}

export default Register