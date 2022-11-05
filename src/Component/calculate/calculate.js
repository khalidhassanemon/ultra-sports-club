import React from 'react';
import './calculate.css'
const calculate = ({cart}) => {
    return (
        <div className='container-12'>
              {cart.length}
        </div>
    );
};

export default calculate;