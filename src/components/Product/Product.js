import React from 'react';
import './Product.css'

const Product = (props) => {
const {name,img,seller,price,ratings} = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <p>{name}</p>
            <p>Price:{price}</p>
            <p>Seller:{seller}</p>
            <p><small>Ratings:{ratings}</small></p>
        </div>
    );
};

export default Product;