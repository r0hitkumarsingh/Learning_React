import React from 'react'

const ProductItem = ({ product }) => {
    return (
        <div className="product-item">
            <img className="product-img" src={product.image} alt="{product.title}" />
            <h2 className="product-title">{product.title}</h2>
            <p>{product.price} USD</p>
            <button className="product-btn">Get Now</button>
        </div>
    )
}

export default ProductItem
