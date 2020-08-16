import React ,{Fragment} from 'react';
import DashNavbar from '../Layout/Navbar';
import register_img from '../../Assets/register.png'
import { Link } from 'react-router-dom';
import InstituteFooter from '../Layout/Institutefooter';
      export default function Register() {
          return (
            <Fragment>
            <div className="login_page_section_upper">
            <DashNavbar/>
             <div className="login_page_section_upper_inner">
                 <div className="img_section_login">
                 <img  alt="loading" src={register_img} />
                 {/* <Link to="/register_your_institue" className="register_btn_on_login">Register now to get access</Link> */}
                 </div>
                 <div className="register_section_two">
                 <div className="credentials_section_login">
                      <h1 className="login_heading_form">Singup </h1>
                      <p style={{color:"grey"}}>For a better solution</p>
                      <form className="register_form">
                          <input type="text" placeholder="Enter Your Full Name" />
                          <input type="email" placeholder="Enter Your Email" />
                          <input type="email" placeholder="Enter Institue Name" />
                          <input type="email" placeholder="Enter Your Phone No" />
                          <input type="password" placeholder="Enter Your Password" />
                          {/* <input type="checkbox" placeholder="Remember me" /><br/   > */}
                          <button>Register</button>
                      </form>
                      <hr/>
                      <p className="elemnet_for_register_in_loginpage">I have an account : <Link to="/login" className="link_register">Login</Link></p>
                 </div>
             </div>
             </div>
             </div>
             <InstituteFooter/>
            </Fragment>
          )
      }
      