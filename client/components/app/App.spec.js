import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import App from './App';
import ProductHeaderContainer from '../../containers/ProductHeaderContainer';
import ProductPaginatorContainer from '../../containers/ProductPaginatorContainer';
import ErrorBoundary from '../errorboundary/ErrorBoundary';

describe('The React App', () => {
    it('should render the app without crashing', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('.container')).to.have.lengthOf(1);
        expect(wrapper.find(ErrorBoundary)).to.have.lengthOf(1);
        expect(wrapper.find(ProductHeaderContainer)).to.have.lengthOf(1);
        expect(wrapper.find(ProductPaginatorContainer)).to.have.lengthOf(1);
    });

});
