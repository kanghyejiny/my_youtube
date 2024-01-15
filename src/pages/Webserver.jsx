import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'

import VideoCard from '../components/videos/VideoCard'
import { webserverText } from '../data/webserver'

const Webserver = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  const webserverPageClass = loading ? 'isLoading' : 'isLoaded';
  return (
    <Main title='웹서버' description='웹서버 강의입니다.'>
      <section id='webserverPage' className={webserverPageClass}>
        <h2>2시간만에 웹서버 쉽게 개발하기 (Node.js + MongoDB)</h2>
        <div className='video__inner'>
          <VideoCard videos={webserverText} />
        </div>
      </section>
    </Main>
  )
}

export default Webserver
