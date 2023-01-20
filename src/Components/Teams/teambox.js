import React from "react";
import { useState } from "react";
const piC1 = new URL("./images/pic1.png",
    import.meta.url);


    const mobpiC1 = new URL("./images/pic1mob.png",
        import.meta.url);




const bubbleBlank = new URL("./images/bubble-blank.png",
    import.meta.url);
const instagram = new URL("./images/instagram.png",
    import.meta.url);

    const linkedinWhite = new URL("./images/linkedin-white.png",
        import.meta.url);
const twitter = new URL("./images/twitter.png",
    import.meta.url);
const closeX = new URL("./images/close.png",
    import.meta.url);
const Teambox = (props) => {
    const leftInsta = props.leftInsta;
    const leftlink = props.leftlink;
    const lefttwit = props.lefttwit;
    const midInsta = props.midInsta;
    const midlink = props.midlink;
    const midtwit = props.midtwit;
    const rightInsta = props.rightInsta;
    const rightlink = props.rightlink;
    const righttwit = props.righttwit;

    const [isMouseOver1,setIsMouseOver1] = useState(false);
    const [isdata1,setIsdata1] = useState("Click for contact info");
  const handleEnter1 = () => {
    setIsMouseOver1(true);
    document.getElementById("tem1").removeAttribute("data-tooltip");
  }

  const handleLeave1 = (event) => {
    setIsMouseOver1(false);
    document.getElementById("tem1").setAttribute("data-tooltip","Click for contact info");
    event.stopPropagation();
  }



  const [isMouseOver2,setIsMouseOver2] = useState(false);

  const handleEnter2 = () => {
    setIsMouseOver2(true);
    document.getElementById("tem2").removeAttribute("data-tooltip");
  }

  const handleLeave2 = (event) => {
    setIsMouseOver2(false);
    document.getElementById("tem2").setAttribute("data-tooltip","Click for contact info");
    event.stopPropagation();
  }
  const [isMouseOver3,setIsMouseOver3] = useState(false);

    const handleEnter3 = () => {
      setIsMouseOver3(true);
      document.getElementById("tem3").removeAttribute("data-tooltip");
    }

    const handleLeave3 = (event) => {
      setIsMouseOver3(false);
      document.getElementById("tem3").setAttribute("data-tooltip","Click for contact info");
      event.stopPropagation();
    }


    return (






      <div className="teams-section">



        <div className="temp">
            <img className="pic" src={piC1} alt=""/>



            <div className="hover-grp ">
                <div className="hovershow " id="tem1" onClick={handleEnter1} data-tooltip="Click for contact info" data-tooltip-location="left" >
                {isMouseOver1 ?
                <>
                    <div className="bubble-container ">
                        <div className="bubble1 ">

                            <img className="bubble-blank" src={bubbleBlank} alt=""/>
                            <div className="contact-title">Contact:</div>
                            <div className="contact-info">
                                <div>123456789</div>
                                <div>sarvesh@iitg.ac.in</div>
                            </div>
                            <div className="icons-box">
                                <a href={leftInsta}>
                                    <img className="icons instagram-b" src={instagram} alt=""/>
                                </a>
                                <a href={leftlink}>
                                    <img className="icons linkedin-white-b" src={linkedinWhite} alt=""/>
                                </a>
                                <a href={lefttwit}>
                                    <img className="icons twitter-b" src={twitter} alt=""/>
                                </a>
                            </div>
                            <img className="close-button" src={closeX} onClick={handleLeave1} alt=""/>

                        </div>
                    </div>

                    </>:
                    null

                  }
                </div>
                <div className="hovershow " id="tem2" onClick={handleEnter2} data-tooltip="Click for contact info">
                {isMouseOver2 ?
                <>
                    <div className="bubble-container">
                        <div className="bubble">
                            <img className="bubble-blank" src={bubbleBlank} alt=""/>
                            <div className="contact-title">Contact:</div>
                            <div className="contact-info">
                                <div>1234</div>
                                <div>Aabha@iitg.ac.in</div>
                            </div>
                            <div className="icons-box">
                                <a href={midInsta}>
                                    <img className="icons instagram-b" src={instagram} alt=""/>
                                </a>
                                <a href={midlink}>
                                    <img className="icons linkedin-white-b" src={linkedinWhite} alt=""/>
                                </a>
                                <a href={midtwit}>
                                    <img className="icons twitter-b" src={twitter} alt=""/>
                                </a>
                            </div>
                            <img className="close-button" src={closeX} onClick={handleLeave2} alt=""/>

                        </div>
                    </div>
                    </>:
                    null

                    }
                </div>
                <div className="hovershow " id="tem3" onClick={handleEnter3} data-tooltip="Click for contact info" data-tooltip-location="right">
                {isMouseOver3 ?
                <>
                    <div className="bubble-container">
                        <div className="bubble2">
                            <img className="bubble-blank" src={bubbleBlank} alt=""/>
                            <div className="contact-title">Contact:</div>
                            <div className="contact-info">
                                <div>1234567</div>
                                <div>AyushSingh@iitg.ac.in</div>
                            </div>
                            <div className="icons-box">
                                <a href={rightInsta}>
                                    <img className="icons instagram-b" src={instagram} alt=""/>
                                </a>
                                <a href={rightlink}>
                                    <img className="icons linkedin-white-b" src={linkedinWhite} alt=""/>
                                </a>
                                <a href={righttwit}>
                                    <img className="icons twitter-b" src={twitter} alt=""/>
                                </a>
                            </div>
                            <img className="close-button" src={closeX} onClick={handleLeave3}alt=""/>

                        </div>
                    </div>
                    </>:
                    null

                    }
                </div>
            </div>
        </div>
        <div className="teams-title">CREATIVES</div>



      <div className="temp-mob">
        <img className="mobpic" src={mobpiC1}/>
        <div className="contact-info-container">
          <div className="contact-info-mob">
            <div className="contact-mob">1234567890</div>
            <div className="contact-mob">Creative Head</div>
            <div className="icon-box-mob">
              <a href={leftInsta}>
                  <img className="icons instagram-b" src={instagram} alt=""/>
              </a>
              <a href={leftlink}>
                  <img className="icons linkedin-white-b" src={linkedinWhite} alt=""/>
              </a>
              <a href={lefttwit}>
                  <img className="icons twitter-b" src={twitter} alt=""/>
              </a>
            </div>
          </div>
          <div className="contact-info-mob">
            <div className="contact-mob">1234567890</div>
            <div className="contact-mob">Creative Head</div>
            <div className="icon-box-mob">
              <a href={midInsta}>
                  <img className="icons instagram-b" src={instagram} alt=""/>
              </a>
              <a href={midlink}>
                  <img className="icons linkedin-white-b" src={linkedinWhite} alt=""/>
              </a>
              <a href={midtwit}>
                  <img className="icons twitter-b" src={twitter} alt=""/>
              </a>
            </div>
          </div>
          <div className="contact-info-mob">
            <div className="contact-mob">1234567890</div>
            <div className="contact-mob">Creative Head</div>
            <div className="icon-box-mob">
              <a href={rightInsta}>
                  <img className="icons instagram-b" src={instagram} alt=""/>
              </a>
              <a href={rightlink}>
                  <img className="icons linkedin-white-b" src={linkedinWhite} alt=""/>
              </a>
              <a href={righttwit}>
                  <img className="icons twitter-b" src={twitter} alt=""/>
              </a>
            </div>
          </div>
          <div className="teams-title-mob">CREATIVES</div>
        </div>


      </div>
    </div>
    );
};

export default Teambox;
