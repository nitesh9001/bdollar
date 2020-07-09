import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../Assets/logo.png';

export default function DashNavbar() {
    return (
        <div className="nav_bar_pages">
          <div className="nav_bar_pages_parts">
          <div className="nav_bar_logo">
           <img src={logo} alt="Logo" className="logo_header"/>
           </div>
          </div>
          <div className="nav_bar_pages_parts">
          <div className="nav_navbar">
          <NavLink to="/homepage" className="navlink_pages" id="active">Home</NavLink>
            <NavLink to="/services" className="navlink_pages" >Services</NavLink>
            <NavLink to="/blog" className="navlink_pages">Blog</NavLink>
            <NavLink to="/aboutus" className="navlink_pages">About Us</NavLink>
            <NavLink to="/contactus"  className="navlink_pages">Contact Us</NavLink>
          </div>
           </div>
          </div>
    )
}
