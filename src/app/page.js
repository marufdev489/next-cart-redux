"use client"
import { getProducts } from '@/lib/fetcher'
import React, { useEffect, useState } from 'react'
import styles from "./page.module.css";
import { useDispatch } from 'react-redux';
import { addToCart } from '@/Redux/cartSlice';

const HomePage = () => {
  const [products, setProducts] =  useState();
  const dispatch = useDispatch();

  const handleAdd = (products)=>{
    dispatch(addToCart(products));
  }

  useEffect(()=>{
    getProducts().then(res=>{
      setProducts(res.data);
      console.log(products);
    })
  },[])

  return (
    <div> 
      {
        products?.map((item, index)=>(
          <div key={index} className={styles.container}>
          {/* <img className={styles.img} src={item?.image}/> */}
          <h3>{item?.title}</h3>
          <p className={styles.price}>{item?.price}</p>
          <p>{item?.description}</p>
          <button onClick={()=>handleAdd(item)}>Add to cart</button>
          </div>
        ))
      }
    </div>
  )
}

export default HomePage