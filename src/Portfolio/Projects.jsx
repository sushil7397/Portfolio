import React, { useRef } from "react";
import "../Style/CSS/project.css";
import '../Style/CSS/experience.css';
import wordpress from '../Style/wordpress.png';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import thum from '../Style/tumb.png';
import vid1 from '../Style/SportsPromo.mp4';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faArrowUpRightFromSquare, faClock, faCode } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Projects() {

  const projects = [
    {
      id: 1,
      title: "Employee Management System",
      description: "A comprehensive application-based system designed to handle various aspects of employee management. It comprises two interconnected applications: one for employers to manage employee details and another for employees to mark attendance. It optimizes operations by securely storing and managing crucial employee data.",
      Duration: "Feb 2020 - Jan 2021",
      techStack: ["Java", "MySQL", "JDBC"],
      githubLink: "https://github.com/sushil7397/Employee_management_system",
    },
    {
      id: 2,
      title: "Voice Based Tourism Website",
      description: "A voice-based tourism blogging website where users can use voice commands to search for places and make quick decisions based on shown results of famous places' images and reviews. Users can navigate through any country, explore cities, and search for destinations.",
      Duration: "May 2021 - Oct 2021",
      techStack: ["Python", "Django", "Web Speech API"],
      githubLink: "https://github.com/sushil7397/Voice-Based-Tours_and_Travel",
    },
    {
      id: 3,
      title: "Pacman Game",
      description: "A classic arcade game featuring Pacman navigating through a maze, eating pellets and avoiding ghosts. Power pellets can be collected to turn ghosts blue and eat them for extra points. Built with modern web technologies for browser-based gameplay.",
      Duration: "Jan 2022 - Jul 2022",
      techStack: ["JavaScript", "HTML5 Canvas", "CSS"],
      githubLink: "https://github.com/sushil7397/Pacman_Game",
    },
    {
      id: 4,
      title: "Charity Donations via Blockchain",
      description: "A social network based on blockchain technology to assist non-profit organizations. All users can view their accounts and descriptions of each donation. The platform makes donation processes transparent and understandable for all parties using blockchain ledger.",
      Duration: "Apr 2022 - Mar 2023",
      techStack: ["Solidity", "React", "Web3.js", "Ethereum"],
      githubLink: "https://github.com/sushil7397/Tracking-charity-donation-using-blockchain",
    },
    {
      id: 5,
      title: "Password Generator",
      description: "A React application designed to generate random and secure passwords based on user-specified settings. Features customizable password length, character types, and a password strength meter for informed security decisions.",
      Duration: "Mar 2023 - May 2023",
      techStack: ["React", "JavaScript", "CSS"],
      githubLink: "https://github.com/sushil7397/React-Password-Generator",
    },
    {
      id: 6,
      title: "Web Based Chat Application",
      description: "A user-friendly, efficient chat platform connecting individuals across barriers. Features real-time conversations, multi-chatting capabilities, and seamless sign-up. Perfect for personal and professional use with reliable messaging.",
      Duration: "Dec 2022 - Aug 2023",
      techStack: ["React", "Node.js", "Socket.io", "MongoDB"],
      githubLink: "https://github.com/sushil7397/Web-ChatApp",
    },
  ];

  const officeproject = [
    {
      id: "p1",
      title: "Page Speed Insight",
      description: "Django-based automation system analyzing website performance using Google PageSpeed Insights API. Features CSV uploads, mobile & desktop metrics, PostgreSQL storage, cron jobs for re-checks, automated email reporting, and visualization dashboards.",
      Duration: "Apr 2024 - Jan 2025",
      techStack: ["Django", "PostgreSQL", "PageSpeed API"],
    },
    {
      id: "p2",
      title: "Email Marketing Platform",
      description: "Full-stack email marketing solution with campaign scheduling (timezone-aware), SMTP integration, delivery tracking, and spam detection. Built with React (TypeScript, TanStack Query, Tailwind) and Node.js (Express, PostgreSQL, Drizzle ORM).",
      Duration: "Jun 2025 - Aug 2025",
      techStack: ["React", "Node.js", "PostgreSQL"],
    },
    {
      id: "p3",
      title: "WordPress Plugin Development",
      description: "Multiple WordPress plugins for telecom and security: Random Phone Number Generator for 190 countries, Phone Number Verifier, Lookup tool, and Scamlytics Integration for spam IP detection and risk scoring.",
      Duration: "2024 - Present",
      techStack: ["PHP", "WordPress"],
    },
    {
      id: "p4",
      title: "Peeredge / Organic Data",
      description: "Django app for efficient Call Detail Record (CDR) management with 74-field model, advanced admin filtering, revenue reports, and automated scripts handling 3 crore+ daily entries with scheduled data purging.",
      Duration: "Dec 2023 - Present",
      techStack: ["Django", "PostgreSQL", "Python"],
    },
    {
      id: "p5",
      title: "Decoder",
      description: "Django web application for processing Stir/Shaken files containing URLs to digital certificates. Downloads certificates, extracts information (common name, organization, validity), and stores data in CSV and database.",
      Duration: "Oct 2023 - Dec 2023",
      techStack: ["Django", "Python", "PostgreSQL"],
    },
    {
      id: "p6",
      title: "MediaIps",
      description: "IP address analysis and risk assessment tool integrating with the Scamalytics API. Features CSV uploads, database updates, user authentication, and search functionalities based on IP addresses and upload dates.",
      Duration: "Oct 2023 - Jul 2024",
      techStack: ["Django", "PostgreSQL", "Scamalytics API"],
    },
    {
      id: "p7",
      title: "CRM System",
      description: "Comprehensive CRM system catering to sales, account, web, and BI departments. Features role-based access, CSV imports, web scraping, attendance tracking, date-filtered views, and duplicate handling.",
      Duration: "Sept 2023 - Present",
      techStack: ["Django", "PostgreSQL", "Python"],
    },
    {
      id: "p8",
      title: "Speech to Text",
      description: "Application utilizing Python and Django to transcribe audio from URLs into text, detect language using langdetect, and provide translation. Processes MFCCs and stores transcribed content in Django models.",
      Duration: "Oct 2023 - Dec 2023",
      techStack: ["Django", "Python", "Speech API"],
    },
    {
      id: "p9",
      title: "Leads Web Application",
      description: "Django project for efficient lead management with secure authentication, CSV uploads, paginated data views, file deletion, and comprehensive error handling for form processing.",
      Duration: "Oct 2023 - Nov 2023",
      techStack: ["Django", "PostgreSQL", "Python"],
    },
  ];

  const academicSliderRef = useRef(null);
  const proSliderRef = useRef(null);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
  };

  const proSliderSettings = {
    ...sliderSettings,
    autoplaySpeed: 3500,
  };

  return (
    <section id="Projects">
      {/* Academic Projects Carousel */}
      <div className="section-header">
        <span className="section-label">Portfolio</span>
        <h2 className="section-title">Academic Projects</h2>
        <p className="section-subtitle">Web Developer</p>
        <div className="carousel-nav">
          <button className="carousel-btn" onClick={() => academicSliderRef.current?.slickPrev()} aria-label="Previous slide">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className="carousel-btn" onClick={() => academicSliderRef.current?.slickNext()} aria-label="Next slide">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>

      <div className="carousel-container">
        <Slider ref={academicSliderRef} {...sliderSettings}>
          {projects.map((project) => (
            <div className="carousel-slide" key={project.id}>
              <div className="project-card">
                <div className="project-card-number">{String(project.id).padStart(2, '0')}</div>
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-desc">{project.description}</p>
                <div className="project-card-tech">
                  {project.techStack.map((tech, i) => (
                    <span className="tech-tag" key={i}>{tech}</span>
                  ))}
                </div>
                <div className="project-card-footer">
                  <span className="project-duration">
                    <FontAwesomeIcon icon={faClock} /> {project.Duration}
                  </span>
                  <a href={project.githubLink} target="_blank" rel="noreferrer" className="project-github-link">
                    <FontAwesomeIcon icon={faGithub} /> GitHub
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="link-arrow" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Professional Projects Carousel */}
      <div className="section-header" style={{ marginTop: '6rem' }}>
        <span className="section-label">Experience</span>
        <h2 className="section-title">Professional Projects</h2>
        <p className="section-subtitle">Full Stack Developer</p>
        <div className="carousel-nav">
          <button className="carousel-btn" onClick={() => proSliderRef.current?.slickPrev()} aria-label="Previous slide">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className="carousel-btn" onClick={() => proSliderRef.current?.slickNext()} aria-label="Next slide">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>

      <div className="carousel-container">
        <Slider ref={proSliderRef} {...proSliderSettings}>
          {officeproject.map((project) => (
            <div className="carousel-slide" key={project.id}>
              <div className="project-card pro-project-card">
                <div className="pro-card-badge">
                  <FontAwesomeIcon icon={faCode} /> Professional
                </div>
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-desc">{project.description}</p>
                <div className="project-card-tech">
                  {project.techStack.map((tech, i) => (
                    <span className="tech-tag" key={i}>{tech}</span>
                  ))}
                </div>
                <div className="project-card-footer">
                  <span className="project-duration">
                    <FontAwesomeIcon icon={faClock} /> {project.Duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* WordPress Section */}
      <div className="section-header" style={{ marginTop: '6rem' }}>
        <span className="section-label">Design</span>
        <h2 className="section-title">
          <img style={{ width: '40px', marginRight: '10px', verticalAlign: 'middle' }} src={wordpress} alt="WordPress" />
          WordPress Design
        </h2>
      </div>

      <div className="wordpress-showcase">
        <div className="wordpress-card">
          <div className="wordpress-card-header">
            <span className="wp-badge">Live Project</span>
            <h3>Sports Club</h3>
          </div>
          <div className="wordpress-video">
            <Video autoPlay loop poster={thum}>
              <source src={vid1} type="video/mp4" />
            </Video>
          </div>
          <a className="wp-view-btn" href="https://sportsclub.42web.io/?page_id=7" target="_blank" rel="noreferrer">
            View Live Site <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </div>
      </div>
    </section>
  );
}
