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
      title: "PUBLIC RELATIONS & BRANDING",
      sr: { tpic1 },
      leftInsta: "https://www.instagram.com/sid_8171/",
      midInsta: "https://www.instagram.com/danda_akshara/",
      rightInsta: "https://www.instagram.com/quasim._/",
      leftlink: "https://www.facebook.com/sid8171/",
      midlink: "https://www.facebook.com/akshara.reddy.37051/",
      rightlink: "https://www.facebook.com/quasim.khan.1291",
      lefttwit: "https://twitter.com/sid_8171",
      midtwit: "https://twitter.com/_Akshara_Reddy?t=i4P9ELL4vW0H7NZ6TuXZig&s=09",
      righttwit: "https://twitter.com/IMquasi",
      id: 1,
      bgcolor:"#099fbc",
    },
    {
      title: "CORPORATE RELATIONS & MARKETING",
      sr: { tpic1 },
      leftInsta: "https://www.instagram.com/akshatgautam___/",
      midInsta: "", 
      rightInsta: "",
      leftlink: "https://www.facebook.com/ar57rhmn/",
      midlink: "https://www.facebook.com/akshatgautam13",
      thirdlink:"https://www.facebook.com/agrawalsajal2910",
      rightlink: "https://www.facebook.com/nithin.sagar.5439/",
      lefttwit: "https://twitter.com/aminurar57",
      midtwit: "https://twitter.com/AkshatGautam___",
      thirdtwit:"",
      righttwit: "https://twitter.com/nithinsagar1",
      id: 2,
      bgcolor:"#DAEE75",
    },
    {
      title: "CREATIVES",
      sr: { tpic1 },
      leftInsta: "https://www.instagram.com/sigh.yush/",
      midInsta: "https://www.instagram.com/aab_hahaha/",
      rightInsta: "https://www.instagram.com/taboopancake/",
      leftlink: "https://www.facebook.com/people/Ayush-Singh/100002442294419/",
      midlink: "https://www.facebook.com/people/Aabha-Kanvinde/100081999782972/",
      rightlink: "https://www.facebook.com/people/Sarvesh-Chavan/100081299619665/",
      lefttwit: "https://twitter.com/ayush18240281",
      midtwit: "https://twitter.com/ayush18240281",
      righttwit: "",
      id: 3,
      bgcolor:"#099FBC",
    },
    {
      title: "EVENTS",
      sr: { tpic1 },
      leftInsta: "https://www.instagram.com/eshanarora19/",
      midInsta: "https://www.instagram.com/shriyanshu30/",
      rightInsta: "https://www.instagram.com/gaurang__og/",
      leftlink: "https://www.facebook.com/eshan.arora.39/",
      midlink: "https://www.facebook.com/people/Shriyanshu-Morchhale/100008475857658/",
      rightlink: "https://www.facebook.com/satya.thakur.71/",
      lefttwit: "https://twitter.com/eshanarora19",
      midtwit: "https://twitter.com/ShriyanshuMorc1",
      righttwit: "",
      id: 4,
      bgcolor:"#FEA82F",
    },
   
    {
      title: "WEB & APP OPERATIONS",
      sr: { tpic1 },
      leftInsta: "https://www.instagram.com/ankit_guha_2/",
      midInsta: "",
      rightInsta: "https://www.instagram.com/ankit_guha_2/",
      leftlink: "https://www.facebook.com/ankit.guha.355/",
      midlink: "",
      rightlink: "https://www.facebook.com/ankit.guha.355/",
      lefttwit: "https://twitter.com/ankit11hab",
      midtwit: "",
      righttwit: "https://twitter.com/ankit11hab",
      id: 5,
      bgcolor:"#DAEE75",
    },
    {
      title: "IITG MUN",
      sr: { tpic1 },
      leftInsta: "https://www.instagram.com/suhaylmahek/",
      midInsta: "",
      rightInsta: "https://www.instagram.com/vindakunte/?utm_source=qr",
      leftlink: "https://www.facebook.com/suhayl.mahek/",
      midlink: "",
      rightlink: "https://www.facebook.com/vinda.kunte",
      lefttwit: "",
      midtwit: "",
      righttwit: "",
      id: 6,
      bgcolor:"#FEA82F",
    },
    {
      title: "FINANCE & ACCOUNTS",
      sr: { tpic1 },
      leftInsta: "",
      midInsta: "",
      rightInsta: "",
      leftlink: "",
      midlink: "https://www.facebook.com/shashwat.methi.7",
      rightlink: "",
      lefttwit: "",
      midtwit: "",
      righttwit: "",
      id: 7,
      bgcolor:"#099fbc",
    },
    {
      title: "CONVENER",
      sr: { tpic1 },
      leftInsta: "",
      midInsta: "",
      rightInsta: "",
      leftlink: "",
      midlink: "https://www.facebook.com/varun.bhardwaj.92754397/",
      rightlink: "",
      lefttwit: "",
      midtwit: "https://twitter.com/VarunBh24719284",
      righttwit: "",
      id: 8,
      bgcolor:"#FF598B",
    },


  ]);

  return (
    <div className="home" >
      <Nav />
      <img class="wemade-img" src={wemade}/>
      <div class="teamheading">
        <br/>WE MADE IT HAPPEN
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
                title={box.title}
                bgcolor={box.bgcolor}
                
              />
      ))}
      <Footer />
    </div>
  );
};

export default Home;
