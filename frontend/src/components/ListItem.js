import React from 'react'
import { Link } from 'react-router-dom';

const ListItem = ({elem}) => {
  return (
    <Link to={`/record/${elem.id}`}>
      <div className='records-list-item'>
        <li>{elem.text}</li>
      </div>
    </Link>
  )
}

export default ListItem