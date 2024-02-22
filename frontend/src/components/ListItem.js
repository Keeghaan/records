import React from 'react'
import { Link } from 'react-router-dom';

const ListItem = ({elem}) => {
  return (
    <Link to={`/record/${elem.id}`}>
        <li>{elem.text}</li>
    </Link>
  )
}

export default ListItem