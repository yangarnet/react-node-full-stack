import {
    FETCH_PRODUCT_PAGINATION_PENDING,
    FETCH_PRODUCT_PAGINATION_RESOLVE,
    FETCH_PRODUCT_PAGINATION_REJECT
} from '../actions/Types';

export const productReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_PRODUCT_PAGINATION_PENDING:
        case FETCH_PRODUCT_PAGINATION_REJECT:
            return state;
        case FETCH_PRODUCT_PAGINATION_RESOLVE:
            return { ...action.payload };
        default:
            return state;
    }
};
