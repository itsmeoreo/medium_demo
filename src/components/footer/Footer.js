import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <h2>Stay curious.</h2>
      <p>Discover stories, thinking, and expertise from writers on any topic.</p>
      <div className='footer-anchors'>
        <a>Help</a>
        <a>Status</a>
        <a>About</a>
        <a>Careers</a>
        <a>Blog</a>
        <a>Privacy</a>
        <a>Terms</a>
        <a>Text to Speech</a>
        <a>Teams</a>
      </div>
    </div>
  )
}

function AuthorPageFooter(){
  return(
    <div className='footer-anchors'>
        <a>Help</a>
        <a>Status</a>
        <a>About</a>
        <a>Careers</a>
        <a>Blog</a>
        <a>Privacy</a>
        <a>Terms</a>
        <a>Text to Speech</a>
        <a>Teams</a>
      </div>
  )
}

export {Footer, AuthorPageFooter};