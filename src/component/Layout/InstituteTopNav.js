import React ,{useState}from 'react'
import { NavLink,Link } from 'react-router-dom';
import p_user from '../../Assets/icons_use.png'


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
                   <NavLink to="/notice-board-institute" className="link_to_dashboard" activeClassName="navbar__link__top active"><i class="fa fa-sticky-note"></i><span className="span_tooltip">Notice</span></NavLink>
                   </div>
                   <div className="institute_top_nav_outline_section_inner_part1_init">
                   <NavLink to="/todo-institute" className="link_to_dashboard" activeClassName="navbar__link__top active"><i class="fa fa-pencil-square"></i>
                   <span className="span_tooltip">Todo</span></NavLink>
                   </div>
                   <div className="institute_top_nav_outline_section_inner_part1_init">
                   <NavLink to="/meeting-orgainzer" className="link_to_dashboard" activeClassName="navbar__link__top active"><i class="fa fa-calendar-check-o"></i>
                   <span className="span_tooltip">Meeting</span></NavLink>
                   </div>
                   <div className="institute_top_nav_outline_section_inner_part1_init">
                   <NavLink to="/leave_application" className="link_to_dashboard" activeClassName="navbar__link__top active"><i class="fa fa-paperclip"></i>
                   <span className="span_tooltip">Leave Application</span></NavLink>
                   </div>
                   <div className="institute_top_nav_outline_section_inner_part1_init">
                   <NavLink to="/fee-structre-and-fee-details" className="link_to_dashboard" activeClassName="navbar__link__top active"><i class="fa fa-money"></i>
                   <span className="span_tooltip">Fess-details</span></NavLink>
                   </div>
                </div>                
                <div className="institute_top_nav_outline_section_inner_part1">
                   <div className="search_box_for_institute_dashboard">
                   <i class="fa fa-search"></i>
                   <input type="search" name="Search" id="" placeholder="Search here" />
                   </div>
                   <div className="notification_box_for_institute_dashboard">
                     <button className="btn_icon_notification"><i class="fa fa-bell"></i>
                     <div className="span_tooltip_notification">
                     <div className="traingle"></div>
                     <div className="notification_bar_header">
                     <div><i class="fa fa-bell-o"></i></div>
                     <div><h2>Notification</h2></div>
                     <div><i class="fa fa-cog"></i></div>
                     </div>
                     <ul className="ul_list_of_notification" style={{background:"white"}}>
                      
                       <li className="ul_li_list_of_notification">
                         <img  alt="img" src={p_user} />
                         <div className="main_content_of_notification_bar">
                          <span style={{color:"#17a2b8",fontWeight:"bold"}}>Name</span><p>heloo lets start the session</p>
                         </div>
                         <div>
                           <spna style={{color:"green"}}>12:10 am</spna>
                         </div>
                       </li>
                       </ul> 
                     <div className="notification_bar_bottom"><Link to="/" className="link_to_see_notification">See all incoming activity</Link></div>
                     </div>
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
