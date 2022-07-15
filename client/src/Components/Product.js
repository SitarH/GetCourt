import React from 'react';
import {useState} from 'react'
import Card from '../Components/UI/Card';
import Title from '../Components/UI/Title';
import PurchaseButton from '../Components/UI/PurchaseButton';
import {useNavigate} from 'react-router-dom';

function Product({ product}) {

  const [toggleProducts, setToggleProducts] = useState(false);

  const toggleHandler = () => {

    setToggleProducts(!toggleProducts)
  }


  return (
    <Card>
      {!toggleProducts? 
      <div onClick={toggleHandler}>
      <img width="100" src={product.image}></img>
      <Title>{product.name}</Title>
      </div>
       :
      <>
      <img width="100" src={product.image}></img>
      <Title>{product.name}</Title>
      <p>{product.gender}</p>
      <p>Color: {product.color}</p>
      <h2>Price: {product.price} ils</h2>
      {typeof product.size === 'string' ? <h2>{product.size}</h2> :
        <select>
          <option value={"disable"} selected hidden>Choose size</option>
          {product.size.map((size, index) => {
            return <option key={index}>{size}</option>
          })}
        </select>

      }
     
      <PurchaseButton>Add to cart</PurchaseButton>
      </>}
    </Card>
  )
}

export default Product