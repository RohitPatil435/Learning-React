import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
        <div className='flex justify-center gap-10 py-4' >
        <Link className='text-lg p-2 bg-amber-700 rounded font-bold' to="/product/men">Men</Link>
        <Link className='text-lg p-2 bg-amber-700 rounded font-bold' to="/product/women">Women</Link>
        </div>
        <Outlet />
      {/* <h1>Product</h1> */}
    </div>
  )
}

export default Product
