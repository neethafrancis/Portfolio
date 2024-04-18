import React from 'react'
import './works.css';

const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My Projects</h2>
      <span className="worksDesc">Explore some of my recent works.</span>
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

export default Works