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
        <Link to={'/'} className='navbar_logo' >
          <FaLaptopCode size={30} style={{color:'#fff'}}/>
        </Link>
      </div>
      <ul className="navbar_menu">
        {
          data.map((item,key)=>(
              <li key={key} className="navbar_menu_item">
                <Link to={item.to} className="navbar_menu_item_links">
                    {item.label}
                </Link>
              </li>
          ))
        }
      </ul>

    </nav>
  )
}

export default Navbar