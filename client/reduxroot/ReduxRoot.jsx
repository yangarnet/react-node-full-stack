import React from 'react';
import { Provider } from 'react-redux';
import appStore from '../store/RootStore';

const initalState = {
    perPage: 0,
    totalPages: 0,
    prePage: null,
    currentPage: 1,
    nextPage: null,
    total: 0,
    products: []
};

const ReduxRoot = ({ children, state = initalState }) => <Provider store={appStore(state)}>{children}</Provider>;

export default ReduxRoot;
