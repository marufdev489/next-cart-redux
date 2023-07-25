"use client"
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const cartItems = useSelector(state => state.cart);
  return (
    <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
        <span>E-Commerce</span>
        <div>
            <Link style={{fontWeight: "bolder", marginRight:"7px"}} href={"/"}>
              Home
            </Link>
            <Link style={{fontWeight: "bolder", marginRight:"7px"}} href={"/cart"}>
              Cart
            </Link>
            <span style={{fontWeight: "bolder"}} >items:{cartItems.length}</span>
        </div>
    </div>
  )
}

export default Navbar