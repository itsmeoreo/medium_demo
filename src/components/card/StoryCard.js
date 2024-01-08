import React from 'react'
import './StoryCard.css'
import Author from '../author/Author'
import { Link } from 'react-router-dom'
import { usersData } from '../../services/data/usersData'
import { stories } from '../../services/data/Data'

function TrendingStoryCard({domLink, author, storyid, storyIntro}) {

  let user= usersData.find((user)=>{
    return user.username === author ? user : null;
  })
  let authorStories= stories[author];
  let story= authorStories.find((story)=> (
    story.storyId=== storyid
  ));

  let date = story.postedDate;
  // let date= new Date(stringDate);
  console.log(date);
  let month= date.toLocaleString('default', { month: 'long' });;

  return (
    <div className='trending-storycard'>
      <div className='trending-storycard-image-author-div'>
        <img style={{width: "23px", height: "23px", borderRadius: "25%", marginRight: "10px"}} src={user.profilePhotoUrl} />
        <Author authorName={author} />
      </div>
      <Link className='trending-storycard-link' to={domLink}><h3 style={{margin: "10px 0 10px 0"}}>{story.storyTopic}</h3></Link>
      <p style={{color: "grey"}}>{month} {date.getDate()}</p>
      {storyIntro != null ?  <p>{storyIntro.slice(0,150)}</p> : null}
    </div>
  )
}

export default TrendingStoryCard