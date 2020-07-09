import React ,{Fragment } from 'react';
import DashNavbar from '../Layout/Navbar';
import img_landing from '../../Assets/landingImg.png'
// import { Link } from 'react-router-dom';
function Landing() {
    return (
       <Fragment>
       <DashNavbar/>
       <div className="full_display_screen_windows">
         <div className="Inner_body_landing">
           <div className="img_text" style={{width:"30%"}}>
              <div className="content_landing">
               <h1 className="taglines_up">
                   An Idea <br/> For Better Advice
               </h1>
               <h1 className="taglines_down">
                   Software Solutions
               </h1>
               <br/>
              <div className="quotes_under_tagline">
               <p className="quotes_line">Our talent, your results– this is the premise behind bdollar Solutions.Get your optimized solution .Our team follow AGILE .Our commitment to service and quality is reflected in our work</p>
              </div>
              <br/>
              <div className="btn_services">
                 <button className="btn_services_css sol"><span>Try a solution </span> <i class="fa fa-long-arrow-right" aria-hidden="true" style={{color:"#FAAD3B"}}></i></button>
                 <button className="btn_services_css expert"><span> Talk to expert</span> <i class="fa fa-long-arrow-right" aria-hidden="true" style={{color:"#17a2b8"}}></i></button>
              </div>
              </div>
           </div>
           <div className="img_text" style={{width:"50%"}}>
           <img src={img_landing} alt="loading.."/>
          </div>
         </div>
        <div className="innerbody_highlight_services">
         <div className="highlight_box">
           
         </div>
        </div>
        </div>
       </Fragment>      
    )
}
export default Landing
