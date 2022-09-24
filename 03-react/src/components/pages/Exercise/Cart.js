import React, { useContext } from 'react'
import AppContext from '../../../context/AppContext'
import './assets/styles.css'

const Cart = () => {
  const { state, removeFromCart } = useContext(AppContext)
  const { cart } = state

  const handleRemove = product => () => {
    removeFromCart(product)
  }

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price
    const sum = cart.reduce(reducer, 0)
    return sum
  }

  const incrementQuantity = (o) => {

  }

  return (
    <div className="movies__cart">
    <ul>
      {cart.map(x => (
        <li key={x.id} className="movies__cart-card">
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
              {x.quantity}
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
