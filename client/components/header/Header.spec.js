import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Header from './Header';
import ProductSummary from './ProductSummary';
import ProductDisplayFilter from './ProductDisplayFilter';

describe('Header', () => {
    it('should render the header properly', () => {
        let wrapper = shallow(
                        <Header
                            total={10}
                            fetchProductPagination={()=>console.log('fetchProductPagination')}
                        />
                        );
        expect(wrapper.find('.product-header')).to.have.lengthOf(1);
        expect(wrapper.find(ProductSummary)).to.have.lengthOf(1);
        expect(wrapper.find(ProductDisplayFilter)).to.have.lengthOf(1);
        expect(wrapper.find(ProductSummary).html()).to.contain("10 products")
    });

    it('should allow to set the header props properly', () => {
        let wrapper = shallow(<Header/>);
        wrapper.setProps({total: 1000, fetchProductPagination: () => console.log('fetchProductPagination')});
        expect(wrapper.find(ProductSummary).html()).to.contain("1000 products")
    });
});

