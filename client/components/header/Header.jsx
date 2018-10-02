import React from 'react';
import ProductSummary from './ProductSummary';
import ProductDisplayFilter from './ProductDisplayFilter';
import './Header.css';

const Header = ({ total, fetchProductPagination }) => (
    <section className="product-header">
        <ProductSummary total={total} />
        <ProductDisplayFilter total={total} fetchProductPagination={fetchProductPagination} />
    </section>
);

export default Header;
