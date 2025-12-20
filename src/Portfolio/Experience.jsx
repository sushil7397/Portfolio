import React from 'react'

import '../Style/CSS/experience.css'

const experience = () => {
    const experience = [
      {
        id: 1,
        title: ' Password Generator',
        Issuedby:' INEURON INTELLIGENCE PRIVATE LIMITED',
        Date: ' 4th March 2023 to 14th July 2023',
        experienceLink: 'https://drive.google.com/file/d/1_P9otLu79z2wB_Uf35iD3bQ7nUHXe4TW/view?usp=drive_link',
      },
      {
        id: 2,
        title: ' Chat Application',
        Issuedby:' INEURON INTELLIGENCE PRIVATE LIMITED',
        Date: ' 26th March 2023 to 14th August 2023',
        experienceLink: 'https://drive.google.com/file/d/1v0FLyFupM7npuCydmjlEB2hzaaLYq9lL/view?usp=drive_link',
      }
    ];



  return (
    <section id='experiences'>
      <div className="CertHead">
        <h3 className='Certh3'>Internships</h3> 
      </div>
    <div className="certs">
      {experience.map(experience => (
        <div className="experi" key={experience.id}>
          <h3 className="cert-title">Project:{experience.title}</h3>
          <p>Issued By:{experience.Issuedby}</p>
          <p> Date: 
          {experience.Date}
          </p>
          {experience.description && <p>{experience.description}</p>}
          {experience.techStack && <p><strong>Tech Stack:</strong> {experience.techStack}</p>}
            {experience.experienceLink && (
              <a target='_blank' rel="noreferrer" className="certurl" href={experience.experienceLink}>
                View Certificate
              </a>
            )}
        </div>
      ))}
    </div>
    <div className="exp-section" id="professional-experience">
      <h2 className='exp-heading'>Professional Experience</h2>
      <div className="exp-content">
        <div className="exp-title">Full Stack Developer | My Country Mobile</div>
        <div className="exp-meta">Sept 2023 – Present — Mumbai Metropolitan Region</div>
        <ul className="exp-list">
          <li>Database Management: Planned and optimized PostgreSQL schemas, ensuring 100% accuracy during project migrations.</li>
          <li>Server Administration: Administered Ubuntu servers for multiple Django projects, improving uptime and deployment efficiency.</li>
          <li>SEO Click Management: Conducted keyword-driven Google searches using ZennoPoster & proxies, boosting organic traffic.</li>
          <li>Workflow Automation: Mechanized blog automation and lead generation using n8n workflows, cutting manual workload by 70%.</li>
          <li>Custom Tools: Engineered phone number verification and lookup plugins using PHP and Django, strengthening fraud detection and security.</li>
          <li>Project Delivery: Designed and shipped 16+ projects across web and automation.</li>
        </ul>
      </div>
    </div>
    </section>

  );
};

export default experience;
