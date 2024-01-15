import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'

import VideoCard from '../components/videos/VideoCard'
import { vueText } from '../data/vue'

const Vue = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  const vuePageClass = loading ? 'isLoading' : 'isLoaded';
  return (
    <Main title='vue' description='vue 강의입니다.'>
      <section id='vuePage' className={vuePageClass}>
        <h2>Vue 로 만드는 직방 / 인스타그램 웹앱</h2>
        <div className='video__inner'>
          <VideoCard videos={vueText} />
        </div>
      </section>
    </Main>
  )
}

export default Vue
