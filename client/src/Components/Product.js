import React from 'react'

function Product({product}) {
  return (
    <>
    <h1>{product.image}</h1>
    <h2>{product.name}</h2>
    <p>{product.gender}</p>
    <p>{product.price}</p>
    <p>{product.size}</p>
    <p>{product.description}</p>
    </>
  )
}

export default Product