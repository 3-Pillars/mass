'use strict'
import { Link } from "react-router-dom"
import  '../../public/navbar.css';


export default function CustomLink({to, children, ...props}) {
  return (
      <>
          <Link to={to}>{children}</Link>
      </>
  )
}