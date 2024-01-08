import React from 'react'

import { reactbText } from '../../data/reactb'
import { Link } from 'react-router-dom'

const Reactb = () => {
  return (
    <section id='reactb'>
      <h2>리액트 기초 : 블로그 프로젝트 만들기</h2>
      <div className='video__inner'>
        {reactbText.map((video, key) => (
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

export default Reactb
