import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/header/Header';
import { fetchProductPagination } from '../actions/Action';

const ProductHeaderContainer = props => {
    const { total, fetchProductPagination } = props;
    return <Header total={total} fetchProductPagination={fetchProductPagination} />;
};

const mapStateToProps = (state, ownProps) => {
    return {
        total: state.total
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchProductPagination: (pageNum, pageSize) => dispatch(fetchProductPagination(pageNum, pageSize))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductHeaderContainer);
