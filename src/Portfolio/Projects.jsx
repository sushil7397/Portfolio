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

  const officeproject = [
    {
      id: 1,
      title: "Page Speed Insight",
      description: "Designed a Django-based automation system to analyze website performance using Google PageSpeed Insights API. Allowed CSV uploads of URLs, fetching mobile & desktop performance metrics, and storing results in PostgreSQL. Added cron jobs for periodic re-checks and automated email reporting. Built visualization dashboards and summary tables for proactive optimization. Optimized concurrency and transaction handling for efficient large-scale data processing.",
      Duration: "Apr 2024 - Jan 2025",
      issuedBy: "Personal Project",
      techStack: "HTML, CSS, PostgreSQL, Django Framework, PageSpeed Insights API"
    },
    {
      id: 2,
      title: "Email Marketing Platform",
      description: "Developed a full-stack email marketing solution with campaign scheduling (timezone-aware), SMTP integration, delivery tracking, and spam detection. Built a lead management module with CSV uploads, email validation, deduplication, and multi-layer spam filtering. Frontend built with React (TypeScript, TanStack Query, RHF + Zod, Tailwind, shadcn/ui) for responsive, accessible design. Backend with Node.js (Express + TypeScript), PostgreSQL (self-hosted, Drizzle ORM) provided a type-safe API layer. Added background campaign scheduler with pause/resume and real-time spam/domain validation.",
      Duration: "Jun 2025 - Aug 2025",
      issuedBy: "Personal Project",
      techStack: "PostgreSQL, React, Node.js, Express"
    },
    {
      id: 3,
      title: "WordPress Plugin Development",
      description: "Designed multiple WordPress plugins for telecom and security: Random Phone Number Generator – Generates numbers for 190 countries using ISO codes and number ranges. Phone Number Verifier – Detects real vs fake phone numbers. Phone Number Lookup – Retrieves details like country, provider, and validation status. Scamlytics Integration – Detects spam IPs, provides risk scores, and identifies IP locations. These plugins improved number validation workflows and security for WordPress sites.",
      Duration: "2024 - Present",
      issuedBy: "Personal Project",
      techStack: "PHP, WordPress"
    },
    {
      id: 4,
      title: "Peeredge/Organic_data",
      description: "Developed the Organic_data Django app for efficient Call Detail Record (CDR) management. Featuring a comprehensive model with 74 fields, the app includes an enhanced admin class for advanced functionalities such as date filtering and revenue report generation. Integrated seamlessly into the CRM admin department, it manages customer and vendor revenue data effectively. The implementation of six scripts facilitates precise six-hour interval data retrieval, optimizing data organization. Automated scripts handle over 3 crore daily entries, ensuring optimal database performance through scheduled data purging. The app provides a user-friendly interface for CRM admins, facilitating seamless revenue tracking. Overall, the project demonstrates expertise in Django development, database optimization, and automation for a CDR management system",
      Duration: "Dec 2023 to Present",
      // githubLink: "https://github.com/sushil7397/Employee_management_system",
    },
    {
      id: 5,
      title: "Decoder",
      description: "This Django-based web application allows users to upload Stir/Shaken files containing URLs pointing to digital certificates. The backend processes these files, downloading certificates, and extracting relevant information like common name, organization, and validity dates. It then writes this data to both a CSV file and a Django database. The application provides a simple front end for file uploads and displays success messages upon completion. Additionally, the project includes functionality to avoid duplicate entries in the database. The architecture promotes certificate transparency and serves as a comprehensive solution for managing and analyzing digital.",
      Duration: "Oct 2023 to Dec 2023",
      // githubLink: "https://github.com/sushil7397/Voice-Based-Tours_and_Travel",
    },
    {
      id: 6,
      title: "MediaIps",
      description: "This Django project focuses on IP address analysis and risk assessment. It integrates with the Scamalytics API to determine the risk status of IPs and stores this information in a PostgreSQL database. The application includes features such as uploading CSV files containing IP addresses, updating the database with new IPs, and displaying IP-related data with risk statuses. The system supports user authentication, file management, and offers search functionalities based on IP addresses and upload dates. The code emphasizes modularity and follows best practices for handling database interactions and API calls. The project serves as a comprehensive tool for IP risk monitoring and analysis.",
      Duration: "Oct 2022 to Jul 2022 ",
      // githubLink: "https://github.com/sushil7397/Pacman_Game",
    },
    {
      id: 7,
      title: "CRM",
      description: "This comprehensive CRM system, built with Django, caters to sales, account, web, and business intelligence departments. Key features include user authentication, role-based access, and separate apps for modularity. Sales Department: Updates sales progress and partner information. Processes CSV files to import lead data. Implements web scraping for data retrieval. Account Department: Allows admin and account logins with role-based redirection. Uploads and stores financial data CSV files. Tracks attendance for departmental users. Web Department: Supports user registration and login. Provides forms for submitting web-related data. Implements date-filtered views for data analysis. Allows users to store web admin information. BI Department: Handles CSV file uploads for lead data. Ensures duplicate entry handling and integrity logging. Offers views with date filtering for leads data.",
      Duration: "Sept 2023 to Present",
      // githubLink: "https://github.com/sushil7397/Tracking-charity-donation-using-blockchain",
    },
    {
      id: 8,
      title: "Speech to text",
      description: "This application utilizes Python and Django to transcribe audio from a given URL into text, detect its language, and provide translation. It downloads the audio file, converts it to a temporary WAV file, and uses Google Speech Recognition for transcription. The detected language is identified using the langdetect library, and the text is then translated into the detected language. The processed data, including MFCCs (Mel Frequency Cepstral Coefficients), is stored in a Django model called Transcription, which also handles saving the audio file. The application seamlessly combines audio processing, language detection, and translation,  and storing transcribed content.",
      Duration: "Oct 2023 to Dec 2023",
      // githubLink: "https://github.com/sushil7397/React-Password-Generator",
    },
    {
      id: 9,
      title: "Leads Web Application",
      description: "This Django project empowers efficient lead management and analysis. It provides a secure user authentication system with login/logout functionalities. Users, including superusers, can upload CSV files containing extensive leads data, which is then processed and stored in the leads file model. The view feature allows users to paginate through the lead data, providing an organized and accessible interface. Additionally, users can delete uploaded CSV files, and error messages offer informative feedback on form input or processing challenges. ",
      Duration: "Oct 2023 to Nov 2023 ",
      // githubLink: "https://github.com/sushil7397/Web-ChatApp",
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
        <h2 className="projecth2">Academic Projects</h2> 
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
      <br />
      <br />
      <br />
      <br />

      <div className="projecthead">
        <h2 className="projecth2">Professional Experience</h2> 
        <h3 className="projecth3">Full Stack Developer</h3>

      </div>
      <div className="cards" >
        {officeproject.map((project) => (
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
            {/* <p>
              <a href={project.githubLink}>
                GitHub
              </a>
            </p> */}
          </div>
        ))}
      </div>
        <h3 style={containerStyle2} className="projecth3"><img style={imgstyle} src={wordpress} alt="" srcSet="" /> Wordpress Design</h3>
        
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

