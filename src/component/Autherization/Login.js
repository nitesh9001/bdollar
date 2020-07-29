import React ,{Fragment} from 'react';
import DashNavbar from '../Layout/Navbar';
import login_img from '../../Assets/login.png'
import { Link } from 'react-router-dom';
import InstituteFooter from '../Layout/Institutefooter';
      export default function Login() {
          return (
            <Fragment>
            <div className="login_page_section_upper">
            <DashNavbar/>
             <div className="login_page_section_upper_inner">
                 <div className="img_section_login">
                 <img  alt="loading" src={login_img} />
                 {/* <Link to="/register_your_institue" className="register_btn_on_login">Register now to get access</Link> */}
                 </div>
                 <div className="login_section_two">
                 <div className="credentials_section_login">
                      <h1 className="login_heading_form">Login</h1>
                      <p style={{color:"grey"}}>For a better solution</p>
                      <form className="login_form">
                          <input type="email" placeholder="Enter Your Email" /><br/>
                          <input type="password" placeholder="Enter Your Password" /><br/>
                          {/* <input type="checkbox" placeholder="Remember me" /><br/   > */}
                          <button>  Login </button>
                      </form>
                      <br/>
                      <hr/>
                      <p className="elemnet_for_register_in_loginpage">Don't have an account : <Link to="/register_your_institue" className="link_register">Register</Link></p>
                 </div>
             </div>
             </div>
             </div>
             <InstituteFooter/>
            </Fragment>
          )
      }
      