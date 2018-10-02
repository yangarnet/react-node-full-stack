import React, { Component } from 'react';
import PropType from 'prop-types';
import './ProductDispalyFilter.css';

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
                <select onChange={this.onChange}>
                    <option value={8}>8 per page</option>
                    <option value={15}>15 per page</option>
                    <option value={35}>35 per page</option>
                    <option value={50}>50 per page</option>
                    <option value={100}>100 per page</option>
                    <option value={150}>150 per page</option>
                    <option value={200}>200 per page</option>
                    <option value={this.props.total}>show all</option>
                </select>
                <i className="fas fa-sort-down" />
            </div>
        );
    }
}

export default ProductDisplayFilter;
