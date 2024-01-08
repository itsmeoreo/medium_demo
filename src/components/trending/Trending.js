import React from 'react'
import { Link } from 'react-router-dom'
import TrendingStoryCard from '../card/StoryCard'
import './Trending.css'

function Trending() {
  return (
    <div className='trending-section'>
      <div className='storycard-#1-div'>
        <div className='hashtag-storycard-div'>
          <h2>#1</h2>
          <TrendingStoryCard domLink='/thebigroundegg/thebigroundeggStories@2' author='thebigroundegg' storyid='thebigroundeggStories@2' />
        </div>
      </div>
      <div className='storycard-#2#3-div'>
        <div className='hashtag-storycard-div'>
          <h2>#2</h2>
          <TrendingStoryCard domLink='/thebigroundegg/thebigroundeggStories@1' author='thebigroundegg' storyid='thebigroundeggStories@1'/>
        </div>
        <div className='hashtag-storycard-div'>
          <h2>#3</h2>
          <TrendingStoryCard domLink='/theofficialmicrosoftdesign/theofficialmicrosoftdesignStories@1' author='theofficialmicrosoftdesign' storyid='theofficialmicrosoftdesignStories@1' />
        </div>
      </div>
      <div className='storycard-#4#5-div'>
        <div className='hashtag-storycard-div'>
          <h2>#4</h2>
          <TrendingStoryCard domLink='/theofficialtomzimber/theofficialtomzimberStories@1' author='theofficialtomzimber' storyid='theofficialtomzimberStories@1' />
        </div>
        <div className='hashtag-storycard-div'>
          <h2>#5</h2>
          <TrendingStoryCard domLink='/theofficialtomzimber/theofficialtomzimberStories@2' author='theofficialtomzimber' storyid='theofficialtomzimberStories@2' />
        </div>
      </div>
    </div>
  )
}

export default Trending