import Register from './auth/register/Register';
import Home from './components/home/Home';
import Login from './auth/login/Login';
import {Route, Routes} from 'react-router-dom';
import StoryPage from './components/storyPage/StoryPage';
import AuthorPage from './components/authorPage/AuthorPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/thebigroundegg/thebigroundeggStories@1' element={<StoryPage author={"thebigroundegg"} storyId={"thebigroundeggStories@1"} />} />
        <Route path='/thebigroundegg/thebigroundeggStories@2' element={<StoryPage author={"thebigroundegg"} storyId={"thebigroundeggStories@2"} />} />
        <Route path='/theofficialmicrosoftdesign/theofficialmicrosoftdesignStories@1' element={<StoryPage author={"theofficialmicrosoftdesign"} storyId={"theofficialmicrosoftdesignStories@1"} />} />
        <Route path='/theofficialtomzimber/theofficialtomzimberStories@1' element={<StoryPage author={"theofficialtomzimber"} storyId={"theofficialtomzimberStories@1"} />} />
        <Route path='/theofficialtomzimber/theofficialtomzimberStories@2' element={<StoryPage author={"theofficialtomzimber"} storyId={"theofficialtomzimberStories@2"} />} />
        <Route path='/thebigroundegg' element={<AuthorPage author={"thebigroundegg"} />} />
        <Route path='/theofficialmicrosoftdesign' element={<AuthorPage author={"theofficialmicrosoftdesign"} />} />
        <Route path='/theofficialtomzimber' element={<AuthorPage author={"theofficialtomzimber"} />} />
      </Routes>
    </div>
  );
}

export default App;
