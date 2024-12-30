import React from 'react'

const Card = ({image, name}) => {
  return (
    <div className='flex border-2 border-black rounded-lg w-5/12 h-full '>
        <h1> {name} </h1>
        <img src={image} alt={name || 'Card image'} className='w-full h-full rounded-3xl object-cover' />
    </div>
  )
}

export default Card