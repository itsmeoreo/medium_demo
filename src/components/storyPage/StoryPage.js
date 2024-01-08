import React from 'react'
import { stories } from '../../services/data/Data'
import HoverUserCard from '../card/HoverUserCard';
import StoryPageUserCard from '../card/StoryPageUserCard';
import { StoryAppBar } from '../navbar/Navbar';
import './StoryPage.css'

function StoryPage({author, storyId}) {
  let authorStories= stories[author];

  function findStory() {
    for (let i = 0; i < authorStories.length; i++) {
      const tempStory= authorStories[i];
      if (tempStory.storyId === storyId)
        return authorStories[i]
    }
    return null;
  }
  let story= findStory();
  let subTopics= [];
  subTopics= story.subTopics;

  return (
    <>
      <StoryAppBar />
      <div className='story-page-main-div'>
        <h2 className='story-page-heading'>{story.storyTopic}</h2>
        <StoryPageUserCard author={author} story={story} />
        <div className='story-page-main-story'>
          {story.intro != null ? <p className='story-page-main-story-p'>{story.intro}</p> : ''}
          {story.subTopics != undefined ? story.subTopics.map((subTopic, index)=>(
            <div key={index}>
              <h3 className='story-page-main-story-subtopics'>{subTopic}</h3>
              <p className='story-page-main-story-p'>{story[subTopic]}</p>
            </ div>
          ))
          :
          story.subject.map((line)=>(
            <p className='story-page-main-story-p'>{line}</p>
          ))
        }
        <hr className='story-page-main-story-conclution-divider' />
        <p className='story-page-main-story-p'>{story.conclution}</p>
        </div>
      </div>
    </>
  )
}

export default StoryPage