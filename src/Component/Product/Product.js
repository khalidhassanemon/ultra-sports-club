import React from 'react';
import './Product.css'
const Product = (props) => {
   const {name,img,age,Time,description}=props.product;
    return (
        <div className='sports-info'>
        <div className='sports-activity'>
            <img src={img}></img>
            <h3 className='sports-name'>{name}</h3>
            <p>{description}</p>
             <p>For Age:{age}</p>
             <p>Time-required:{Time}</p>
             <button>
            <p>Add to List</p>
            </button>
        </div>
        </div>
    );
};

export default Product;