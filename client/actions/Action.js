import axios from 'axios';
import * as ACTIONS from './Types';

export const fetchProductPagination = (pageNum = 1, pageSize = 8) => async dispatch => {
    dispatch({
        type: ACTIONS.FETCH_PRODUCT_PAGINATION_PENDING
    });
    try {
        const response = await axios.get(`/api/product/page-num/${pageNum}/page-size/${pageSize}`);
        const { perPage, totalPages, prePage, currentPage, nextPage, total, products } = response.data;
        dispatch({
            type: ACTIONS.FETCH_PRODUCT_PAGINATION_RESOLVE,
            payload: { perPage, totalPages, prePage, currentPage, nextPage, total, products }
        });
    } catch (error) {
        dispatch({
            type: ACTIONS.FETCH_PRODUCT_PAGINATION_REJECT
        });
    }
};
