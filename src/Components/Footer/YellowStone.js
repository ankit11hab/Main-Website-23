import React from 'react'
import pic from './Images/yellow_stone.png';

const YellowStone = ({value}) => {
    return (  
        <img src={pic} alt = "" className={value}></img>
    );
}

export default YellowStone;