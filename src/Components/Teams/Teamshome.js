import "./teams.css";
import { useState } from "react";
import Teambox from "./teambox";
import TeamsLogo from './images/AalooLogo.svg'
import tpic1 from "./images/pic1.png";
import bg from "./images/paperr.webp";
import Footer from '../Footer/Footer'
import Nav from '../NavBar/Nav'
import wemade from "./images/we-made-it-happen.png";

const Home = () => {
  const [boxes, setBoxes] = useState([
    {
      title: "CREATIVES",
      sr: { tpic1 },
      leftInsta: "",
      midInsta: "",
      rightInsta: "",
      leftlink: "",
      midlink: "",
      rightlink: "",
      lefttwit: "",
      midtwit: "",
      righttwit: "",
      id: 1,
    },
    {
      title: "EVENTS",
      sr: { tpic1 },
      leftInsta: "",
      midInsta: "",
      rightInsta: "",
      leftlink: "",
      midlink: "",
      rightlink: "",
      lefttwit: "",
      midtwit: "",
      righttwit: "",
      id: 2,
    },
    
  ]);

  return (
    <div className="home" >
      <Nav />
      <img class="wemade-img" src={wemade}/>
      <div class="teamheading">
        We made it happen
      </div>
      {boxes.map((box) => (

              <Teambox
                leftInsta={box.leftInsta}
                rightInsta={box.rightInsta}
                midInsta={box.midInsta}
                leftlink={box.leftlink}
                midlink={box.midlink}
                rightlink={box.rightlink}
                lefttwit={box.lefttwit}
                midtwit={box.midtwit}
                righttwit={box.righttwit}
              />
      ))}
      <Footer />
    </div>
  );
};

export default Home;
