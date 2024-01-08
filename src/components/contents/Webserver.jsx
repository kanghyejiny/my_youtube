import React from 'react'

import { webserverText } from '../../data/webserver'
import { Link } from 'react-router-dom'

const Webserver = () => {
  return (
    <section id='webserver'>
      <h2>2시간만에 웹서버 쉽게 개발하기 (Node.js + MongoDB)</h2>
      <div className='video__inner'>
        {webserverText.map((video, key) => (
          <div className='video' key={key}>
            <div className='video__thumb play__icon'>
              <Link to={`video/${video.videoId}`}>
                <img src={video.img} alt={video.title} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Webserver
