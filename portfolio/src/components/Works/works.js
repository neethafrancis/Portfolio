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
              <h2> Text Extraction and Recognition from Certificates </h2>
              <p style={{marginTop: '2rem'}}>This project tackles automated certificate data extraction</p>
            </div>
            <div className='back'>
            <p> PaddleOCR converts scanned images into text, then an annotation process pinpoints crucial details like names, dates, and awards. This labeled data trains a Named Entity Recognition (NER) model to categorize information within the extracted text.  By automating data capture and eliminating manual errors, the project ensures reliable, structured information storage for easy retrieval.</p>
            <a href='https://gitlab.com/neethafrancis26/text-extractor-and-verifier'>Know more about it</a>
            </div>
          </div>
        </div>

        <div className='container ml'>
          <div className='card'>
            <div className='front'>
              <h2>Autism Detection</h2>
              <p style={{marginTop: '2rem'}}>An ongoing project that tackles autism spectrum disorder (ASD) detection.</p>
            </div>
            <div className='back'>
              I leveraged machine learning to analyze child behavior patterns, aiming to identify potential signs of ASD and facilitate early intervention.
              <p>Implemented an interactive ReactJS website where users can upload an image and complete a questionnaire to receive a preliminary ASD risk assessment.</p>
              <a href='https://github.com/neethafrancis/ASD'>Know more about it</a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Works