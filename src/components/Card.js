import React, { useState } from 'react';
import FrontCard from './CardSides/FrontCard';
import BackCard from './CardSides/BackCard';

const Card = (props) => {
    const [id, name, image, price, description] = props.data;

    const backSideInfo = [id, name, price, description];

    const [displayFront, setDisplayFront] = useState(true);
    
    return(
        <div>
            {/* { displayFront ? <FrontCard pic={image} /> : <BackCard data={backSideInfo} /> }  */}
            You are showing a card!
        </div>
    );
};

export default Card;