import "./teams.css";
import { useState } from "react";
import Teambox from "./teambox";
// import TeamsLogo from './images/AalooLogo.svg';
import tpic1 from "./images/pic1.png";
import tpic2 from "./images/pic2.png";
import tpic3 from "./images/pic3.png";
import tpic4 from "./images/pic4.png";
import tpic5 from "./images/pic5.png";
import tpic6 from "./images/pic6.png";
import tpic7 from "./images/pic7.png";
import tpic8 from "./images/pic8.png";

import tmpic1 from "./images/mpic1.png";
import tmpic2 from "./images/mpic2.png";
import tmpic3 from "./images/mpic3.png";
import tmpic4 from "./images/mpic4.png";
import tmpic5 from "./images/mpic5.png";
import tmpic6 from "./images/mpic6.png";
import tmpic7 from "./images/mpic7.png";
import tmpic8 from "./images/mpic8.png";


import bg from "./images/paperr.webp";
import Footer from "../Footer/Footer";
import Nav from "../NavBar/Nav";
import wemade from "./images/we-made-it-happen.png";

const Home = () => {
  const [boxes, setBoxes] = useState([
    {
      title: "PUBLIC RELATIONS & BRANDING",
      sr: tpic1,
      srm:tmpic1,
      leftInsta: "https://www.instagram.com/sid_8171/",
      midInsta: "https://www.instagram.com/danda_akshara/",
      rightInsta: "https://www.instagram.com/quasim._/",
      leftlink: "https://www.facebook.com/sid8171/",
      midlink: "https://www.facebook.com/akshara.reddy.37051/",
      rightlink: "https://www.facebook.com/quasim.khan.1291",
      lefttwit: "https://twitter.com/sid_8171",
      midtwit: "https://twitter.com/_Akshara_Reddy?t=i4P9ELL4vW0H7NZ6TuXZig&s=09",
      righttwit: "https://twitter.com/IMquasi",

      midInsta2: "",
      midlink2: "",
      midtwit2: "",

      leftphn:"9310859978",
      leftemail:"siddhant.s@alcheringa.in",
      midphn:"9908991939",
      midemail:"akshara@alcheringa.in",
      midphn2:"",
      midemail2:"",
      rightphn:"7763959688",
      rightemail:"quasim@alcheringa.in",
      id: 1,
      bgcolor:"#099fbc",
    },
    {
      title: "CORPORATE RELATIONS & MARKETING",
      sr: tpic2 ,
      srm:tmpic2,
      leftInsta: "https://www.instagram.com/akshatgautam___/",
      midInsta: "",
      midInsta2: "",
      leftlink: "https://www.facebook.com/ar57rhmn/",
      midlink: "https://www.facebook.com/akshatgautam13",
      midlink2:"https://www.facebook.com/agrawalsajal2910",
      rightlink: "https://www.facebook.com/nithin.sagar.5439/",
      lefttwit: "https://twitter.com/aminurar57",
      midtwit: "https://twitter.com/AkshatGautam___",
      midtwit2:"",
      righttwit: "https://twitter.com/nithinsagar1",

      leftphn:"8822860090",
      leftemail:"aminur@alcheringa.com",
      midphn:"8770677470",
      midemail:"akshatg@alcheringa.in",
      midphn2:"8696396788",
      midemail2:"sajal@alcheringa.in",
      rightphn:"8179414110",
      rightemail:"nithin@alcheringa.in",
      id: 2,
      bgcolor:"#DAEE75",
    },
    {
      title: "CREATIVES",
      sr: tpic4 ,
      srm:tmpic4,
      leftInsta: "https://www.instagram.com/sigh.yush/",
      midInsta: "https://www.instagram.com/aab_hahaha/",
      rightInsta: "https://www.instagram.com/taboopancake/",
      leftlink: "https://www.facebook.com/people/Ayush-Singh/100002442294419/",
      midlink: "https://www.facebook.com/people/Aabha-Kanvinde/100081999782972/",
      rightlink: "https://www.facebook.com/people/Sarvesh-Chavan/100081299619665/",
      lefttwit: "https://twitter.com/ayush18240281",
      midtwit: "https://twitter.com/ayush18240281",
      righttwit: "",
      midInsta2: "",
      midlink2: "",
      midtwit2: "",

      leftphn:"7357442395",
      leftemail:"creatives@iitg.ac.in",
      midphn:"8452029460",
      midemail:"creatives23@alcheringa.in",
      midphn2:"",
      midemail2:"",
      rightphn:"9930725799",
      rightemail:"creatives23@alcheringa.in",
      id: 3,
      bgcolor:"#099FBC",
    },
    {
      title: "EVENTS",
      sr:  tpic3 ,
      srm:tmpic3,
      leftInsta: "https://www.instagram.com/eshanarora19/",
      midInsta: "https://www.instagram.com/shriyanshu30/",
      rightInsta: "https://www.instagram.com/gaurang__og/",
      leftlink: "https://www.facebook.com/eshan.arora.39/",
      midlink: "https://www.facebook.com/people/Shriyanshu-Morchhale/100008475857658/",
      rightlink: "https://www.facebook.com/satya.thakur.71/",
      lefttwit: "https://twitter.com/eshanarora19",
      midtwit: "https://twitter.com/ShriyanshuMorc1",
      righttwit: "",
      midInsta2: "",
      midlink2: "",
      midtwit2: "",

      leftphn:"9977719992",
      leftemail:"eshan@alcheringa.com",
      midphn:"8719805330",
      midemail:"shriyanshu@alcheringa.in",
      midphn2:"",
      midemail2:"",
      rightphn:"9004764872",
      rightemail:"gaurang@alcheringa.in",
      id: 4,
      bgcolor:"#FEA82F",
    },

    {
      title: "WEB & APP OPERATIONS",
      sr:  tpic5 ,
      srm:tmpic5,
      leftInsta: "https://www.instagram.com/ankit_guha_2/",
      midInsta: "",
      rightInsta: "https://www.instagram.com/ankit_guha_2/",
      leftlink: "https://www.facebook.com/ankit.guha.355/",
      midlink: "",
      rightlink: "https://www.facebook.com/ankit.guha.355/",
      lefttwit: "https://twitter.com/ankit11hab",
      midtwit: "",
      righttwit: "https://twitter.com/ankit11hab",
      midInsta2: "",
      midlink2: "",
      midtwit2: "",

      leftphn:"8250240574",
      leftemail:"web-ops@alcheringa.in",
      midphn:"",
      midemail:"",
      midphn2:"",
      midemail2:"",
      rightphn:"8250240574",
      rightemail:"web-ops@alcheringa.in",
      id: 5,
      bgcolor:"#DAEE75",
    },
    {
      title: "IITG MUN",
      sr:  tpic6 ,
      srm:tmpic6,
      leftInsta: "https://www.instagram.com/suhaylmahek/",
      midInsta: "",
      rightInsta: "https://www.instagram.com/vindakunte/?utm_source=qr",
      leftlink: "https://www.facebook.com/suhayl.mahek/",
      midlink: "",
      rightlink: "https://www.facebook.com/vinda.kunte",
      lefttwit: "",
      midtwit: "",
      righttwit: "",
      midInsta2: "",
      midlink2: "",
      midtwit2: "",

      leftphn:"",
      leftemail:"",
      midphn:"",
      midemail:"",
      midphn2:"",
      midemail2:"",
      rightphn:"",
      rightemail:"",
      id: 6,
      bgcolor:"#FEA82F",
    },
    {
      title: "FINANCE & ACCOUNTS",
      sr:  tpic7 ,
      srm:tmpic7,
      leftInsta: "",
      midInsta: "",
      rightInsta: "",
      leftlink: "",
      midlink: "https://www.facebook.com/shashwat.methi.7",
      rightlink: "",
      lefttwit: "",
      midtwit: "",
      righttwit: "",
      midInsta2: "",
      midlink2: "",
      midtwit2: "",

      leftphn:"",
      leftemail:"",
      midphn:"7742082184",
      midemail:"shashwat.m@alcheringa.in",
      midphn2:"",
      midemail2:"",
      rightphn:"",
      rightemail:"",
      id: 7,
      bgcolor:"#099fbc",
    },
    {
      title: "CONVENER",
      sr:  tpic8 ,
      srm:tmpic8,
      leftInsta: "",
      midInsta: "",
      rightInsta: "",
      leftlink: "",
      midlink: "https://www.facebook.com/varun.bhardwaj.92754397/",
      rightlink: "",
      lefttwit: "",
      midtwit: "https://twitter.com/VarunBh24719284",
      righttwit: "",
      midInsta2: "",
      midlink2: "",
      midtwit2: "",

      leftphn:"",
      leftemail:"",
      midphn:"9910271539",
      midemail:"varun@alcheringa.in",
      midphn2:"",
      midemail2:"",
      rightphn:"",
      rightemail:"",
      id: 8,
      bgcolor:"#FF598B",
    },


  ]);

  return (
    <div className="home">
      <Nav />
      <img className="wemade-img" src={wemade} />
      <div style={{ height: "4vh" }}></div>
      <div className="teamheading">WE MADE IT HAPPEN</div>
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
                midlink2={box.midlink2}
                midInsta2={box.midInsta2}
                midtwit2={box.midtwit2}
                leftphn={box.leftphn}
                leftemail={box.leftemail}
                midphn={box.midphn}
                midemail={box.midemail}
                midphn2={box.midphn2}
                midemail={box.midemail2}
                rightphn={box.rightphn}
                rightemail={box.rightemail}
                title={box.title}
                bgcolor={box.bgcolor}
                sr={box.sr}
                srm={box.srm}
              />
      ))}
      <Footer />
    </div>
  );
};

export default Home;
