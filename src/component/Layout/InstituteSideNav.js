import React,{useState} from 'react'
import logo from '../../Assets/logo.png';
import { NavLink } from 'react-router-dom';


function InstituteSideNav() {
    const [showonlyicon, setshowonlyicon] = useState(false)
     
   const showonlyicon_handle = (e)=>{
        e.preventDefault();
        setshowonlyicon(!showonlyicon)
    }
    const className= showonlyicon ? 'institute_side_nav_outline_section_icon' : 'institute_side_nav_outline_section';
    return (
        <div className={className}>
         <div className="institute_side_nav_section_inner_blocks">
         <div className="institute_side_nav_section_inner_block_item_1">
         <i class="fa fa-bars icons" aria-hidden="true" onClick={showonlyicon_handle}></i>
         </div> 
         <div className="institute_side_nav_section_inner_block_item_2">
           <img src={logo} alt="Logo" className="logo_header_dashboard" />
         </div>
         <div className="institute_side_nav_section_inner_block_item_3">
           <NavLink to="/institutedashboard" activeClassName="navbar__link active" className="det_list_side_nav"><i className="fa fa-desktop"></i><span className="span_text">Dashboard</span></NavLink>
           <NavLink to="/student_dashboard" activeClassName="navbar__link active" className="det_list_side_nav"><i className="fa fa-users" ></i><span className="span_text">Students</span> </NavLink>
           <NavLink to="/staffs_of_institute" activeClassName="navbar__link active"  className="det_list_side_nav"><i className="fa fa-user"></i><span className="span_text">Staffs</span> </NavLink>
           <NavLink to="/institute_library" activeClassName="navbar__link active" className="det_list_side_nav"><i className="fa fa-tasks"></i><span className="span_text">Library</span></NavLink>
           <NavLink to="/institute_scholarship" activeClassName="navbar__link active" className="det_list_side_nav"><i className="fa fa-graduation-cap"></i><span className="span_text">Scholarship</span></NavLink>
           <NavLink to="/institute_time_table" activeClassName="navbar__link active" className="det_list_side_nav"><i className="fa fa-calendar"></i><span className="span_text">Time Table</span> </NavLink>
           <NavLink to="/institute_exams" activeClassName="navbar__link active" className="det_list_side_nav"><i className="fa fa-file"></i><span className="span_text">Exams</span> </NavLink>
           <NavLink to="/fee-structre-and-fee-details" activeClassName="navbar__link active" className="det_list_side_nav"><i className="fa fa-money"></i><span className="span_text">Fee Details</span> </NavLink>
           <NavLink to="/institute_support" activeClassName="navbar__link active" className="det_list_side_nav"><i className="fa fa-envelope"></i><span className="span_text">Support</span> </NavLink>
         </div>
         </div>
        </div>
    )
}
export default InstituteSideNav
