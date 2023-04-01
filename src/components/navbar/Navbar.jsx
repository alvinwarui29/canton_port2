import "./Navbar.scss";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { FaLaptopCode, FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";
const data = [
  {
    label: "HOME",
    to: "/",
  },
  {
    label: "ABOUT ME",
    to: "/about",
  },
  {
    label: "SKILLS",
    to: "/skills",
  },
  {
    label: "RESUME",
    to: "/resume",
  },
  {
    label: "PORTFOLIO",
    to: "/portfolio",
  },
  {
    label: "CONATACT",
    to: "/contact",
  },
];
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to={"/"} className="navbar__container__logo">
          <FaLaptopCode size={30}  />
        </Link>
      </div>
      <ul className="navbar__container__menu">
        {data.map((item, key) => (
          <li key={key} className="navbar__container__menu__item">
            <Link to={item.to} className="navbar_menu_item_links">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="nav-icons" onClick={handleClick}>
        {click ? <HiX size={30} style={{ color: "#fff" }} /> : <FaBars size={30} style={{ color: "#fff" }} />}
      </div>
    </nav>
  );
};

export default Navbar;
