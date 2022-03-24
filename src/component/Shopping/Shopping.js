import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shopping.css'

const Shopping = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart]=useState([])
   

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=> setProducts(data))
    },[])
    const handleAddToClick =(product)=>{
        // console.log(product);
        const newCart =[...cart,product];
        setCart(newCart)
        
      
    }
    return (
        <div className='shop-container'>
           <div className="product-container">
             {
                 products.map(product=> <Product key={product.id}
                 product={product}
                 handleAddToCart={handleAddToClick}></Product>)
             }
           </div>
           <div className="cart-container">
              <Cart cart={cart}></Cart>
           </div>
        </div>
    );
};

export default Shopping;