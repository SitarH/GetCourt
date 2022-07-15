import React from 'react';
import { useEffect, useState } from 'react';
import Product from '../Components/Product';
import Wrapper from '../Components/UI/Wrapper';



function ProductList() {


  const [products, setProducts] = useState([])

  useEffect(() => {
     fetchProducts();


  }, [])

  const fetchProducts = async () => {

    try {
      const response = await fetch(
        'http://localhost:5008/api/GetCourt/product',
        // {
        //   method: 'GET',
        //   headers: {
        //     'Content-Type': 'application/json'
        //   }
        // }
      );
      // const respone = await fetch('http://localhost:5008/api/GetCourt/product');
      console.log(response)
      if (response.ok) {
        const data = await response.json();
        setProducts(data)
      }
    } catch (error) {
      console.log(error)

    }
  }

  return (
    <Wrapper>
      {products.map((product) => {
        return <Product
          key={product._id}
          product={product}
        />
      })}
    </Wrapper>
  )
}

export default ProductList