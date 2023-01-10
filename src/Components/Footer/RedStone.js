import React from 'react'
import pic from './Images/red_stone.png';

const RedStone = ({value}) => {
    return (  
        <img src={pic} className={value} alt=""></img>
    );
}

export default RedStone;