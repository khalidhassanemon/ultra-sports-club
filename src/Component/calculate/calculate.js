import React from 'react';
import './calculate.css'
const calculate = ({cart}) => {

    let totalTime=0;
    for(const product of cart){
      const i=parseInt(product.Time);
        totalTime=totalTime+i;
    }
    if(totalTime>0)
    return (
        <div className='container-12'>
             <div>{totalTime}s</div> 
        </div>
    );
};

export default calculate;