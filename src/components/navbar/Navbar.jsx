import './Navbar.scss'
import {Link} from 'react-router-dom'
import React from 'react'
import{ FaLaptopCode} from 'react-icons/fa'

const data =[
  {
    label : 'HOME',
    to : '/'
  },
  {
    label : 'ABOUT ME',
    to : '/about'
  },
  {
    label : 'SKILLS',
    to : '/skills'
  },
  {
    label : 'RESUME',
    to : '/resume'
  },
  {
    label : 'PORTFOLIO',
    to : '/portfolio'
  },{
    label : 'CONATACT',
    to : '/contact'
  },
  
]
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link>
          <FaLaptopCode size={30} style={{color:'#fff'}}/>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar