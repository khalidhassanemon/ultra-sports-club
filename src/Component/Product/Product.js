import React from 'react';
import './Product.css'
const Product = ({product,handleAddToCart}) => {
   const {name,img,age,Time,description}=product;
    return (
        <div className='sports-info'>
        <div className='sports-activity'>
            <img src={img}></img>
            <h3 className='sports-name'>{name}</h3>
            <p>{description}</p>
             <p>For Age:{age}</p>
             <p>Time-required:{Time}</p>
             <button onClick={()=>handleAddToCart(product)}>
            <p>Add to List</p>
            </button>
        </div>
        </div>
    );
};

export default Product;