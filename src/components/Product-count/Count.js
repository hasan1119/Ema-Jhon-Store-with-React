import React from 'react';

const Count = (props) => {
    return (
   
        <span className={props.headStyle}>{props.quantity}</span>
    
    );
};

export default Count;