import './assets/styles.css'
import React from 'react'
import Products from './Products'
import initialState from '../../../initialState'
import Cart from './Cart'

export default function Exercise01 () {
  return (
    <section className="exercise01">
       <Products products={initialState.products} />
       <Cart />
    </section>
  )
}
