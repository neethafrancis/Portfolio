import React from 'react'
import './footer.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import Tooltip from '@mui/material/Tooltip';
const Footer = () => {
  return (
    <footer className="footer">
        <div>
            <a href="https://github.com/neethafrancis/"><GitHubIcon></GitHubIcon></a>
            <a href="https://www.linkedin.com/in/neetha-francis-584673206/"><LinkedInIcon></LinkedInIcon></a>
            <Tooltip title="neethafrancis26@gmail.com">
            <EmailIcon />
            </Tooltip>
        </div>
        Copyright &#169; 2024 Neetha Francis. All rights received.
    </footer>
  )
}

export default Footer