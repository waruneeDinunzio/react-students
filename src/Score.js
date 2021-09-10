import React from 'react';
//<h2>Student date: {props.date}</h2>
       // <h3>Student score: {props.score}</h3>
        
const Score = (props) => {
    console.log(props)
    return (
        
        <div>
            {props.apple.map((e)=>{
       return (
        <div>
        <h2>Student date: {e.date}</h2>
        <h3>Student Score: {e.score}</h3>
        </div>
            //<Score date={e.scores.date} score={e.scores.score}/>
        );
     })}
        
        </div>
       
        
        
    );
};

export default Score;