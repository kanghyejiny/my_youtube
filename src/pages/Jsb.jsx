import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'

import VideoCard from '../components/videos/VideoCard'
import { jsbText } from '../data/jsb'

const Jsb = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  const jsbPageClass = loading ? 'isLoading' : 'isLoaded';

  return (
    <Main title='JavaScript' description='자바스크립트 기초 강의입니다.'>
      <section id='jsbPage' className={jsbPageClass}>
        <h2>웹개발로 배우는 자바스크립트 기초</h2>
        <div className='video__inner'>
          <VideoCard videos={jsbText} />
        </div>
      </section>
    </Main>
  )
}

export default Jsb
