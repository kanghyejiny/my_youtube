import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Today from './pages/Today'
import Developer from './pages/Developer'
import Reactb from './pages/Reactb'
import Jsb from './pages/Jsb'
import Vue from './pages/Vue'
import Webserver from './pages/Webserver'
import Youtube from './pages/Youtube'
import Channel from './pages/Channel'
import Video from './pages/Video'
import Search from './pages/Search'
import Not from './pages/Not'
import Header from './components/section/Header'
import Main from './components/section/Main'
import Footer from './components/section/Footer'


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Main>
        <Routes>
          <Route path='/' element={<Home/>} /> {/* 메인페이지 */}
          <Route path='/today' element={<Today/>} />
          <Route path='/developer' element={<Developer/>} />
          <Route path='/reactb' element={<Reactb/>} />
          <Route path='/jsb' element={<Jsb/>} />
          <Route path='/vue' element={<Vue/>} />
          <Route path='/webserver' element={<Webserver/>} />
          <Route path='/youtube' element={<Youtube/>} />
          <Route path='/channel/:channelID' element={<Channel/>} />
          <Route path='/video/:videoID' element={<Video/>} />
          <Route path='/search/:searchID' element={<Search/>} />
          <Route path='/*' element={<Not/>} />
        </Routes>
      </Main>
      <Footer />
    </BrowserRouter>
  )
}

export default App