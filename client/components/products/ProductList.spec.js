import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import ProductList from './Product';
import Product from './Product';

describe('ProductList', () => {

    it('should render empty when there is no product', () => {
        let wrapper = shallow(<ProductList/>);
        expect(wrapper.find('section')).to.be.empty;
    });
});
