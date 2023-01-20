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
                <NavLink to="/Events">EVENTS</NavLink>
              </li>
              <li>
                <NavLink to="/Merch">MERCH</NavLink>
              </li>
              <li>
                <NavLink to="/Campaigns">CAMPAIGNS</NavLink>
              </li>
              <li>
                <NavLink to="/Teams">TEAMS</NavLink>
              </li>
              <li>
                <NavLink to="/MUN">MUN</NavLink>
              </li>
              <li>
                <NavLink to="/Sponsors">SPONSORS</NavLink>
              </li>
              <li>
                <NavLink to="/Contests">CONTESTS</NavLink>
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
                  <b>Siddant Singh</b>
                  PR Head<br></br>
                  +91 9310859978
                </div>
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
          Designed & Developed by Alcher&nbsp;
          <span className="underline" onMouseEnter={handleEnterC} onMouseLeave={handleLeaveC}>
             Creatives
             {isMouseOverC?
               <>
            <div className="creatives-ddby-container">
              <div className="creatives-ddby">
                <img src={desBY} className="designBY"/>
                <div className="creatives-names">
                  <span className="names-ddby">Arya Godhke</span>
                  <br/>
                  <span className="names-ddby">Dhwani</span>
                </div>
              </div>
            </div>
            </>:
            null

            }
          </span>
           &nbsp;&&nbsp;
          <span className="underline" onMouseEnter={handleEnterDev} onMouseLeave={handleLeaveDev}>
           Web-Ops
           {isMouseOverDev?
             <>
           <div className="devops-ddby-container">
          <div className="dev-ddby">
            <img src={devBY} className="designBY"/>
            <div className="creatives-names">
              <span className="names-ddby">Akshat</span>
              <span className="names-ddby">digvijay</span>
              <span className="names-ddby">Geeta</span>
              <br/>
              <span className="names-ddby">Ankit Guha</span>
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
