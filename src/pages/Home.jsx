import React from 'react'
import Main from '../components/section/Main'
import Today from '../components/contents/Today'
import Developer from '../components/contents/Developer'
import VideoSlider from '../components/videos/VideoSlider'

import { reactbText } from '../data/reactb'
import { jsbText } from '../data/jsb'
import { vueText } from '../data/vue'
import { webserverText } from '../data/webserver'
import { developerText } from '../data/developer';
import { todayText } from '../data/today';

const Home = () => {
  return (
    <Main title='Youtube' description='코딩애플 유튜버 사이트에 오신 것을 환영합니다.'>
      <Today videos={todayText} id='today' />
      <Developer videos={developerText} title='👨‍💻 추천 개발자를 소개합니다.' id='developer' />
      <VideoSlider videos={reactbText} title='리액트 기초 : 블로그 프로젝트 만들기' id='reactb' />
      <VideoSlider videos={jsbText} title='웹개발로 배우는 자바스크립트 기초' id='jsb' />
      <VideoSlider videos={vueText} title='Vue 로 만드는 직방 / 인스타그램 웹앱' id='vue' />
      <VideoSlider videos={webserverText} title='2시간만에 웹서버 쉽게 개발하기 (Node.js + MongoDB)' id='webserver' />
    </Main>
  )
}

export default Home
