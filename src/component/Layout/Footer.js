import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../../Assets/logo.png';
  
const Footer= () => {
    return (
    <div className="footer">
        <div className="container">
           <div className="content">
             <img src={logo} alt="Logo" className="logo_header" />
             <p>We provide your best</p>
             <h3>About us</h3>
             <p>Our talent, your results– this is the premise behind bdollar Solutions.Get your optimized solution .Our team follow AGILE .Our commitment to service and quality is reflected in our work</p>
             <h3>Contact us</h3>
             <ul className="Contact">
                <li>
                  <p className="contact"><i class="fa fa-phone"></i> +91 9999999999 </p>
                </li>
                <li>
                  <p className="contact"><i class="fa fa-envolope"></i> ab123@gmail.com</p>
                </li>
             </ul>
           </div> 
         <div className="Information">
           <h3>Information</h3>
           <ul>
            <li>
              <NavLink className="link" to="/AboutUs">About us</NavLink>
            </li>
            <li>
             <NavLink  className="link"  to="/MoreSearch">MoreSearch</NavLink>
            </li>
            <li>
              <NavLink  className="link"  to="/Blog">Blog</NavLink>
            </li>
            <li>
             <NavLink  className="link"  to="/Testinomials">Testinomials</NavLink>
            </li>
            <li>
             <NavLink  className="link"  to="/Events">Events</NavLink>
            </li>
          </ul>
         </div>
         <div className="helpfulLinks">
            <h3>Helpful Links</h3>
          <ul>
            <li>
             <NavLink  className="link"  to="/AboutUs">Services</NavLink>
            </li>
            <li>
             <NavLink  className="link"  to="/Blog">Support</NavLink>
            </li>
            <li>
             <NavLink  className="link"  to="/Events">Terms & Conditions</NavLink>
            </li>
            <li>
             <NavLink  className="link"  to="/Testinomials">Privacy Policy</NavLink>
            </li>
          </ul>
         </div>
         <div className="Subcribe">
             <h3>Subscribe more info</h3>
               <form>
              <input type="email" placeholder="Enter Your Email"/>
             <button className="btn">Subscribe</button>
             </form>
         </div>
     </div>
     <hr className="line"/>
     <div className="FooterIcon">
       {/* <NavLink to="/Blog"> <FaFacebookF className="social-icon"/> </NavLink>
       <NavLink to="/Blog"> <FaTwitterSquare className="social-icon"/> </NavLink>
       <NavLink to="/Blog"> <FaInstagram className="social-icon"/></NavLink>
       <NavLink to="/Blog"> <FaGooglePlusG className="social-icon"/></NavLink>
       <NavLink to="/Blog"> <FaLinkedinIn className="social-icon"/></NavLink> */}
      </div>
    </div>
    );
}

export default Footer;