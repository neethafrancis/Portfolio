import React from 'react'
import './navbar.css'
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar">
        {/* <img width="104px" src={logo} alt="Logo" /> */}
        <div className="desktopMenu">
           <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link> 
           <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>About</Link>
           <Link activeClass="active" to="works" spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Project</Link>
        </div>
        <button className="desktopMenuBtn" onClick={() => {
          document.getElementById('contactPage').scrollIntoView();
        }}>
            Contact Me
        </button>
    </nav>
  )
}

export default Navbar