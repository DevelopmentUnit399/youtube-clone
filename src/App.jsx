import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Video from './Pages/Video/Video'
import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './Components/ScrollToTop/ScrollToTop'

const App = () => {

  const [sidebar, setSidebar] = useState(false)

  return (
    <div>
      <Navbar setSidebar={setSidebar} />
      <ScrollToTop />
      <Routes>
        <Route path='/' strict element={<Home sidebar={sidebar}/>} />
        <Route path='/video/:categoryId/:videoId' element={<Video />} />
      </Routes>
    </div>
  )
}

export default App