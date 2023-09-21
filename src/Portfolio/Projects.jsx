import React from "react";
import { useState } from "react";
import "../Style/CSS/project.css";
import '../Style/CSS/experience.css'
import wordpress from '../Style/wordpress.png'
import {DefaultPlayer as Video} from 'react-html5video'
import 'react-html5video/dist/styles.css'
import thum from '../Style/tumb.png'
import vid1 from '../Style/SportsPromo.mp4'

export default function Projects() {

  const projects = [
    {
      id: 1,
      title: "Employee management system",
      description: "Employee management is comprehensive and user-friendly application-based system designed to handle various aspects of employee management. It comprises two interconnected applications: one for employers to manage employee details and another for employees to mark attendance. It optimizes operations by securely storing and managing crucial employee data, fostering communication and coordination, and facilitating effective decision-making.",
      Duration: "Feb 2020 to Jan 2021",
      githubLink: "https://github.com/sushil7397/Employee_management_system",
    },
    {
      id: 2,
      title: "Voice based system for tourism website",
      description: "It is a voice-based tourism blogging website in which users can use voice commands to search for places and make quick decisions based on the shown results of famous places' images and reviews. The website is designed in such a way that users can easily navigate through any country, explore its cities, and search for the places they want to visit.",
      Duration: "May 2021 to Oct 2021",
      githubLink: "https://github.com/sushil7397/Voice-Based-Tours_and_Travel",
    },
    {
      id: 3,
      title: "Pacman Game",
      description: "Pacman is a classic arcade game that features Pacman navigating through a maze, eating pellets and avoiding ghosts. Power pellets can be collected to turn ghosts blue and eat them for extra points. The game has stood the test of time and remains a beloved classic in the gaming world.",
      Duration: "Jan 2022 to Jul 2022 ",
      githubLink: "https://github.com/sushil7397/Pacman_Game",
    },
    {
      id: 4,
      title: " Tracking charity donations using blockchain",
      description: "The development of a social network based on blockchain technology that can assist non-profit organizations is essential. All users of the platform will be able to view their accounts and an explanation of each donation made by the organization they support. Donors have every reason to fear that charitable funds will not reach people who really need them. The problem of mistrust of donors and overloading of funds can be solved by organizing an external database, records in which are recorded in the blockchain. Therefore, it is important to develop a social platform based on blockchain technology that can help non-profit organizations, foundations, volunteers, and social entrepreneurs in their work and make donation processes transparent and understandable for all parties. Blockchain will allow all users of the platform to see their accounts and a description of each payment of the organization it supports.",
      Duration: "Apr 2022 to Mar 2023",
      githubLink: "https://github.com/sushil7397/Tracking-charity-donation-using-blockchain",
    },
    {
      id: 5,
      title: "Password Generator using React",
      description: "Password Generator is application developed using the React framework, designed to provide users with a convenient tool for generating random and secure passwords based on their specified settings. With customizable options such as password length and character types, the app allows users to create passwords tailored to their specific needs. Additionally, the inclusion of a password strength meter provides a valuable assessment of the generated passwords, empowering users to make informed decisions and contribute to a safer online environment by utilizing stronger and more resilient passwords.",
      Duration: "Mar 2023 to May 2023",
      githubLink: "https://github.com/sushil7397/React-Password-Generator",
    },
    {
      id: 6,
      title: "Web based chat application",
      description: "A user-friendly, efficient chat platform connecting individuals across barriers. Seamlessly sign up, engage in real-time conversations, and foster energetic discussions. Perfect for personal and professional use, with multi-chatting features. Break barriers, foster connections – experience reliable and versatile messaging.",
      Duration: "Dec 2022 to Aug 2023 ",
      githubLink: "https://github.com/sushil7397/Web-ChatApp",
    },
  ];

  const [expandedIds, setExpandedIds] = useState([]);

  const toggleExpand = (projectId) => {
    setExpandedIds((prevIds) =>
      prevIds.includes(projectId)
        ? prevIds.filter((id) => id !== projectId)
        : [...prevIds, projectId]
    );
  };

  const isExpanded = (projectId) => expandedIds.includes(projectId);

  const getShortenedText = (text, projectId) => {
    if (isExpanded(projectId) || text.length <= 210) {
      return text;
    }
    if (text.length > 210) {
      return text.slice(0, 210) + "...";
    }

    return text;
  };

  const graphic=[
    {name:'Apple logo', link:'https://drive.google.com/file/d/1TgSrqb_UJfkIoJFnp61KF0J0efmT8Lhc/'},
    {name:'Blending design', link:'https://drive.google.com/file/d/1JI-soksyTuVw2rApZXkSK3AdoJQiYoGV/'},
    {name:'Interlock design', link:'https://drive.google.com/file/d/1v-JpGHd-DKbTsKqoPeTyj5m3g5I2NV1n/'},
    {name:'Disk Logo', link:'https://drive.google.com/file/d/1XoZJBvf-Zjc0xiiDj1o-mL5DScb29Cq4/'},
    {name:'view design', link:'https://drive.google.com/file/d/1A7agPfsvVancx1HmKR9vXWV6oTgrlETd/'},
    {name:'logo design', link:'https://drive.google.com/file/d/1Q4B5z53Igjdb7n3qKLXQ9CLdPuKYdAzj/'},
    {name:'Ring design', link:'https://drive.google.com/file/d/1zYDbVvzLugP146FzDbN6pzotbto4SWvr/'},
    {name:'Figma design', link:'https://drive.google.com/file/d/1992h7LNCAYGg7DNklm4_2cWupFuyCBcf/'},
  ];
  const photoshop=[
    {name:'H Character', link:'https://drive.google.com/file/d/1KoBAAeFr0KNkPcRBrARZSDgsmz5ZF8MP/view?usp=drive_link'}, 
    {name:'Branding Logo', link:'https://drive.google.com/file/d/1oPYiJANhMvVKuPZHN0vHVIMFFbS2nm5c/view?usp=drive_link'},
    {name:'Houseware logo', link:'https://drive.google.com/file/d/1arDUvPgM6_3fvPnpuZXNOsfy6IkueeQQ/view?usp=drive_link'},
    {name:'Banner Design', link:'https://drive.google.com/file/d/1EqzxfKqaMSzRZU_VxVCmqL9H1nkHzZfD/view?usp=drive_link'},
    {name:'CH Letter', link:'https://drive.google.com/file/d/1u3qDW9jVyWWtyphMPulwVaSxoEp9TN4j/view?usp=drive_link'},
    // {name:'Promotion1', link:'https://drive.google.com/file/d/1me7JMdL3VwZRC1nCWCT_OZe3uMJPUUa9/'},
    // {name:'Get Started', link:'https://drive.google.com/file/d/1gtXi_O16UHjG6wCNNErJDZl2truUG6xR/'},
  ];
  const editing=[
    {name:'Business Promotion', link:'https://drive.google.com/file/d/1nDP8y56LWsBQ7u3fPqhFdVTl3LJmRys_/'}, 
    {name:'Promote', link:'https://drive.google.com/file/d/1gHtgd-xuSZqrXidWYoOjKiHuH2XE208v/'},
    {name:'Startup Promotion', link:'https://drive.google.com/file/d/1tGvMfy3VT8tRheXkUdLNvFl6vrxVhFMB/'},
    {name:'Template', link:'https://drive.google.com/file/d/1bkBJcj0xk1A_QxEHxjva7R0a1ruMdq_B/'},
    {name:'InstaPost', link:'https://drive.google.com/file/d/1XBzX7jKS-x1MWm4jIIgrWbdKgzAqnxYA/'},
    {name:'Promotion', link:'https://drive.google.com/file/d/1Y87UHSRGpRYEyVRXExVleLJ-d4tHmtXj/'},
    {name:'Promotion1', link:'https://drive.google.com/file/d/1me7JMdL3VwZRC1nCWCT_OZe3uMJPUUa9/'},
    {name:'Get Started', link:'https://drive.google.com/file/d/1gtXi_O16UHjG6wCNNErJDZl2truUG6xR/'},
    {name:'Chhole Bhature Ads', link:'https://drive.google.com/file/d/1VHvXzWSnN0saiRST-i41QpRDFvtgaZUs/'},

  ];
  const containerStyle = {
    marginTop: '100px',
  };
  const imgstyle={
    width:'50px',
    paddingRight:'10px',
  }
  const containerStyle2 = {
    marginTop: '100px', 
    display: 'flex',
    alignItems: 'center',
    fontsize:'2rem',
    placeContent: 'center'
  };
  


  return (
    <section id="Projects">
      <div className="projecthead">
        <h2 className="projecth2">Projects</h2> 
        <h3 className="projecth3">Web Developer</h3>

      </div>
      <div className="cards" >
        {projects.map((project) => (
          <div style={{ color: 'black' }} className="card" key={project.id}>
            <h3 style={{ textAlign: "justify" }} className="card-title">{project.title}</h3>
            <p  className="card-description">
              {getShortenedText(project.description, project.id)}
              {project.description.length > 200 && (
                <button
                  onClick={() => toggleExpand(project.id)}
                  className="read-more-button"
                >
                  {isExpanded(project.id) ? "Read Less" : "Read More"}
                </button>
              )}
            </p>
            <p>Duration: {project.Duration}</p>
            <p>
              <a href={project.githubLink}>
                GitHub
              </a>
            </p>
          </div>
        ))}
      </div>
      <h3 style={containerStyle} className="projecth3">Graphic Designing</h3>
      <div class="skills"> 
        <div className="frontend card-heading">
        <div className="TabHeading"> Illustrator</div>
          <div className="cardskill">
              {graphic.map(design=>(
                <div className="design-button">
                  <div className="align-center">
                      <a target='_blank' rel="noreferrer" href={design.link}>
                        <div className="skill-name">
                        <span class="skillhead">{design.name}</span>
                        </div>
                      </a>
                    </div>
                  </div>
                  ))}
          </div>
        </div>
        <div className="frontend card-heading">
          <div className="TabHeading"> Photoshop</div>
            <div className="cardskill">
                {photoshop.map(design=>(
                  <div className="design-button">
                    <div className="align-center">
                        <a target='_blank' rel="noreferrer" href={design.link}>
                          <div className="skill-name">
                          <span class="skillhead">{design.name}</span>
                          </div>
                        </a>
                      </div>
                    </div>
                    ))}
            </div>
          </div>
        <div className="frontend card-heading">
          <div className="TabHeading"> Canva</div>
            <div className="cardskill">
                {editing.map(design=>(
                  <div className="design-button">
                    <div className="align-center">
                        <a target='_blank' rel="noreferrer" href={design.link}>
                          <div className="skill-name">
                          <span class="skillhead">{design.name}</span>
                          </div>
                        </a>
                      </div>
                    </div>
                    ))}
            </div>
        </div>

        
        </div>
      
        <h3 style={containerStyle2} className="projecth3"><img style={imgstyle} src={wordpress} alt="" srcset="" /> Wordpress Design</h3>
        
        <div className="skills"> 
        <div style={{width:'500px'}} className="frontend1 card-heading">
          <div className="TabHeading"> Sports Club &nbsp;&nbsp;<a style={{background:'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(138,138,205,0.5999649859943977) 0%, rgba(0,212,255,1) 100%)', border: 'none',borderRadius:'1rem',padding:'0 10px',fontSize:'1.1rem'}} href="https://sportsclub.42web.io/?page_id=7">&nbsp;View&nbsp;</a></div>
            <Video autoPlay loop poster={thum}>
                  <source src={vid1} type="video/mp4"/>
            </Video>
          </div>

        
        </div>

        
    </section>

  );
};

