import { expect } from 'chai';
import {
    FETCH_PRODUCT_PAGINATION_PENDING,
    FETCH_PRODUCT_PAGINATION_RESOLVE,
    FETCH_PRODUCT_PAGINATION_REJECT
} from '../actions/Types';

import { productReducer } from './ProductReducer';

describe('ProductReducer', () => {
    let state = {
        currentPage: 2,
        perPage: 5,
        prePage: 1,
        nextPage: 3,
        total: 30,
        totalPages: 50,
        productCount: 10,
        products: []
    }

    it('state will unchange when no action or receive FETCH_PRODUCT_PAGINATION_PENDING or FETCH_PRODUCT_PAGINATION_REJECT', () => {
        let result = productReducer(state,{type:''});
        expect(result).to.deep.equal(state);

        result = productReducer(state, {type: FETCH_PRODUCT_PAGINATION_PENDING});
        expect(result).to.deep.equal(state);

        result = productReducer(state, {type: FETCH_PRODUCT_PAGINATION_REJECT});
        expect(result).to.deep.equal(state);
    });

    it('state will change when receive when receive FETCH_PRODUCT_PAGINATION_RESOLVE', () => {
        const action = {
            type: FETCH_PRODUCT_PAGINATION_RESOLVE,
            payload: {
                currentPage: 3,
                perPage: 5,
                prePage: 2,
                nextPage: 4,
                total: 30,
                totalPages: 50,
                productCount: 5,
                products: [
                    {
                        productId: 10,
                        productPrice: "$12.92",
                        productName: "Rasuvo",
                        productDescription: "implement clicks-and-mortar infrastructures",
                        productImage: "http://dummyimage.com/304x322.jpg/ff4444/ffffff"
                      },
                      {
                        productId: 11,
                        productPrice: "$78.81",
                        productName: "PAXIL",
                        productDescription: "implement back-end deliverables",
                        productImage: "http://dummyimage.com/350x305.bmp/dddddd/000000"
                      },
                      {
                        productId: 12,
                        productPrice: "$72.76",
                        productName: "Clean Choice Alcohol Sanitizer",
                        productDescription: "brand transparent portals",
                        productImage: "http://dummyimage.com/329x314.png/ff4444/ffffff"
                      },
                      {
                        productId: 13,
                        productPrice: "$67.38",
                        productName: "Topiramate",
                        productDescription: "mesh visionary initiatives",
                        productImage: "http://dummyimage.com/313x300.bmp/cc0000/ffffff"
                      },
                      {
                        productId: 14,
                        productPrice: "$34.68",
                        productName: "Lentil",
                        productDescription: "extend B2B ROI",
                        productImage: "http://dummyimage.com/310x310.bmp/5fa2dd/ffffff"
                      }
                ]
            }
        };

        let result = productReducer(state,action);
        expect(result.currentPage).to.be.equal(3);
        expect(result.prePage).to.be.equal(2);
        expect(result.totalPages).to.be.equal(50);
        expect(result.products.length).to.be.eq(5);
        expect(result.products[4].productName).to.eq('Lentil');
        expect(result.products[4].productPrice).to.eq('$34.68');

    });


});
