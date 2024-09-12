'use strict'
import {Link} from 'react-router-dom'
import  '../../public/navbar.css';
import logo from '../assets/white_transparent_logo_name.png'


function Navbar() {
  return (
      <nav>
        <Link to="/" className="title"><img src={logo} style={{width: "20%"}}/></Link>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/techniques">Techniques</Link></li>
          <li><Link to="/retreats">Retreats</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
  );
}

export default Navbar;