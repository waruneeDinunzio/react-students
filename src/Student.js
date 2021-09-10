import React from 'react';
import Score from './Score';

const Student = (props) => {
    return (
        <div>
            {props.studentData.students.map((e)=>{
       return (

        <div>
            <h2>Student Name: <span>{e.name}</span></h2>
            <h3>Student Bio: <span>{e.bio}</span></h3>
            <Score scores ={e.scores}/>
        </div>
        );
     })}

        </div>
    );
};

export default Student; 