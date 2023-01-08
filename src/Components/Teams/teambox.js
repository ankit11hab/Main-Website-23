import React from "react";

const piC1 = new URL("./images/pic1.png",
    import.meta.url);
const bubbleBlank = new URL("./images/bubble-blank.png",
    import.meta.url);
const instagram = new URL("./images/instagram.png",
    import.meta.url);
const linkedinBlack = new URL("./images/linkedin-black.png",
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
            <div className="hover-grp">
                <div className="hovershow">
                    <div className="bubble-container">
                        <div className="bubble">
                            <img className="bubble-blank" src={bubbleBlank} alt=""/>
                            <div className="contact-title">Contact:</div>
                            <div className="contact-info">
                                <div>1234567890</div>
                                <div>creatives@iitg.ac.in</div>
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
                            <a href={lefttwit}>
                            <img className="linkedin-black-b" src={linkedinBlack} alt=""/>
                        </a>
                        </div>
                    </div>
                </div>
                <div className="hovershow">
                    <div className="bubble-container">
                        <div className="bubble">
                            <img className="bubble-blank" src={bubbleBlank} alt=""/>
                            <div className="contact-title">Contact:</div>
                            <div className="contact-info">
                                <div>1234567890</div>
                                <div>creatives@iitg.ac.in</div>
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
                            <a href={midtwit}>
                            <img className="linkedin-black-b" src={linkedinBlack} alt=""/>
                        </a>
                        </div>
                    </div>
                </div>
                <div className="hovershow">
                    <div className="bubble-container">
                        <div className="bubble">
                            <img className="bubble-blank" src={bubbleBlank} alt=""/>
                            <div className="contact-title">Contact:</div>
                            <div className="contact-info">
                                <div>1234567890</div>
                                <div>creatives@iitg.ac.in</div>
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
                            <a href={righttwit}>
                            <img className="linkedin-black-b" src={linkedinBlack} alt=""/>
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="teams-title">CREATIVES</div>
    </div>
    );
};

export default Teambox;
