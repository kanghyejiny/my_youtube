import React from 'react'
import Main from '../components/section/Main'
import Today from '../components/contents/Today'
import Developer from '../components/contents/Developer'
import Reactb from '../components/contents/Reactb'
import Jsb from '../components/contents/Jsb'
import Vue from '../components/contents/Vue'
import Webserver from '../components/contents/Webserver'

const Home = () => {
  return (
    <Main title='Youtube' description='코딩애플 유튜버 사이트에 오신 것을 환영합니다.'>
      <Today />
      <Developer />
      <Reactb />
      <Jsb />
      <Vue />
      <Webserver />
    </Main>
  )
}

export default Home
