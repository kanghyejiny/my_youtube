import React from 'react'

import { vueText } from '../../data/vue'
import { Link } from 'react-router-dom'

const Vue = () => {
  return (
    <section id='vue'>
      <h2>Vue 로 만드는 직방 / 인스타그램 웹앱</h2>
      <div className='video__inner'>
        {vueText.map((video, key) => (
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

export default Vue
