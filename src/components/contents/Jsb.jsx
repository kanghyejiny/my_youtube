import React from 'react'

import { jsbText } from '../../data/jsb'
import { Link } from 'react-router-dom'

const Jsb = () => {
  return (
    <section id='jsb'>
      <h2>웹개발로 배우는 자바스크립트 기초</h2>
      <div className='video__inner'>
        {jsbText.map((video, key) => (
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

export default Jsb
