import React, {useState, Fragment } from 'react'
import InstituteFooter from '../Layout/Institutefooter'
import InstituteSideNav from '../Layout/InstituteSideNav'
import InstituteTopNav from '../Layout/InstituteTopNav'
import { Tabs ,TabList,TabPanel,Tab} from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import { Link } from 'react-router-dom';


export default function InstituteNotice() {
    const  [notices, setNotice] = useState([{
        id: 1 , auther:"sau",autherRole:"teacher",title:"Good day", content:"hello everyone good moring everyone here we anncoue the next project ohello everyone good moring everyone here we anncoue the next project ohello everyone good moring everyone here we anncoue the next project of your batch", category:"Teacher", date:"15/07/19", time:"12:15 am"
    },
    {
        id: 2 , auther:"Mr. Kr",autherRole:"institute",title:"Good morning", content:"hello everyone good moring", category:"institute", date:"15/07/19", time:"12:15 am"
    },
    {
        id: 3 , auther:"Manoj",title:"Good morning", autherRole:"teacher",content:"hello everyone good moring", category:"students", date:"15/07/19", time:"12:15 am"
    }
   ]);
    const [read, setread] = useState(true);
    
    const onRead=(e)=>{
       e.preventDefault();
       setread(!read);
    }
    return (
        <Fragment>
           <div  className="institute_dashboard_main_page">
            <InstituteSideNav/>
            <div className="institute_dashboard_main_page_flex_dash"> 
            <InstituteTopNav/>
            <div className="institute_dashboard_main_page_flex_dash_noticepage">
               <Tabs className="institute_dashboard_main_page_flex_dash_noticepage_tabs">
                 <TabList className="institute_dashboard_main_page_flex_dash_noticepage_tabList">
                     <Tab className="institute_dashboard_main_page_flex_dash_noticepage_tab" activeClassName="institute_dashboard_main_page_flex_dash_noticepage_tabactive  active">Notice Board</Tab>
                     <Tab className="institute_dashboard_main_page_flex_dash_noticepage_tab" activeClassName="institute_dashboard_main_page_flex_dash_noticepage_tabactive active">Publish Notice</Tab>
                 </TabList>
                 <TabPanel className="institute_dashboard_main_page_flex_dash_noticepage_tabPanel">
                     <Tabs className="institute_dashboard_main_page_flex_dash_noticepage_tabPanel_tab_two">
                         <TabList>
                            <Tab>All Notices</Tab> 
                            <Tab>My Notices</Tab> 
                         </TabList>
                         <TabPanel>
                         <div>
                             No notice here please refresh
                         </div>
                            <ul>
                                {notices.map(notice => (
                                    <div key={notice.id} className="notice_all_layout">
                                        <div className="notice_all_layout_column_title"><span>{notice.title}</span></div>
                                        <div className="notice_all_layout_column_dateandtime"><span className="span_class_for_notice_layout">{notice.date } , {notice.time}</span><span className="span_class_for_notice_layout"><i class="fa fa-folder" style={{color:"white"}}></i> {notice.category}</span></div>
                                        {read ? 
                                            <div className="notice_all_layout_column_content"><p>{notice.content.slice(0,150)}...</p></div>
                                        :
                                        <div className="notice_all_layout_column_content"><p>{notice.content}</p></div>
                                        }
                                        {read ? 
                                            <div className="notice_all_layout_column_reead_button">Auther :<span className="span_class_for_notice_layout"> {notice.autherRole}</span> <Link className="span_class_for_notice_layout" to="/"> {notice.auther}</Link><button className="btn_layout_for_read_notice" onClick={onRead}>Read More</button></div>
                                        :
                                        <div className="notice_all_layout_column_reead_button">Auther : <span className="span_class_for_notice_layout"> {notice.autherRole}</span><Link className="span_class_for_notice_layout"> {notice.auther}</Link><button className="btn_layout_for_read_notice" onClick={onRead}>Read Less</button></div>
                                        }

                                    </div>
                                ))}
                            </ul>
                         </TabPanel>
                         <TabPanel>
                         <ul>
                                {notices.map(notice => (
                                    <div key={notice.id} className="notice_all_layout">
                                        <div className="notice_all_layout_column_title"><span>{notice.title}</span></div>
                                        <div className="notice_all_layout_column_dateandtime"><span className="span_class_for_notice_layout">{notice.date } , {notice.time}</span><span className="span_class_for_notice_layout"><i class="fa fa-folder" style={{color:"white"}}></i> {notice.category}</span></div>
                                        {read ? 
                                            <div className="notice_all_layout_column_content"><p>{notice.content.slice(0,150)}...</p></div>
                                        :
                                        <div className="notice_all_layout_column_content"><p>{notice.content}</p></div>
                                        }
                                        {read ? 
                                            <div className="notice_all_layout_column_reead_button">Auther : <span className="span_class_for_notice_layout"> {notice.autherRole}</span><Link className="span_class_for_notice_layout" to="/"> {notice.auther}</Link><button className="btn_layout_for_read_notice" onClick={onRead}>Read More</button></div>
                                        :
                                        <div className="notice_all_layout_column_reead_button">Auther :<span className="span_class_for_notice_layout"> {notice.autherRole}</span><Link className="span_class_for_notice_layout"> {notice.auther}</Link><button className="btn_layout_for_read_notice" onClick={onRead}>Read Less</button></div>
                                        }

                                    </div>
                                ))}
                            </ul>
                         </TabPanel>
                     </Tabs>
                 </TabPanel>
                 <TabPanel className="institute_dashboard_main_page_flex_dash_noticepage_tabPanel_form">
                     <div className="institute_dashboard_main_page_flex_dash_noticepage_add_notice_div_form">
                     <h1 className="institute_dashboard_main_page_flex_dash_noticepage_heading">Publish Notice</h1>
                         <form className="institute_dashboard_main_page_flex_dash_noticepage_add_notice">
                             <input type="text" name="" id="" placeholder="Notice titile goes here" /><br/>
                             <select>
                             <option>All</option>
                                 <option>
                                     Teachers
                                 </option>
                                 <option>
                                     Students
                                 </option>
                             </select><br/>
                             <textarea name="" id="" placeholder="Write Content" cols="36" rows= "10 !important"></textarea><br/>
                             <button type="submit" value="Send" className="btn_submit_notice">Publish Notice</button>
                         </form>
                     </div>
                 </TabPanel>
               </Tabs>
               <div className="institute_dashboard_main_page_flex_dash_noticepage_discripction">
                    <div className="institute_dashboard_main_page_flex_dash_noticepage_discripction_category">
                        <div className="institute_dashboard_main_page_flex_dash_noticepage_discripction_category_heading">
                            <li style={{fontWeight:"bold"}}>Group category</li>
                            <li><i class="fa fa-folder" style={{color:"white"}}></i></li>
                        </div>
                        <br/>
                        <Link className="institute_dashboard_main_page_flex_dash_noticepage_discripction_category_heading">
                            <li>For Institute</li>
                            <li><span className="spna_count_notice">4</span></li>
                        </Link>
                        <Link className="institute_dashboard_main_page_flex_dash_noticepage_discripction_category_heading">
                            <li>For Teachers</li>
                            <li><span className="spna_count_notice">4</span></li>
                        </Link>
                        <Link className="institute_dashboard_main_page_flex_dash_noticepage_discripction_category_heading">
                            <li>For Students</li>
                            <li><span className="spna_count_notice">4</span></li>
                        </Link>
                    </div>
                    <div className="institute_dashboard_main_page_flex_dash_noticepage_discripction_forum_static">
                    <div className="institute_dashboard_main_page_flex_dash_noticepage_discripction_forum_heading">
                            <li style={{fontWeight:"bold"}}>Auther count</li>
                            <li><i class="fa fa-folder" style={{color:"white"}}></i></li>
                        </div>
                        <br/>
                        <Link className="institute_dashboard_main_page_flex_dash_noticepage_discripction_forum_heading">
                            <li>Director</li>
                            <li><span className="spna_count_notice">4</span></li>
                        </Link>
                        <Link className="institute_dashboard_main_page_flex_dash_noticepage_discripction_forum_heading">
                            <li>Teacher</li>
                            <li><span className="spna_count_notice">4</span></li>
                        </Link>
                    </div>
               </div>
            </div>
            </div>
        </div>
        <InstituteFooter/>
        </Fragment>
        
    )
}

