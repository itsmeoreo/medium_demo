import React from 'react'
import { usersData } from '../../services/data/usersData'
import './HoverUserCard.css'

function HoverUserCard({author}) {

  let user= usersData.find((user)=>{
    return user.username === author ? user : null;
  })

  return (
    <div className='hover-user-card'>
      <div className='hover-user-card-dp-name'>
        <img style={{width: "55px", height: "55px", borderRadius: "50%"}} src={user.profilePhotoUrl}></img>
        <h4 className='hover-user-card-author-name'><b>{author}</b></h4>
      </div>
      <p className='hover-user-card-author-bio'>{user.bio}</p>
    </div>
  )
}

export default HoverUserCard