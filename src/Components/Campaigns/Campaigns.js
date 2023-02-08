import React from "react";
import Footer from "../Footer/Footer";
import Nav from "../NavBar/Nav";
import styled from "./Campaigns.module.css";
import img1 from "./images/home1.png";
import img2 from "./images/home2.png";
import img3 from "./images/home3.png";
import img4 from "./images/home4.png";
import img5 from "./images/home5.png";
import img6 from "./images/home6.png";
import img7 from "./images/camp1.png";
import img8 from "./images/camp2.png";
import img9 from "./images/camp3.png";
import Aikyam1 from "./images/Aikyam/Aikyam1.jpg";
import Aikyam2 from "./images/Aikyam/Aikyam2.jpg";
import Aikyam3 from "./images/Aikyam/Aikyam3.jpg";
import Aikyam4 from "./images/Aikyam/Aikyam4.jpg";
import Aikyam5 from "./images/Aikyam/Aikyam5.jpg";
import Aikyam6 from "./images/Aikyam/Aikyam6.jpg";
import Manshakti2 from "./images/Manshakti/Manshakti1.jpeg";
import Manshakti1 from "./images/Manshakti/Manshakti2.jpg";
import Manshakti3 from "./images/Manshakti/Manshakti3.jpg";
import Manshakti4 from "./images/Manshakti/Manshakti4.jpg";
import Manshakti5 from "./images/Manshakti/Manshakti5.jpg";
import NEExpo1 from "./images/North East Expo/NEExpo1.jpg";
import NEExpo2 from "./images/North East Expo/NEExpo2.jpg";
import NEExpo3 from "./images/North East Expo/NEExpo3.jpg";
import NEExpo4 from "./images/North East Expo/NEExpo4.jpg";
import NEExpo5 from "./images/North East Expo/NEExpo5.jpg";
import NEExpo6 from "./images/North East Expo/NEExpo6.jpg";
import NEExpo7 from "./images/North East Expo/NEExpo7.jpg";
import NEExpo8 from "./images/North East Expo/NEExpo8.jpg";
import NEExpo9 from "./images/North East Expo/NEExpo9.jpg";
import Prithvi1 from "./images/Prithvi/Prithvi1.jpg";
import Prithvi2 from "./images/Prithvi/Prithvi2.jpg";
import Prithvi3 from "./images/Prithvi/Prithvi3.jpg";
import Prithvi4 from "./images/Prithvi/Prithvi4.jpg";
import Prithvi5 from "./images/Prithvi/Prithvi5.jpg";
import Safher1 from "./images/Safher/Safher1.jpg";
import Safher2 from "./images/Safher/Safher2.jpg";
import Safher3 from "./images/Safher/Safher3.jpg";
import Safher4 from "./images/Safher/Safher4.jpg";
import Safher5 from "./images/Safher/Safher5.jpg";
import left from "./images/left.svg";
import right from "./images/right.svg";
import CampaignLogo from "./images/AalooLogo.svg";

function Campaigns() {
  return (
    <div>
      {/* <div className={styled.mainbody}> */}
      <Nav />
      <Display />
      {/* </div> */}
      <Footer />
    </div>
  );
}
class Cards extends React.Component {
  render() {
    return (
      <section className={styled.verical}>
        {
          <div className={styled.card} id="card" style={this.props.cardStyle}>
            <div className={styled.cambox3i1}></div>
            <div className={styled.cambox2i1}>
              <div className={styled.text1}>Aikyam</div>
            </div>
            <div className={styled.cambox1i1}></div>
            <div className={styled.desc}>
              <div className={styled.camtext2i}>
                Campus residents get app-exclusive E-Pass access for offline
                events! Download the Alcheringa app today and explore our
                impressive event line-up and merchandise as we begin our Voyage
                to Neoterra.
              </div>
            </div>
            <div className={styled.slideri}>
              <div className={styled.slideTrack}>
                <hr />
                <div className={styled.slide}>
                  <img className={styled.imgcam} src={Aikyam1} alt="" />
                </div>
                <div className={styled.slide}>
                  <img className={styled.imgcam} src={Aikyam2} alt="" />
                </div>
                <div className={styled.slide}>
                  <img className={styled.imgcam} src={Aikyam3} alt="" />
                </div>
                <div className={styled.slide}>
                  <img className={styled.imgcam} src={Aikyam4} alt="" />
                </div>
                <div className={styled.slide}>
                  <img className={styled.imgcam} src={Aikyam5} alt="" />
                </div>
                <div className={styled.slide}>
                  <img className={styled.imgcam} src={Aikyam6} alt="" />
                </div>
                <div className={styled.slide}>
                  <img className={styled.imgcam} src={Aikyam1} alt="" />
                </div>
                <div className={styled.slide}>
                  <img className={styled.imgcam} src={Aikyam2} alt="" />
                </div>
                <div className={styled.slide}>
                  <img className={styled.imgcam} src={Aikyam3} alt="" />
                </div>
                <div className={styled.slide}>
                  <img className={styled.imgcam} src={Aikyam4} alt="" />
                </div>
                <div className={styled.slide}>
                  <img className={styled.imgcam} src={Aikyam5} alt="" />
                </div>
                <div className={styled.slide}>
                  <img className={styled.imgcam} src={Aikyam6} alt="" />
                </div>
                {/* <div className={styled.slide}>
                  <img className={styled.imgcam} src={img7} alt="" />
                </div> */}
                <hr />
              </div>
            </div>
          </div>
        }
        {
          <div className={styled.card} id="card" style={this.props.cardStyle}>
            <div className={styled.cambox3i2}></div>
            <div className={styled.cambox2i2}>
              <div className={styled.text2}>safher</div>
            </div>
            <div className={styled.cambox1i2}></div>
            <div className={styled.desc}>
              <div className={styled.camtext2i}>
                Campus residents get app-exclusive E-Pass access for offline
                events! Download the Alcheringa app today and explore our
                impressive event line-up and merchandise as we begin our Voyage
                to Neoterra.
              </div>
            </div>
            <div className={styled.slideri}>
              <div className={styled.slideTrack}>
                <hr />
                <div className={styled.slide}>
                  <img className={styled.imgcam} style={{width: '18vw'}} src={Safher1} alt="" />
                </div>
                <div className={styled.slide}>
                  <img className={styled.imgcam} style={{width: '16vw'}} src={Safher2} alt="" />
                </div>
                <div className={styled.slide}>
                  <img className={styled.imgcam} style={{width: '15vw'}} src={Safher4} alt="" />
                </div>
                <div className={styled.slide}>
                  <img className={styled.imgcam} style={{width: '18vw'}} src={Safher5} alt="" />
                </div>
                <div className={styled.slide}>
                  <img className={styled.imgcam} style={{width: '20vw'}} src={Safher3} alt="" />
                </div>
                <div className={styled.slide}>
                  <img className={styled.imgcam} style={{width: '18vw'}} src={Safher1} alt="" />
                </div>
                <div className={styled.slide}>
                  <img className={styled.imgcam} style={{width: '16vw'}} src={Safher2} alt="" />
                </div>
                <div className={styled.slide}>
                  <img className={styled.imgcam} style={{width: '15vw'}} src={Safher4} alt="" />
                </div>
                <div className={styled.slide}>
                  <img className={styled.imgcam} style={{width: '18vw'}} src={Safher5} alt="" />
                </div>
                <div className={styled.slide}>
                  <img className={styled.imgcam} style={{width: '20vw'}} src={Safher3} alt="" />
                </div>
                {/* <div className={styled.slide}>
                  <img className={styled.imgcam} src={img9} alt="" />
                </div>
                <div className={styled.slide}>
                  <img className={styled.imgcam} src={img7} alt="" />
                </div> */}
                <hr />
              </div>
            </div>
          </div>
        }
        {
          <div className={styled.card} id="card" style={this.props.cardStyle}>
            <div className={styled.cambox3i3}></div>
            <div className={styled.cambox2i3}>
              <div className={styled.text3}>Manshakti</div>
            </div>
            <div className={styled.cambox1i3}></div>
            <div className={styled.desc}>
              <div className={styled.camtext2i}>
                Campus residents get app-exclusive E-Pass access for offline
                events! Download the Alcheringa app today and explore our
                impressive event line-up and merchandise as we begin our Voyage
                to Neoterra.
              </div>
            </div>
            <div className={styled.slideri}>
              <div className={styled.slideTrack}>
                <hr />
                <div className={styled.slide}>
                  <img className={styled.imgcam} src={Manshakti1} alt="" />
                </div>
                <div className={styled.slide}>
                  <img className={styled.imgcam} src={Manshakti2} alt="" />
                </div>
                <div className={styled.slide}>
                  <img className={styled.imgcam} style={{width: '18vw'}} src={Manshakti3} alt="" />
                </div>
                <div className={styled.slide} id="cropped">
                  <img className={styled.imgcam} src={Manshakti4} alt="" />
                </div>
                <div className={styled.slide}>
                  <img className={styled.imgcam} src={Manshakti5} alt="" />
                </div>
                <div className={styled.slide}>
                  <img className={styled.imgcam} src={Manshakti1} alt="" />
                </div>
                <div className={styled.slide}>
                  <img className={styled.imgcam} src={Manshakti2} alt="" />
                </div>
                <div className={styled.slide}>
                  <img className={styled.imgcam} style={{width: '18vw'}} src={Manshakti3} alt="" />
                </div>
                <div className={styled.slide} id="cropped">
                  <img className={styled.imgcam} src={Manshakti4} alt="" />
                </div>
                <div className={styled.slide}>
                  <img className={styled.imgcam} src={Manshakti5} alt="" />
                </div>
                {/* <div className={styled.slide}>
                  <img className={styled.imgcam} src={img9} alt="" />
                </div>
                <div className={styled.slide}>
                  <img className={styled.imgcam} src={img7} alt="" />
                </div> */}
                <hr />
              </div>
            </div>
          </div>
        }
        {
          <div className={styled.card} id="card" style={this.props.cardStyle}>
            <div className={styled.cambox3i4}></div>
            <div className={styled.cambox2i4}>
              <div className={styled.text4}>north east unvield</div>
            </div>
            <div className={styled.cambox1i4}></div>
            <div className={styled.desc}>
              <div className={styled.camtext2i_}>
                North East India is a microcosm of India with its own diversity
                in terms of languages, culture, arts and religion. There is a
                need to promote and unveil the true potential of this part of
                country, which is still unexplored by many. In Alcheringa’16:
                Gamescape, The North East Social Entrepreneurship Summit and The
                North East Townhall Discussions were held under North East
                Unveiled.
              </div>
            </div>
            <div className={styled.slideri}>
              <div className={styled.slideTrack}>
                <hr />
                <div className={styled.slide}>
                  <img className={styled.imgcam} src={NEExpo1} alt="" />
                </div>
                <div className={styled.slide}>
                  <img className={styled.imgcam} src={NEExpo2} alt="" />
                </div>
                <div className={styled.slide}>
                  <img className={styled.imgcam} src={NEExpo3} alt="" />
                </div>
                <div className={styled.slide}>
                  <img className={styled.imgcam} src={NEExpo4} alt="" />
                </div>
                <div className={styled.slide}>
                  <img className={styled.imgcam} style={{width: '17vw'}} src={NEExpo5} alt="" />
                </div>
                <div className={styled.slide}>
                  <img className={styled.imgcam} src={NEExpo6} alt="" />
                </div>
                <div className={styled.slide}>
                  <img className={styled.imgcam} src={NEExpo7} alt="" />
                </div>
                <div className={styled.slide}>
                  <img className={styled.imgcam} src={NEExpo8} alt="" />
                </div>
                <div className={styled.slide}>
                  <img className={styled.imgcam} src={NEExpo9} alt="" />
                </div>
                <div className={styled.slide}>
                  <img className={styled.imgcam} src={NEExpo1} alt="" />
                </div>
                <div className={styled.slide}>
                  <img className={styled.imgcam} src={NEExpo2} alt="" />
                </div>
                <div className={styled.slide}>
                  <img className={styled.imgcam} src={NEExpo3} alt="" />
                </div>
                <div className={styled.slide}>
                  <img className={styled.imgcam} src={NEExpo4} alt="" />
                </div>
                <div className={styled.slide}>
                  <img className={styled.imgcam} style={{width: '17vw'}} src={NEExpo5} alt="" />
                </div>
                <div className={styled.slide}>
                  <img className={styled.imgcam} src={NEExpo6} alt="" />
                </div>
                <div className={styled.slide}>
                  <img className={styled.imgcam} src={NEExpo7} alt="" />
                </div>
                <div className={styled.slide}>
                  <img className={styled.imgcam} src={NEExpo8} alt="" />
                </div>
                <div className={styled.slide}>
                  <img className={styled.imgcam} src={NEExpo9} alt="" />
                </div>
                <hr />
              </div>
            </div>
            {/* </div> */}
          </div>
        }

        {
          <div className={styled.card} id="card" style={this.props.cardStyle}>
            <div className={styled.cambox3i5}></div>
            <div className={styled.cambox2i5}>
              <div className={styled.text5}>prithvi</div>
            </div>
            <div className={styled.cambox1i5}></div>
            <div className={styled.desc}>
              <div className={styled.camtext2i}>
                Campus residents get app-exclusive E-Pass access for offline
                events! Download the Alcheringa app today and explore our
                impressive event line-up and merchandise as we begin our Voyage
                to Neoterra.
              </div>
            </div>
            <div className={styled.slideri}>
              <div className={styled.slideTrack}>
                <hr />
                <div className={styled.slide}>
                  <img className={styled.imgcam} style={{width: '18vw'}} src={Prithvi1} alt="" />
                </div>
                <div className={styled.slide}>
                  <img className={styled.imgcam} style={{width: '17vw'}} src={Prithvi2} alt="" />
                </div>
                <div className={styled.slide}>
                  <img className={styled.imgcam} style={{width: '17vw'}} src={Prithvi3} alt="" />
                </div>
                <div className={styled.slide}>
                  <img className={styled.imgcam} style={{width: '17vw'}} src={Prithvi4} alt="" />
                </div>
                <div className={styled.slide}>
                  <img className={styled.imgcam} style={{width: '18vw'}} src={Prithvi5} alt="" />
                </div>
                <div className={styled.slide}>
                  <img className={styled.imgcam} style={{width: '18vw'}} src={Prithvi1} alt="" />
                </div>
                <div className={styled.slide}>
                  <img className={styled.imgcam} style={{width: '17vw'}} src={Prithvi2} alt="" />
                </div>
                <div className={styled.slide}>
                  <img className={styled.imgcam} style={{width: '17vw'}} src={Prithvi3} alt="" />
                </div>
                <div className={styled.slide}>
                  <img className={styled.imgcam} style={{width: '17vw'}} src={Prithvi4} alt="" />
                </div>
                <div className={styled.slide}>
                  <img className={styled.imgcam} style={{width: '18vw'}} src={Prithvi5} alt="" />
                </div>
                {/* <div className={styled.slide}>
                  <img className={styled.imgcam} src={img9} alt="" />
                </div>
                <div className={styled.slide}>
                  <img className={styled.imgcam} src={img7} alt="" />
                </div> */}
                <hr />
              </div>
            </div>
          </div>
        }
        {
          <div className={styled.card} id="card" style={this.props.cardStyle}>
            <div className={styled.cambox3i6}></div>
            <div className={styled.cambox2i6}>
              <div className={styled.text6}>udaan</div>
            </div>
            <div className={styled.cambox1i6}></div>
            <div className={styled.desc}>
              <div className={styled.camtext2i_}>
              <p>
                Have you been looking for any Volunteering opportunity where you can contribute and learn? If YES then why wait, kindly fill in the below form and start working for ensuring happier and healthier childhood for India’s children with CRY-Child Rights and You.
              CRY - Child Rights and You, India's most trusted NGO, has been working towards creating happier and healthier childhoods for the last 43 years.  We are working in 19 states in India with grassroots partners and communities and impacting the lives of over 3 million children. To Know more : <a style={{'textDecoration':'none'}} href='https://www.cry.org' target={'_blank'}>www.cry.org </a>
              Anyone can be a volunteer. You can apply here and embark on your volunteering journey with us : <a href='https://forms.gle/k47PzbXPgWdmMCLz5' style={{'textDecoration':'none'}} target={'_blank'} >https://forms.gle/k47PzbXPgWdmMCLz5</a></p>
              </div>
            </div>
            <div className={styled.slideri}>
              <div className={styled.slideTrack}>
                <hr />
                <div className={styled.slide}>
                  <img className={styled.imgcam} src={img7} alt="" />
                </div>
                <div className={styled.slide}>
                  <img className={styled.imgcam} src={img8} alt="" />
                </div>
                <div className={styled.slide}>
                  <img className={styled.imgcam} src={img9} alt="" />
                </div>
                <div className={styled.slide}>
                  <img className={styled.imgcam} src={img7} alt="" />
                </div>
                <div className={styled.slide}>
                  <img className={styled.imgcam} src={img8} alt="" />
                </div>
                <div className={styled.slide}>
                  <img className={styled.imgcam} src={img9} alt="" />
                </div>
                <div className={styled.slide}>
                  <img className={styled.imgcam} src={img7} alt="" />
                </div>
                <hr />
              </div>
            </div>
          </div>
        }
      </section>
    );
  }
}

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCard: 0,
      position: 0,
      cardStyle: {
        transform: "translateX(0px)",
      },
      width: 0,
    };
  }

  componentDidMount() {
    let boxWidth = document.getElementById("card").clientWidth;
    this.setState({ width: boxWidth });
  }
  handleClick(type) {
    let margin = window.getComputedStyle(
      document.getElementById("card")
    ).marginRight;
    margin = JSON.parse(margin.replace(/px/i, ""));

    const cardWidth = this.state.width; // the card's width
    const cardMargin = margin; // the card's margin
    const cardNumber = 6; // the number of cards
    let currentCard = this.state.currentCard; // the index of the current card
    let position = this.state.position; // the position of the cards

    if (type === "next" && currentCard < cardNumber - 1) {
      currentCard++;
      position -= cardWidth + cardMargin;
    } else if (type === "prev" && currentCard > 0) {
      currentCard--;
      position += cardWidth + cardMargin;
    } else if (type == "next" && currentCard == cardNumber - 1) {
      currentCard = 0;
      position = 0;
    } else if (type === "prev" && currentCard === 0) {
      currentCard = cardNumber - 1;
      position = -(cardWidth + cardMargin) * (cardNumber - 1);
    }
    this.setCard(currentCard, position);
  }

  setCard(currentCard, position) {
    this.setState({
      currentCard: currentCard,
      position: position,
      cardStyle: {
        transform: `translateX(${position}px)`,
      },
    });
  }

  render() {
    return (
      <div>
        <div className={`${styled.cardsSlider} ${styled.noMobile}`}>
          <div className={styled.sliderBtns}>
            <img
              src={left}
              className={`${styled.sliderBtn} ${styled.btnL}`}
              onClick={() => this.handleClick("prev")}
              alt=""
            />
            <img
              src={right}
              className={`${styled.sliderBtn} ${styled.btnR}`}
              onClick={() => this.handleClick("next")}
              alt=""
            />
          </div>
          <Cards cardStyle={this.state.cardStyle} />
        </div>
        <div className={styled.mobile}>
          <Cards cardStyle={this.state.cardStyle} />
        </div>
      </div>
    );
  }
}
export default Campaigns;
