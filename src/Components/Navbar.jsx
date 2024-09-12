'use strict'
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import  '../../public/navbar.css';
import logo from '../assets/white_transparent_logo_name.png'


export default function Navbar() {
  return (
      <nav>
        <Link to="/" className="title"><img src={logo} style={{width: "17%"}}/></Link>
        <ul>
          <li><CustomLink to="/about">About</CustomLink></li>
          <li><CustomLink to="/techniques">Techniques</CustomLink></li>
          <li><CustomLink to="/retreats">Retreats</CustomLink></li>
          <li><CustomLink to="/contact">Contact</CustomLink></li>
          <li><CustomLink to="/login">Login</CustomLink></li>
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