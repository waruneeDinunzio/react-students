import React from 'react';

const Score = (props) => {
    return (
        <div>
           <p>{props.date}</p> 
           <p>{props.score}</p>
        </div>
    );
};

export default Score;