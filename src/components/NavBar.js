import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBell, faBookmark, faUser } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  const location = useLocation();

  return (
    <nav className='nav1'>
      <div className="logo">
        <Link to="/">
          <span>TravelMedia.in</span>
        </Link>
      </div>
      <div className="icons">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
          <FontAwesomeIcon icon={faHome} />
        </Link>
        <Link to="/notifications" className={location.pathname === '/notifications' ? 'active' : ''}>
          <FontAwesomeIcon icon={faBell} />
        </Link>
        <Link to="/saved" className={location.pathname === '/saved' ? 'active' : ''}>
          <FontAwesomeIcon icon={faBookmark} />
        </Link>
        <Link to="/user" className={location.pathname === '/user' ? 'active' : ''}>
          <FontAwesomeIcon icon={faUser} />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
