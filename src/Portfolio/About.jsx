import React from 'react'
import img from '../Style/about.jpg'
import {Link} from 'react-router-dom'
import '../Style/CSS/about.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faBriefcase, faArchive, faFileAlt } from '@fortawesome/free-solid-svg-icons';
const About = ({ fileUrl, fileName }) => {

    const intro={
        color:'#bfbfbf'
    };
    const handleDownload = () => {
        fetch(fileUrl)
          .then(response => response.blob())
          .then(blob => {
            const url = window.URL.createObjectURL(new Blob([blob]));
            const a = document.createElement('a');
            a.href = 'https://github.com/sushil7397/Portfolio/files/12682694/Sushil.Yadav.pdf';
            a.download = 'CV.pdf';
            a.click();
            window.URL.revokeObjectURL(url);
          })
          .catch(error => {
            console.error('Error downloading the file:', error);
          });
      };
  return (
    <div className='MainSection' id='about'>
        <div className="aboutHead">
            <div className="about">
                About Me
            </div>
            <div className='intro' style={intro}>My Introduction</div>
        </div>
        <div className="Aboutsection">
            <img className='aboutimg' src={img} alt="" />
            <div className="sidesection">
                <div className="Cardfield">
                    <div className="field">
                        <FontAwesomeIcon className='icon' icon={faAward} />
                        Experience
                    <p className='fieldp'>2 Year+</p>
                    </div>
                    <div className="field">
                        
                        <FontAwesomeIcon icon={faBriefcase} />

                        Project
                    <p className='fieldp'>12+ projects</p>
                    </div>
                    <div className="field">
                        <FontAwesomeIcon icon={faArchive} />
                        Certificates
                    <p className='fieldp'>10+ Certificates </p>
                    </div>
                </div>
                
                <div className='PDesc'>
                    My Self Sushil Yadav and, I am eager to work with a reputed company in a good position where I can build my career while making a positive impact on the organization. I am a dependable and reliable individual who is always ready to learn and grow.
                </div>
                
                <button className='buttonStyle' ><Link className='buttonLink' to="#" download onClick={handleDownload}>Download CV  <FontAwesomeIcon className='icon' icon={faFileAlt} /> </Link></button>
            </div>
        </div>

        
    </div>
  )
}

export default About;