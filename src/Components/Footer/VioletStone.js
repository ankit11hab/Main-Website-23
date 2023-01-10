import React from 'react'
import pic from './Images/violet_stone.png';

const VioletStone = ({value}) => {
    return (  
        <img src={pic} alt = "" className={value}></img>
    );
}

export default VioletStone;