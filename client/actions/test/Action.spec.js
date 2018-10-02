import { expect } from "chai";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import axios from "axios";
import moxios from "moxios";
import * as ACTIONS from '../Types';
import { fetchProductSuccess, fetchProductFailure } from './Action.mock.response';
import { fetchProductPagination } from '../Action';

describe('Async Action Creator', () => {
    const middleware = [thunk];
    const mockStore = configureMockStore(middleware);

    beforeEach(() => {
        moxios.install();
    });
    afterEach(() => {
        moxios.uninstall();
    });

    it('should dispatch FETCH_PRODUCT_PAGINATION_RESOLVE after success', done => {

        moxios.stubRequest("/api/product/page-num/2/page-size/5", {
            status: 200,
            response: JSON.stringify(fetchProductSuccess())
        });
        const expectedAction = [
            {
                type: ACTIONS.FETCH_PRODUCT_PAGINATION_RESOLVE,
                payload: JSON.stringify(fetchProductSuccess())
            }
        ];
        const store = mockStore({});

        store.dispatch(fetchProductPagination(2, 5));

        const dispatchedAction = store.getActions();
        const actionTypes = dispatchedAction.map(action => action.type);

        expect(
            dispatchedAction.filter(
                action => action.type ===ACTIONS.FETCH_PRODUCT_PAGINATION_RESOLVE
            ).payload
        ).to.deep.equal(
            expectedAction.filter(
                action => action.type === ACTIONS.FETCH_PRODUCT_PAGINATION_RESOLVE
            ).payload
        );
        done();
    });

    it('should dispatch FETCH_PRODUCT_PAGINATION_REJECT after failure', done => {

        moxios.stubRequest("/api/product/page-num/2/page-size/5", {
            status: 400,
            response: JSON.stringify(fetchProductFailure())
        });
        const expectedAction = [
            {
                type: ACTIONS.FETCH_PRODUCT_PAGINATION_PENDING,
            }
            ,
            {
                type: ACTIONS.FETCH_PRODUCT_PAGINATION_REJECT,
            }
        ];
        const store = mockStore({});

        store.dispatch(fetchProductPagination(2, 5))
             .then(() => {
                const dispatchedAction = store.getActions();
                const action = dispatchedAction.map(action => action.type);
                expect(action).to.deep.equal(expectedAction.map(action => action.type));

                done();
             });
    });

});
