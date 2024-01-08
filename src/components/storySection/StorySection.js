import React from 'react'
import './StorySection.css'
import StoryCard from'../card/StoryCard'

function StorySection({allStories}) {
  return (
    <div className='story-section'>
      {allStories.map((story)=>(
        <div key={story.storyId}>
          <StoryCard domLink={story.domLink} author={story.author} storyid={story.storyId} storyIntro={story.intro}/>
          <br />
        </div>
      ))}
    </div>
  )
}

export default StorySection