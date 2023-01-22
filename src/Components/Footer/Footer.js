import "./Footer.css";
import { useState } from "react";
import HailAlcher from "./HailAlcher";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { ReactComponent as Insta } from "./Images/insta.svg";
import { ReactComponent as Facebook } from "./Images/facebook.svg";
import { ReactComponent as Youtube } from "./Images/utube.svg";
import { ReactComponent as Twitter } from "./Images/twitter.svg";
import { ReactComponent as Insta2 } from "./Images/insta2.svg";
import { ReactComponent as Facebook2 } from "./Images/facebook2.svg";
import { ReactComponent as Youtube2 } from "./Images/utube2.svg";
import { ReactComponent as Twitter2 } from "./Images/twitter2.svg";
import desBY from "./Images/designBY.png";
import devBY from "./Images/developedBY.png";

function Footer() {
  const [isMouseOverC,setIsMouseOverC] = useState(false)

const handleEnterC = () => {
  setIsMouseOverC(true)
}

const handleLeaveC = (event) => {
  setIsMouseOverC(false);
  event.stopPropagation();
}
const [isMouseOverDev,setIsMouseOverDev] = useState(false)

const handleEnterDev = () => {
setIsMouseOverDev(true)
}

const handleLeaveDev = (event) => {
setIsMouseOverDev(false);
event.stopPropagation();
}
  return (
    <div className="footer_desk">
      <div className="logo_mob">
        <HailAlcher />
      </div>
      <div>
        <div className="footer_main">
          <div className="options">
            <ul type="none">
              <li>
                <NavLink to="/Events" className="footerlink">EVENTS</NavLink>
              </li>
              <li>
                <NavLink to="/Merch" className="footerlink">MERCH</NavLink>
              </li>
              <li>
                <NavLink to="/Campaigns" className="footerlink">CAMPAIGNS</NavLink>
              </li>
              <li>
                <NavLink to="/Teams" className="footerlink">TEAMS</NavLink>
              </li>
              <li>
                <NavLink to="/MUN" className="footerlink">MUN</NavLink>
              </li>
              <li>
                <NavLink to="/Sponsors" className="footerlink">SPONSORS</NavLink>
              </li>
              <li>
                <NavLink to="/Contests" className="footerlink">CONTESTS</NavLink>
              </li>
            </ul>
          </div>
          <div className="logo">
            <HailAlcher />
          </div>
          <div className="details_main">
            <div className="details">
              <div className="contact">
                <div className="shareka">
                  <b>Siddhant Singh</b>
                  PR Head<br></br>
                  +91 9310859978
                </div>
                <br />
                <br />
                <br />
                <div className="abhi">
                  <b>Danda Akshara</b>
                  PR Head<br></br>
                  +91 9908991939
                </div>
              </div>
            </div>
            <div className="socials_mob">
              <a
                className="insta"
                href="https://www.instagram.com/alcheringaiitg/"
                target="_blank"
              >
                <Insta2 />
              </a>
              <a
                className="face"
                href="https://www.facebook.com/alcheringaiitg"
                target="_blank"
              >
                <Facebook2 />
              </a>
              <a className="tweet" href="https://twitter.com/alcheringaiitg" target="_blank">
                <Twitter2 />
              </a>
              <a
                className="youtube"
                href="https://www.youtube.com/@alcheringaIITG"
                target="_blank"
              >
                <Youtube2 />
              </a>
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <div>
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <div className="socialIcon">
            <div className="socials_desk">
              <a
                className="insta"
                href="https://www.instagram.com/alcheringaiitg/"
                target="_blank"
              >
                <Insta />
              </a>
              <a
                className="face"
                href="https://www.facebook.com/alcheringaiitg"
                target="_blank"
              >
                <Facebook />
              </a>
              <a className="tweet" href="https://twitter.com/alcheringaiitg" target="_blank">
                <Twitter />
              </a>
              <a
                className="youtube"
                href="https://www.youtube.com/@alcheringaIITG"
                target="_blank"
              >
                <Youtube />
              </a>
            </div>
            <div className="inqueries">
              For Business Enqueries:{" "}
              <span style={{ fontWeight: 900 }}>alcheringa@iitg.ac.in</span>
            </div>
          </div>

        </div>
        <div className="ddby">
          Designed & Developed by&nbsp;
          <span className="underline" onMouseEnter={handleEnterC} onMouseLeave={handleLeaveC}>
            Alcher Creatives
             {isMouseOverC?
               <>
            <div className="creatives-ddby-container">
              <div className="creatives-ddby">
                <img src={desBY} className="designBY"/>
                <div className="creatives-names">
                  <span className="names-ddby">Aarya Ghodke, Dhwani Doshi</span>
                </div>
              </div>
            </div>
            </>:
            null

            }
          </span>
           &nbsp;&&nbsp;
          <span className="underline" onMouseEnter={handleEnterDev} onMouseLeave={handleLeaveDev}>
           Alcher Web Operations
           {isMouseOverDev?
             <>
           <div className="devops-ddby-container">
          <div className="dev-ddby">
            <img src={devBY} className="designBY"/>
            <div className="creatives-names">
              <span className="names-ddby">Abhi Agarwal, Digvijay Singh, Akshat, Rohit Chalak, Siddhant Srivastava, Ayush Mishra, Dev Jyoti, Kruthikesh M Kopparam, Geet Manik, Mohit Kumar Sharma, Soumyadip Mondal, Prakash, Siddhant Jethwani, Utkarsh Raja, Raunak Agarwal, Afshan Perween, Manaswi Yadamreddy, Himanshi Gautam, Sankooru Manideep, Posa Mokshith</span>
            </div>
          </div>
        </div>
        </>:
        null

        }
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
