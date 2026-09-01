import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Video from './Pages/Video/Video'
import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './Components/ScrollToTop/ScrollToTop'
import Search from './Components/Search/Search'

const App = () => {

  const [sidebar, setSidebar] = useState(false)
  const [category, setCategory] = useState(0)

  return (
    <div>
      <Navbar setSidebar={setSidebar} />
      <ScrollToTop />
      <Routes>
        <Route path='/' strict element={<Home sidebar={sidebar} category={category} setCategory={setCategory} />} />
        <Route path='/video/:categoryId/:videoId' element={<Video />} />
        <Route path='/search/:query' element={<Search sidebar={sidebar} category={category} setCategory={setCategory} />} />
      </Routes>
    </div>
  )
}

export default App