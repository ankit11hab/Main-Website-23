import React, { Component, useState } from 'react';
import './Panorama.css'
 
import {Pannellum} from "pannellum-react";
import myImage from "./images/image.jpg";


const VRScene = () => {


  
        return (

             
        
              <div >
                    <div className="description">
                        Alcheringa is the annual cultural festival of the Indian
                        Institute of Technology, Guwahati. A splendid idea
                        realised by a group of students in 1996 at IITG marked
                        the dawn of one of Asia’s most exhilarating and
                        significant cultural college fests as we know it today.{" "}
                    </div>
                <Pannellum
                    width="100%"
                    height="100vh"
                    image={myImage}
                    pitch={10}
                    yaw={180}
                    hfov={110}
                    autoLoad    
                
                    autoRotate={8}
                    showZoomCtrl={false}
                    showFullscreenCtrl={false}
                    mouseZoom={false}
                  
                />
                 
             
               
              
           
             
                </div>
            );
        }
        
        export default VRScene;