import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';
import './ProductList.css';

const ProductList = ({ products }) => {
    console.log('here', products);
    const productsList = products ? products.map(product => <Product {...product} key={product.productId} />) : null;
    return <section className="product-grid">{productsList}</section>;
};

export default ProductList;
