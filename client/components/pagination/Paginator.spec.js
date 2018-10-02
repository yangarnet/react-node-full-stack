import React from 'react';
import { BrowserRouter as Route } from 'react-router-dom';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Paginator from './Paginator';

describe('Paginator', () => {
    it('should render paginator properly', () => {
        let paginatorObj = {
            prePage: 2,
            currentPage: 3,
            nextPage: 4,
            pageSize: 5,
            totalPages: 5,
            fetchProductPagination:() => {}
        };

        const wrapper = shallow(<Route><Paginator {...paginatorObj}/></Route>);
        expect(wrapper.html()).to.contains('<a href="/product/2/5">&lt; Previous page</a>');
        expect(wrapper.html()).to.contains('<a href="/product/3/5">3</a>');
        expect(wrapper.html()).to.contains('<a href="/product/4/5">4</a>');
        expect(wrapper.html()).to.contains('<a href="/product/4/5">Next page &gt;</a>');
        wrapper.unmount()

        paginatorObj = {
            prePage: null,
            currentPage: 1,
            nextPage: 2,
            pageSize: 5,
            totalPages: 5,
            fetchProductPagination:() => {}
        };
        const wrapper2 = shallow(<Route><Paginator {...paginatorObj}/></Route>);
        expect(wrapper2.html()).to.not.contains('<a href="/product/2/5">&lt; Previous page</a>')
        expect(wrapper2.html()).to.contains('<a href="/product/1/5">1</a>');
        expect(wrapper2.html()).to.contains('<a href="/product/2/5">Next page &gt;</a>');

        paginatorObj = {
            prePage: 1,
            currentPage: 2,
            nextPage: null,
            pageSize: 5,
            totalPages: 2,
            fetchProductPagination:() => {}
        };
        const wrapper3 = shallow(<Route><Paginator {...paginatorObj}/></Route>);
        expect(wrapper3.html()).to.contains('<a href="/product/1/5">&lt; Previous page</a>')
        expect(wrapper3.html()).to.contains('<a href="/product/2/5">2</a>');
        expect(wrapper3.html()).to.not.contains('<a href="/product/2/5">Next page &gt;</a>');
    });
});
