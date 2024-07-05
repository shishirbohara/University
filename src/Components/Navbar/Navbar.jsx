import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import { Link } from "react-scroll";
import menu from '../../assets/menu_icon.svg'

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);
  const [mobibleMenu,setMobileMenu]=useState(false);

  const toggleMenu=()=>{
    mobibleMenu? setMobileMenu(false): setMobileMenu(true);


  }


  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="Evergreen" height="50px" />
      <h2>Evergreen</h2>
      <ul className={mobibleMenu?'': 'hide-mobile-menu'  }>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="program" smooth={true} offset={-260} duration={500}>
            Program
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-150} duration={500}>
            About us
          </Link>
        </li>
        <li>
          <Link to="university" smooth={true} offset={-260} duration={500}>
            University
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} offset={-260} duration={500}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            offset={-260}
            duration={500}
            
          >
            Contact us
          </Link>
        </li>
      </ul>
      <img src={menu} alt="" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
