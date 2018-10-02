import {
    expect
} from 'chai';
import data from './test-data.json';
import {
    processJsonFeed,
    paginator
} from '../helper';

describe('utils - helper', () => {
    it('should return empty array when product JSON input is empty', () => {
        let feeds = {};
        let result = processJsonFeed(feeds);
        expect(result).to.be.an('array').with.property('length', 0);

        feeds = {
            products: []
        };

        result = processJsonFeed(feeds);
        expect(result).to.be.an('array').with.property('length', 0);
    });

    it('should processs JSON data properly', () => {
        let result = processJsonFeed(data);
        expect(result).to.be.an('array').with.property('length', 10);
        expect(result[9]).to.have.property('productName', 'Rasuvo...');
        expect(result[9]).to.have.property('productPrice', '$12.92');
        expect(result[9]).to.have.property('productImage', 'http://dummyimage.com//307x328.jpg/ff4444/ffffff&text=Product+Image');
    });

    it('should return a correct pagination object by default page size', () => {
        let pagination = paginator(data);
        expect(pagination).is.not.null;
        expect(pagination.currentPage).to.be.eq(1);
        expect(pagination.totalPages).to.be.eq(2);
        expect(pagination.prePage).to.be.null;
        expect(pagination.nextPage).to.be.eq(2);
        expect(pagination.products.length).to.be.eq(8);
    });

    it('should return a correct pagination object by given page size', () => {
        let pagination = paginator(data, 1, 100);
        expect(pagination).is.not.null;
        expect(pagination.currentPage).to.be.eq(1);
        expect(pagination.totalPages).to.be.eq(1);
        expect(pagination.prePage).to.be.null;
        expect(pagination.nextPage).to.be.null;
        expect(pagination.products.length).to.be.eq(10);
    });
});
