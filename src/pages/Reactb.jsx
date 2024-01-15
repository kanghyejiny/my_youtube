import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'

import VideoCard from '../components/videos/VideoCard'
import { reactbText } from '../data/reactb'

const Reactb = () => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  const reactbPageClass = loading ? 'isLoading' : 'isLoaded';

  return (
    <Main title='React' description='리액트 기초 강의입니다.'>
      <section id='reactbPage' className={reactbPageClass}>
        <h2>리액트 기초 : 블로그 프로젝트 만들기</h2>
        <div className='video__inner'>
          <VideoCard videos={reactbText} />
        </div>
      </section>
    </Main>
  )
}

export default Reactb
