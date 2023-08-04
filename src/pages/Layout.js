import { Outlet, Link } from "react-router-dom";
import React from 'react'
import './pagesStyle/Layout.css'
import './pagesStyle/Responsive.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Logo from '../components/logo'
const Layout = () => {
  return (
    <>
 <nav className='main-nav'>
  <div className="logo">{<Logo/>}</div>
     <div className='title'>
      <h2>CricketBaaz</h2>
     </div>
     {/* 2nd menu part */}
     <div className='menu-link'>
      <ul>
        <li className='navbutton'>
        <Link to={'/'} >Home</Link>
        </li>
        <li className='navbutton'>
        <Link to={"/About"}>about</Link>
        </li>
        <li className='navbutton'>
        <Link to={"/Services"}>Services</Link>
        </li>
        <li className='navbutton'>
        <Link to={"/Blog"}>Blogs</Link>
        </li>
      </ul>
     </div>
     {/* social media links */}
     <div className='social-media'>
      <ul className='social-media-desktop'>
        <li>
        <a href="https://www.facebook.com/learnbuildteach/"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
        </li>
        <li>
        <a href="https://www.instagram.com/learnbuildteach"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
        </li>
        <li>
          <a href="https://www.youtube.com/@deepurd994"
        className="youtube social">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
        </li>
      </ul>
     </div>
    </nav>

      <Outlet />
    </>
  )
};

export default Layout;