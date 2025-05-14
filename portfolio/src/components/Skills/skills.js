import React from 'react'
import './skills.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import img from'../../assets/pic4.jpg';

const Skills = () => {
    return (
        <section id="skills">
            <span className="skillTitle">About Me</span>
            <span className="skillDesc">I am a skilled and passionate web developer with experience in creating visually<br /> appealing and user-friendly websites.</span>
 
            <div className='column-about'>
                <div style={{ width: '50%', marginTop: '5rem'}}>
                    <Accordion sx={{
                        backgroundColor: '#4a4e69', color: '#eae0d5', '&:hover': {
                            background: "#eae0d5",
                            color: '#4a4e69'
                        },
                    }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            What I'm good at..
                        </AccordionSummary>
                        <AccordionDetails>
                            <p>ReactJs</p>
                            <p>JavaScript</p>
                            <p>HTML5</p>
                            <p>CSS</p>
                            <p>Python</p>
                        </AccordionDetails>
                    </Accordion >
                    <Accordion sx={{
                        backgroundColor: '#4a4e69', color: '#eae0d5', '&:hover': {
                            background: "#eae0d5",
                            color: '#4a4e69'
                        },
                    }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2-content"
                            id="panel2-header"
                        >
                            Other than coding, Im also interested in...
                        </AccordionSummary>
                        <AccordionDetails>

                            <p>Reading Novels</p>
                            <p>Playing badminton</p>
                            <p>Photography</p>
                            <p>Travelling</p>

                        </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{
                        backgroundColor: '#4a4e69', color: '#eae0d5', '&:hover': {
                            background: "#eae0d5",
                            color: '#4a4e69'
                        },
                    }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3-content"
                            id="panel3-header"
                        >
                            My Academic Qualifications..
                        </AccordionSummary>
                        <AccordionDetails>
                            Currently pursuing my Bachelor's in Computer Science Engineering
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div >
                    <img className='image-container' src={img} alt="image"></img>
                </div>
            </div>
        </section>
    )
}

export default Skills
