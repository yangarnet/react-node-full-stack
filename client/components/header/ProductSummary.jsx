import React from 'react';
import PropType from 'prop-types';
import './ProductSummary.css';

const ProductSummary = ({ total }) => (
    <div className="product-sumary">
        <p className="product-all">All products</p>
        <p className="product-count">{total} products</p>
    </div>
);

export default ProductSummary;
