import React from 'react'
import { usersData } from '../../services/data/usersData';
import Author from '../author/Author';
import HoverUserCard from './HoverUserCard';
import './StoryPageUserCard.css'

function StoryPageUserCard({author, story}) {
  let userData= usersData.find((user)=> {return user.username===author? user: null})
  let profilePictureUrl= userData.profilePhotoUrl;

  let stringDate = story.postedDate;
  let date= new Date(stringDate);
  let month= date.toLocaleString('default', { month: 'long' });
  return (
    <div className='story-page-user-card-main-div'>
      <img style={{width: "50px", height: "50px", borderRadius: "50%"}} src={profilePictureUrl}></img>
      <div className='story-page-user-card-author-and-storydetail-div'>
        <Author authorName={author} />
        <p className='story-page-user-card-story-posteddate'>{month+" "+date.getDate()+" "+date.getFullYear()}</p>
      </div>
    </div>
  )
}

export default StoryPageUserCard