import React from 'react'
import Header from '../header/Header'
import {ButtonAppBar} from '../navbar/Navbar'
import Trending from '../trending/Trending'
import './Home.css'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { stories } from '../../services/data/Data'
import StoryCard from'../card/StoryCard'
import StorySection from '../storySection/StorySection'
import { Footer } from '../footer/Footer'

function Home() {
  let allStories= Object.values(stories).flat();
  console.log(allStories);
  return (
    <div className='home'>
      <ButtonAppBar />
      <Header />
      <div className='home-page-main-div'>
        <div className='trending-wording'>
          <p>Trending on sodium</p>
          <TrendingUpIcon />
        </div>
        <Trending />
        <div className='home-page-story-footer-div'>
          <StorySection allStories={allStories} />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Home