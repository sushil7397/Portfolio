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
      },
      {
        id: 3,
        title: 'Page Speed Insight',
        Issuedby: 'Personal Project',
        Date: 'Apr 2024 - Jan 2025',
        experienceLink: '',
        description: 'Designed a Django-based automation system to analyze website performance using Google PageSpeed Insights API. Allowed CSV uploads of URLs, fetching mobile & desktop performance metrics, and storing results in PostgreSQL. Added cron jobs for periodic re-checks and automated email reporting. Built visualization dashboards and summary tables for proactive optimization. Optimized concurrency and transaction handling for efficient large-scale data processing.',
        techStack: 'HTML, CSS, PostgreSQL, Django Framework, PageSpeed Insights API'
      },
      {
        id: 4,
        title: 'Email Marketing Platform',
        Issuedby: 'Personal Project',
        Date: 'Jun 2025 - Aug 2025',
        experienceLink: '',
        description: 'Developed a full-stack email marketing solution with campaign scheduling (timezone-aware), SMTP integration, delivery tracking, and spam detection. Built a lead management module with CSV uploads, email validation, deduplication, and multi-layer spam filtering. Frontend built with React (TypeScript, TanStack Query, RHF + Zod, Tailwind, shadcn/ui) for responsive, accessible design. Backend with Node.js (Express + TypeScript), PostgreSQL (self-hosted, Drizzle ORM) provided a type-safe API layer. Added background campaign scheduler with pause/resume and real-time spam/domain validation.',
        techStack: 'PostgreSQL, React, Node.js, Express'
      },
      {
        id: 5,
        title: 'WordPress Plugin Development',
        Issuedby: 'Personal Project',
        Date: '2024 - Present',
        experienceLink: '',
        description: 'Designed multiple WordPress plugins for telecom and security: Random Phone Number Generator – Generates numbers for 190 countries using ISO codes and number ranges. Phone Number Verifier – Detects real vs fake phone numbers. Phone Number Lookup – Retrieves details like country, provider, and validation status. Scamlytics Integration – Detects spam IPs, provides risk scores, and identifies IP locations. These plugins improved number validation workflows and security for WordPress sites.',
        techStack: 'PHP, WordPress'
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