import React from 'react';
import Score from './Score';

const Student = (props) => {
    return (
        <div>
            {props.studentData.students.map((e)=>{
       return (
        
        <div>
        <h2>Student Name: {e.name}</h2>
        <h3>Student Bio: {e.bio}</h3>
        <Score date={e.scores.date} score={e.scores.score}/>
        </div>
            //<Score date={e.scores.date} score={e.scores.score}/>
        );
     })}
        
        </div>
    );
};

export default Student;