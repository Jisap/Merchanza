import React from 'react'
import {Link} from 'react-router-dom'
import addProduct from '../assets/addproduct.png'
import listProduct from '../assets/productlist.png'

const Sidebar = () => {
  return (
    <div className='py-7 flex justify-center gap-x-2 gap-y-4 w-full bg-white sm:gap-x-4 lg:flex-col lg:pt-20 lg:max-w-60 lg:h-screen
    lg:justify-start lg:pl-6'
    >
      <Link to={'/addProduct'}>
        <button className='flexCenter gap-2 rounded-md bg-primary h-12 w-36 xs:w-44 medium-14 xs:medium-16'>
          <img src={addProduct} alt='' height={50} width={50} />
          <span>Add Product</span>
        </button>
      </Link>
      <Link to={'/listProduct'}>
        <button className='flexCenter gap-2 rounded-md bg-primary h-12 w-36 xs:w-44 medium-14 xs:medium-16'>
          <img src={listProduct} alt='' height={50} width={50} />
          <span>List Product</span>
        </button>
      </Link>
    </div>
  )
}

export default Sidebar