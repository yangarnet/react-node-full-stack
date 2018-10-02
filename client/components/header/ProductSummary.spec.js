import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import ProductSummary from './ProductSummary';


describe("ProductSummary", () => {
    it('should display ProductSummary properly', () => {
        let wrapper = shallow(<ProductSummary total={101}/>);
        expect(wrapper.find('.product-sumary')).to.have.lengthOf(1);
        expect(wrapper.find('.product-count')).to.have.lengthOf(1);
        expect(wrapper.find('.product-count').text()).to.be.eq('101 products');
    });
});
