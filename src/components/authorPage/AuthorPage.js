import React from 'react'
import { usersData } from '../../services/data/usersData'
import { StoryAppBar } from '../navbar/Navbar'
import './AuthorPage.css'
import StoryCard from '../card/StoryCard'
import { stories } from '../../services/data/Data'
import { AuthorPageFooter } from '../footer/Footer'

function AuthorPage({author}) {

  let authorDetails= usersData.find((user)=> user.username=== author);
  let authorStories= stories[author];

  return (
    <div>
      <StoryAppBar />
      <div className='author-page'>
        <div className='author-page-main-div'>
          <img className='author-cover-image' src={authorDetails.coverImageUrl}></img>
          <h2 style={{margin: "40px 0"}}>{authorDetails.name}</h2>
          {authorStories.map((story)=>(
            <StoryCard domLink={story.domLink} author={author} storyid={story.storyId} storyIntro={story.intro}/>
          ))}
        </div>
        <div className='author-page-main-div'>
          <div className='author-div'>
            <img style={{width: "150px", height: "150px", borderRadius: "50%"}} src={authorDetails.profilePhotoUrl} />
            <h4 className='author-name'>{authorDetails.name}</h4>
            <p className='author-name'>@{authorDetails.username}</p>
            <p className='author-bio'>{authorDetails.bio}</p>
            <div className='footer-div-in-author-page'>
              <AuthorPageFooter />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthorPage