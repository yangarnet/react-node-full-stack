import React from 'react';
import PropTypes from 'prop-types';
import './Product.css';

const Product = ({ productName, productDescription, productImage, productPrice }) => (
    <div className="grid-item">
        <div className="product-img">
            <img src={productImage} alt="product image" />
        </div>
        <div className="product-details">
            <p>{productName}</p>
            <p>{productDescription}</p>
            <h4 className="price">{productPrice}</h4>
        </div>
    </div>
);

export default Product;
