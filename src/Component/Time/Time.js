import React from 'react';

const Time = (props) => {
    console.log(props.num);
    return (
        <div className='time'>
            <p>{props.num}s</p>
        </div>
    );
};

export default Time;