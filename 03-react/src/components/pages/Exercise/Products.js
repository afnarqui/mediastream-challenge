import React, { useContext } from 'react'
import Product from './Product'
import AppContext from '../../../context/AppContext'
import './assets/styles.css'

const Products = () => {
  const { state, addToCart } = useContext(AppContext)
  const { products } = state

  const handleAddToCart = product => () => {
    const exists = state.cart.filter((item) => item.id === product.id)
    if (exists.length === 0) {
      addToCart(product)
    } else {
      alert('the product already exists in the cart')
    }
  }

  return (
    <>
        {products.map(product => (
          <Product key={product.id} product={product} handleAddToCart={handleAddToCart} />
        ))}
    </>
  )
}

export default Products
