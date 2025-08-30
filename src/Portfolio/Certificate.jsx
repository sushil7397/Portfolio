import React from 'react'
// import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {   faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import '../Style/CSS/certificate.css'

const Certificate = () => {
    const Certificate = [
      {
        id: 1,
        title: ' Programming with Everybody Python',
        Issuedby:' Coursera',
        Date: ' Jun 15, 2019',
        certificateLink: 'https://drive.google.com/file/d/1cPI_7Ea9CaibfC-dkL-rh5cfzBNSfFp2/view?usp=sharing',
      },
      {
        id: 2,
        title: ' Python Data Structures',
        Issuedby:' Coursera',
        Date: ' Jun 17, 2020',
        certificateLink: 'https://drive.google.com/file/d/1hf3enhiAypav73E62KROEwdP7Mbfkmsm/view?usp=sharing',
      },
      {
        id: 3,
        title: ' Programming Foundations with JavaScript, HTML and CSS',
        Issuedby:' Coursera',
        Date: ' Oct 27, 2021',
        certificateLink: 'https://drive.google.com/file/d/1cPI_7Ea9CaibfC-dkL-rh5cfzBNSfFp2/view?usp=sharing',
      },
      {
        id: 4,
        title: ' Accenture Data Analytics and Visualization Virtual Experience',
        Issuedby:' Forage',
        Date: ' May 23, 2023',
        certificateLink: 'https://drive.google.com/file/d/1VkqNSXi-eHH6UBI667Uf37nQPsuxSYPA/view?usp=share_link',
      },
      {
        id: 5,
        title: ' TATA Data Visualisation: Empowering Business with Effective Insights',
        Issuedby:' Forage',
        Date: ' May 21, 2023',
        certificateLink: 'https://drive.google.com/file/d/1x92gyBQYvu9k4vHqe7_IqwGH3VJHBIAL/view?usp=share_link',
      },
      {
        id: 6,
        title: ' Walmart Advanced Software Engineering Virtual Experience Program',
        Issuedby:' Forage',
        Date: ' Jun 13, 2023',
        certificateLink: 'https://drive.google.com/open?id=1t89-oGZ8VVgJQqnvPJhtEw9aXMkMCE_3&usp=drive_copy',
      },
    ];

const frontend=[
  {skill:"React Js",experience:'Intermediate'},{skill:"HTML",experience:'Adavance'},{skill:"CSS",experience:'Adavance'},{skill:"JavaScript",experience:'Intermediate'},
];
const backend=[
  {skill:"PostgreSQL",experience:'Intermediate'},{skill:"DJango",experience:'Intermediate'},{skill:"Tableau",experience:'Beginner'},{skill:"Python",experience:'Intermediate'},{skill:"MongoDB",experience:'Beginner'},{skill:"Java",experience:'Intermediate'},
];

const other=[
  {skill:"Web Developer",experience:'Intermediate'},{skill:"OOPS",experience:'Intermediate'},{skill:"Editing",experience:'Intermediate'},{skill:"Documentation",experience:'Advance'},{skill:"Ubuntu",experience:'Intermediate'},{skill:"Nohup",experience:'Intermediate'},{skill:"Cronjob",experience:'Intermediate'}
];

  return (
    <section id='Certificates'>
      <div className="CertHead">
        <h3 className='Certh3'>Certificate</h3> 
        <h4 className='Certh4'>My Certification</h4>
      </div>
    <div className="certs">
        {Certificate.map(certificate => (
          <div className="cert" key={certificate.id}>
            <h3 className="cert-title">Title:{certificate.title}</h3>
            <p>Issued By:{certificate.Issuedby}</p>
            <p> Date: 
            {certificate.Date}
            </p>
              <a target='_blank' rel="noreferrer" className="certurl" href={certificate.certificateLink}>
                View Certificate
              </a>
          </div>
        ))}
      </div>

<div className="h2h3">
  <h2 className='skillHead'>Skills</h2>
  <h3 className='Technical'>My Technical SKill</h3>

</div>
      <div className="skills"> 
        <div className="frontend card-heading">
          <div className="TabHeading"> Frontend</div>
          <div className="cardskill">
              {frontend.map((skills, idx) =>(
                <div className="skill-button" key={skills.skill + idx}>
                  <div className="align">
                    <FontAwesomeIcon className='icon' icon={  faCircleCheck} />
                    <div className="skill-name">
                      <span className="skillhead">{skills.skill}</span>
                      <div className="exp">{skills.experience}</div>
                    </div>

                  </div>
                </div>
                  ))}
          </div>
        </div>
        <div className="backend card-heading">
        <div className="TabHeading"> Backend</div>
        <div className="cardskill">
          {backend.map((skills, idx) =>(
            <div className="skill-button" key={skills.skill + idx}>
              <div className="align">
                    <FontAwesomeIcon className='icon' icon={  faCircleCheck} />
                    <div className="skill-name">
                      <span className="skillhead">{skills.skill}</span>
                      <div className="exp">{skills.experience}</div>
                    </div>

                  </div>
              </div>
              ))}
        </div>
        </div>
        
        <div className="other card-heading">
        <div className="TabHeading"> Others</div>
        <div className="cardskill">

          {other.map((skills, idx) =>(
            <div className="skill-button" key={skills.skill + idx}>
              <div className="align">
                    <FontAwesomeIcon className='icon' icon={  faCircleCheck} />
                    <div className="skill-name">
                      <span className="skillhead">{skills.skill}</span>
                      <div className="exp">{skills.experience}</div>
                    </div>

                  </div>
              </div>
              ))}
        </div>
        </div>
        
        </div>

      </section>

  );
};

export default Certificate;