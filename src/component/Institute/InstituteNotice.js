import React, {useState, Fragment } from 'react'
import InstituteFooter from '../Layout/Institutefooter'
import InstituteSideNav from '../Layout/InstituteSideNav'
import InstituteTopNav from '../Layout/InstituteTopNav'
import { Tabs ,TabList,TabPanel,Tab} from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import { Link } from 'react-router-dom';


export default function InstituteNotice() {
    const  [notices, setNotice] = useState([{
        id: 1 , auther:"sau",title:"Good day", content:"hello everyone good moring everyone here we anncoue the next project ohello everyone good moring everyone here we anncoue the next project ohello everyone good moring everyone here we anncoue the next project of your batch", category:"Teacher", date:"15/07/19", time:"12:15 am"
    },{
        id: 2 , auther:"Mr. Kr",title:"Good morning", content:"hello everyone good moring", category:"Director", date:"15/07/19", time:"12:15 am"
    }]);
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
                                            <div className="notice_all_layout_column_reead_button">Auther :<Link className="span_class_for_notice_layout" to="/"> {notice.auther}</Link><button className="btn_layout_for_read_notice" onClick={onRead}>Read More</button></div>
                                        :
                                        <div className="notice_all_layout_column_reead_button">Auther :<span className="span_class_for_notice_layout"> {notice.auther}</span><button className="btn_layout_for_read_notice" onClick={onRead}>Read Less</button></div>
                                        }

                                    </div>
                                ))}
                            </ul>
                         </TabPanel>
                         <TabPanel>fdvhfvh</TabPanel>
                     </Tabs>
                 </TabPanel>
                 <TabPanel className="institute_dashboard_main_page_flex_dash_noticepage_tabPanel">
                     njdkfjjhdgdg
                 </TabPanel>
               </Tabs>
               <div className="institute_dashboard_main_page_flex_dash_noticepage_discripction">
                    <div className="institute_dashboard_main_page_flex_dash_noticepage_discripction_category"></div>
                    <div className="institute_dashboard_main_page_flex_dash_noticepage_discripction_forum_static"></div>
               </div>
            </div>
            </div>
        </div>
        <InstituteFooter/>
        </Fragment>
        
    )
}

