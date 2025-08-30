import React from 'react';
import profile from '../Style/blob.png'
// import blob from '../Style/blob.png'
import '../Style/CSS/Home.css'
const Home = () => {
  return (
    <section>
      <div className="profile">
        <div className="name-about">
          <h3>Hi, It's Me</h3>
          
          <h1>I'm <div className="name">&nbsp;&nbsp;Sushil</div></h1>
          <div className="home">
            <p>
            As an experienced computer engineer with significant corporate expertise, I'm searching for an exciting opportunity in a well-known organization. My objective is straightforward but aspirational: to share my knowledge, keep learning, and leave a lasting impression on the organization's path to success. I have the dependability and growth-oriented mindset necessary to succeed in a fast-paced workplace. 
            </p>
            
            <div className="tags">
              <a target='_blank' rel="noreferrer" href="https://www.instagram.com/sushil_yadav323"><i className="fa fa-instagram"></i></a>
              <a target='_blank' rel="noreferrer" href="https://wa.link/0y1j07"><i className="fa fa-whatsapp"></i></a>
              <a target='_blank' rel="noreferrer" href="https://github.com/sushil7397"><i className="fa fa-github"></i></a>
              <a target='_blank' rel="noreferrer"  href="https://www.linkedin.com/in/sushil-yadav-b607521b5"><i className="fa fa-linkedin"></i></a>
            </div>
          </div>
        </div>
        <div className="pic">

            <div className="picture">
              <img src={profile} alt="" srcSet="" />
              
            </div>
        </div>
      </div>
        <hr />
      
      
    </section>
  );
};

export default Home;
