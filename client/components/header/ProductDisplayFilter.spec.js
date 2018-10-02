import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import ProductDisplayFilter from './ProductDisplayFilter';

describe('ProductDisplayFilter', () => {
    it('should display ProductDisplayFilter', () => {
        let wrapper = shallow(<ProductDisplayFilter
            fetchProductPagination={() => console.log('yes I am called')}/>);
        expect(wrapper.find('select')).to.be.not.null;
        expect(wrapper.find('select').find('option').at(2).text(0)).to.be.eq('35 per page');
    });
});
