import React from 'react';

function FrontCard(props) {
    const style= {
        backgroundImage: `url(${props.pic})`
    };

    return(
        // <div style={style}>
        //     hi
        // </div>

        <>  
        This is the front
        </>
    );
};

export default FrontCard;