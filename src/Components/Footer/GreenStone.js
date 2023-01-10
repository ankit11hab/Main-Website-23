import React from 'react'
import pic from './Images/green_stone.png';

const GreenStone = ({value}) => {
    return (  
        <img src={pic} alt = "" className={value}></img>
    );
}

export default GreenStone;