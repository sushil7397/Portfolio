import React, { useEffect } from "react";
import "../Style/CSS/Navbar.css";
import logo from '../Style/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  useEffect(() => {
    const $nav = document.querySelector('.nav');
    const $toggleCollapse = document.querySelector('.toggle-collapse');

    const toggleCollapse = () => {
      $nav.classList.toggle('collapse');
    };

    $toggleCollapse.addEventListener('click', toggleCollapse);

    return () => {
      $toggleCollapse.removeEventListener('click', toggleCollapse);
    };
  }, []);

  return (
    <nav className="nav">
      <div className="nav-menu flex-row">
        <div>
            <img className='logo' src={logo} alt="" />
        
        </div>
        <div className="toggle-collapse">
          <div className="toggle-icons">
            <FontAwesomeIcon  icon={faBars} />
          </div>
        </div>
        <div>
          <ul className='nav-items'>
            <li className="nav-link">
              <a href='/'>Home</a>
            </li>
            <li className="nav-link">
              <a href='#about'>About</a>
            </li>
            <li className="nav-link">
              <a href="#Education">Education</a>
            </li>
            <li className="nav-link">
              <a href='#Projects'>Projects</a>
            </li>
            <li className="nav-link">
              <a href="#Certificates">Certificates</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
