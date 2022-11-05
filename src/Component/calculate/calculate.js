import React from 'react';
import './calculate.css'
const calculate = ({cart}) => {
    console.log(cart);
    return (
        <div className='container-12'>
              {cart.length}
        </div>
    );
};

export default calculate;