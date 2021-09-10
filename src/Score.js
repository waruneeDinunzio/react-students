import React from 'react';

const Score = (props) => {
    return (
        <div>
        {props.scores.map((e)=>{
            return (
                <div>
                <h4>Student Scores:</h4>
                <p>Date: {e.date}</p> 
                <p>Score: {e.score}</p>
                </div>
            )
        })}
          
        </div>
    );
};

export default Score; 