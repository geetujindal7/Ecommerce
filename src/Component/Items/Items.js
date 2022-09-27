import React from 'react'
import Card from '../Card/Card'
import './Items.css'

function Items({key, data}) {
    console.log(data)
  return (
      
      <Card>
         <img className='product_image' src={data.images[0]} alt="" />
         <h3>{data.brand}</h3>
      </Card>
      )
}

export default Items