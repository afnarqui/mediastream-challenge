import React, { useContext } from 'react'
import AppContext from '../../../context/AppContext'
import './assets/styles.css'
import { v4 as uuidv4 } from 'uuid'

const Cart = () => {
  const { state, removeFromCart, addToCart } = useContext(AppContext)
  const { cart } = state
  const handleRemove = (product) => {
    removeFromCart(product)
  }

  const handleSumTotal = () => {
    const cantidad = state.cart.length
    let total = 0
    for (let n = 0; n < cantidad; n++) {
      total += state.cart[n].total
    }
    return total
  }

  const incrementQuantity = (product) => {
    addToCart(product)
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
