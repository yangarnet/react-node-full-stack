import React, { Component } from 'react';
import PropType from 'prop-types';
import './ProductDispalyFilter.css';
import ProductDispalyOption from './ProductDisplayOption';

class ProductDisplayFilter extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.props.fetchProductPagination(1, parseInt(e.target.value, 10));
    }

    render() {
        return (
            <div className="display-option">
                <ProductDispalyOption options={[8, 20, 50, 75, 90, 200, this.props.total]} onChange={this.onChange} />
                <i className="fas fa-sort-down" />
            </div>
        );
    }
}

export default ProductDisplayFilter;
