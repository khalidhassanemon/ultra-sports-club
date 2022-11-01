import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Sports.css'
const Sports = () => {
    const [cart,setCart]=useState([]);
    useEffect(()=>{
       fetch('products.json')
       .then(res=>res.json())
       .then(data=>setCart(data));
    },[])
    return (
        <div>
          <h1 style={{marginLeft:"20px",marginBottom:"-7px"}}>Select today’s exercise</h1> 
          <div className='sports-container'>
           {
            cart.map(product=><Product 
                key={cart._id}
                product={product}
                ></Product>)
           }
          </div>
        </div>
    );
};

export default Sports;