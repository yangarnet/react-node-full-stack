import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import ProductList from './Product';
import Product from './Product';

describe('ProductList', () => {
    it('should render empty when there is no product', () => {
        let wrapper = shallow(<ProductList />);
        expect(wrapper.find('section')).to.be.empty;
    });

    it.only('should render product list', () => {
        const productsList = [
            {
                productId: 10,
                productPrice: '$12.92',
                productName: 'Rasuvo',
                productDescription: 'implement clicks-and-mortar infrastructures',
                productImage: 'http://dummyimage.com/304x322.jpg/ff4444/ffffff'
            },
            {
                productId: 11,
                productPrice: '$78.81',
                productName: 'PAXIL',
                productDescription: 'implement back-end deliverables',
                productImage: 'http://dummyimage.com/350x305.bmp/dddddd/000000'
            }
        ];

        const wrapper = shallow(<ProductList />);
        wrapper.setProps({ products: productsList });
        console.log(wrapper.html());
    });
});
