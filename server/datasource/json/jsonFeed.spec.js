import {expect} from 'chai';
import {
    processJsonFeed,
    paginator
} from '../../utils/helper';
import JsonFeeds from './jsonFeed';

describe('JSON Feed', () => {

    it('should process json feed', () => {
        let feeds = new JsonFeeds();
        let result = feeds.get();
        expect(result).to.be.not.null;
        expect(result).to.have.lengthOf(1000);
        expect(result[0].productPrice).to.be.eq('$87.68');
        expect(result[0].productDescription).to.contain('synergize effic');
    });

    it('should getPagination information', () => {
        let feeds = new JsonFeeds();
        let result = feeds.getPagination(2,30);
        expect(result).to.be.not.null;
        expect(result.currentPage).to.be.eq(2);
        expect(result.perPage).to.be.equal(30);
        expect(result.totalPages).to.be.equal(34);
        expect(result.products).to.be.an('array').with.lengthOf(30)
    });
});
