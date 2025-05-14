import React, { useEffect } from 'react'
import './intro.css';



const Intro = () => {
  useEffect(() => {
    const element = document.getElementById("row");

    element.addEventListener("mousemove", (e) => {
      const { x, y } = element.getBoundingClientRect();
      element.style.setProperty("--x", e.clientX - x);
      element.style.setProperty("--y", e.clientY - y);

    });
  }, []);

  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <div className="typewriter" style={{ width: '70%' }}>
          <h1>I'm Neetha Francis</h1>
        </div>
        <span> <span className='grey'>&lt; </span>Web Developer <span className='grey'>/&gt;</span></span>
        {/* <span className="introText">I'm <span className="introName">Neetha</span><br />Website Designer</span> */}
        {/* <p className="introPara">I am a skilled and passionate web developer with experience in creating visual<br /> appending and user-friendly websites. </p> */}
        {/* <Link><button className="btn">Hire Me</button></Link> */}
        <a href={require("../../assets/Resume_neethaFrancis.pdf")} download="neetha_francis.pdf">
          <button className="btn">Hire Me</button>
        </a>
      </div>
      <div id="row">

      </div>
      {/* <img src={bg} alt="profile" className="bg"/> */}
    </section>

  )
}

export default Intro;
