import React from 'react';
import Score from './Score';

const Student = (props) => {
    
    return (
        <div>
        <h2>Student Name: {props.student.name}</h2>
        <h3>Student Bio: {props.student.bio}</h3>
        <Score apple={props.student.scores}/> 
        </div>
        //<Score scores={props.score}/>  
    );   
};

export default Student;