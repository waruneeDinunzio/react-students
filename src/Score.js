import React from 'react';
// instead of: const Score =(props)=>{} just do ({scores})
const Score = ({scores}) => {
    return (
        <div>
        {scores.map((e)=>{
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