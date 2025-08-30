import React from 'react';
import '../Style/CSS/education.css'

const Education = () => {
  const education=[
    {
    id:1,
    Education:"Education:  Bachelor Of Engineering",
    University:" Univeristy:  Mumbai University",
    Specialization:"Specialization:  Computer Science",
    Duration:"Duration: 2019 to 2023",
    Grade:"Grade: 8.83 CGPA"
    },
    {
    id:2,
    Education:"Education: HSC",
    Board:"Board: Maharashtra Board",
    Specialization:"Specialization: Computer Science",
    Duration:"Duration: 2017 to 2019",
    Grade:"Percentange: 70%"
    },
    {
      id:3,
      Education:"Education: SSC",
      Board:"Board: Maharashtra Board",
      Duration:"Duration: 2016 to 2017",
      Grade:"Percentage: 90%"
      },
    
  ];
  return (
    <section id='Education'>
      <h2 className='Educationh2'>Education</h2>
      <div className="Education">
          {education.map((education)=>(
          <div className="education" key={education.id}>
            {education.Education}
            <div className="university">
             {education.University}</div>
              <div className="university">
                {education.Board}</div>
            <div className="Spcialization">
                 {education.Specialization}</div>
            <div className="Duration">
                   {education.Duration}</div>
            <div className="Grade">
                {education.Grade}</div>
          </div>

))}
      </div>





    </section>
  );
};

export default Education;