import React from 'react';
import './calculate.css'
const calculate = ({cart}) => {

    let totalTime=0;
    for(const product of cart){
      const i=parseInt(product.Time);
        totalTime=totalTime+i;
    }

    return (
        <div className='container-12'>
             <div>: {totalTime}</div> 
        </div>
    );
};

export default calculate;