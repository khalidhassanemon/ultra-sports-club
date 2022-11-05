import React from 'react';
import './Time.css';
const Time = (props) => {
    console.log(props.num);
    return (
        <div className='time'>
            <p>{props.num}s</p>
        </div>
    );
};

export default Time;