import React, { useState } from 'react'
import css from './Navbar.module.css'
import { Outlet, Link } from "react-router-dom";
import gultieLogo from '../assets/XIII.png'
import { SlMenu } from "react-icons/sl";
export default function Navbar() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <>
      <header id={css.header} className="fixed-top">
        <div className="container d-flex align-items-center justify-content-between">
          <div className='d-flex justify-content-center align-items-center'>
            <a href='/home'><img src={gultieLogo} alt="" className={css.gultieLogo} /></a>
            <h1 className={css.logo}><a href="/home">Gultie Premier League</a></h1>
          </div>
          <nav id="navbar" className={css.navbar}>
            <ul>
              <li><a href="/home">Home</a></li>
              {/* <li><a href="/events">Events</a></li> */}
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/livescore">Live Score</a></li>
              {/* <li className={css.dropdown}><a href="#"><span>Drop Down</span><i className="fa-solid fa-chevron-up"></i></a>
        <ul>
          <li><a href="#">Drop Down 1</a></li>
          <li className={css.dropdown}><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
            <ul>
              <li><a href="#">Deep Drop Down 1</a></li>
              <li><a href="#">Deep Drop Down 2</a></li>
              <li><a href="#">Deep Drop Down 3</a></li>
              <li><a href="#">Deep Drop Down 4</a></li>
              <li><a href="#">Deep Drop Down 5</a></li>
            </ul>
          </li>
          <li><a href="#">Drop Down 2</a></li>
          <li><a href="#">Drop Down 3</a></li>
          <li><a href="#">Drop Down 4</a></li>
        </ul>
      </li> */}
              <li><a href="/betting">Betting</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/login">Login</a></li>
              <li className={css.menuIcon}><SlMenu /></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
    </>
  )
}
