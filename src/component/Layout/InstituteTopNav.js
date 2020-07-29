import React ,{useState}from 'react'
import { Link } from 'react-router-dom';


function InstituteTopNav() {
    const [hidedropdown, sethidedropdown] = useState(false);
    const open_dropdown = (e)=>{
        e.preventDefault();
        sethidedropdown(!hidedropdown)
    }
    const className =hidedropdown ? 'showdropdown' : 'hidedropdown'; 
    return (
        <div className="institute_top_nav_outline_section">
            <div className="institute_top_nav_outline_section_inner">
                <div className="institute_top_nav_outline_section_inner_part1">
                   <div className="institute_top_nav_outline_section_inner_part1_init">
                   <Link to="/" className="link_to_dashboard"><i class="fa fa-sticky-note"></i><span className="span_tooltip">Notice</span></Link>
                   </div>
                   <div className="institute_top_nav_outline_section_inner_part1_init">
                   <Link to="/" className="link_to_dashboard"><i class="fa fa-pencil-square"></i>
                   <span className="span_tooltip">Todo</span></Link>
                   </div>
                   <div className="institute_top_nav_outline_section_inner_part1_init">
                   <Link to="/" className="link_to_dashboard"><i class="fa fa-calendar-check-o"></i>
                   <span className="span_tooltip">Meeting</span></Link>
                   </div>
                   <div className="institute_top_nav_outline_section_inner_part1_init">
                   <Link to="/" className="link_to_dashboard"><i class="fa fa-money"></i>
                   <span className="span_tooltip">Fess-details</span></Link>
                   </div>
                </div>                
                <div className="institute_top_nav_outline_section_inner_part1">
                   <div className="search_box_for_institute_dashboard">
                   <i class="fa fa-search"></i>
                   <input type="search" name="Search" id="" placeholder="Search here" />
                   </div>
                   <div className="notification_box_for_institute_dashboard">
                     <button className="btn_icon_notification"><i class="fa fa-bell"></i>
                     <span className="span_tooltip">Notification</span>
                     </button>
                   </div>
                   <div className="logout_box_for_institute_dashboard">
                     <button className="btn_icon_logout"><i class="fa fa-power-off"></i><span className="span_tooltip">Logout</span></button>
                   </div>
                   <div className="user_account_box_for_institute_dashboard" onClick={open_dropdown}>
                     <span className="spna_username">username<br/>Institute</span>
                     <i class="fa fa-user-circle"></i>
                   </div>
                   <div className={className}>
                   <div className="dropdown_menu_ul">
                       <Link className="dropdown_menu_li">Profile</Link>
                       <Link className="dropdown_menu_li">Institute</Link>
                       <Link className="dropdown_menu_li">Notification</Link>
                       <Link className="dropdown_menu_li">Notice</Link>
                       <Link className="dropdown_menu_li">Setting</Link>
                       <Link className="dropdown_menu_li">Logout</Link>
                   </div>
                   </div>
                   <div></div>
                </div>
            </div>
        </div>
    )
}

export default InstituteTopNav
