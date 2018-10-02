import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Product from './Product';

describe('Product', () => {
    it('should render Product properly', () => {
        let wrapper = shallow(<Product productName={'ipad'}
        productDescription={'brand new ipad'}
        productImage={'http://www.dummyimg.com/1'}
        productPrice={1000}/>);

        expect(wrapper.find('.grid-item')).to.have.lengthOf(1);
        expect(wrapper.find('.product-img')).to.have.lengthOf(1);
        expect(wrapper.find('.product-details')).to.have.lengthOf(1);
        expect(wrapper.find('.product-details').find('p').at(0).text()).to.be.eq('ipad');
    });
});
