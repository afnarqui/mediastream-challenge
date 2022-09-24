import React, { useContext } from 'react'
import AppContext from '../../../context/AppContext'
import './assets/styles.css'
import { v4 as uuidv4 } from 'uuid'

const Cart = () => {
  const { state, removeFromCart, addToCart, removeCartAll } = useContext(AppContext)
  const { cart } = state
  const handleRemove = (product) => {
    console.log('product', state)
    removeFromCart(product)
  }

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price
    const sum = cart.reduce(reducer, 0)
    return sum
  }

  const incrementQuantity = (product) => {
    const newCartItems = state.cart.filter((x) => x.id === product.id)
    console.log('newC', state)
    newCartItems[0].count = newCartItems[0].count + 1
    const exists = state.cart.filter((x) => x.id !== product.id)
    if (exists.length > 0) {
      removeCartAll()
      addToCart(newCartItems)
      addToCart(exists)
    } else {
      addToCart(newCartItems)
    }
    console.log('newCartItems', newCartItems)
    console.log('exists', exists)
    console.log('product', state)
  }

  return (
    <div className="movies__cart">
    <ul>
      {state.cart.map(x => (
        <li key={uuidv4()} className="movies__cart-card">
          <ul>
            <li>
              ID: {x.id}
            </li>
            <li>
              Name: {x.name}
            </li>
            <li>
              Price: ${x.price}
            </li>
          </ul>
          <div className="movies__cart-card-quantity">
            <button onClick={() => { handleRemove(x) }}>
              -
            </button>
            <span>
              {x.count}
            </span>
            <button onClick={() => incrementQuantity(x)}>
              +
            </button>
          </div>
        </li>
      ))}
    </ul>
    {cart.length > 0 && (
      <div className="movies__cart-total">
        <p>Total: ${handleSumTotal()}</p>
      </div>
    )}
  </div>
  )
}

export default Cart
