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
import left from "./images/left.svg";
import right from "./images/right.svg";
import CampaignLogo from "./images/AalooLogo.svg";

function Campaigns() {
  return (
    <div>
      <div className={styled.mainbody}>
        <Nav />
        <Display />
      </div>
      <div className={styled.footer}>
        <Footer />
      </div>
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
        {
          <div className={styled.card} id="card" style={this.props.cardStyle}>
            <div className={styled.cambox3i4}></div>
            <div className={styled.cambox2i4}>
              <div className={styled.text4}>north east unvield</div>
            </div>
            <div className={styled.cambox1i4}></div>
            <div className={styled.desc}>
              <div className={styled.camtext2i}>
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
                  <img className={styled.imgcam} src={img1} alt="" />
                </div>
                <div className={styled.slide}>
                  <img className={styled.imgcam} src={img2} alt="" />
                </div>
                <div className={styled.slide}>
                  <img className={styled.imgcam} src={img3} alt="" />
                </div>
                <div className={styled.slide}>
                  <img className={styled.imgcam} src={img4} alt="" />
                </div>
                <div className={styled.slide}>
                  <img className={styled.imgcam} src={img5} alt="" />
                </div>
                <div className={styled.slide}>
                  <img className={styled.imgcam} src={img6} alt="" />
                </div>
                <div className={styled.slide}>
                  <img className={styled.imgcam} src={img1} alt="" />
                </div>
                <div className={styled.slide}>
                  <img className={styled.imgcam} src={img2} alt="" />
                </div>
                <div className={styled.slide}>
                  <img className={styled.imgcam} src={img3} alt="" />
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
        {
          <div className={styled.card} id="card" style={this.props.cardStyle}>
            <div className={styled.cambox3i6}></div>
            <div className={styled.cambox2i6}>
              <div className={styled.text6}>udaan</div>
            </div>
            <div className={styled.cambox1i6}></div>
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
    }
    else if(type=='next' && currentCard==cardNumber-1){
      currentCard=0;
      position =0;
    }else if(type === "prev" && currentCard === 0) {
      currentCard = cardNumber-1;
      position = -(cardWidth + cardMargin) * (cardNumber-1);
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
