import React from 'react'
import PropTypes from 'prop-types'
import './assets/styles.css'

const Product = ({ product, handleAddToCart }) => {
  return (
    <div className="Products-item">
        <img src={product.image} alt={product.name} />
        <div className="movies__list-card">
            <h2>
                {product.name}
                <span>
                    $
                    {' '}
                    {product.price}
                </span>
            </h2>
            <p>{product.description}</p>
        </div>
        <button type="button" onClick={handleAddToCart(product)}>Comprar</button>
    </div>
  )
}

Product.propTypes = {
  product: PropTypes.func.isRequired,
  handleAddToCart: PropTypes.func.isRequired
}

export default Product
