import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Paginator from '../components/pagination/Paginator';
import { fetchProductPagination } from '../actions/Action';

const ProductPaginatorContainer = props => <Paginator {...props} />;

const mapStateToProps = state => {
    return {
        prePage: state.prePage,
        currentPage: state.currentPage,
        nextPage: state.nextPage,
        pageSize: state.perPage,
        totalPages: state.totalPages
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchProductPagination: (pageNum, pageSize) => dispatch(fetchProductPagination(pageNum, pageSize))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductPaginatorContainer);
