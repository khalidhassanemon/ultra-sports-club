import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faLocation } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Sports.css'
const Sports = () => {
    const [cart,setCart]=useState([]);

    const [time,setTime]=useState([]);

    useEffect(()=>{
       fetch('products.json')
       .then(res=>res.json())
       .then(data=>setCart(data));
    },[])

    const handleAddToCart=(product)=>{
      console.log(product);
      // cart.push(product);
      const newTime=[...time,product];
      setTime(newTime);
     }
    return (
        <div className='container'>
            <div>
            <h1 style={{marginLeft:"20px",marginBottom:"-7px"}}>Select today’s exercise</h1> 
          <div className='sports-container'>
           {
            cart.map(product=><Product 
                key={cart._id}
                product={product}
                handleAddToCart={handleAddToCart}
                ></Product>)
           }
          </div>
            </div>
      
          <div className='cart-container'>
            <div>
            <h4>Khalid Emon</h4>
             <div className='second'>
             <FontAwesomeIcon icon={faLocation}></FontAwesomeIcon>
             <p style={{marginLeft:'15px',marginTop:'-3px'}}>Dhaka,Bangladesh</p>
            </div>     
            <div>
          
             <div className='third'>
             <div className='container-1'>
              <h1>55kg</h1>
              <h1>5.5</h1>
              <h1>25Yrs</h1>
            </div>
            <div className='container-2'>
              <p>Weight</p>
              <p>height</p>
              <p>Age</p>
            </div>
            </div>           
             </div>
             </div> 

            <h3>Add a Break</h3>
            <div className='container-3'>
          <h6 className='container-4'>10s</h6>
          <h6 className='container-5'>20s</h6>
          <h6 className='container-6'>30s</h6>
          <h6 className='container-7'>40s</h6>
          <h6 className='container-8'>50s</h6>
         </div>

         <h2 style={{marginTop:'40px'}}>Exercise Details</h2>
          
          

          <div className='container-9'>
            <label style={{fontSize:'15px',fontWeight:'bold'}}>Exercise time :{time.length}</label>
          </div>

         <div className='container-10'>
         <label style={{fontSize:'15px',fontWeight:'bold',marginLeft:'15px'}}>Break time : </label>
         </div>  
         <button id='last'>Activity Completed</button>  
          </div>
        </div>
    );
};

export default Sports;