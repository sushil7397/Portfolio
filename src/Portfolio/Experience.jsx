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
      </section>

  );
};

export default experience;