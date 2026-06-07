import React, { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faChevronLeft, faChevronRight, faArrowUpRightFromSquare, faCalendar, faCertificate } from '@fortawesome/free-solid-svg-icons';
import '../Style/CSS/certificate.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Certificate = () => {
    const Certificate = [
      {
        id: 1,
        title: 'Programming with Everybody Python',
        Issuedby: 'Coursera',
        Date: 'Jun 15, 2019',
        certificateLink: 'https://drive.google.com/file/d/1cPI_7Ea9CaibfC-dkL-rh5cfzBNSfFp2/view?usp=sharing',
      },
      {
        id: 2,
        title: 'Python Data Structures',
        Issuedby: 'Coursera',
        Date: 'Jun 17, 2020',
        certificateLink: 'https://drive.google.com/file/d/1hf3enhiAypav73E62KROEwdP7Mbfkmsm/view?usp=sharing',
      },
      {
        id: 3,
        title: 'Programming Foundations with JavaScript, HTML and CSS',
        Issuedby: 'Coursera',
        Date: 'Oct 27, 2021',
        certificateLink: 'https://drive.google.com/file/d/1cPI_7Ea9CaibfC-dkL-rh5cfzBNSfFp2/view?usp=sharing',
      },
      {
        id: 4,
        title: 'Accenture Data Analytics and Visualization',
        Issuedby: 'Forage',
        Date: 'May 23, 2023',
        certificateLink: 'https://drive.google.com/file/d/1VkqNSXi-eHH6UBI667Uf37nQPsuxSYPA/view?usp=share_link',
      },
      {
        id: 5,
        title: 'TATA Data Visualisation: Empowering Business with Effective Insights',
        Issuedby: 'Forage',
        Date: 'May 21, 2023',
        certificateLink: 'https://drive.google.com/file/d/1x92gyBQYvu9k4vHqe7_IqwGH3VJHBIAL/view?usp=share_link',
      },
      {
        id: 6,
        title: 'Walmart Advanced Software Engineering',
        Issuedby: 'Forage',
        Date: 'Jun 13, 2023',
        certificateLink: 'https://drive.google.com/open?id=1t89-oGZ8VVgJQqnvPJhtEw9aXMkMCE_3&usp=drive_copy',
      },
    ];

  const frontend = [
    { skill: "React Js", experience: 'Intermediate' },
    { skill: "HTML", experience: 'Advanced' },
    { skill: "CSS", experience: 'Advanced' },
    { skill: "JavaScript", experience: 'Intermediate' },
  ];

  const backend = [
    { skill: "PostgreSQL", experience: 'Intermediate' },
    { skill: "Django", experience: 'Intermediate' },
    { skill: "Tableau", experience: 'Beginner' },
    { skill: "Python", experience: 'Intermediate' },
    { skill: "MongoDB", experience: 'Beginner' },
    { skill: "Java", experience: 'Intermediate' },
  ];

  const other = [
    { skill: "Web Developer", experience: 'Intermediate' },
    { skill: "OOPS", experience: 'Intermediate' },
    { skill: "Editing", experience: 'Intermediate' },
    { skill: "Documentation", experience: 'Advanced' },
    { skill: "Ubuntu", experience: 'Intermediate' },
    { skill: "Nohup", experience: 'Intermediate' },
    { skill: "Cronjob", experience: 'Intermediate' },
  ];

  const certSliderRef = useRef(null);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <section id='Certificates'>
      <div className="cert-section-header">
        <span className="cert-label">Achievements</span>
        <h3 className='cert-main-title'>Certificates</h3>
        <p className='cert-main-subtitle'>My Certifications</p>
        <div className="cert-carousel-nav">
          <button className="cert-nav-btn" onClick={() => certSliderRef.current?.slickPrev()} aria-label="Previous">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className="cert-nav-btn" onClick={() => certSliderRef.current?.slickNext()} aria-label="Next">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>

      <div className="cert-carousel-container">
        <Slider ref={certSliderRef} {...sliderSettings}>
          {Certificate.map(certificate => (
            <div className="cert-slide" key={certificate.id}>
              <div className="cert-card">
                <div className="cert-card-icon-wrap">
                  <FontAwesomeIcon icon={faCertificate} className="cert-card-icon" />
                </div>
                <h3 className="cert-card-title">{certificate.title}</h3>
                <div className="cert-card-info">
                  <span className="cert-card-issuer">Issued by: <strong>{certificate.Issuedby}</strong></span>
                  <span className="cert-card-date">
                    <FontAwesomeIcon icon={faCalendar} /> {certificate.Date}
                  </span>
                </div>
                <a target='_blank' rel="noreferrer" className="cert-view-btn" href={certificate.certificateLink}>
                  View Certificate <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="skills-section-header">
        <span className="cert-label">Expertise</span>
        <h2 className='skills-main-title'>Skills</h2>
        <p className='skills-main-subtitle'>My Technical Skills</p>
      </div>

      <div className="skills-grid">
        <div className="skill-category">
          <div className="skill-category-header">Frontend</div>
          <div className="skill-list">
            {frontend.map((skills, idx) => (
              <div className="skill-item" key={skills.skill + idx}>
                <FontAwesomeIcon className='skill-check-icon' icon={faCircleCheck} />
                <div className="skill-info">
                  <span className="skill-name-text">{skills.skill}</span>
                  <span className="skill-level">{skills.experience}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="skill-category">
          <div className="skill-category-header">Backend</div>
          <div className="skill-list">
            {backend.map((skills, idx) => (
              <div className="skill-item" key={skills.skill + idx}>
                <FontAwesomeIcon className='skill-check-icon' icon={faCircleCheck} />
                <div className="skill-info">
                  <span className="skill-name-text">{skills.skill}</span>
                  <span className="skill-level">{skills.experience}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="skill-category">
          <div className="skill-category-header">Others</div>
          <div className="skill-list">
            {other.map((skills, idx) => (
              <div className="skill-item" key={skills.skill + idx}>
                <FontAwesomeIcon className='skill-check-icon' icon={faCircleCheck} />
                <div className="skill-info">
                  <span className="skill-name-text">{skills.skill}</span>
                  <span className="skill-level">{skills.experience}</span>
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
