import React from 'react'
import upload_area from '../assets/upload_area.svg'
import {MdAdd} from 'react-icons/md'


const AddProduct = () => {
  return (
    <div>
      <div>
        <h4>Product title:</h4>
        <input 
          type='text' 
          name='name' 
          placeholder='Type here...' 
          className=''
        />
      </div>
    </div>
  )
}

export default AddProduct