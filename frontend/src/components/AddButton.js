import React from 'react'
import { Link } from 'react-router-dom';
import { IoAddCircle } from "react-icons/io5";

const AddButton = () => {
  return (
    <Link to="/record/new" className='floating-button'>
        <IoAddCircle />
    </Link>
  )
}

export default AddButton