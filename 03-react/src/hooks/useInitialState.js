import { useState } from 'react'
import initialState from '../context/AppContext'

const useInitialState = () => {
  const [state, setState] = useState(initialState)

  const addToCart = paylod => {
    setState({
      ...state,
      cart: [...state.cart, paylod]
    })
  }

  const removeFromCart = paylod => {
    setState({
      ...state,
      cart: state.cart.filter(items => items.id !== paylod.id)
    })
  }

  return {
    addToCart,
    removeFromCart,
    state
  }
}

export default useInitialState
