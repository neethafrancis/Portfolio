import React from 'react'
import './works.css';

const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My Projects</h2>
      <span className="worksDesc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley o</span>
      <div className='column'>

        <div className='container'>
          <div className='card'>
            <div className='front'>
              front of card
            </div>
            <div className='back'>
              back of card
            </div>
          </div>
        </div>

        <div className='container'>
          <div className='card'>
          <div className='front'>
          front of card
          </div>
          <div className='back'>
            back of card
          </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Works