import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProductList from '../components/products/ProductList';
import { fetchProductPagination } from '../actions/Action';

class ProductListContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.products.length === 0) {
            this.props.init();
        }
    }

    render() {
        return <ProductList products={this.props.products} />;
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        products: state.products
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        init: () => dispatch(fetchProductPagination(1, 8))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductListContainer);
