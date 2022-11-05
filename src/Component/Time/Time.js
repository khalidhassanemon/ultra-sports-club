import React from 'react';
import './Time.css';
const Time = (props) => {
    if(props.num>0)
    return (
        <div className='time'>
          
                <p1>{props.num}s</p1>
                     
        </div>
    );
};

export default Time;