import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ReduxRoot from '../../reduxroot/ReduxRoot';
import ProductHeaderContainer from '../../containers/ProductHeaderContainer';
import ProductListContainer from '../../containers/ProductListConainer';
import ProductPaginatorContainer from '../../containers/ProductPaginatorContainer';
import ErrorBoundary from '../errorboundary/ErrorBoundary';
import './App.css';

const App = () => (
    <ReduxRoot>
        <Router>
            <div className="container">
                <ErrorBoundary>
                    <ProductHeaderContainer />
                    <Route exact path="/" component={ProductListContainer} />
                    <Route path="/product/:pagenum/:pagesize" component={ProductListContainer} />
                    <ProductPaginatorContainer />
                </ErrorBoundary>
            </div>
        </Router>
    </ReduxRoot>
);

export default App;
