import React from 'react'
import { Link } from 'react-router-dom';
import { usersData } from '../../services/data/usersData';
import HoverUserCard from '../card/HoverUserCard'
import './Author.css'

function Author({authorName}) {

  let authorDetails= usersData.find((user)=> user.username=== authorName);
  let authorPageUrl= authorDetails.domLink;

  return (
    <div>
      <button className='author-btn'><Link style={{textDecoration:"none", color:"black"}} to={authorPageUrl}>{authorName}</Link></button>
      <HoverUserCard author={authorName} />
    </div>
  )
}

export default Author