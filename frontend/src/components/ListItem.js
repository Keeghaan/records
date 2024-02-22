import React from 'react'

const ListItem = ({elem}) => {
  return (
    <div>
        <li>{elem.text}</li>
    </div>
  )
}

export default ListItem