import React from "react";

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
    return ( <div className="teams-section">



        <div className="temp">
            <img className="pic" src={piC1} alt=""/>
            
         

            <div className="hover-grp ">
                <div className="hovershow ">
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
                            
                        </div>
                    </div>
                </div>
                <div className="hovershow ">
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
                            
                        </div>
                    </div>
                </div>
                <div className="hovershow">
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
                            
                        </div>
                    </div>
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
