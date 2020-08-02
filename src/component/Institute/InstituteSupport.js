import React, { Fragment } from 'react'
import InstituteFooter from '../Layout/Institutefooter'
import InstituteSideNav from '../Layout/InstituteSideNav'
import InstituteTopNav from '../Layout/InstituteTopNav'

export default function InstituteSupport() {
    return (
        <Fragment>
           <div  className="institute_dashboard_main_page">
            <InstituteSideNav/>
            <div className="institute_dashboard_main_page_flex_dash"> 
            <InstituteTopNav/>
            
            <div className="institute_dashboard_main_page_flex_dash_support_section">
                
            </div>
            </div>
        </div>
        <InstituteFooter/>
        </Fragment>
        
    )
}

