import React from 'react'
import "./index.css";
import Navbar from './components/Navbar/Navbar';
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home';
import Trending from './pages/Trending/Trending';
import Coin from './pages/Coin/Coin';
import About from './pages/About/About';
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
         <Route path='/coin/:coinId' element={<Coin/>}/>
          <Route path='/trending' element={<Trending/>}/>
          <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
  )
}

export default App