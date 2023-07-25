"use client"
import React from 'react';
import { removeFromCart } from '@/Redux/cartSlice';
import { useSelector, useDispatch } from 'react-redux';

const cartPage = () => {
    const dispatch = useDispatch();
    const cartItems =  useSelector((state)=>state.cart)
    console.log(cartItems);
    
    const handleRemove = (id) =>{
        dispatch(removeFromCart(id));
    }

    return (
    <div>
        <h3>Cart Page</h3>
        <div>
            {
                cartItems.map((item)=>(
                    <div>
                        {/* <img src={item.image} /> */}
                        <h5>{item.title}</h5>
                        <h5>{item.price}</h5>
                        <button onClick={()=>handleRemove(item.id)}>remove</button>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default cartPage