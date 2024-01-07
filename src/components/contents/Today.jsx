import React from 'react'
import { todayText } from '../../data/today'
import { Link } from 'react-router-dom'

const Today = () => {
  return (
    <div>
      <section id='today'>
        <div className='today__inner'>
          <div className="today__thumb play__icon" >
            <Link to={todayText[5].page}>
            <img src={todayText[5].img} alt={todayText.title} />
            </Link>
          </div>
          <div className="today__text">
            <span className='today'>today!</span>
            <h3 className='title'>
              <Link to={todayText[5].page}>{todayText[5].title}</Link>
            </h3>
            <p className='desc'>{todayText[5].desc}</p>
            <div className='info'>
              <span className='author'>
                <Link to={`/channel/${todayText[5].channelId}`}>
                  {todayText[5].author}
                </Link>
              </span>
              <span className='date'>{todayText[5].date}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Today
