'use strict'
import React, { useState } from "react";
import { Link, NavLink, useMatch, useResolvedPath } from "react-router-dom"
import  '../../public/navbar.css';
import logo from '../assets/white_transparent_logo_name.png'


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
      <nav>
        <Link to="/" className="title"><img src={logo} style={{width: "10rem"}}/></Link>
        <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
          <li onClick={() => setMenuOpen(!menuOpen)}><CustomLink to="/about">About</CustomLink></li>
          <li onClick={() => setMenuOpen(!menuOpen)}><CustomLink to="/techniques">Techniques</CustomLink></li>
          <li onClick={() => setMenuOpen(!menuOpen)}><CustomLink to="/retreats">Retreats</CustomLink></li>
          <li onClick={() => setMenuOpen(!menuOpen)}><CustomLink to="/contact">Contact</CustomLink></li>
        </ul>
      </nav>
  );
}
function CustomLink({to, children, ...props}) {
  // const path = window.location.pathname
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true})
  return (
      <>
      <li className={isActive ? "active" : ""}>
          <Link to={to}>{children}</Link>
      </li>
      </>
  )
}