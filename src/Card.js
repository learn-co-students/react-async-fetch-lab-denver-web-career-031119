import React from 'react'

const Card = props => {

  return(
    <div>
      <h3>{props.name}</h3>
      <p>{props.craft}</p>
    </div>
  )
}

export default Card
