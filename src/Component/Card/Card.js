import React from 'react'
import './Card.css'

function Card(props) {
  return (
  
        <article className='container'>{props.children}</article>
  )
}

export default Card