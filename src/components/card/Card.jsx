import React from 'react'

const Card = (a) => {
  return (
    <div style={{width:'200px'}}>
            <img
              src={a.image}
              alt={a.name}
              style={{width:'150px'}}
            />
            <h2>{a.name}</h2>
    </div>
  )
}

export default Card;