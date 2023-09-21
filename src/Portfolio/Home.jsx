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
            I am a recent graduate from St. John College of Engineering and Management (Palghar) with a Bachelor of Engineering degree. 
            </p>
            
            <div className="tags">
              <a target='_blank' rel="noreferrer" href="https://www.instagram.com/sushil_yadav323"><i class="fa fa-instagram"></i></a>
              <a target='_blank' rel="noreferrer" href="https://wa.link/0y1j07"><i class="fa fa-whatsapp"></i></a>
              <a target='_blank' rel="noreferrer" href="https://github.com/sushil7397"><i class="fa fa-github"></i></a>
              <a target='_blank' rel="noreferrer"  href="https://www.linkedin.com/in/sushil-yadav-b607521b5"><i class="fa fa-linkedin"></i></a>
            </div>
          </div>
        </div>
        <div className="pic">

            <div className="picture">
              <img src={profile} alt="" srcset="" />
              
            </div>
        </div>
      </div>
        <hr />
      
      
    </section>
  );
};

export default Home;
